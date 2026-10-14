import { Link } from 'react-router-dom'
import Logo from './Logo'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import Starfield from '@/components/ui/Starfield'
import './Footer.css'

const SOCIAL = [
  ['Instagram', LINKS.social.instagram],
  ['TikTok', LINKS.social.tiktok],
  ['LinkedIn', LINKS.social.linkedin],
  ['Facebook', LINKS.social.facebook],
]

const external = { target: '_blank', rel: 'noopener noreferrer' }

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer surface-dark has-stars">
      <Starfield origin="bottom" density={0.7} />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo className="footer__logo" />
            <p>{t.footer.tagline}</p>
          </div>

          <FooterColumn title={t.footer.legalTitle}>
            <Link to={LINKS.legal.privacy}>{t.footer.privacy}</Link>
            <Link to={LINKS.legal.terms}>{t.footer.terms}</Link>
            <Link to="/creditos">{t.footer.credits}</Link>
          </FooterColumn>

          <FooterColumn title={t.footer.socialTitle}>
            {SOCIAL.map(([name, href]) => (
              <a key={name} href={href} {...external}>{name}</a>
            ))}
          </FooterColumn>
        </div>

        <div className="footer__bottom">{t.footer.rights}</div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }) {
  return (
    <div className="footer__col">
      <h2>{title}</h2>
      {children}
    </div>
  )
}
