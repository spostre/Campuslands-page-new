import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Mascot from '@/components/ui/Mascot'

// Baja suavemente hasta la sección y quita el "#seccion" de la dirección, para que al recargar
// la página empiece arriba (se usa replaceState: no crea una entrada nueva en el historial)
const scrollToSection = (id) => {
  const target = document.getElementById(id)
  if (!target) return false
  target.scrollIntoView({ behavior: 'smooth' })
  window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search)
  return true
}

export default function MainLayout() {
  const { pathname, hash } = useLocation()

  // Al cambiar de página, volver arriba; si el enlace trae un ancla (#contacto), ir a esa sección
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const frame = requestAnimationFrame(() => scrollToSection(hash.slice(1)))
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  // Enlaces a una sección de la MISMA página (p. ej. "Encuentra tu talento aquí" → #contacto):
  // bajan cada vez que se tocan, aunque la dirección ya tenga ese ancla. Escucha en fase de
  // captura para adelantarse a la navegación del router.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target.closest?.('a[href*="#"]')
      if (!link || link.target === '_blank') return
      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return
      if (scrollToSection(decodeURIComponent(url.hash.slice(1)))) e.preventDefault()
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
      <Mascot />
    </div>
  )
}
