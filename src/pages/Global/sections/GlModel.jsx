import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import './GlModel.css'

// Modelo de servicio (banda negra, sin animaciones). Título arriba y debajo un panel sólido
// de lado a lado partido en dos:
// - Bloque azul: Staffing Global, insignia y el globo internacional grande al pie.
// - Bloque oscuro: lo que incluye (2 × 2) y los niveles como una escalera de seniority
//   (tres columnas de alturas crecientes, Junior → Senior), con el botón al final.
export default function GlModel() {
  const { model } = useLanguage().t.global

  return (
    <section className="section gl-model surface-dark">
      <div className="container">
        <header className="gl-model__head">
          <span className="eyebrow">{model.eyebrow}</span>
          <h2 className="display h2"><Emph text={model.title} /></h2>
          <p className="gl-model__intro">{model.text}</p>
        </header>

        <div className="gl-panel">
          <div className="gl-panel__brand">
            <span className="gl-panel__label">{model.label}</span>
            <h3 className="gl-panel__name">{model.name}</h3>
            <span className="gl-panel__badge">{model.badge}</span>

            <svg className="gl-panel__globe" viewBox="0 0 200 200" aria-hidden="true">
              <circle cx="100" cy="100" r="92" />
              <ellipse cx="100" cy="100" rx="46" ry="92" />
              <ellipse cx="100" cy="100" rx="78" ry="92" />
              <path d="M100 8v184M8 100h184M20 58h160M20 142h160" />
            </svg>
          </div>

          <div className="gl-panel__detail">
            <ul className="gl-panel__features">
              {model.features.map((f, i) => (
                <li key={i}>
                  <span>0{i + 1}</span>
                  {f}
                </li>
              ))}
            </ul>

            <ol className="gl-ladder">
              {model.levels.map((level, i) => (
                <li key={i} className="gl-ladder__step" style={{ '--h': i }}>
                  <span className="gl-ladder__name">{level.name}</span>
                  <span className="gl-ladder__title">{level.title}</span>
                  <span className="gl-ladder__text">{level.text}</span>
                </li>
              ))}
            </ol>

            <div className="gl-panel__cta">
              <Button href={LINKS.global.talent} arrow>{model.cta}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
