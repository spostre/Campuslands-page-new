import Divider from '@/components/ui/Divider'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import Starfield from '@/components/ui/Starfield'
import VideoPlayer from '@/components/ui/VideoPlayer'
import { VIDEOS } from '@/constants/videos'
import SocialIcon from '@/components/ui/SocialIcon'
import './Social.css'

// Se exporta para reutilizar las redes en otras páginas (p. ej. Historias de Nosotros)
export const NETWORKS = [
  { key: 'instagram', name: 'Instagram', handle: '@campuslands', href: LINKS.social.instagram },
  { key: 'tiktok', name: 'TikTok', handle: '@campuslands', href: LINKS.social.tiktok },
  { key: 'linkedin', name: 'LinkedIn', handle: 'in/campuslands', href: LINKS.social.linkedin },
  { key: 'facebook', name: 'Facebook', handle: '/campuslands', href: LINKS.social.facebook },
]

// Frase de la cinta de fondo (se repite para que el bucle no tenga cortes)
const RIBBON = ['#GoForIt', 'Campuslands', '#GoForIt', 'Campuslands']

// Redes (sección negra): tarjetas por red, el video de Juliana en un recuadro horizontal
// y una cinta gigante en contorno con la marca pasando por detrás.
// Se reutiliza en otras páginas; con showVideo={false} queda solo con las redes y con
// plain va sin estrellas, sin icono decorativo ni cinta de letras de fondo.
export default function Social({ showVideo = true, plain = false }) {
  const { t } = useLanguage()
  const { social } = t.home

  return (
    <section
      id="redes"
      className={`section social surface-dark ${plain ? '' : 'has-stars'} ${showVideo ? '' : 'social--compact'}`}
    >
      {!plain && <Starfield origin="top-left" />}

      {!plain && (
      <div className="social__ribbon" aria-hidden="true">
        <div className="social__ribbon-track">
          {[...RIBBON, ...RIBBON].map((word, i) => (
            <span key={i} className={i % 2 === 0 ? 'is-accent' : undefined}>{word}</span>
          ))}
        </div>
      </div>
      )}

      {!plain && <Divider variant="dots" />}
      <div className="container social__grid">
        <div className="social__copy">
          <span className="eyebrow">{social.eyebrow}</span>
          <h2 className="display h2 social__title"><Emph text={social.title} /></h2>

          <ul className="social__networks">
            {NETWORKS.map((network) => (
              <li key={network.key}>
                <a className="network" href={network.href} target="_blank" rel="noopener noreferrer">
                  <SocialIcon name={network.key} />
                  <span className="network__name">{network.name}</span>
                  <span className="network__handle">{network.handle}</span>
                  <span className="network__arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Video de Juliana (horizontal) */}
        {showVideo && (
          <VideoPlayer
            src={VIDEOS.juliana.src}
            poster={VIDEOS.juliana.poster}
            label={social.videoLabel}
            kind={t.placeholder.video}
          />
        )}
      </div>
    </section>
  )
}
