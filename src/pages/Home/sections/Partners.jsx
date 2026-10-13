import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { PARTNERS } from '@/data/partners'
import { useLanguage } from '@/context/LanguageContext'
import { useNearViewport } from '@/hooks/useNearViewport'
import Starfield from '@/components/ui/Starfield'
import './Partners.css'

const SPEED = 32 // px por segundo de la cinta

// Aliados (sección negra): cinta en bucle de columnas inclinadas, una alianza por columna.
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

    const onEnter = () => (paused = true)
    const onLeave = () => (paused = false)
    rail.addEventListener('pointerenter', onEnter)
    rail.addEventListener('pointerleave', onLeave)
    rail.addEventListener('focusin', onEnter)
    rail.addEventListener('focusout', onLeave)

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
      rail.removeEventListener('pointerenter', onEnter)
      rail.removeEventListener('pointerleave', onLeave)
      rail.removeEventListener('focusin', onEnter)
      rail.removeEventListener('focusout', onLeave)
    }
  }, [])

  // Dos copias seguidas de la lista para que el bucle no tenga cortes
  const columns = [...PARTNERS, ...PARTNERS]

  return (
    <section id="aliados" className="section partners surface-dark has-stars">
      <Starfield origin="left" />
      <Divider variant="dots" align="start" />
      <div className="container">
        <div className="partners__head">
          <div>
            <span className="eyebrow">{partners.eyebrow}</span>
            <h2 className="display h2"><Emph text={partners.title} /></h2>
          </div>
          <div className="partners__intro">
            <p className="lead">{partners.text}</p>
            <div className="btn-row">
              <Button href={LINKS.partnersContact}>{partners.ctaHire}</Button>
              <Button href={LINKS.partnersContact} variant="ghost" arrow>{partners.ctaSponsor}</Button>
            </div>
          </div>
        </div>
      </div>

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
                    <img src={logo} alt={copy ? '' : name} className="partner-col__logo" />
                  ) : (
                    <span className="partner-col__name">{name}</span>
                  )}
                </div>
              </li>
            )
          })}
        </ul>

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
