import { useEffect, useRef, useState } from 'react'
import Emph from '@/components/ui/Emph'
import Starfield from '@/components/ui/Starfield'
import { useLanguage } from '@/context/LanguageContext'
import './Pillars.css'

// Estrella fugaz
const SPEED = 0.47 // px por milisegundo (un cruce de escritorio dura ~3,4 s)
const LEAD_IN = 260 // aparece este tanto antes de la primera letra de la fila
const LEAD_OUT = 240 // y se apaga este tanto después de la última
const ARC_DROP = 56 // cuánto baja de punta a punta (px)
const ARC_LIFT = 14 // curvatura suave del arco (px)
const SAMPLES = 24 // puntos de la trayectoria por fila
const ROW_GAP = 180 // pausa entre filas (pantallas angostas)

/*
 * ¿Qué aprenden nuestros campers? (banda negra): los cuatro pilares como texto plano.
 * Los títulos empiezan invisibles; al llegar a la sección, una sola estrella fugaz cruza la fila
 * de títulos en un arco suave (no sigue los renglones: pasa entre ellos) y las letras se encienden
 * con un destello al paso de la estrella, quedando luego con un brillo tenue. La descripción de
 * cada pilar aparece cuando su título terminó de encenderse. En pantallas angostas cruza una vez
 * por fila. Solo anima transform/opacity/text-shadow y una sola vez. Con "reducir movimiento"
 * se muestra todo directamente.
 */
export default function Pillars() {
  const { pillars } = useLanguage().t.home
  const sectionRef = useRef(null)
  const listRef = useRef(null)
  const starRef = useRef(null)
  const [phase, setPhase] = useState('idle') // idle → playing → done

  useEffect(() => {
    const section = sectionRef.current
    const list = listRef.current
    const star = starRef.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window) || !star.animate) {
      setPhase('done')
      return
    }

    let animation = null
    let doneTimer = 0

    const play = () => {
      const base = list.getBoundingClientRect()
      const rectOf = (el) => {
        const r = el.getBoundingClientRect()
        return { x: r.left - base.left + r.width / 2, y: r.top - base.top + r.height / 2, top: r.top - base.top, bottom: r.bottom - base.top }
      }

      // Agrupa los pilares por fila (4 en escritorio; 2 + 2 o 1 por fila en pantallas angostas)
      const rows = new Map()
      list.querySelectorAll('.pillar').forEach((item) => {
        const key = Math.round(item.offsetTop)
        if (!rows.has(key)) rows.set(key, [])
        rows.get(key).push(item)
      })

      const points = []
      let t = 0

      for (const items of rows.values()) {
        const letters = items.flatMap((item) => [...item.querySelectorAll('.pl-ch')].map((el) => ({ el, item, ...rectOf(el) })))
        const top = Math.min(...letters.map((l) => l.top))
        const bottom = Math.max(...letters.map((l) => l.bottom))
        const cy = (top + bottom) / 2
        const x0 = Math.min(...letters.map((l) => l.x)) - LEAD_IN
        const x1 = Math.max(...letters.map((l) => l.x)) + LEAD_OUT
        const duration = (x1 - x0) / SPEED
        const start = t

        // Arco suave y apenas descendente que pasa entre los renglones de los títulos
        const yAt = (s) => cy - ARC_DROP / 2 + ARC_DROP * s - ARC_LIFT * Math.sin(Math.PI * s)
        for (let i = 0; i <= SAMPLES; i++) {
          const s = i / SAMPLES
          const fade = Math.min(1, s / 0.08, (1 - s) / 0.1)
          points.push({ x: x0 + (x1 - x0) * s, y: yAt(s), t: start + duration * s, o: Math.max(0, fade) })
        }

        // Cada letra se enciende cuando la estrella pasa por su posición horizontal;
        // las que quedan más lejos de la trayectoria, un instante después (se ve orgánico)
        letters.forEach((l) => {
          const s = (l.x - x0) / (x1 - x0)
          const lt = start + duration * s + Math.abs(l.y - yAt(s)) * 1.4
          l.el.style.setProperty('--t', `${Math.round(lt)}ms`)
        })
        items.forEach((item) => {
          const own = letters.filter((l) => l.item === item)
          const first = Math.min(...own.map((l) => (l.x - x0) / (x1 - x0)))
          const last = Math.max(...own.map((l) => (l.x - x0) / (x1 - x0)))
          item.style.setProperty('--t-num', `${Math.round(start + duration * first - 180)}ms`)
          item.style.setProperty('--t-text', `${Math.round(start + duration * last + 220)}ms`)
        })

        t = start + duration + ROW_GAP
      }

      const total = t - ROW_GAP
      let lastAngle = 0
      const keyframes = points.map((p, i) => {
        const a = points[Math.max(0, i - 1)]
        const b = points[Math.min(points.length - 1, i + 1)]
        let angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI
        // Ángulo continuo: evita que la estela dé vueltas al pasar de una fila a otra
        while (angle - lastAngle > 180) angle -= 360
        while (angle - lastAngle < -180) angle += 360
        lastAngle = angle
        return {
          transform: `translate(${p.x}px, ${p.y}px) rotate(${angle}deg)`,
          opacity: p.o,
          offset: Math.min(1, p.t / total),
        }
      })

      setPhase('playing')
      animation = star.animate(keyframes, { duration: total, easing: 'linear', fill: 'forwards' })
      // Al terminar todo (estrella + último texto), se deja el estado final fijo
      doneTimer = window.setTimeout(() => setPhase('done'), total + 1600)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect()
          play()
        }
      },
      { threshold: 0.45 },
    )
    io.observe(section)
    return () => {
      io.disconnect()
      window.clearTimeout(doneTimer)
      animation?.cancel()
    }
  }, [])

  return (
    <section ref={sectionRef} id="formacion" className={`section pillars surface-dark has-stars is-${phase}`}>
      <Starfield origin="left" density={0.5} />
      <div className="container">
        <header className="pillars__head">
          <h2 className="display h2"><Emph text={pillars.title} /></h2>
        </header>

        <div ref={listRef} className="pillars__stage">
          <span ref={starRef} className="pillars__star" aria-hidden="true" />
          <ol className="pillars__list">
            {pillars.items.map((item, index) => (
              <li key={item.title} className="pillar">
                <span className="pillar__num">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="pillar__title" aria-label={item.title}>
                  {item.title.split(' ').map((word, w, words) => (
                    <span key={w} className="pl-word" aria-hidden="true">
                      {[...word].map((ch, c) => (
                        <span key={c} className="pl-ch">{ch}</span>
                      ))}
                      {w < words.length - 1 && ' '}
                    </span>
                  ))}
                </h3>
                <p className="pillar__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
