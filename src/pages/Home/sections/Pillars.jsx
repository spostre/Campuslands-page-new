import Divider from '@/components/ui/Divider'
import Emph from '@/components/ui/Emph'
import ServiceIcon from '@/components/ui/ServiceIcon'
import { useLanguage } from '@/context/LanguageContext'
import './Pillars.css'

// Ícono de cada pilar, en el mismo orden que pillars.items
const ICONS = ['software', 'ai', 'english', 'staffing']

// ¿Qué aprenden nuestros campers? (sección clara): cada pilar es un cuadro oscuro con
// ícono, título y descripción, y a su lado barras de habilidades que crecen al pasar el cursor.
export default function Pillars() {
  const { pillars } = useLanguage().t.home

  return (
    <section id="formacion" className="section pillars surface-light">
      <Divider variant="squiggle" />
      <div className="container">
        <header className="pillars__head">
          <h2 className="display h2"><Emph text={pillars.title} /></h2>
          <p className="pillars__hint">
            <svg className="pillars__hint-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 3l14 7-6 1.8L10.2 18 5 3Z" />
            </svg>
            {pillars.hint}
          </p>
        </header>

        <ul className="pillars__list">
          {pillars.items.map((item, index) => (
            <li key={item.title} className="pillar" tabIndex={0}>
              <div className="pillar__card">
                <ServiceIcon name={ICONS[index]} className="pillar__icon" />
                <div>
                  <h3 className="pillar__title">{item.title}</h3>
                  <p className="pillar__text">{item.text}</p>
                </div>
              </div>

              <ul className="pillar__bars">
                {item.bars.map((bar, i) => (
                  <li key={bar.label} className="skill" style={{ '--p': bar.value, '--i': i }}>
                    {/* La pista marca el 100% (los tres porcentajes suman 100); el relleno llega
                        hasta su parte. El nombre va encima y puede seguir sobre la pista si no cabe. */}
                    <span className="skill__track">
                      <span className="skill__fill" />
                      <span className="skill__name">{bar.label}</span>
                    </span>
                    <span className="skill__value">{bar.value}%</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
