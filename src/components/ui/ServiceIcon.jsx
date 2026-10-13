import { useId } from 'react'

// Íconos de línea para las tarjetas de servicios, con el degradado azul del casco del logo
// (azul → cian → azul; el azul inicial es algo más claro que el del logo para que se vea
// sobre negro). Se usan como marca de agua tenue.
const PATHS = {
  // Staffing TI: un equipo de tres personas
  staffing: (
    <>
      <circle cx="60" cy="40" r="12" />
      <path d="M36 92c0-15 10.5-26 24-26s24 11 24 26" />
      <circle cx="27" cy="52" r="8.5" />
      <path d="M10 92c0-11 7.5-19 17-19 4 0 7.5 1.3 10.5 3.6" />
      <circle cx="93" cy="52" r="8.5" />
      <path d="M110 92c0-11-7.5-19-17-19-4 0-7.5 1.3-10.5 3.6" />
    </>
  ),
  // Emplea: maletín con un check de "match"
  emplea: (
    <>
      <rect x="18" y="42" width="84" height="56" rx="9" />
      <path d="M45 42v-8a7 7 0 0 1 7-7h16a7 7 0 0 1 7 7v8" />
      <path d="M18 62h28M74 62h28" />
      <path d="M48 76l9 9 17-18" />
    </>
  ),
  // FullService Software: ventana de una aplicación con su interfaz
  fullService: (
    <>
      <rect x="12" y="22" width="96" height="70" rx="9" />
      <path d="M12 39h96" />
      <circle cx="24" cy="30.5" r="2.5" />
      <circle cx="33" cy="30.5" r="2.5" />
      <rect x="24" y="51" width="30" height="28" rx="4" />
      <path d="M64 54h32M64 65h22M64 76h28" />
      <path d="M44 104h32" />
    </>
  ),
  // Internacional: globo terráqueo con una órbita y un satélite
  international: (
    <>
      <circle cx="60" cy="60" r="30" />
      <ellipse cx="60" cy="60" rx="13" ry="30" />
      <path d="M31 50h58M31 70h58" />
      <ellipse cx="60" cy="60" rx="54" ry="17" transform="rotate(-22 60 60)" />
      <circle cx="106" cy="38" r="5" />
    </>
  ),
}

export default function ServiceIcon({ name, className = '' }) {
  const gradientId = useId()
  if (!PATHS[name]) return null

  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3566c8" />
          <stop offset="0.45" stopColor="#8be0fb" />
          <stop offset="1" stopColor="#4d8ef7" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {PATHS[name]}
      </g>
    </svg>
  )
}
