// Textos en español. Fuente: Content MD/home.md

const es = {
  nav: {
    home: 'Inicio',
    camper: 'Sé un camper',
    services: 'Servicios',
    about: 'Nosotros',
    contact: 'Contactar',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    servicesMenu: {
      aiAcademy: 'Campuslands AI Academy',
      staffing: 'Staffing tecnológico',
      emplea: 'Campuslands Emplea',
      fullService: 'FullService Software',
      international: 'Campuslands Internacional',
      billing: 'Facturación',
    },
  },

  footer: {
    tagline: 'Fábrica de talento TI que forma a los jóvenes que construirán la tecnología del mañana.',
    legalTitle: 'Legal',
    socialTitle: 'Redes',
    privacy: 'Políticas de tratamiento de datos personales',
    terms: 'Términos y condiciones',
    credits: 'Créditos y licencias',
    rights: '© 2026 Campuslands. Todos los derechos reservados.',
  },

  // Sé un camper. Fuente: Content MD/Sé un camper.md
  // Los nombres de las dos líneas de programas son nuestros (el contenido numera Mission 01/02 dos veces).
  camper: {
    hero: {
      eyebrow: 'Sé un camper',
      title: 'Convierte tu potencial en la carrera *del futuro.*',
      text: 'Aprende Desarrollo de Software, Inteligencia Artificial, Inglés y Habilidades Adaptativas en un entrenamiento diseñado para el mundo laboral.',
      cta: 'Quiero iniciar',
      secondary: 'Ver rutas',
      orbit: ['Desarrollo de software', 'Inteligencia artificial', 'Inglés', 'Habilidades adaptativas'],
      side: ['Desarrollo de software', 'Inteligencia artificial', 'Inglés', 'Habilidades adaptativas'],
      age: 'Desde los 17 años · Sin límite de edad',
    },
    routes: {
      eyebrow: 'Programas',
      title: 'Rutas de *entrenamiento*',
      text: 'Diferentes rutas que responden a distintos perfiles y momentos de vida. Jóvenes, adultos y profesionales en reinvención.',
      age: { value: '17+', title: '¡Desde los 17 años en adelante!', text: 'Sin límite de edad' },
      includes: 'Incluye',
      schedule: 'Modalidad',
      months: 'meses',
      duration: 'Duración',
      levels: 'Niveles',
      cta: 'Inscribirme ahora',
      tracks: [
        {
          title: 'Software e inteligencia artificial',
          programs: [
            {
              key: 'codeUp',
              tagline: 'Tu primera carrera en tecnología, a tiempo completo',
              mission: 'Mission 01',
              name: 'Code Up',
              duration: 10,
              includes: ['Inteligencia Artificial aplicada', 'Desarrollo de Software', 'Habilidades Adaptativas', 'Inglés'],
              schedules: ['6:00 am a 2:00 pm', '10:00 am a 5:00 pm'],
              format: '100% Presencial',
            },
            {
              key: 'afterWork',
              tagline: 'Aprende tecnología sin dejar tu trabajo',
              mission: 'Mission 02',
              name: 'After Work',
              duration: 13,
              includes: ['Inteligencia Artificial aplicada', 'Desarrollo de Software', 'Habilidades Adaptativas'],
              schedules: ['6:30 pm a 10:00 pm'],
              format: 'Virtual o presencial',
            },
          ],
        },
        {
          title: 'Formación complementaria',
          programs: [
            {
              key: 'speakUp',
              tagline: 'Del inglés básico al avanzado',
              mission: 'Mission 01',
              name: 'Speak Up',
              duration: 10,
              text: 'Nuestra formación está estructurada para llevarte desde nivel básico hasta avanzado.',
              levels: ['A1', 'A2', 'B1', 'B2'],
              schedules: ['6:00 pm a 10:00 pm'],
              format: '100% Presencial',
            },
            {
              key: 'marketing',
              tagline: 'Marketing digital potenciado con IA',
              mission: 'Mission 02',
              name: 'Marketing',
              duration: 3,
              includes: ['Posicionamiento y arquitectura digital', 'Campañas, leads y conversión', 'IA avanzada / automatización', 'Proyecto final'],
              schedules: ['7:00 pm a 9:00 pm', '5:00 pm a 7:00 pm'],
              format: 'Presencial / Virtual',
            },
          ],
        },
      ],
    },
    final: {
      title: 'Tu carrera del *futuro* empieza hoy',
      text: 'Escríbenos y te ayudamos a elegir la ruta ideal para ti.',
      cta: 'Quiero iniciar',
      secondary: 'Ver rutas',
    },
    stories: {
      eyebrow: 'En Campuslands cambiamos vidas',
      title: 'Historias de *éxito*',
      text: 'Conoce cómo nuestros campers transformaron su talento en oportunidades reales dentro de la industria tecnológica.',
      videoPrefix: 'Testimonio de',
      items: [
        { name: 'Santiago Laguado', role: 'Trainer – AI Academy' },
        { name: 'Juan Rubio', role: 'Camper egresado' },
        { name: 'Edinson Aparicio', role: 'Camper Sede San Gil' },
      ],
    },
  },

  credits: {
    eyebrow: 'Legal',
    title: 'Créditos y *licencias*',
    intro: 'Este sitio usa tipografías, datos de mapas y software de terceros. Aquí están sus créditos y licencias.',
    license: 'Ver licencia',
    sections: [
      {
        title: 'Tipografías',
        text: 'Hanken Grotesk, Newsreader y Poppins se distribuyen bajo la SIL Open Font License 1.1 y están alojadas en este mismo sitio.',
        items: [
          { name: 'Hanken Grotesk — © The Hanken Grotesk Project Authors', href: '/licenses/OFL-hankengrotesk.txt' },
          { name: 'Newsreader — © The Newsreader Project Authors', href: '/licenses/OFL-newsreader.txt' },
          { name: 'Poppins — © The Poppins Project Authors', href: '/licenses/OFL-poppins.txt' },
        ],
      },
      {
        title: 'Mapa de sedes',
        text: 'Datos del mapa © colaboradores de OpenStreetMap, disponibles bajo la Open Database License (ODbL). Al mostrar el mapa interactivo, tu navegador se conecta a los servidores de OpenStreetMap para descargar las imágenes del mapa. Si ese servicio no está disponible, se muestra una imagen del mismo mapa.',
        items: [
          { name: '© OpenStreetMap contributors — Copyright y licencia', href: 'https://www.openstreetmap.org/copyright' },
          { name: 'Leaflet — © Volodymyr Agafonkin (BSD-2-Clause)', href: '/licenses/LICENSE-leaflet.txt' },
        ],
      },
      {
        title: 'Software de código abierto',
        text: 'El sitio está construido con las siguientes librerías, distribuidas bajo la licencia MIT.',
        items: [
          { name: 'React y React DOM — © Meta Platforms, Inc. y afiliados', href: '/licenses/LICENSE-react.txt' },
          { name: 'Scheduler — © Meta Platforms, Inc. y afiliados', href: '/licenses/LICENSE-scheduler.txt' },
          { name: 'React Router — © React Training LLC y Remix Software Inc.', href: '/licenses/LICENSE-react-router.txt' },
        ],
      },
      {
        title: 'Marcas',
        text: 'Los logos de los aliados son marcas de sus respectivos propietarios y se muestran para identificar las alianzas con Campuslands. WhatsApp, Instagram, TikTok, LinkedIn y Facebook son marcas de sus respectivos titulares; se nombran solo para enlazar a los perfiles oficiales de Campuslands.',
        items: [],
      },
    ],
  },

  comingSoon: {
    title: 'Sección en construcción',
    text: 'Estamos rediseñando esta página. Muy pronto estará disponible.',
    back: 'Volver al inicio',
  },

  notFound: {
    title: 'Página no encontrada',
    text: 'La página que buscas no existe o cambió de lugar.',
    back: 'Volver al inicio',
  },

  mascot: {
    label: 'Mascota de Campuslands: ¡tócala!',
  },

  placeholder: {
    image: 'Imagen',
    video: 'Video',
    logo: 'Logo',
  },

  home: {
    hero: {
      title: 'Revolucionamos el talento *tecnológico*',
      text: 'Somos una fábrica de Talento TI que forma a los jóvenes que construirán la tecnología del mañana. El futuro no espera, en Campuslands se construye.',
      tag: '#GoForIt',
      ctaJoin: 'Únete a Campuslands',
      ctaTalent: 'Conoce nuestro talento TI',
    },

    metrics: {
      title: 'Métricas de impacto',
      statement: 'La única hubtech colombiana con presencia internacional',
      stats: [
        { value: '+1,500', label: 'Campers graduados' },
        { value: '200+', label: 'Empresas tech' },
        { value: '90.4%', label: 'Match laboral' },
      ],
    },

    // Las descripciones y las barras son provisionales (no vienen en home.md).
    // Los tres porcentajes de cada pilar suman 100.
    pillars: {
      title: '¿Qué aprenden nuestros *campers*?',
      hint: 'Pasa el cursor sobre cada pilar para ver en qué se forman',
      items: [
        {
          title: 'Desarrollo de software',
          text: 'Construyen aplicaciones reales, desde la lógica hasta las bases de datos, con las prácticas que usa la industria.',
          bars: [{ label: 'Frontend', value: 40 }, { label: 'Backend', value: 35 }, { label: 'Bases de datos', value: 25 }],
        },
        {
          title: 'Inteligencia artificial',
          text: 'Usan la IA para programar, automatizar tareas y resolver problemas de forma más rápida.',
          bars: [{ label: 'IA generativa', value: 45 }, { label: 'Prompting', value: 30 }, { label: 'Automatización', value: 25 }],
        },
        {
          title: 'Inglés',
          text: 'Fortalecen el inglés técnico y conversacional que piden las empresas tech de todo el mundo.',
          bars: [{ label: 'Conversación', value: 45 }, { label: 'Inglés técnico', value: 35 }, { label: 'Escritura', value: 20 }],
        },
        {
          title: 'Habilidades adaptativas',
          text: 'Desarrollan comunicación, trabajo en equipo y liderazgo para crecer en cualquier entorno.',
          bars: [{ label: 'Trabajo en equipo', value: 40 }, { label: 'Comunicación', value: 35 }, { label: 'Liderazgo', value: 25 }],
        },
      ],
    },

    services: {
      eyebrow: 'Soluciones integrales',
      title: 'Nuestros *servicios*',
      items: [
        {
          key: 'aiAcademy',
          name: 'Campuslands AI Academy',
          text: 'Capacitación intensiva en IA generativa, automatización de procesos y herramientas de IA para potenciar equipos y empresas.',
          cta: 'Aprende IA',
        },
        {
          key: 'staffing',
          name: 'Staffing TI',
          text: 'Reclutamiento y selección estratégica de talento técnico calificado en desarrollo de software, arquitectura cloud y datos listo para integrarse a tu empresa.',
          cta: 'Contratar talento',
        },
        {
          key: 'emplea',
          name: 'Campuslands Emplea',
          text: 'Plataforma inteligente de empleabilidad y matchmaking laboral directo entre desarrolladores calificados y las mejores empresas tech.',
          cta: 'Descubrir Emplea',
        },
        {
          key: 'fullService',
          name: 'FullService Software',
          text: 'Desarrollo de proyectos digitales a la medida, fábricas de software y soluciones llave en mano respaldadas por talento especializado.',
          cta: 'Crear proyecto',
        },
        {
          key: 'international',
          name: 'Campuslands Internacional',
          text: 'Conexión de talento tecnológico latinoamericano con mercados globales e integración en proyectos internacionales.',
          cta: 'Explorar Global',
        },
      ],
    },

    partners: {
      eyebrow: 'Ecosistema de alianzas',
      title: 'Nuestros aliados *estratégicos*',
      text: 'Estas empresas ya contratan y patrocinan talento Campuslands.',
      ctaHire: 'Contratar talento',
      ctaSponsor: 'Patrocinar talento',
      prev: 'Ver aliados anteriores',
      next: 'Ver más aliados',
    },

    orbit: {
      eyebrow: 'Chatbot agent | Information Campbase',
      title: 'Pregúntale a *Órbit*.',
      text: '¿Tienes alguna duda? Órbit está listo para responder a cualquier pregunta que tengas sobre nuestros programas.',
      cta: 'Iniciar chat',
      windowTitle: 'Órbit · WhatsApp',
      windowUrl: 'wa.me/573009711559',
      imageLabel: 'Captura del chat de Órbit en WhatsApp',
    },

    locations: {
      eyebrow: 'Base location | Coordinates',
      title: 'Conoce nuestras *instalaciones*',
      text: 'Visita nuestras sedes y descubre cómo Campuslands está transformando el talento tech a nivel continental.',
      cta: 'Agendar visita',
      selectLabel: 'Localizar sede',
      addressPending: 'Dirección por confirmar',
    },

    social: {
      eyebrow: 'Síguenos',
      title: 'Más detalles de nuestra *misión* en redes',
      videoLabel: 'Video de Juliana',
    },
  },
}

export default es
