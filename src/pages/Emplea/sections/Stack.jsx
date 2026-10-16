import { useEffect, useRef, useState } from 'react'
import Emph from '@/components/ui/Emph'
import { TECH_LOGOS } from '@/data/techLogos'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './Stack.css'

// Logos de cada cuadro (el de desarrollo web junta HTML5, CSS3 y JavaScript)
const LOGOS = {
  python: ['python'],
  web: ['html5', 'css3', 'javascript'],
  mysql: ['mysql'],
  postgresql: ['postgresql'],
  node: ['node'],
  java: ['java'],
  php: ['php'],
  dotnet: ['dotnet'],
  git: ['git'],
}
const AUTO_MS = 4500

// Especialistas (banda clara): fila de cuadros seleccionables con el logo de cada tecnología.
// Una flecha marca el activo y el texto de abajo cambia según la elección. Cada pocos segundos
// pasa al siguiente, en orden; se detiene mientras el cursor o el foco están en la sección o cuando
// no está en pantalla, y el contador se reinicia al elegir uno a mano.
export default function Stack() {
  const { stack } = useLanguage().t.emplea
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const tilesRef = useReveal()
  const item = stack.items[active]

  // Solo avanza mientras la sección se ve
  useEffect(() => {
    const el = sectionRef.current
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (paused || !visible) return
    const id = window.setTimeout(() => {
      setActive((current) => (current + 1) % stack.items.length)
    }, AUTO_MS)
    return () => window.clearTimeout(id)
  }, [active, paused, visible, stack.items.length])

  return (
    <section
      ref={sectionRef}
      className="section stack surface-light"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container">
        <header className="stack__head">
          <div>
            <span className="eyebrow">{stack.eyebrow}</span>
            <h2 className="display h2"><Emph text={stack.title} /></h2>
          </div>
          <div className="stack__intro">
            <p className="lead">{stack.text}</p>
            <ul className="stack__areas">
              {stack.areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </header>

        <p className="stack__hint">{stack.hint}</p>
        <ul ref={tilesRef} className="stack__tiles reveal-stagger" role="tablist" aria-label={stack.hint}>
          {stack.items.map((tech, i) => (
            <li key={tech.key} role="presentation" style={{ '--i': i }}>
              <button
                type="button"
                role="tab"
                id={`stack-tab-${tech.key}`}
                aria-selected={i === active}
                aria-controls="stack-panel"
                className={`stack-tile ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="stack-tile__logos" aria-hidden="true">
                  {LOGOS[tech.key].map((logo) => (
                    <svg key={logo} viewBox="0 0 24 24"><path d={TECH_LOGOS[logo]} /></svg>
                  ))}
                </span>
                <span className="stack-tile__name">{tech.name}</span>
              </button>
            </li>
          ))}
        </ul>

        <div id="stack-panel" role="tabpanel" aria-labelledby={`stack-tab-${item.key}`} className="stack__panel">
          <div key={item.key} className="stack__panel-inner">
            <div>
              <span className="stack__area">{item.area}</span>
              <h3 className="stack__name">{item.name}</h3>
            </div>
            <p className="stack__desc">{item.text}</p>
          </div>
          {/* Barra que muestra cuánto falta para el siguiente cambio automático */}
          <span
            key={`${active}-${paused}-${visible}`}
            className={`stack__timer ${paused || !visible ? 'is-paused' : ''}`}
            style={{ '--ms': `${AUTO_MS}ms` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
