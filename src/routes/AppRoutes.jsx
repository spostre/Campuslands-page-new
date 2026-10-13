import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import Home from '@/pages/Home/Home'
import ComingSoon from '@/pages/ComingSoon/ComingSoon'
import NotFound from '@/pages/NotFound/NotFound'
import { SERVICE_ROUTES } from '@/constants/navigation'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* Páginas pendientes de diseño */}
        <Route path="/se-un-camper" element={<ComingSoon />} />
        <Route path="/nosotros" element={<ComingSoon />} />
        {SERVICE_ROUTES.map(({ key, to }) => (
          <Route key={key} path={to} element={<ComingSoon />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
