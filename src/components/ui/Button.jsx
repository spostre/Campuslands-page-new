import './Button.css'

// Botón-enlace rectangular. Los enlaces externos abren en otra pestaña.
export default function Button({ href, children, variant = 'primary', arrow = false, className = '', ...props }) {
  const external = /^https?:\/\//.test(href)

  return (
    <a
      href={href}
      className={`btn btn--${variant} ${className}`}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      <span>{children}</span>
      {arrow && <span className="btn__arrow" aria-hidden="true">→</span>}
    </a>
  )
}
