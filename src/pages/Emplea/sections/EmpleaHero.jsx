import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import logoFull from '@/assets/images/logo-full.webp'
import './EmpleaHero.css'

// Portada de Emplea (banda clara, pantalla completa): texto, botón y cifra a la izquierda;
// a la derecha, el logo de Campuslands (el programa que se traducía a palabras se movió a
// la sección "Tu primer programa" de Sé un camper).
export default function EmpleaHero() {
  const { hero } = useLanguage().t.emplea

  return (
    <section className="emplea-hero surface-light">
      <div className="container emplea-hero__grid">
        <div className="emplea-hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="display h1 emplea-hero__title"><Emph text={hero.title} /></h1>
          <p className="lead emplea-hero__text">{hero.text}</p>
          <div className="btn-row">
            <Button href={LINKS.partnersContact} arrow>{hero.cta}</Button>
          </div>

          <p className="emplea-hero__stat">
            <strong>{hero.statValue}</strong>
            <span>{hero.statLabel}</span>
          </p>
        </div>

        {/* Logo de Campuslands (el bloque de código pasó a "Sé un camper") */}
        <div className="emplea-hero__window emplea-hero__logo">
          <img src={logoFull} alt="Campuslands" />
        </div>
      </div>
    </section>
  )
}
