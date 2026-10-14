import Emph from '@/components/ui/Emph'
import SocialIcon from '@/components/ui/SocialIcon'
import Starfield from '@/components/ui/Starfield'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import helmetImage from '@/assets/images/logo-mark.png'
import './AboutHero.css'

const NETWORKS = [
  { key: 'instagram', name: 'Instagram', href: LINKS.social.instagram },
  { key: 'tiktok', name: 'TikTok', href: LINKS.social.tiktok },
  { key: 'linkedin', name: 'LinkedIn', href: LINKS.social.linkedin },
  { key: 'facebook', name: 'Facebook', href: LINKS.social.facebook },
]

// Portada de Nosotros (banda negra, a pantalla completa como el Inicio): texto a la izquierda
// y el video del CEO en formato vertical a la derecha, con el casco del logo desenfocado detrás.
// Fondo de estrellas como el hero del Inicio.
export default function AboutHero() {
  const { t } = useLanguage()
  const { hero } = t.about

  return (
    <section className="about-hero surface-dark has-stars">
      <Starfield origin="top-right" density={0.8} />
      <div className="container about-hero__grid">
        <div className="about-hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="display h1 about-hero__title"><Emph text={hero.title} /></h1>
          <p className="lead about-hero__text">{hero.text}</p>

          <ul className="about-hero__social">
            {NETWORKS.map((n) => (
              <li key={n.key}>
                <a href={n.href} target="_blank" rel="noopener noreferrer" aria-label={n.name}>
                  <SocialIcon name={n.key} className="about-hero__icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Espacio reservado del video vertical (se reemplaza por el reproductor cuando exista) */}
        <div className="reel">
          <img className="reel__logo" src={helmetImage} alt="" aria-hidden="true" />
          <div className="reel__frame" role="img" aria-label={hero.videoLabel}>
            <span className="reel__play" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
            </span>
            <div className="reel__person">
              <span className="reel__kind">{t.placeholder.video}</span>
              <strong>{hero.person}</strong>
              <span>{hero.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
