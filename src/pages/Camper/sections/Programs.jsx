import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import ScrollMoon from '@/components/ui/ScrollMoon'
import './Programs.css'

// Rutas de entrenamiento: cada programa es una "vitrina" (patrón de Idea 3): título grande,
// un panel tipo ventana con duración, horarios e inscripción, y al lado una frase destacada
// con lo que incluye. Las vitrinas alternan lado para dar ritmo a la lectura.
export default function Programs() {
  const { routes } = useLanguage().t.camper
  const programs = routes.tracks.flatMap((track) => track.programs.map((p) => ({ ...p, track: track.title })))

  return (
    <section id="rutas" className="programs">
      <ScrollMoon />
      <div className="container">
        <header className="programs__head">
          <span className="mono-label programs__eyebrow">{routes.eyebrow}</span>
          <h2 className="display h2"><Emph text={routes.title} /></h2>
          <p className="programs__text">{routes.text}</p>
        </header>
      </div>

      {programs.map((program, i) => (
        <Showcase key={program.key} program={program} labels={routes} flip={i % 2 === 1} />
      ))}
    </section>
  )
}

function Showcase({ program, labels, flip }) {
  return (
    <article className={`showcase section-rule ${flip ? 'showcase--flip' : ''}`}>
      <div className="container showcase__grid">
        <h3 className="display showcase__title">{program.tagline}</h3>

        {/* Panel tipo ventana */}
        <div className="panel">
          <div className="panel__bar">
            <span>{program.mission} · {program.name}</span>
            <span className="panel__dots" aria-hidden="true"><i /><i /><i /></span>
          </div>
          <div className="panel__body">
            <span className="panel__badge mono-label">{program.track}</span>
            <p className="panel__duration">
              <span className="panel__number">{program.duration}</span> {labels.months}
            </p>

            <p className="panel__label">{labels.schedule}</p>
            <ul className="panel__options">
              {program.schedules.map((time) => (
                <li key={time}>
                  <ClockIcon />
                  {time}
                </li>
              ))}
              <li>
                <PinIcon />
                {program.format}
              </li>
            </ul>

            <div className="panel__action">
              <span className="panel__hint">{program.name}</span>
              <Button href={LINKS.camper.programs[program.key]}>{labels.cta}</Button>
            </div>
          </div>
        </div>

        {/* Frase destacada + lista */}
        <aside className="showcase__side">
          <p className="showcase__statement">
            <span className="showcase__muted">{program.name}</span>{' '}
            {program.text ?? `${labels.duration.toLowerCase()}: ${program.duration} ${labels.months}.`}
          </p>
          <p className="showcase__list-title">{program.levels ? labels.levels : labels.includes}</p>
          <ul className="showcase__list">
            {(program.levels ?? program.includes).map((item) => (
              <li key={item} className="mono-label">{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6.2" />
      <path d="M8 4.8V8l2.2 1.4" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 14s4.5-4.2 4.5-7.6a4.5 4.5 0 0 0-9 0C3.5 9.8 8 14 8 14Z" />
      <circle cx="8" cy="6.4" r="1.6" />
    </svg>
  )
}
