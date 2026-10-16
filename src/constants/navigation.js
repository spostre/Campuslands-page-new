// Rutas internas del sitio. Los textos salen de src/i18n.

export const NAV_LINKS = [
  { key: 'home', to: '/' },
  { key: 'camper', to: '/se-un-camper' },
  { key: 'services', children: true },
  { key: 'about', to: '/nosotros' },
]

// Orden del menú de servicios (el que pidió el responsable)
export const SERVICE_ROUTES = [
  { key: 'emplea', to: '/servicios/emplea' },
  { key: 'fullService', to: '/servicios/fullservice' },
  { key: 'international', to: '/servicios/internacional' },
  { key: 'aiAcademy', to: '/servicios/ia-academy' },
  { key: 'staffing', to: '/servicios/staffing' },
  { key: 'billing', to: '/servicios/facturacion' },
]
