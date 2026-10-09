import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '@/constants/navigation'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">Campuslands</Link>
        <nav className="header__nav">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
