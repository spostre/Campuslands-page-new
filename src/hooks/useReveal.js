import { useEffect, useRef } from 'react'

/*
 * Animaciones de entrada: devuelve un ref; cuando el elemento entra en pantalla por primera
 * vez se le agrega la clase `is-revealed` (una sola vez, nunca se quita).
 * Los estilos están en global.css: `.reveal` (el propio elemento) y `.reveal-stagger`
 * (sus hijos aparecen en cascada según `--i`).
 * Un solo IntersectionObserver para toda la página y sin re-renders de React.
 */
let observer = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  )
  return observer
}

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-revealed')
      return
    }
    const io = getObserver()
    io.observe(el)
    return () => io.unobserve(el)
  }, [])

  return ref
}
