import { useId } from 'react'
import './TechIcon.css'

/*
 * Íconos de tecnologías (Nosotros) a dos tonos: un relleno suave + trazos con el
 * degradado del logo. Cada trazo lleva pathLength="1" para poder "dibujarse" con CSS
 * cuando la tarjeta se abre (ver TechIcon.css). Cuadrícula de 48 × 48.
 */
const L = { pathLength: 1, className: 'ti-line' }
const F = { className: 'ti-fill' }

const ICONS = {
  // IA: chip con un destello en el centro
  ai: (
    <>
      <rect {...F} x="12" y="12" width="24" height="24" rx="5" />
      <rect {...L} x="12" y="12" width="24" height="24" rx="5" />
      <path {...L} d="M24 17.5c.8 3.7 2.8 5.7 6.5 6.5-3.7.8-5.7 2.8-6.5 6.5-.8-3.7-2.8-5.7-6.5-6.5 3.7-.8 5.7-2.8 6.5-6.5Z" />
      <path {...L} d="M18 6v6M24 6v6M30 6v6M18 36v6M24 36v6M30 36v6M6 18h6M6 24h6M6 30h6M36 18h6M36 24h6M36 30h6" />
    </>
  ),
  // Programación: ventana de editor con < / >
  code: (
    <>
      <rect {...F} x="6" y="9" width="36" height="30" rx="4" />
      <rect {...L} x="6" y="9" width="36" height="30" rx="4" />
      <path {...L} d="M6 16h36" />
      <path {...L} d="M19 23l-5 5 5 5M29 23l5 5-5 5M26 21l-4 14" />
    </>
  ),
  // Robótica: cabeza de robot con antena
  robot: (
    <>
      <rect {...F} x="10" y="15" width="28" height="22" rx="6" />
      <rect {...L} x="10" y="15" width="28" height="22" rx="6" />
      <path {...L} d="M24 15V9M6 24v6M42 24v6M19 31h10" />
      <circle {...L} cx="24" cy="7" r="2" />
      <circle {...L} cx="18.5" cy="24" r="2.5" />
      <circle {...L} cx="29.5" cy="24" r="2.5" />
    </>
  ),
  // Big Data: base de datos en capas
  data: (
    <>
      <ellipse {...F} cx="24" cy="12" rx="14" ry="5" />
      <ellipse {...L} cx="24" cy="12" rx="14" ry="5" />
      <path {...L} d="M10 12v24c0 2.8 6.3 5 14 5s14-2.2 14-5V12" />
      <path {...L} d="M10 20c0 2.8 6.3 5 14 5s14-2.2 14-5M10 28c0 2.8 6.3 5 14 5s14-2.2 14-5" />
    </>
  ),
  // Nube con flecha de subida
  cloud: (
    <>
      <path {...F} d="M14 36a8 8 0 0 1-.6-16A11 11 0 0 1 34.6 18 9 9 0 0 1 34 36H14Z" />
      <path {...L} d="M14 36a8 8 0 0 1-.6-16A11 11 0 0 1 34.6 18 9 9 0 0 1 34 36H14Z" />
      <path {...L} d="M24 32v-10M19.5 26l4.5-4.5 4.5 4.5" />
    </>
  ),
  // Inglés: dos globos de diálogo (traducción)
  english: (
    <>
      <path {...F} d="M7 10h20a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H15l-6 5v-5H7a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3Z" />
      <path {...L} d="M7 10h20a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H15l-6 5v-5H7a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3Z" />
      <path {...L} d="M12 23l5-10 5 10M13.8 19.5h6.4" />
      <path {...L} d="M34 18h7a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-1v5l-6-5h-8a3 3 0 0 1-3-3v-1" />
    </>
  ),
  // Ciberseguridad: escudo con candado
  security: (
    <>
      <path {...F} d="M24 5l15 6v11c0 10-6.5 17.5-15 21-8.5-3.5-15-11-15-21V11l15-6Z" />
      <path {...L} d="M24 5l15 6v11c0 10-6.5 17.5-15 21-8.5-3.5-15-11-15-21V11l15-6Z" />
      <rect {...L} x="17.5" y="22" width="13" height="10" rx="2" />
      <path {...L} d="M20.5 22v-3a3.5 3.5 0 0 1 7 0v3" />
    </>
  ),
  // Metaverso: cubo con una órbita
  metaverse: (
    <>
      <path {...F} d="M24 12l11 6v12l-11 6-11-6V18l11-6Z" />
      <path {...L} d="M24 12l11 6v12l-11 6-11-6V18l11-6Z" />
      <path {...L} d="M13 18l11 6 11-6M24 24v12" />
      <ellipse {...L} cx="24" cy="24" rx="20" ry="8" transform="rotate(-20 24 24)" />
    </>
  ),
  // Low Code: bloques que se arman
  blocks: (
    <>
      <rect {...F} x="7" y="7" width="14" height="14" rx="3" />
      <rect {...L} x="7" y="7" width="14" height="14" rx="3" />
      <rect {...L} x="27" y="7" width="14" height="14" rx="3" />
      <rect {...L} x="7" y="27" width="14" height="14" rx="3" />
      <path {...L} d="M34 28v12M28 34h12" />
    </>
  ),
  // Blockchain: tres bloques encadenados
  chain: (
    <>
      <rect {...F} x="18" y="18" width="12" height="12" rx="2.5" />
      <rect {...L} x="4" y="18" width="12" height="12" rx="2.5" />
      <rect {...L} x="18" y="18" width="12" height="12" rx="2.5" />
      <rect {...L} x="32" y="18" width="12" height="12" rx="2.5" />
      <path {...L} d="M16 24h2M30 24h2M10 18v-6h28v6M10 30v6h28v-6" />
    </>
  ),
  // Edge Computing: nodo central con nodos cercanos
  edge: (
    <>
      <circle {...F} cx="24" cy="24" r="7" />
      <circle {...L} cx="24" cy="24" r="7" />
      <circle {...L} cx="9" cy="9" r="3.5" />
      <circle {...L} cx="39" cy="9" r="3.5" />
      <circle {...L} cx="9" cy="39" r="3.5" />
      <circle {...L} cx="39" cy="39" r="3.5" />
      <path {...L} d="M11.5 11.5l7.5 7.5M36.5 11.5L29 19M11.5 36.5l7.5-7.5M36.5 36.5L29 29" />
    </>
  ),
  // Realidad virtual: visor
  vr: (
    <>
      <path {...F} d="M8 16h32a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8l-4-5h-8l-4 5H8a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z" />
      <path {...L} d="M8 16h32a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8l-4-5h-8l-4 5H8a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z" />
      <path {...L} d="M14 16l3-5h14l3 5" />
    </>
  ),
  // Automatización: engranaje con flecha circular
  gear: (
    <>
      <circle {...F} cx="24" cy="24" r="8" />
      <circle {...L} cx="24" cy="24" r="4" />
      <path {...L} d="M24 13v-3M24 38v-3M13 24h-3M38 24h-3M16.2 16.2l-2.1-2.1M33.9 33.9l-2.1-2.1M16.2 31.8l-2.1 2.1M33.9 14.1l-2.1 2.1" />
      <circle {...L} cx="24" cy="24" r="10" />
      <path {...L} d="M41 15a19 19 0 0 0-32-4M7 33a19 19 0 0 0 32 4M38 8.5V15h-6.5M10 39.5V33h6.5" />
    </>
  ),
  // 5G: antena con ondas
  g5: (
    <>
      <circle {...F} cx="24" cy="20" r="6" />
      <circle {...L} cx="24" cy="20" r="3" />
      <path {...L} d="M17 13a10 10 0 0 0 0 14M31 13a10 10 0 0 1 0 14M11.5 8a17 17 0 0 0 0 24M36.5 8a17 17 0 0 1 0 24" />
      <path {...L} d="M24 23l-6 19M24 23l6 19M20 35h8" />
    </>
  ),
  // Robots autónomos: brazo robótico
  arm: (
    <>
      <rect {...F} x="8" y="36" width="20" height="6" rx="2" />
      <rect {...L} x="8" y="36" width="20" height="6" rx="2" />
      <path {...L} d="M18 36V27l10-12 10 4" />
      <circle {...L} cx="18" cy="27" r="3" />
      <circle {...L} cx="28" cy="15" r="3" />
      <path {...L} d="M38 19l4-3M38 19l3 4" />
    </>
  ),
  // Computación cuántica: átomo
  atom: (
    <>
      <circle {...F} cx="24" cy="24" r="5" />
      <circle {...L} cx="24" cy="24" r="3" />
      <ellipse {...L} cx="24" cy="24" rx="19" ry="7.5" />
      <ellipse {...L} cx="24" cy="24" rx="19" ry="7.5" transform="rotate(60 24 24)" />
      <ellipse {...L} cx="24" cy="24" rx="19" ry="7.5" transform="rotate(-60 24 24)" />
    </>
  ),
  // Redes neuronales: capas de nodos conectados
  neural: (
    <>
      <circle {...F} cx="24" cy="24" r="4" />
      <path {...L} d="M10 13l14-1M10 13l14 12M10 13l14 23M10 35l14-23M10 35l14-11M10 35l14 1M24 12l14 12M24 24l14 0M24 36l14-12" />
      <circle {...L} cx="9" cy="13" r="3" />
      <circle {...L} cx="9" cy="35" r="3" />
      <circle {...L} cx="24" cy="12" r="3" />
      <circle {...L} cx="24" cy="24" r="3" />
      <circle {...L} cx="24" cy="36" r="3" />
      <circle {...L} cx="39" cy="24" r="3" />
    </>
  ),
  // Hologramas: proyector con un cubo de luz flotando
  hologram: (
    <>
      <path {...F} d="M24 8l9 5v10l-9 5-9-5V13l9-5Z" />
      <path {...L} d="M24 8l9 5v10l-9 5-9-5V13l9-5Z" />
      <path {...L} d="M15 13l9 5 9-5M24 18v10" />
      <path {...L} d="M18 33l-4 5M30 33l4 5" />
      <path {...L} d="M10 40h28" />
    </>
  ),
  // Web 3.0: globo con nodos
  web3: (
    <>
      <circle {...F} cx="24" cy="24" r="16" />
      <circle {...L} cx="24" cy="24" r="16" />
      <path {...L} d="M8 24h32M24 8c5 4.5 7 10 7 16s-2 11.5-7 16c-5-4.5-7-10-7-16s2-11.5 7-16Z" />
      <circle {...L} cx="38" cy="10" r="3" />
      <circle {...L} cx="10" cy="38" r="3" />
    </>
  ),
  // Energía de fusión: plasma confinado en un anillo
  fusion: (
    <>
      <circle {...F} cx="24" cy="24" r="6" />
      <circle {...L} cx="24" cy="24" r="4" />
      <ellipse {...L} cx="24" cy="24" rx="19" ry="11" />
      <ellipse {...L} cx="24" cy="24" rx="12" ry="5.5" />
      <path {...L} d="M24 6v4M24 38v4M6 24h-2M44 24h-2" />
    </>
  ),
}

export default function TechIcon({ name, className = '' }) {
  const id = useId()
  if (!ICONS[name]) return null
  return (
    <svg className={`tech-icon ${className}`} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4d7fe0" />
          <stop offset="0.5" stopColor="#8be0fb" />
          <stop offset="1" stopColor="#5b95ff" />
        </linearGradient>
      </defs>
      <g fill={`url(#${id})`} stroke={`url(#${id})`}>{ICONS[name]}</g>
    </svg>
  )
}
