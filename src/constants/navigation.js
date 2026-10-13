// Rutas internas del sitio. Los textos salen de src/i18n.

export const NAV_LINKS = [
  { key: 'home', to: '/' },
  { key: 'camper', to: '/se-un-camper' },
  { key: 'services', children: true },
  { key: 'about', to: '/nosotros' },
]

export const SERVICE_ROUTES = [
  { key: 'aiAcademy', to: '/servicios/ia-academy' },
  { key: 'staffing', to: '/servicios/staffing' },
  { key: 'emplea', to: '/servicios/emplea' },
  { key: 'fullService', to: '/servicios/fullservice' },
  { key: 'international', to: '/servicios/internacional' },
  { key: 'billing', to: '/servicios/facturacion' },
]
