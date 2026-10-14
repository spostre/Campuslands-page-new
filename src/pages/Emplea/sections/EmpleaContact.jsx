import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import SocialIcon from '@/components/ui/SocialIcon'
import { LINKS } from '@/constants/links'
import { NETWORKS } from '@/pages/Home/sections/Social'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import helmetImage from '@/assets/images/emplea/helmet.webp'
import './EmpleaContact.css'

const ICONS = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
}

// ¿Listo para escalar tu equipo? (banda clara, ancla #contacto): el casco aparece a la
// izquierda cortado a la mitad por el borde de la pantalla, con anillos finos de órbita y un
// brillo azul. A la derecha, los datos del equipo comercial, el botón y las redes.
export default function EmpleaContact() {
  const { contact } = useLanguage().t.emplea
  const helmetRef = useReveal()
  const copyRef = useReveal()

  const rows = [
    { key: 'phone', label: contact.phoneLabel, value: contact.phone, href: 'tel:+573189456901' },
    { key: 'email', label: contact.emailLabel, value: contact.email, href: LINKS.emplea.email },
    { key: 'location', label: contact.locationLabel, value: contact.location },
  ]

  return (
    <section id="contacto" className="section emplea-contact surface-light">
      <div ref={helmetRef} className="emplea-contact__visual reveal reveal--left" aria-hidden="true">
        <span className="emplea-contact__rings" />
        <img src={helmetImage} alt="" className="emplea-contact__helmet" loading="lazy" />
      </div>

      <div className="container emplea-contact__grid">
        <div ref={copyRef} className="emplea-contact__copy reveal-stagger">
          <span className="eyebrow" style={{ '--i': 0 }}>{contact.eyebrow}</span>
          <h2 className="display h2" style={{ '--i': 1 }}><Emph text={contact.title} /></h2>
          <p className="emplea-contact__team" style={{ '--i': 2 }}>{contact.team}</p>

          <ul className="emplea-contact__list" style={{ '--i': 3 }}>
            {rows.map((row) => (
              <li key={row.key}>
                <svg className="emplea-contact__icon" viewBox="0 0 24 24" aria-hidden="true">{ICONS[row.key]}</svg>
                <span className="emplea-contact__label">{row.label}</span>
                {row.href ? <a href={row.href}>{row.value}</a> : <span>{row.value}</span>}
              </li>
            ))}
          </ul>

          <div className="emplea-contact__actions" style={{ '--i': 4 }}>
            <Button href={LINKS.emplea.contact} arrow>{contact.cta}</Button>

            <div className="emplea-contact__follow">
              <span>{contact.follow}</span>
              <ul>
                {NETWORKS.map((n) => (
                  <li key={n.key}>
                    <a href={n.href} target="_blank" rel="noopener noreferrer" aria-label={n.name}>
                      <SocialIcon name={n.key} className="emplea-contact__social" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
