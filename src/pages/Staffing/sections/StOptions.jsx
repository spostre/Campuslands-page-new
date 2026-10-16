import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { STAFFING_SYMBOLS } from '../staffingSymbols'
import '@/pages/Global/sections/GlModel.css'
import './StOptions.css'

// Opciones de staffing (banda clara, ancla #opciones; cada panel tiene su propia ancla
// #opcion-<clave> para los enlaces de la portada). Tres paneles con el mismo diseño que el
// modelo de servicio de Campuslands Global: bloque azul (categoría, nombre, insignia, símbolo)
// y bloque oscuro (descripción, características 2 × 2, escalera de niveles y botón). Sin animaciones.
export default function StOptions() {
  const { options } = useLanguage().t.staffing

  return (
    <section id="opciones" className="section st-options surface-light">
      <div className="container">
        <header className="st-options__head">
          <span className="eyebrow">{options.eyebrow}</span>
          <h2 className="display h2"><Emph text={options.title} /></h2>
        </header>

        <div className="st-options__list">
          {options.items.map((item, n) => (
            <article key={item.key} id={`opcion-${item.key}`} className="gl-panel st-panel">
              <div className="gl-panel__brand">
                <span className="gl-panel__label">0{n + 1} · {item.category}</span>
                <h3 className="gl-panel__name">{item.name}</h3>
                <span className="gl-panel__badge">{item.badge}</span>
                <svg className="gl-panel__globe" viewBox="0 0 200 200" aria-hidden="true">
                  {STAFFING_SYMBOLS[item.key]}
                </svg>
              </div>

              <div className="gl-panel__detail">
                <p className="st-panel__text">{item.text}</p>

                <ul className="gl-panel__features st-panel__features">
                  {item.features.map((f, i) => (
                    <li key={i}>
                      <span>0{i + 1}</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <ol className="gl-ladder st-ladder">
                  {item.levels.map((level, i) => (
                    <li key={i} className="gl-ladder__step" style={{ '--h': i }}>
                      <span className="gl-ladder__name">{level.name}</span>
                      {level.title ? (
                        <>
                          <span className="gl-ladder__title">{level.title}</span>
                          <span className="gl-ladder__text">{level.text}</span>
                        </>
                      ) : (
                        <span className="gl-ladder__title">{level.text}</span>
                      )}
                    </li>
                  ))}
                </ol>

                <div className="gl-panel__cta">
                  <Button href={LINKS.staffing[item.key]} arrow>{item.cta}</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
