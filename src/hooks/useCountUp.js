import { useEffect, useState } from 'react'

// Separa "+1,500" / "200+" / "90.4%" en prefijo, número, sufijo y decimales
function parse(value) {
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/)
  if (!match) return null
  const [, prefix, numeric, suffix] = match
  return {
    prefix,
    suffix,
    target: parseFloat(numeric.replace(/,/g, '')),
    decimals: numeric.includes('.') ? numeric.split('.')[1].length : 0,
  }
}

function format({ prefix, suffix, decimals }, n) {
  return (
    prefix +
    n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) +
    suffix
  )
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Anima una cifra desde 0 hasta su valor. Respeta "reducir movimiento".
export function useCountUp(value, { duration = 1600, delay = 0 } = {}) {
  const [display, setDisplay] = useState(() => {
    const parts = parse(value)
    return parts && !prefersReducedMotion() ? format(parts, 0) : value
  })

  useEffect(() => {
    const parts = parse(value)
    if (!parts || prefersReducedMotion()) {
      setDisplay(value)
      return
    }

    let frame
    let start
    const tick = (now) => {
      start ??= now
      const t = Math.min(Math.max((now - start - delay) / duration, 0), 1)
      const eased = 1 - Math.pow(1 - t, 4)
      setDisplay(t === 1 ? value : format(parts, parts.target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    // Seguridad: si el navegador pausa los frames, igual se muestra el valor final
    const safety = setTimeout(() => {
      cancelAnimationFrame(frame)
      setDisplay(value)
    }, delay + duration + 300)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(safety)
    }
  }, [value, duration, delay])

  return display
}
