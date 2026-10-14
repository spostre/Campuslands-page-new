import { Link } from 'react-router-dom'
import './Button.css'

// Botón-enlace rectangular. Los enlaces externos abren en otra pestaña; los internos ("/...")
// navegan dentro del sitio sin recargar la página.
export default function Button({ href, children, variant = 'primary', arrow = false, className = '', ...props }) {
  const external = /^https?:\/\//.test(href)
  const classes = `btn btn--${variant} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && <span className="btn__arrow" aria-hidden="true">→</span>}
    </>
  )

  if (href?.startsWith('/')) {
    return (
      <Link to={href} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {content}
    </a>
  )
}
