import { useCallback, useEffect, useRef, useState } from 'react'
import MacWindow from '@/components/ui/MacWindow'
import './CodeTranslator.css'

// Ritmo de lectura cómodo
const START_DELAY = 700 // antes del primer bloque
const SCAN = 600 // resaltado del bloque antes de traducirlo
const CHAR = 32 // por letra al escribir la traducción
const HOLD = 1300 // pausa para leer antes del siguiente bloque

const KEYWORDS = new Set(['if', 'for', 'in', 'else', 'elif', 'while', 'def', 'return', 'and', 'or', 'not'])
const BUILTINS = new Set(['print', 'len', 'range', 'input'])

// Colorea una línea de Python sencilla (textos, números, palabras clave y funciones)
function tokenize(line) {
  const tokens = []
  const re = /("[^"]*")|(\b\d+\b)|([A-Za-z_]\w*)|(\s+)|(.)/g
  let m
  while ((m = re.exec(line))) {
    if (m[1]) tokens.push(['str', m[1]])
    else if (m[2]) tokens.push(['num', m[2]])
    else if (m[3]) tokens.push([KEYWORDS.has(m[3]) ? 'kw' : BUILTINS.has(m[3]) ? 'fn' : 'id', m[3]])
    else tokens.push(['op', m[4] ?? m[5]])
  }
  return tokens
}

/*
 * Programa en Python que se "traduce" a lenguaje natural bloque por bloque: el bloque se
 * resalta, el código se atenúa y debajo se escribe su significado en palabras.
 * Empieza la primera vez que el bloque entra en pantalla (va a mitad de "Sé un camper");
 * al final aparece "Ver de nuevo".
 * Con "reducir movimiento" se muestra directamente todo traducido.
 */
export default function CodeTranslator({ file, blocks, codeLabel, plainLabel, replayLabel }) {
  const reduce = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  // current: bloque en curso; phase: 'idle' | 'wait' | 'scan' | 'type' | 'done'; typed: letras escritas
  const [state, setState] = useState(() =>
    reduce.current ? { current: blocks.length, phase: 'done', typed: 0 } : { current: 0, phase: 'idle', typed: 0 },
  )
  const timer = useRef(0)
  const rootRef = useRef(null)

  // Espera a que el bloque se vea en pantalla para empezar
  useEffect(() => {
    const el = rootRef.current
    if (!el || state.phase !== 'idle') return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState({ current: 0, phase: 'wait', typed: 0 })
        io.disconnect()
      }
    }, { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [state.phase])

  const replay = useCallback(() => setState({ current: 0, phase: 'scan', typed: 0 }), [])

  useEffect(() => {
    const { current, phase, typed } = state
    const block = blocks[current]
    const next = (delay, value) => {
      timer.current = window.setTimeout(() => setState(value), delay)
    }

    if (phase === 'wait') next(START_DELAY, { current, phase: 'scan', typed: 0 })
    else if (phase === 'scan') next(SCAN, { current, phase: 'type', typed: 0 })
    else if (phase === 'type') {
      if (typed < block.plain.length) next(CHAR, { current, phase: 'type', typed: typed + 1 })
      else if (current + 1 < blocks.length) next(HOLD, { current: current + 1, phase: 'scan', typed: 0 })
      else next(HOLD / 2, { current: blocks.length, phase: 'done', typed: 0 })
    }
    return () => window.clearTimeout(timer.current)
  }, [state, blocks])

  let lineNumber = 0

  return (
    <div ref={rootRef}>
    <MacWindow title={file} className="ct">
      <div className="ct__legend" aria-hidden="true">
        <span className="ct__legend-code">{codeLabel}</span>
        <span className="ct__legend-arrow">→</span>
        <span className="ct__legend-plain">{plainLabel}</span>
      </div>

      <div className="ct__body">
        {blocks.map((block, i) => {
          const translated = i < state.current
          const active = i === state.current && !['idle', 'wait', 'done'].includes(state.phase)
          const typing = active && state.phase === 'type'
          return (
            <div
              key={i}
              className={`ct__block ${translated ? 'is-translated' : ''} ${active ? 'is-active' : ''}`}
            >
              <pre className="ct__code" aria-label={block.code.join('\n')}>
                {block.code.map((line) => {
                  lineNumber += 1
                  return (
                    <span key={lineNumber} className="ct__line">
                      <span className="ct__num" aria-hidden="true">{lineNumber}</span>
                      <code>
                        {tokenize(line).map(([type, text], j) => (
                          <span key={j} className={`tk-${type}`}>{text}</span>
                        ))}
                      </code>
                    </span>
                  )
                })}
              </pre>

              {(translated || typing) && (
                <p className="ct__plain">
                  <span className="ct__plain-mark" aria-hidden="true">↳</span>
                  <span>
                    {translated ? block.plain : block.plain.slice(0, state.typed)}
                    {typing && <span className="ct__caret" aria-hidden="true" />}
                  </span>
                </p>
              )}
            </div>
          )
        })}
      </div>

      <div className="ct__foot">
        <span className="ct__status" aria-hidden="true">
          {Math.min(state.current, blocks.length)}/{blocks.length}
        </span>
        <button
          type="button"
          className={`ct__replay ${state.phase === 'done' ? 'is-visible' : ''}`}
          onClick={replay}
          tabIndex={state.phase === 'done' ? 0 : -1}
        >
          ↻ {replayLabel}
        </button>
      </div>
    </MacWindow>
    </div>
  )
}
