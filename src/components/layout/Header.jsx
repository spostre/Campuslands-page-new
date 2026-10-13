import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS, SERVICE_ROUTES } from '@/constants/navigation'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import './Header.css'

export default function Header() {
  const { t, lang, setLang } = useLanguage()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef(null)

  // Cierra menús al navegar
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  // Cierra el desplegable al hacer clic fuera o pulsar Escape
  useEffect(() => {
    if (!servicesOpen) return
    const onClick = (e) => {
      if (!servicesRef.current?.contains(e.target)) setServicesOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setServicesOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [servicesOpen])

  const servicesActive = pathname.startsWith('/servicios')

  return (
    <header className={`header ${menuOpen ? 'is-open' : ''}`}>
      <div className="container header__inner">
        <Logo />

        <nav className="header__nav" aria-label="Principal">
          <ul className="header__links">
            {NAV_LINKS.map(({ key, to, children }) =>
              children ? (
                <li key={key} className="header__dropdown" ref={servicesRef}>
                  <button
                    type="button"
                    className={`header__link ${servicesActive ? 'active' : ''}`}
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((o) => !o)}
                  >
                    {t.nav[key]}
                    <svg className="header__chevron" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                      <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                  <ul id="services-menu" className={`header__submenu ${servicesOpen ? 'is-open' : ''}`}>
                    {SERVICE_ROUTES.map((s) => (
                      <li key={s.key}>
                        <NavLink to={s.to}>{t.nav.servicesMenu[s.key]}</NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={key}>
                  <NavLink to={to} end className="header__link">
                    {t.nav[key]}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          <a className="header__contact" href={LINKS.contact} target="_blank" rel="noopener noreferrer">
            {t.nav.contact}
          </a>
        </nav>

        <div className="header__tools">
          {/* Interruptor de idioma: un clic alterna ES ↔ EN */}
          <button
            type="button"
            role="switch"
            className={`lang-switch ${lang === 'en' ? 'is-en' : ''}`}
            aria-checked={lang === 'en'}
            aria-label={t.nav.language}
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          >
            <span className="lang-switch__knob" aria-hidden="true" />
            <span className="lang-switch__label" aria-hidden="true">ES</span>
            <span className="lang-switch__label" aria-hidden="true">EN</span>
          </button>

          <button
            type="button"
            className="header__burger"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
