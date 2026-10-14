// Destinos de los botones. Fuente: Content MD/Link/Links.md
//
// Los enlaces que antes iban a la web anterior (campuslands.com) ahora apuntan a las rutas
// internas de este sitio. Los servicios que aún no tienen diseño muestran la página
// "en construcción" en su propia ruta (ver SERVICE_ROUTES en navigation.js).

const WA_MAIN = 'https://wa.me/573009711559'

export const LINKS = {
  contact: WA_MAIN,
  camperLogin: 'https://camper.campuslands.com/login',

  // Rutas internas de los servicios
  services: {
    aiAcademy: '/servicios/ia-academy',
    staffing: '/servicios/staffing',
    emplea: '/servicios/emplea',
    fullService: '/servicios/fullservice',
    international: '/servicios/internacional',
  },

  // Sección de contacto de la página de Emplea
  partnersContact: '/servicios/emplea#contacto',
  orbitChat:
    'https://api.whatsapp.com/send/?phone=573009711559&text&type=phone_number&app_absent=0',
  // Sé un camper
  camper: {
    start: WA_MAIN,
    programs: {
      codeUp: `${WA_MAIN}?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20el%20programa%20Code%20Up`,
      afterWork: `${WA_MAIN}?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20el%20programa%20After%20Work`,
      speakUp: `${WA_MAIN}?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20el%20programa%20Speak%20Up`,
      marketing: `${WA_MAIN}?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20el%20programa%20Marketing`,
    },
  },

  // Nosotros. En Links.md estos botones llevan a "#": se usan los canales de WhatsApp oficiales
  about: {
    start: WA_MAIN,
    advice: WA_MAIN + '?text=Hola,%20quisiera%20solicitar%20una%20asesor%C3%ADa',
  },

  scheduleVisit:
    'https://api.whatsapp.com/send/?phone=3182018997&text=Hola%21+Quiero+agendar+una+visita&type=phone_number&app_absent=0',

  social: {
    instagram: 'https://www.instagram.com/campuslands/',
    tiktok: 'https://www.tiktok.com/@campuslands',
    linkedin: 'https://www.linkedin.com/company/campuslands/',
    facebook: 'https://www.facebook.com/campuslands',
  },

  // Páginas legales de este sitio
  legal: {
    privacy: '/politicas-de-privacidad',
    terms: '/terminos-y-condiciones',
  },

  // Emplea: equipo comercial (Content MD/Link/Links.md → CONTACTAR AHORA)
  emplea: {
    contact: 'https://wa.me/573189456901',
    email: 'mailto:karolain.huerfano@campuslands.com',
  },
}
