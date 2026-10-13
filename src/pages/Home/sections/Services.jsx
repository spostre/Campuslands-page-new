import Divider from '@/components/ui/Divider'
import Emph from '@/components/ui/Emph'
import ServiceIcon from '@/components/ui/ServiceIcon'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import Starfield from '@/components/ui/Starfield'
import helmetImage from '@/assets/images/logo-mark.png'
import './Services.css'

// Mosaico tipo "bento" (sección negra): el primer servicio es la tarjeta destacada 2×2
// y los otros cuatro completan la rejilla de 4 × 2 sin huecos.
export default function Services() {
  const { services } = useLanguage().t.home

  return (
    <section id="servicios" className="section services surface-dark has-stars">
      <Starfield origin="top-right" />
      <Divider variant="planet" align="end" />
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="display h2"><Emph text={services.title} /></h2>
        </header>

        <ul className="services__grid">
          {services.items.map((item, i) => (
            <li key={item.key} className={i === 0 ? 'services__featured' : undefined}>
              <a
                className="service-card"
                href={LINKS.services[item.key]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Marca de agua: casco del logo en la destacada, ícono propio en las demás */}
                {i === 0 ? (
                  <img src={helmetImage} alt="" className="service-card__mark" aria-hidden="true" />
                ) : (
                  <ServiceIcon name={item.key} className="service-card__mark service-card__mark--icon" />
                )}
                <div className="service-card__top">
                  <span className="service-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="service-card__arrow" aria-hidden="true">↗</span>
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__name">{item.name}</h3>
                  <p className="service-card__text">{item.text}</p>
                  <span className="service-card__cta">
                    {item.cta} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
