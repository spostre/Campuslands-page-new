import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { PARTNERS } from '@/data/partners'
import { useLanguage } from '@/context/LanguageContext'
import { useNearViewport } from '@/hooks/useNearViewport'
import Starfield from '@/components/ui/Starfield'
import './Partners.css'

const SPEED = 32 // px por segundo de la cinta

// Aliados (sección negra con corte diagonal): cinta en bucle de columnas inclinadas que ocupa
// toda la sección, una alianza por columna, y a la izquierda una banda fija (borde recto) con el texto.
// Se desplaza sola de borde a borde sin quedar nunca vacía; las flechas la adelantan o retroceden
// una columna, y se detiene al pasar el cursor para poder leer.
export default function Partners() {
  const { partners } = useLanguage().t.home
  const [railRef, inView] = useNearViewport('0px 0px -20% 0px')
  const trackRef = useRef(null)
  const nudge = useRef(() => {})

  useEffect(() => {
    const track = trackRef.current
    const rail = track.parentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let setWidth = 0 // ancho de una copia completa de la lista
    let step = 0 // ancho de una columna + separación
    let pos = 0
    let target = 0
    let last = 0
    let frame = 0
    let paused = false
    let visible = true

    const measure = () => {
      const items = track.children
      const half = items.length / 2
      setWidth = items[half].offsetLeft - items[0].offsetLeft
      step = items[1].offsetLeft - items[0].offsetLeft
    }

    const wrap = () => {
      if (pos <= -setWidth) {
        pos += setWidth
        target += setWidth
      } else if (pos > 0) {
        pos -= setWidth
        target -= setWidth
      }
    }

    const tick = (time) => {
      frame = requestAnimationFrame(tick)
      const dt = last ? Math.min((time - last) / 1000, 0.05) : 0
      last = time
      if (!visible || document.hidden) return
      if (!paused && !reduce) target -= SPEED * dt
      pos += (target - pos) * Math.min(1, dt * 7)
      wrap()
      track.style.transform = `translate3d(${pos}px, 0, 0)`
    }

    nudge.current = (direction) => {
      target -= direction * step
    }

    // Solo se pausa con el cursor encima de una columna (su forma inclinada), no en los huecos
    // ni en el resto de la sección
    const onOver = (e) => {
      paused = Boolean(e.target.closest('.partner-col__shape'))
    }
    const onLeave = () => (paused = false)
    track.addEventListener('pointerover', onOver)
    track.addEventListener('pointerleave', onLeave)

    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(track)
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    visibilityObserver.observe(rail)

    measure()
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      track.removeEventListener('pointerover', onOver)
      track.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  // Dos copias seguidas de la lista para que el bucle no tenga cortes
  const columns = [...PARTNERS, ...PARTNERS]

  return (
    <section id="aliados" className="section partners surface-dark has-stars">
      <Starfield origin="right" />

      {/* Cinta en bucle que ocupa toda la sección (detrás del panel) */}
      <div ref={railRef} className={`partners__rail ${inView ? 'is-visible' : ''}`}>
        <ul ref={trackRef} className="partners__track">
          {columns.map(({ name, logo }, i) => {
            const copy = i >= PARTNERS.length
            return (
              <li
                key={`${name}-${copy ? 'b' : 'a'}`}
                className="partner-col"
                style={{ '--i': Math.min(i % PARTNERS.length, 10) }}
                aria-hidden={copy || undefined}
              >
                <div className="partner-col__shape">
                  {logo ? (
                    <img src={logo} alt={copy ? '' : name} className="partner-col__logo" loading="lazy" />
                  ) : (
                    <span className="partner-col__name">{name}</span>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Banda fija con borde derecho recto que sostiene el texto; las columnas pasan por detrás */}
      <div className="partners__panel" aria-hidden="true" />

      <div className="container partners__content">
        <span className="eyebrow">{partners.eyebrow}</span>
        <h2 className="display h2"><Emph text={partners.title} /></h2>
        <p className="lead partners__text">{partners.text}</p>
        <div className="btn-row">
          <Button href={LINKS.partnersContact}>{partners.ctaHire}</Button>
          <Button href={LINKS.partnersContact} variant="ghost" arrow>{partners.ctaSponsor}</Button>
        </div>

        <div className="partners__arrows">
          <button
            type="button"
            className="partners__arrow partners__arrow--prev"
            onClick={() => nudge.current(-1)}
            aria-label={partners.prev}
          >
            <ArrowIcon />
          </button>
          <button
            type="button"
            className="partners__arrow partners__arrow--next"
            onClick={() => nudge.current(1)}
            aria-label={partners.next}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M7 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
