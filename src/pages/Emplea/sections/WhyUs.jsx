import { useEffect, useRef, useState } from 'react'
import Emph from '@/components/ui/Emph'
import { useLanguage } from '@/context/LanguageContext'
import { WHY_IMAGES } from './whyImages'
import './WhyUs.css'

const IMAGE_MS = 7000

// Por qué nos eligen (patrón del inicio de Idea 2): las fotos son el fondo de toda la sección y el
// texto va suelto al centro, sin tarjeta. Arriba el corte con la sección anterior es recto; abajo
// la imagen se funde con el negro de la sección siguiente (empresas).
// - Fotos: rotan solas cada pocos segundos (fundido + acercamiento lento); se pausan fuera de
//   pantalla o con la pestaña oculta. No dependen del texto.
// - Texto: cambia solo a mano, con las flechas o con los nombres de los modelos de abajo.
export default function WhyUs() {
  const { t } = useLanguage()
  const { why } = t.emplea
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const total = why.slides.length
  const go = (i) => setIndex((i + total) % total)

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 })
    io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  // Rotación de las fotos, independiente del texto
  useEffect(() => {
    if (!visible || WHY_IMAGES.length < 2) return
    const id = setInterval(() => {
      if (!document.hidden) setImage((i) => (i + 1) % WHY_IMAGES.length)
    }, IMAGE_MS)
    return () => clearInterval(id)
  }, [visible])

  const slide = why.slides[index]

  return (
    <section ref={sectionRef} className="why surface-dark">
      {/* Fondos: cambian con un fundido y un acercamiento lento */}
      <div className="why__bg" aria-hidden="true">
        {WHY_IMAGES.map((img, i) => (
          <div key={i} className={`why__layer ${i === image ? 'is-active' : ''}`}>
            <img
              src={img.src}
              srcSet={img.srcSet}
              sizes="100vw"
              alt=""
              loading="lazy"
              decoding="async"
              style={{ objectPosition: img.position }}
            />
          </div>
        ))}
      </div>

      <div className="container why__inner">
        <header className="why__head">
          <span className="eyebrow">{why.eyebrow}</span>
          <h2 className="why__heading"><Emph text={why.title} /></h2>
        </header>

        <div key={index} className="why__slide" aria-live="polite">
          <span className="why__tag">{String(index + 1).padStart(2, '0')} — {slide.tag}</span>
          <h3 className="why__title">{slide.title}</h3>
          <p className="why__text">{slide.text}</p>
        </div>

        <div className="why__controls">
          <button type="button" className="why__arrow" onClick={() => go(index - 1)} aria-label={why.prev}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>

          <ol className="why__bars">
            {why.slides.map((s, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={`why__bar ${i === index ? 'is-active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`${why.goTo} ${s.title}`}
                  aria-current={i === index}
                >
                  <span />
                  <em>{s.title}</em>
                </button>
              </li>
            ))}
          </ol>

          <button type="button" className="why__arrow" onClick={() => go(index + 1)} aria-label={why.next}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
