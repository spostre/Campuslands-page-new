import { useEffect, useRef, useState } from 'react'
import Starfield from '@/components/ui/Starfield'
import { TECH_LOGOS } from '@/data/techLogos'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './FsStack.css'

const LOGO_KEYS = { 'Next.js': 'nextjs', 'AWS Cloud': 'aws', Rust: 'rust' }

// Posición de cada cuadro en el escenario (% del ancho/alto), su profundidad para el parallax
// y el punto del borde del cuadro donde termina su haz
const SLOTS = [
  { x: 16, y: 50, depth: 1, end: [23, 66] },
  { x: 50, y: 4, depth: 0.5, end: [50, 38] },
  { x: 84, y: 50, depth: 1, end: [77, 66] },
]
const CORE = { x: 50, y: 60 }

/*
 * Tech_Stack (banda negra). Escena plana: anillos y retícula de puntos alrededor del núcleo
 * "FullService Core" (esfera de luz con dos anillos inclinados que giran). Al entrar en pantalla,
 * de a uno, cada haz crece desde el núcleo y cuando llega aparece su cuadro (tecnología); luego
 * viajan pulsos de luz por los haces. Al mover el cursor las capas se desplazan un poco (parallax).
 * Todo con transform/opacity; el parallax se calcula a lo sumo una vez por cuadro.
 */
export default function FsStack() {
  const { stack } = useLanguage().t.fullService
  const sceneRef = useReveal()
  const frame = useRef(0)
  const [size, setSize] = useState(null)

  // Tamaño real del escenario: los haces se calculan en px (largo y ángulo) para que crezcan bien
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ w: width, h: height })
    })
    ro.observe(scene)
    return () => ro.disconnect()
  }, [sceneRef])

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover)').matches) return

    const move = (e) => {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        const r = scene.getBoundingClientRect()
        scene.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
        scene.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
      })
    }
    const leave = () => {
      cancelAnimationFrame(frame.current)
      scene.style.setProperty('--mx', 0)
      scene.style.setProperty('--my', 0)
    }
    scene.addEventListener('pointermove', move)
    scene.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(frame.current)
      scene.removeEventListener('pointermove', move)
      scene.removeEventListener('pointerleave', leave)
    }
  }, [sceneRef])

  return (
    <section className="section fs-stack surface-dark has-stars">
      <Starfield origin="top" density={0.7} />

      <div className="container">
        <header className="fs-stack__head">
          <h2 className="display h2">{stack.title}</h2>
          <p className="lead fs-stack__text">{stack.text}</p>
        </header>

        <div ref={sceneRef} className="fs-scene">
          <div className="fs-scene__floor" aria-hidden="true" />

          {/* Haces del núcleo a cada monolito, con un pulso que los recorre */}
          {size && SLOTS.map((s, i) => {
            const x1 = (CORE.x / 100) * size.w
            const y1 = (CORE.y / 100) * size.h
            const dx = (s.end[0] / 100) * size.w - x1
            const dy = (s.end[1] / 100) * size.h - y1
            const style = {
              '--i': i,
              left: x1,
              top: y1,
              width: Math.hypot(dx, dy),
              transform: `rotate(${Math.atan2(dy, dx)}rad)`,
            }
            return (
              <span key={i} className="fs-beam" style={style} aria-hidden="true">
                <span className="fs-beam__line" />
                <span className="fs-beam__pulse" />
              </span>
            )
          })}

          <div className="fs-core" style={{ left: `${CORE.x}%`, top: `${CORE.y}%` }} aria-hidden="true">
            <span className="fs-core__ring fs-core__ring--a" />
            <span className="fs-core__ring fs-core__ring--b" />
            <span className="fs-core__orb" />
            <span className="fs-core__label">{stack.eyebrow}</span>
          </div>

          <ul className="fs-monoliths">
            {stack.items.map((name, i) => (
              <li
                key={name}
                className="fs-monolith"
                style={{ '--i': i, '--depth': SLOTS[i].depth, left: `${SLOTS[i].x}%`, top: `${SLOTS[i].y}%` }}
              >
                <div className="fs-monolith__body">
                  <span className="fs-monolith__index">0{i + 1} / 0{stack.items.length}</span>
                  <svg className="fs-monolith__logo" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={TECH_LOGOS[LOGO_KEYS[name]]} />
                  </svg>
                  <span className="fs-monolith__name">{name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
