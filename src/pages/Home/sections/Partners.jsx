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
// Se desplaza sola de borde a borde sin quedar nunca vacía, sin interrupciones y sin interacción
// posible: no hay flechas ni pausa al pasar el cursor.
export default function Partners() {
  const { partners } = useLanguage().t.home
  const [railRef, inView] = useNearViewport('0px 0px -20% 0px')
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const rail = track.parentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let setWidth = 0 // ancho de una copia completa de la lista
    let pos = 0
    let last = 0
    let frame = 0
    let visible = true

    const measure = () => {
      const items = track.children
      const half = items.length / 2
      setWidth = items[half].offsetLeft - items[0].offsetLeft
    }

    const tick = (time) => {
      frame = requestAnimationFrame(tick)
      const dt = last ? Math.min((time - last) / 1000, 0.05) : 0
      last = time
      if (!visible || document.hidden) return
      if (!reduce) pos -= SPEED * dt
      if (pos <= -setWidth) pos += setWidth
      track.style.transform = `translate3d(${pos}px, 0, 0)`
    }

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
    }
  }, [])

  // Dos copias seguidas de la lista para que el bucle no tenga cortes
  const columns = [...PARTNERS, ...PARTNERS]

  return (
    <section id="aliados" className="section partners surface-dark has-stars">
      <Starfield origin="right" />

      {/* Cinta en bucle que ocupa toda la sección (detrás del panel); no recibe el cursor */}
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
      </div>
    </section>
  )
}
