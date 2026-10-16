import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import Starfield from '@/components/ui/Starfield'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { useCountUp } from '@/hooks/useCountUp'
import helmetImage from '@/assets/images/logo-mark.webp'
import './Hero.css'

// Portada (negra) con estrellas al fondo y las métricas de impacto justo debajo del texto
export default function Hero() {
  const { hero, metrics } = useLanguage().t.home

  return (
    <section id="inicio" className="hero surface-dark has-stars">
      <Starfield />
      <div className="container hero__inner">
        {/* Texto de bienvenida con el casco del logo detrás (encima de las estrellas) */}
        <div className="hero__welcome">
          <img src={helmetImage} alt="" className="hero__mark" aria-hidden="true" />
          <h1 className="display h1 hero__title"><Emph text={hero.title} /></h1>
          <p className="lead hero__text">
            {hero.text} <span className="hero__tag">{hero.tag}</span>
          </p>
        </div>
        <div className="btn-row hero__ctas">
          <Button href={LINKS.camperLogin}>{hero.ctaJoin}</Button>
          <Button href={LINKS.services.emplea} variant="ghost" arrow>{hero.ctaTalent}</Button>
        </div>

        <div className="hero-metrics">
          <h2 className="visually-hidden">{metrics.title}</h2>
          <p className="hero-metrics__statement">{metrics.statement}</p>
          <ul className="hero-metrics__list">
            {metrics.stats.map((stat, i) => (
              <Stat key={i} {...stat} delay={i * 150} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label, delay }) {
  const display = useCountUp(value, { delay: 300 + delay })

  return (
    <li className="hero-stat">
      {/* El valor final se anuncia a lectores de pantalla; la animación es solo visual */}
      <strong className="hero-stat__value" aria-hidden="true">{display}</strong>
      <span className="visually-hidden">{value}</span>
      <span className="hero-stat__label">{label}</span>
    </li>
  )
}
