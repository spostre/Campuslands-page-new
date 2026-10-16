import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import helmetImage from '@/assets/images/logo-mark.webp'
import './CamperHero.css'

// Portada: título a la izquierda, casco del logo iluminado desde atrás al centro
// (como el triángulo de Idea 3) y las cuatro áreas de formación a la derecha.
export default function CamperHero() {
  const { hero } = useLanguage().t.camper

  return (
    <section className="camper-hero">
      <div className="camper-hero__light" aria-hidden="true" />

      <div className="container camper-hero__grid">
        <div className="camper-hero__copy">
          <h1 className="display h1 camper-hero__title"><Emph text={hero.title} /></h1>
          <p className="camper-hero__text">{hero.text}</p>
          <div className="btn-row camper-hero__ctas">
            <Button href={LINKS.camper.start}>{hero.cta}</Button>
            <Button href="#rutas" variant="ghost">{hero.secondary}</Button>
          </div>
        </div>

        <div className="lit-logo" aria-hidden="true">
          <img src={helmetImage} alt="" className="lit-logo__glow" />
          <img src={helmetImage} alt="" className="lit-logo__shape" />
        </div>

        {/* Áreas de formación: lista con línea vertical en degradado azul y números en azul */}
        <aside className="camper-hero__side">
          <p className="mono-label camper-hero__side-title">{hero.sideTitle}</p>
          <ul>
            {hero.side.map((item, i) => (
              <li key={i} className="mono-label">
                <span className="camper-hero__side-num">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="camper-hero__age">{hero.age}</p>
        </aside>
      </div>
    </section>
  )
}
