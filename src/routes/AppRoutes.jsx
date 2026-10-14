import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import Home from '@/pages/Home/Home'
import ComingSoon from '@/pages/ComingSoon/ComingSoon'
import NotFound from '@/pages/NotFound/NotFound'
import Credits from '@/pages/Credits/Credits'
import Camper from '@/pages/Camper/Camper'
import About from '@/pages/About/About'
import Emplea from '@/pages/Emplea/Emplea'
import Legal from '@/pages/Legal/Legal'
import { LINKS } from '@/constants/links'
import { SERVICE_ROUTES } from '@/constants/navigation'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/se-un-camper" element={<Camper />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/creditos" element={<Credits />} />
        <Route path="/servicios/emplea" element={<Emplea />} />
        <Route path={LINKS.legal.privacy} element={<Legal key="privacy" doc="privacy" />} />
        <Route path={LINKS.legal.terms} element={<Legal key="terms" doc="terms" />} />
        {/* Páginas pendientes de diseño */}
        {SERVICE_ROUTES.filter(({ key }) => key !== 'emplea').map(({ key, to }) => (
          <Route key={key} path={to} element={<ComingSoon />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
