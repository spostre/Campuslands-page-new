import { useEffect, useRef } from 'react'
import './ScrollMoon.css'

/*
 * Luna de fondo, muy desenfocada (como el brillo del logo), que acompaña la sección y
 * "se va cerrando" al bajar: una sombra se desliza sobre ella hasta dejar luna nueva.
 * El avance (--phase, 0 → 1) se calcula con el scroll dentro de la sección contenedora.
 */
export default function ScrollMoon() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const section = el.parentElement
    let frame = 0

    const update = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 cuando la sección entra por abajo de la pantalla, 1 cuando su final sale por arriba
      const progress = (vh - rect.top) / (rect.height + vh)
      el.style.setProperty('--phase', Math.min(1, Math.max(0, progress)).toFixed(3))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div ref={ref} className="scroll-moon" aria-hidden="true">
      <div className="scroll-moon__sticky">
        <div className="scroll-moon__body">
          <span className="scroll-moon__halo" />
          <span className="scroll-moon__light" />
          <span className="scroll-moon__shade" />
        </div>
      </div>
    </div>
  )
}
