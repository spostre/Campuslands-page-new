import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useLanguage } from '@/context/LanguageContext'

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
  const { t } = useLanguage()

  // Título de la pestaña según la página (ayuda al SEO y a reconocer la pestaña abierta)
  useEffect(() => {
    const n = t.nav
    const s = n.servicesMenu
    const names = {
      '/se-un-camper': n.camper,
      '/nosotros': n.about,
      '/creditos': t.footer.credits,
      '/servicios/emplea': s.emplea,
      '/servicios/fullservice': s.fullService,
      '/servicios/internacional': s.international,
      '/servicios/ia-academy': s.aiAcademy,
      '/servicios/staffing': s.staffing,
      '/servicios/facturacion': s.billing,
      '/politicas-de-privacidad': t.footer.privacy,
      '/terminos-y-condiciones': t.footer.terms,
    }
    document.title = names[pathname] ? names[pathname] + ' · Campuslands' : 'Campuslands'
  }, [pathname, t])

  // El navegador no debe restaurar por su cuenta la posición al recargar o volver atrás:
  // cada página empieza arriba y sus animaciones de entrada se ven al bajar
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])

  // Al cambiar de página, volver arriba ANTES de que la página nueva active sus animaciones de
  // entrada. useLayoutEffect corre antes que los useEffect de las secciones (donde se crean los
  // observadores), así que la página nueva nunca "ve" la posición de scroll de la anterior y no
  // dispara de golpe las animaciones de las secciones de abajo.
  useLayoutEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) // sin animación de scroll suave
  }, [pathname, hash])

  // Si el enlace trae un ancla (#contacto), bajar a esa sección. Las páginas se descargan
  // aparte, así que se reintenta en cada cuadro hasta que la sección exista (máx. ~4 s).
  useEffect(() => {
    if (!hash) return
    let frame = 0
    let tries = 0
    const attempt = () => {
      if (scrollToSection(decodeURIComponent(hash.slice(1))) || ++tries > 240) return
      frame = requestAnimationFrame(attempt)
    }
    frame = requestAnimationFrame(attempt)
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
    </div>
  )
}
