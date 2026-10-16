import Emph from '@/components/ui/Emph'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './FsPhases.css'

// Fases del proceso: la sección misma es la transición de la banda negra (portada) a la clara
// (servicios). Arriba negro con el título; abajo blanco con el texto de cada fase. Las cuatro
// fases son burbujas montadas sobre la línea que divide ambos colores; al entrar en pantalla,
// una línea de luz recorre ese borde de izquierda a derecha y cada burbuja aparece a su paso.
export default function FsPhases() {
  const { phases } = useLanguage().t.fullService
  const rowRef = useReveal()

  return (
    <section className="fs-phases">
      <div className="fs-phases__top">
        <div className="container">
          <header className="fs-phases__head">
            <span className="eyebrow">{phases.eyebrow}</span>
            <h2 className="display h2"><Emph text={phases.title} /></h2>
          </header>
        </div>
      </div>

      <div className="fs-phases__bottom surface-light">
        <div ref={rowRef} className="container fs-phases__row">
          <span className="fs-phases__line" aria-hidden="true" />
          <ol className="fs-phases__list">
            {phases.items.map((phase, i) => (
              <li key={phase.code} className="fs-phase" style={{ '--i': i }}>
                <span className="fs-phase__bubble">
                  <span className="fs-phase__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="fs-phase__code">{phase.code}</span>
                </span>
                <h3 className="fs-phase__title">{phase.title}</h3>
                <p className="fs-phase__text">{phase.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
