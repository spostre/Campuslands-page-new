import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import Home from '@/pages/Home/Home'
import { LINKS } from '@/constants/links'

// Rendimiento: el Inicio va en el paquete principal; las demás páginas se descargan solo cuando
// se visitan (cada una con su propio JS y CSS). Así la primera carga pesa mucho menos.
const Camper = lazy(() => import('@/pages/Camper/Camper'))
const About = lazy(() => import('@/pages/About/About'))
const Credits = lazy(() => import('@/pages/Credits/Credits'))
const Emplea = lazy(() => import('@/pages/Emplea/Emplea'))
const FullService = lazy(() => import('@/pages/FullService/FullService'))
const Global = lazy(() => import('@/pages/Global/Global'))
const AiAcademy = lazy(() => import('@/pages/AiAcademy/AiAcademy'))
const Staffing = lazy(() => import('@/pages/Staffing/Staffing'))
const Billing = lazy(() => import('@/pages/Billing/Billing'))
const Legal = lazy(() => import('@/pages/Legal/Legal'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))

// Mientras llega una página: fondo oscuro del sitio a pantalla completa (sin saltos de diseño)
const page = (element) => (
  <Suspense fallback={<div className="page-loading" aria-hidden="true" />}>{element}</Suspense>
)

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/se-un-camper" element={page(<Camper />)} />
        <Route path="/nosotros" element={page(<About />)} />
        <Route path="/creditos" element={page(<Credits />)} />
        <Route path="/servicios/emplea" element={page(<Emplea />)} />
        <Route path="/servicios/fullservice" element={page(<FullService />)} />
        <Route path="/servicios/internacional" element={page(<Global />)} />
        <Route path="/servicios/ia-academy" element={page(<AiAcademy />)} />
        <Route path="/servicios/staffing" element={page(<Staffing />)} />
        <Route path="/servicios/facturacion" element={page(<Billing />)} />
        <Route path={LINKS.legal.privacy} element={page(<Legal key="privacy" doc="privacy" />)} />
        <Route path={LINKS.legal.terms} element={page(<Legal key="terms" doc="terms" />)} />
        <Route path="*" element={page(<NotFound />)} />
      </Route>
    </Routes>
  )
}
