import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import Starfield from '@/components/ui/Starfield'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './AcMissions.css'

// Nuestras misiones (banda negra, ancla #misiones). Los cinco planes como una secuencia de
// lanzamiento: las tarjetas suben en escalera de Ignition a Nébula y detrás se dibuja una
// trayectoria punteada de abajo a la izquierda hacia arriba a la derecha. Las tarjetas
// aparecen en orden a medida que la trayectoria avanza. En pantallas angostas: cinta con scroll.
export default function AcMissions() {
  const { missions } = useLanguage().t.aiAcademy
  const headRef = useReveal()
  const trackRef = useReveal()

  return (
    <section id="misiones" className="section ac-missions surface-dark has-stars">
      <Starfield origin="bottom" density={0.7} />

      <div className="container">
        <header ref={headRef} className="ac-missions__head reveal">
          <span className="eyebrow">{missions.eyebrow}</span>
          <h2 className="display h2"><Emph text={missions.title} /></h2>
          <p className="lead">{missions.text}</p>
        </header>

        <div ref={trackRef} className="ac-track">
          <svg className="ac-track__path" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 290 C 300 280, 560 210, 1000 10" pathLength="100" />
          </svg>

          <ol className="ac-track__list">
            {missions.items.map((m, i) => (
              <li key={m.code} className="ac-mission" style={{ '--i': i }}>
                <span className="ac-mission__code">{m.code}</span>
                <h3 className="ac-mission__name">{m.name}</h3>
                <span className="ac-mission__time">{m.duration}</span>

                <span className="ac-mission__label">{missions.includes}</span>
                <ul className="ac-mission__list">
                  {m.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <Button href={LINKS.aiAcademy.enroll} variant="secondary" arrow className="ac-mission__cta">
                  {m.cta}
                </Button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
