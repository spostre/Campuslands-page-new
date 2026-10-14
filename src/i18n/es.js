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
      sideTitle: 'Qué aprendes',
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

  // Nosotros. Fuente: Content MD/About us.md
  // Las definiciones de las tecnologías son nuestras (el contenido trae placeholders).
  about: {
    hero: {
      eyebrow: 'Campuslands',
      title: 'La historia de cómo una idea puede *cambiar vidas*',
      text: 'Conectamos a tu empresa con desarrolladores preevaluados que se integran rápidamente a tus procesos internos.',
      videoLabel: 'Video de Diego Tarazona',
      person: 'Diego Tarazona',
      role: 'C.E.O Campuslands',
    },
    impact: {
      eyebrow: 'Nuestras sedes',
      title: 'Lugares donde *impactamos*',
      stats: [
        { label: 'Impacto total', value: '+6,480', note: '' },
        { label: 'Impacto 2026', value: '1650', note: '4+ miembros de familia por joven impactado' },
        { label: 'Año 2026', value: 'Campus Guatemala', note: 'Nueva sede internacional' },
      ],
      mapTitle: 'Sedes y capacidad',
      capacity: 'campers',
      noData: 'Capacidad por confirmar',
      countries: [
        { name: 'Colombia', sedes: [
          { name: 'Bucaramanga', capacity: 670 },
          { name: 'Bogotá', capacity: 280 },
          { name: 'Norte de Santander', capacity: 70 },
          { name: 'Barranquilla', capacity: null },
          { name: 'Cali', capacity: null },
        ] },
        { name: 'Guatemala', sedes: [
          { name: 'Ciudad de Guatemala', capacity: null, isNew: true },
        ] },
      ],
      newLabel: 'Nueva sede',
      capacityLabel: 'Capacidad',
      mapLabel: 'Mapa de las sedes de Campuslands en Colombia y Guatemala',
    },
    purpose: {
      mission: { eyebrow: 'Nuestra misión', title: 'Transformando el *talento*', quote: 'Empoderar a jóvenes de diversos orígenes a través de educación tecnológica accesible, desarrollando sus habilidades en programación, inglés y competencias sociales para abrir puertas a oportunidades profesionales de alto impacto.' },
      vision: { eyebrow: 'La visión que nos guía', title: 'Un nuevo estrato *digital*', quote: 'Crear una comunidad global de talento digital, donde los jóvenes de cualquier lugar tengan acceso a las herramientas necesarias para un futuro próspero y significativo, contribuyendo a un nuevo estrato social digital.' },
    },
    knowledge: {
      eyebrow: 'Campuslands',
      title: 'Hoy nace campuslands, la tercera generación del *conocimiento*',
      todayTitle: 'Cuarta revolución industrial – hoy',
      futureTitle: 'Tecnologías del futuro',
      today: [
        { name: 'IA', text: 'Sistemas que aprenden y ayudan a tomar decisiones.' },
        { name: 'Programación', text: 'El lenguaje para crear software y soluciones.' },
        { name: 'Robótica', text: 'Máquinas que ejecutan tareas de forma autónoma.' },
        { name: 'Big Data', text: 'Grandes volúmenes de datos convertidos en decisiones.' },
        { name: 'Cloud (Nube)', text: 'Servicios y datos disponibles desde cualquier lugar.' },
        { name: 'Inglés', text: 'El idioma común de la industria tecnológica.' },
        { name: 'Ciberseguridad', text: 'Proteger sistemas, datos y personas.' },
        { name: 'Metaverso', text: 'Espacios digitales inmersivos y compartidos.' },
        { name: 'Low Code', text: 'Crear aplicaciones con poco código.' },
        { name: 'Blockchain', text: 'Registros digitales seguros y verificables.' },
        { name: 'Edge Computing', text: 'Procesar datos cerca de donde se generan.' },
        { name: 'Realidad Virtual', text: 'Experiencias digitales en tres dimensiones.' },
        { name: 'Automatización', text: 'Procesos que funcionan solos y sin errores.' },
        { name: '5G', text: 'Conexiones móviles ultrarrápidas.' },
      ],
      future: [
        { name: 'Robots Autónomos', text: 'Máquinas que perciben, deciden y actúan solas.' },
        { name: 'Computación Cuántica', text: 'Cálculos imposibles para los computadores actuales.' },
        { name: 'Redes Neuronales', text: 'Modelos inspirados en el cerebro humano.' },
        { name: 'Hologramas', text: 'Imágenes en tres dimensiones proyectadas en el espacio.' },
        { name: 'Web 3.0', text: 'Una internet descentralizada y de los usuarios.' },
        { name: 'Energía de Fusión', text: 'Energía limpia y casi ilimitada.' },
      ],
    },
    stories: {
      eyebrow: 'Testimonios',
      title: 'Historias de *éxito*',
      text: 'Conoce cómo nuestros campers transformaron su talento en oportunidades reales dentro de la industria tecnológica.',
      cta: 'Quiero iniciar',
      secondary: 'Solicitar asesoría',
      video: 'Testimonio camper',
      featured: 'Programando el Futuro – Desde Tibú, Norte de Santander, hasta Campuslands',
      prev: 'Video anterior',
      next: 'Video siguiente',
    },
  },

  credits: {
    eyebrow: 'Legal',
    title: 'Créditos y *licencias*',
    intro: 'Este sitio usa tipografías, datos de mapas, una imagen satelital y software de terceros. Aquí están sus créditos y licencias.',
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
        title: 'Imagen satelital (Nosotros)',
        text: 'La vista satelital de Centroamérica y Sudamérica es un recorte de "Blue Marble: Next Generation" (diciembre de 2004, con relieve y batimetría), de NASA Earth Observatory. Las imágenes de NASA son de dominio público; se cita la fuente como pide NASA. La imagen está alojada en este mismo sitio.',
        items: [
          { name: 'Imagen: NASA Earth Observatory (Reto Stöckli) — Blue Marble: Next Generation', href: 'https://visibleearth.nasa.gov/images/73909/december-blue-marble-next-generation-w-topography-and-bathymetry' },
          { name: 'Pautas de uso de imágenes de NASA', href: 'https://www.nasa.gov/nasa-brand-center/images-and-media/' },
        ],
      },
      {
        title: 'Logos de tecnologías (Emplea)',
        text: 'Los logos de Python, HTML5, CSS3, JavaScript, MySQL, PostgreSQL, Node.js, Java (OpenJDK), PHP, .NET y Git provienen de Simple Icons, publicados bajo CC0 1.0 (dominio público). Son marcas de sus respectivos titulares y se muestran solo para nombrar las tecnologías que se enseñan.',
        items: [
          { name: 'Simple Icons — CC0 1.0', href: 'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md' },
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

  // Campuslands Emplea. Fuente: Content MD/Servicios/Servicios Emplea.md
  // PROVISIONAL (textos nuestros): el programa de ejemplo del hero y su traducción, y las
  // descripciones de cada tecnología en "Especialistas".
  emplea: {
    hero: {
      eyebrow: 'Campuslands Emplea',
      title: 'Impulsa tu crecimiento con *el talento que tu empresa necesita.*',
      text: 'Simplificamos tu contratación de perfiles TI con formación práctica, habilidades técnicas y habilidades adaptativas. Listas para generar impacto desde el primer día.',
      cta: 'Encuentra tu talento TI',
      statValue: '+800',
      statLabel: 'Talentos Campus trabajando en empresas tech',
      file: 'mi_primer_programa.py',
      codeLabel: 'Python',
      plainLabel: 'En palabras',
      replay: 'Ver de nuevo',
      blocks: [
        {
          code: ['nombre = "Ana"', 'edad = 19'],
          plain: 'Guarda dos datos: el nombre de una persona, Ana, y su edad, 19 años.',
        },
        {
          code: ['if edad >= 17:', '    print("Hola, " + nombre + ". Ya puedes ser camper")'],
          plain: 'Si tiene 17 años o más, la saluda por su nombre y le dice que ya puede ser camper.',
        },
        {
          code: ['temas = ["Python", "IA", "Inglés"]', 'for tema in temas:', '    print("Hoy aprendo", tema)'],
          plain: 'Hace una lista de tres temas y, uno por uno, muestra en pantalla qué aprende hoy.',
        },
      ],
    },
    leap: {
      eyebrow: 'Tech Leap',
      title: 'Tu camino para incorporar *talento TI*',
      text: 'Seis etapas diseñadas para garantizar el match perfecto entre tus necesidades y nuestro talento TI.',
      prev: 'Etapa anterior',
      next: 'Etapa siguiente',
      steps: [
        { title: 'Descubrimiento', text: 'Entendemos tus necesidades, tecnologías y objetivos para identificar el perfil ideal.' },
        { title: 'Búsqueda de talento', text: 'Seleccionamos y validamos candidatos que cumplen con los requisitos técnicos y humanos.' },
        { title: 'Presentación de perfiles', text: 'Recibe una selección de talento y agenda entrevistas con los candidatos que mejor se adapten a tu equipo.' },
        { title: 'Selección', text: 'Elige al profesional que mejor se alinee con tu cultura, stack tecnológico y objetivos.' },
        { title: 'Vinculación', text: 'Formalizamos el modelo de contratación y acompañamos la incorporación del talento.' },
        { title: 'Garantía', text: 'Realizamos seguimiento continuo para asegurar una integración exitosa y ofrecer respaldo durante el proceso.' },
      ],
      testimonialsTitle: 'Testimonios de empresas aliadas',
      testimonials: [
        {
          name: 'Cristian Velez',
          role: 'Director @Mantis App',
          quote: 'Colaborar con un Camper fue una decisión clave para el crecimiento de nuestra empresa. Su preparación, junto con su disposición para aprender, adaptarse y contribuir de manera significativa, marcaron una gran diferencia en nuestro equipo. Estamos ansiosos de seguir contratando talento de alto calibre confiados plenamente en Campuslands.',
        },
        {
          name: 'Clément Memain',
          role: 'CEO Consulting @Data/AI',
          quote: 'Nos ha encantado el talento TI proveniente de Campuslands, con quienes hemos desarrollado el proyecto Coding Queendom. Actualmente, 17 mujeres forman parte de esta iniciativa, y estamos comprometidos a incrementar este número en los próximos años.',
        },
      ],
    },
    stack: {
      eyebrow: 'Especialistas',
      title: 'Especialistas en las tecnologías que *mueven tu negocio*',
      text: 'Entrenamos talento en las herramientas más demandadas para asegurar una integración inmediata a tus proyectos.',
      areas: ['Inteligencia artificial', 'Programación', 'Liderazgo y trabajo en equipo'],
      hint: 'Elige una tecnología',
      items: [
        { key: 'python', name: 'Python', area: 'Programación e IA', text: 'El lenguaje más usado para datos, automatización e inteligencia artificial. Sus campers escriben scripts, analizan información y construyen servicios con él.' },
        { key: 'web', name: 'HTML5 / CSS3 / JavaScript', area: 'Desarrollo web', text: 'La base de toda página y aplicación web: estructura, diseño y comportamiento. Construyen interfaces claras que funcionan en cualquier pantalla.' },
        { key: 'mysql', name: 'MySQL', area: 'Bases de datos', text: 'Diseñan tablas, consultan y relacionan información en una de las bases de datos más usadas por las empresas.' },
        { key: 'postgresql', name: 'PostgreSQL', area: 'Bases de datos', text: 'Base de datos robusta para proyectos que crecen: consultas avanzadas, integridad de los datos y buen rendimiento.' },
        { key: 'node', name: 'Node.js', area: 'Backend', text: 'JavaScript del lado del servidor para crear APIs y servicios rápidos que conectan las aplicaciones con sus datos.' },
        { key: 'java', name: 'Java', area: 'Backend empresarial', text: 'Lenguaje estable y muy presente en grandes empresas. Programación orientada a objetos y aplicaciones de larga vida.' },
        { key: 'php', name: 'PHP', area: 'Desarrollo web', text: 'Impulsa gran parte de la web. Desarrollan sitios y sistemas a la medida conectados a bases de datos.' },
        { key: 'dotnet', name: 'C# (.NET)', area: 'Backend empresarial', text: 'Ecosistema de Microsoft para aplicaciones de negocio, APIs y servicios en la nube.' },
        { key: 'git', name: 'Git / Control de versiones', area: 'Trabajo en equipo', text: 'Guardan el historial de cada cambio y colaboran en el mismo código sin pisarse, como lo hacen los equipos profesionales.' },
      ],
    },
    why: {
      eyebrow: 'Modelos de contratación',
      title: 'Por qué las empresas líderes *nos eligen*',
      prev: 'Anterior',
      next: 'Siguiente',
      goTo: 'Ir a',
      pending: 'pendiente',
      slides: [
        { title: 'Cuota Sena', tag: 'Practica con nosotros', text: 'Talento en formación que trabaja en tu empresa. Formamos a tu futuro colaborador durante 10 meses en habilidades TI. En los siguientes 6 meses llega a tu empresa en etapa productiva, ya entrenado y listo para aportar valor.' },
        { title: 'Talent Pool', tag: 'Contrata ya', text: 'Te brindamos candidatos junior y semi senior ya formados y con experiencia. Nosotros hacemos el match, tú contratas directamente.' },
        { title: 'Staffing', tag: 'Amplía tu equipo', text: 'Te asignamos desarrolladores que trabajan como parte de tu equipo, pero bajo nuestra administración. Tú diriges, nosotros gestionamos.' },
        { title: 'Cero riesgo de selección', tag: 'Garantía', text: 'Hacemos seguimiento constante: si el talento no cumple tus expectativas, lo reemplazamos sin costos adicionales.' },
      ],
    },
    companies: {
      eyebrow: 'Reclutadores de talento',
      title: 'Empresas que contratan *talento Campuslands*',
      text: 'Estas empresas ya contratan y patrocinan talento Campuslands.',
    },
    contact: {
      eyebrow: 'Equipo comercial',
      title: '¿Listo para escalar *tu equipo*?',
      team: 'Relaciones Comerciales de Campuslands',
      phone: '+57 318 945 6901',
      email: 'karolain.huerfano@campuslands.com',
      location: 'Floridablanca, Colombia',
      phoneLabel: 'Teléfono',
      emailLabel: 'Correo',
      locationLabel: 'Ubicación',
      cta: 'Contactar ahora',
      follow: 'Síguenos',
    },
  },

  legal: {
    index: 'Contenido',
    onlySpanish: '',
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
      items: [
        {
          title: 'Desarrollo de software',
          text: 'Construyen aplicaciones reales, desde la lógica hasta las bases de datos, con las prácticas que usa la industria.',
        },
        {
          title: 'Inteligencia artificial',
          text: 'Usan la IA para programar, automatizar tareas y resolver problemas de forma más rápida.',
        },
        {
          title: 'Inglés',
          text: 'Fortalecen el inglés técnico y conversacional que piden las empresas tech de todo el mundo.',
        },
        {
          title: 'Habilidades adaptativas',
          text: 'Desarrollan comunicación, trabajo en equipo y liderazgo para crecer en cualquier entorno.',
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
