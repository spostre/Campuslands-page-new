import Divider from '@/components/ui/Divider'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import Starfield from '@/components/ui/Starfield'
import VideoFrame from '@/components/ui/VideoFrame'
import './Social.css'

const NETWORKS = [
  { key: 'instagram', name: 'Instagram', handle: '@campuslands', href: LINKS.social.instagram },
  { key: 'tiktok', name: 'TikTok', handle: '@campuslands', href: LINKS.social.tiktok },
  { key: 'linkedin', name: 'LinkedIn', handle: 'in/campuslands', href: LINKS.social.linkedin },
  { key: 'facebook', name: 'Facebook', handle: '/campuslands', href: LINKS.social.facebook },
]

// Frase de la cinta de fondo (se repite para que el bucle no tenga cortes)
const RIBBON = ['#GoForIt', 'Campuslands', '#GoForIt', 'Campuslands']

// Redes (sección negra): tarjetas por red, el video de Juliana en un recuadro horizontal
// y una cinta gigante en contorno con la marca pasando por detrás.
// Se reutiliza en otras páginas; con showVideo={false} queda solo con las redes.
export default function Social({ showVideo = true }) {
  const { t } = useLanguage()
  const { social } = t.home

  return (
    <section id="redes" className={`section social surface-dark has-stars ${showVideo ? '' : 'social--compact'}`}>
      <Starfield origin="top-left" />

      <div className="social__ribbon" aria-hidden="true">
        <div className="social__ribbon-track">
          {[...RIBBON, ...RIBBON].map((word, i) => (
            <span key={i} className={i % 2 === 0 ? 'is-accent' : undefined}>{word}</span>
          ))}
        </div>
      </div>

      <Divider variant="dots" />
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

        {/* Video de Juliana (horizontal), en un recuadro con borde fino */}
        {showVideo && <VideoFrame label={social.videoLabel} kind={t.placeholder.video} />}
      </div>
    </section>
  )
}

// Íconos de línea de cada red (monocromos, toman el color del texto)
function SocialIcon({ name }) {
  return (
    <svg className="network__icon" viewBox="0 0 24 24" aria-hidden="true">
      {name === 'instagram' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="0.6" className="network__icon-dot" />
        </>
      )}
      {name === 'tiktok' && <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.4 5 4.6" />}
      {name === 'linkedin' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10.5V17M8 7.2v.1M11.5 17v-6.5M11.5 13c0-1.6 1.1-2.6 2.5-2.6s2.5 1 2.5 2.6V17" />
        </>
      )}
      {name === 'facebook' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M13 21v-7.5h2.5M13 21v-9.5c0-1.6 1-2.5 2.5-2.5H16M10.5 13.5H13" />
        </>
      )}
    </svg>
  )
}
