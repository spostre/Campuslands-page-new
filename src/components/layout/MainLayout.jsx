import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Mascot from '@/components/ui/Mascot'

export default function MainLayout() {
  const { pathname } = useLocation()

  // Al cambiar de página, volver arriba
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
