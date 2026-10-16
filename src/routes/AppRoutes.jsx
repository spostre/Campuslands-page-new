import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import Home from '@/pages/Home/Home'
import NotFound from '@/pages/NotFound/NotFound'
import Credits from '@/pages/Credits/Credits'
import Camper from '@/pages/Camper/Camper'
import About from '@/pages/About/About'
import Emplea from '@/pages/Emplea/Emplea'
import FullService from '@/pages/FullService/FullService'
import Global from '@/pages/Global/Global'
import AiAcademy from '@/pages/AiAcademy/AiAcademy'
import Staffing from '@/pages/Staffing/Staffing'
import Billing from '@/pages/Billing/Billing'
import Legal from '@/pages/Legal/Legal'
import { LINKS } from '@/constants/links'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/se-un-camper" element={<Camper />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/creditos" element={<Credits />} />
        <Route path="/servicios/emplea" element={<Emplea />} />
        <Route path="/servicios/fullservice" element={<FullService />} />
        <Route path="/servicios/internacional" element={<Global />} />
        <Route path="/servicios/ia-academy" element={<AiAcademy />} />
        <Route path="/servicios/staffing" element={<Staffing />} />
        <Route path="/servicios/facturacion" element={<Billing />} />
        <Route path={LINKS.legal.privacy} element={<Legal key="privacy" doc="privacy" />} />
        <Route path={LINKS.legal.terms} element={<Legal key="terms" doc="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
