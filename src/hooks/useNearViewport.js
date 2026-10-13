import { useEffect, useRef, useState } from 'react'

// Devuelve [ref, visible]: `visible` pasa a true (una sola vez) cuando el elemento
// está a menos de `margin` de entrar en pantalla. Útil para cargar cosas pesadas tarde.
export function useNearViewport(margin = '400px') {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: margin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [margin, visible])

  return [ref, visible]
}
