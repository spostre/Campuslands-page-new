// Destinos de los botones. Fuente: Content MD/Link/Links.md
//
// PENDIENTE: los enlaces marcados con [ANTIGUA] llevan a la web anterior
// (campuslands.com). Cuando exista la página equivalente en este sitio, cambiarlos
// por la ruta interna (ver SERVICE_ROUTES en navigation.js).

const WA_MAIN = 'https://wa.me/573009711559'

export const LINKS = {
  contact: WA_MAIN,
  camperLogin: 'https://camper.campuslands.com/login',

  // [ANTIGUA] → /servicios/...
  services: {
    aiAcademy: 'https://campuslands.com/servicios/ia-academy',
    staffing: 'https://campuslands.com/servicios/staffing',
    emplea: 'https://campuslands.com/servicios/emplea',
    fullService: 'https://campuslands.com/servicios/fullservice',
    international: 'https://campuslands.com/servicios/internacional',
  },

  // [ANTIGUA] → sección de contacto de la nueva página de Emplea
  partnersContact: 'https://campuslands.com/servicios/emplea#partners-contact',
  orbitChat:
    'https://api.whatsapp.com/send/?phone=573009711559&text&type=phone_number&app_absent=0',
  scheduleVisit:
    'https://api.whatsapp.com/send/?phone=3182018997&text=Hola%21+Quiero+agendar+una+visita&type=phone_number&app_absent=0',

  social: {
    instagram: 'https://www.instagram.com/campuslands/',
    tiktok: 'https://www.tiktok.com/@campuslands',
    linkedin: 'https://www.linkedin.com/company/campuslands/',
    facebook: 'https://www.facebook.com/campuslands',
  },

  // [ANTIGUA] → páginas de políticas de este sitio
  legal: {
    privacy: 'https://campuslands.com/privacidad',
    terms: 'https://campuslands.com/terminos',
  },
}
