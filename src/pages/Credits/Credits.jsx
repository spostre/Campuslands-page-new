import Emph from '@/components/ui/Emph'
import { useLanguage } from '@/context/LanguageContext'
import './Credits.css'

// Créditos y licencias de recursos de terceros (tipografías, mapa, librerías, marcas).
// Los textos completos de las licencias están en public/licenses/.
export default function Credits() {
  const { credits } = useLanguage().t

  return (
    <section className="section credits surface-light">
      <div className="container credits__inner">
        <header className="section-head">
          <span className="eyebrow">{credits.eyebrow}</span>
          <h1 className="display h2"><Emph text={credits.title} /></h1>
          <p className="lead">{credits.intro}</p>
        </header>

        {credits.sections.map((section) => (
          <article key={section.title} className="credits__block">
            <h2 className="credits__title">{section.title}</h2>
            <p className="credits__text">{section.text}</p>
            {section.items.length > 0 && (
              <ul className="credits__list">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <span>{item.name}</span>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {credits.license} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
