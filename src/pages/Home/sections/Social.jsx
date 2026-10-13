import Divider from '@/components/ui/Divider'
import Emph from '@/components/ui/Emph'
import Placeholder from '@/components/ui/Placeholder'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import Starfield from '@/components/ui/Starfield'
import './Social.css'

const NETWORKS = [
  ['Instagram', LINKS.social.instagram],
  ['TikTok', LINKS.social.tiktok],
  ['LinkedIn', LINKS.social.linkedin],
  ['Facebook', LINKS.social.facebook],
]

export default function Social() {
  const { t } = useLanguage()
  const { social } = t.home

  return (
    <section id="redes" className="section social surface-dark has-stars">
      <Starfield origin="top-left" />
      <Divider variant="dots" />
      <div className="container social__grid">
        <div className="social__copy">
          <h2 className="display h2 social__title"><Emph text={social.title} /></h2>
          <ul className="social__links">
            {NETWORKS.map(([name, href]) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {name}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Placeholder kind={t.placeholder.video} label={social.videoLabel} className="social__video" />
      </div>
    </section>
  )
}
