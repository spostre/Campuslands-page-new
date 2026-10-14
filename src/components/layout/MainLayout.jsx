import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Mascot from '@/components/ui/Mascot'

export default function MainLayout() {
  const { pathname, hash } = useLocation()

  // Al cambiar de página, volver arriba; si el enlace trae un ancla (#contacto), ir a esa sección
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

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
