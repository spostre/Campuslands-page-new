import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import Home from '@/pages/Home/Home'
import ComingSoon from '@/pages/ComingSoon/ComingSoon'
import NotFound from '@/pages/NotFound/NotFound'
import Credits from '@/pages/Credits/Credits'
import Camper from '@/pages/Camper/Camper'
import About from '@/pages/About/About'
import { SERVICE_ROUTES } from '@/constants/navigation'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/se-un-camper" element={<Camper />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/creditos" element={<Credits />} />
        {/* Páginas pendientes de diseño */}
        {SERVICE_ROUTES.map(({ key, to }) => (
          <Route key={key} path={to} element={<ComingSoon />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
