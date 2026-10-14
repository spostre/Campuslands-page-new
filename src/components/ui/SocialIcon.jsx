// Íconos de línea de cada red (monocromos, toman el color del texto)
export default function SocialIcon({ name, className = 'network__icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
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
