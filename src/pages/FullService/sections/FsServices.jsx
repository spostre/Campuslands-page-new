import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import ServiceIcon from '@/components/ui/ServiceIcon'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import './FsServices.css'

// Nuestros servicios (banda clara, plana y sin animaciones). Fondo con retícula de plano
// técnico. Los servicios van en una "ficha técnica": una cuadrícula de líneas finas, sin
// redondeo, con cruces en las esquinas. Cada categoría aparece una sola vez, en la franja
// superior; la IA ocupa el bloque negro grande y los cuatro de desarrollo, las celdas de al lado.
export default function FsServices() {
  const { services } = useLanguage().t.fullService
  const [aiGroup, devGroup] = services.groups
  const featured = aiGroup.items[0]
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section className="section fs-services surface-light">
      <div className="container">
        <header className="fs-services__head">
          <div>
            <span className="eyebrow">{services.eyebrow}</span>
            <h2 className="display h2"><Emph text={services.title} /></h2>
          </div>
          <Button href={LINKS.fullService.quote} arrow>{services.cta}</Button>
        </header>

        <div className="fs-sheet">
          <span className="fs-sheet__band fs-sheet__band--ai">
            <span>{aiGroup.label}</span>
            <span>01</span>
          </span>
          <span className="fs-sheet__band fs-sheet__band--dev">
            <span>{devGroup.label}</span>
            <span>02 — {pad(devGroup.items.length + 1)}</span>
          </span>

          <article className="fs-sheet__feature">
            <span className="fs-sheet__num">01</span>
            <ServiceIcon name="ai" className="fs-sheet__icon" />
            <h3 className="fs-sheet__feature-title">{featured.title}</h3>
            <p className="fs-sheet__feature-text">{featured.text}</p>
          </article>

          {devGroup.items.map((item, i) => (
            <article key={i} className="fs-sheet__cell">
              <span className="fs-sheet__num">{pad(i + 2)}</span>
              <h3 className="fs-sheet__title">{item.title}</h3>
              <p className="fs-sheet__text">{item.text}</p>
            </article>
          ))}

          {/* Cruces de registro en las esquinas de la ficha */}
          <span className="fs-sheet__mark fs-sheet__mark--tl" aria-hidden="true" />
          <span className="fs-sheet__mark fs-sheet__mark--tr" aria-hidden="true" />
          <span className="fs-sheet__mark fs-sheet__mark--bl" aria-hidden="true" />
          <span className="fs-sheet__mark fs-sheet__mark--br" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
