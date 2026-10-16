import { useState } from 'react'
import Emph from '@/components/ui/Emph'
import Starfield from '@/components/ui/Starfield'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import cristianPhoto from '@/assets/images/emplea/cristian-velez.webp'
import clementPhoto from '@/assets/images/emplea/clement-memain.webp'
import './TechLeap.css'

// Color y posición de la luz de cada etapa (la luz solo vive dentro del panel)
const GLOWS = [
  { color: '#4f7dff', x: '-20%', y: '-25%' },
  { color: '#22c3e6', x: '25%', y: '-30%' },
  { color: '#8b6cff', x: '30%', y: '20%' },
  { color: '#1fb39a', x: '-25%', y: '25%' },
  { color: '#f0a24b', x: '5%', y: '-10%' },
  { color: '#e8669a', x: '-10%', y: '30%' },
]
const PHOTOS = [cristianPhoto, clementPhoto]

// Tech Leap (banda negra): a la izquierda el título; a la derecha un panel mediano con las
// seis etapas numeradas que se recorren con flechas. Al cambiar de etapa, una luz desenfocada
// dentro del panel se desplaza y cambia de color. Debajo, los dos testimonios a todo el ancho.
// Fondo con estrellas lentas (Starfield), como las secciones negras del Inicio.
export default function TechLeap() {
  const { leap } = useLanguage().t.emplea
  const [step, setStep] = useState(0)
  const total = leap.steps.length
  const go = (delta) => setStep((s) => (s + delta + total) % total)
  const glow = GLOWS[step]
  const headRef = useReveal()
  const quotesRef = useReveal()

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  return (
    <section className="section leap surface-dark has-stars">
      {/* Overlay: estrellas lentas como en el Inicio, más concentradas a la derecha (detrás del panel) */}
      <Starfield origin="right" density={0.7} />
      <div className="container">
        <div className="leap__top">
          <header ref={headRef} className="leap__head reveal">
            <span className="eyebrow">{leap.eyebrow}</span>
            <h2 className="display h2"><Emph text={leap.title} /></h2>
            <p className="lead leap__text">{leap.text}</p>
          </header>

          <div
            className="leap-panel"
            style={{ '--glow': glow.color, '--gx': glow.x, '--gy': glow.y }}
            role="group"
            aria-label={leap.eyebrow}
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
            <span className="leap-panel__glow" aria-hidden="true" />

            <ol className="leap-panel__steps" aria-hidden="true">
              {leap.steps.map((s, i) => (
                <li key={s.title} className={i === step ? 'is-active' : i < step ? 'is-past' : undefined}>
                  <button type="button" tabIndex={-1} onClick={() => setStep(i)}>
                    {String(i + 1).padStart(2, '0')}
                  </button>
                </li>
              ))}
            </ol>

            <div key={step} className="leap-panel__content" aria-live="polite">
              <span className="leap-panel__num">{String(step + 1).padStart(2, '0')}</span>
              <h3 className="leap-panel__title">{leap.steps[step].title}</h3>
              <p className="leap-panel__body">{leap.steps[step].text}</p>
            </div>

            <div className="leap-panel__foot">
              <span className="leap-panel__count">
                {String(step + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="leap-panel__arrows">
                <button type="button" onClick={() => go(-1)} aria-label={leap.prev}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
                </button>
                <button type="button" onClick={() => go(1)} aria-label={leap.next}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h3 className="leap__quotes-title">{leap.testimonialsTitle}</h3>
        <ul ref={quotesRef} className="leap__quotes reveal-stagger">
          {leap.testimonials.map((q, i) => (
            <li key={q.name} className="quote-card" style={{ '--i': i }}>
              <img className="quote-card__photo" src={PHOTOS[i]} alt={q.name} loading="lazy" width="96" height="96" />
              <blockquote className="quote-card__text">“{q.quote}”</blockquote>
              <p className="quote-card__who">
                <strong>{q.name}</strong>
                <span>{q.role}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
