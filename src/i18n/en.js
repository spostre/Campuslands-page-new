// English copy. Mirrors the structure of es.js

const en = {
  nav: {
    home: 'Home',
    camper: 'Be a camper',
    services: 'Services',
    about: 'About us',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    servicesMenu: {
      aiAcademy: 'Campuslands AI Academy',
      staffing: 'Tech staffing',
      emplea: 'Campuslands Emplea',
      fullService: 'FullService Software',
      international: 'Campuslands International',
      billing: 'Billing',
    },
  },

  footer: {
    tagline: 'An IT talent factory training the young people who will build tomorrow’s technology.',
    legalTitle: 'Legal',
    socialTitle: 'Social',
    privacy: 'Personal data processing policy',
    terms: 'Terms and conditions',
    credits: 'Credits and licenses',
    rights: '© 2026 Campuslands. All rights reserved.',
  },

  camper: {
    hero: {
      eyebrow: 'Be a camper',
      title: 'Turn your potential into the career *of the future.*',
      text: 'Learn Software Development, Artificial Intelligence, English and Adaptive Skills in a training program designed for the job market.',
      cta: 'I want to start',
      secondary: 'See paths',
      orbit: ['Software development', 'Artificial intelligence', 'English', 'Adaptive skills'],
      side: ['Software development', 'Artificial intelligence', 'English', 'Adaptive skills'],
      sideTitle: 'What you learn',
      age: 'From 17 years old · No age limit',
    },
    routes: {
      eyebrow: 'Programs',
      title: 'Training *paths*',
      text: 'Different paths for different profiles and stages of life. Young people, adults and professionals reinventing themselves.',
      age: { value: '17+', title: 'From 17 years old and up!', text: 'No age limit' },
      includes: 'Includes',
      schedule: 'Schedule',
      months: 'months',
      duration: 'Duration',
      levels: 'Levels',
      cta: 'Enroll now',
      tracks: [
        {
          title: 'Software and artificial intelligence',
          programs: [
            {
              key: 'codeUp',
              tagline: 'Your first tech career, full time',
              mission: 'Mission 01',
              name: 'Code Up',
              duration: 10,
              includes: ['Applied Artificial Intelligence', 'Software Development', 'Adaptive Skills', 'English'],
              schedules: ['6:00 am to 2:00 pm', '10:00 am to 5:00 pm'],
              format: '100% On-site',
            },
            {
              key: 'afterWork',
              tagline: 'Learn tech without leaving your job',
              mission: 'Mission 02',
              name: 'After Work',
              duration: 13,
              includes: ['Applied Artificial Intelligence', 'Software Development', 'Adaptive Skills'],
              schedules: ['6:30 pm to 10:00 pm'],
              format: 'Online or on-site',
            },
          ],
        },
        {
          title: 'Complementary training',
          programs: [
            {
              key: 'speakUp',
              tagline: 'From beginner to advanced English',
              mission: 'Mission 01',
              name: 'Speak Up',
              duration: 10,
              text: 'Our program is structured to take you from beginner to advanced level.',
              levels: ['A1', 'A2', 'B1', 'B2'],
              schedules: ['6:00 pm to 10:00 pm'],
              format: '100% On-site',
            },
            {
              key: 'marketing',
              tagline: 'Digital marketing powered by AI',
              mission: 'Mission 02',
              name: 'Marketing',
              duration: 3,
              includes: ['Digital positioning and architecture', 'Campaigns, leads and conversion', 'Advanced AI / automation', 'Final project'],
              schedules: ['7:00 pm to 9:00 pm', '5:00 pm to 7:00 pm'],
              format: 'On-site / Online',
            },
          ],
        },
      ],
    },
    stories: {
      eyebrow: 'At Campuslands we change lives',
      title: 'Success *stories*',
      text: 'See how our campers turned their talent into real opportunities in the tech industry.',
      videoPrefix: 'Testimonial by',
      items: [
        { name: 'Santiago Laguado', role: 'Trainer – AI Academy' },
        { name: 'Juan Rubio', role: 'Camper graduate' },
        { name: 'Edinson Aparicio', role: 'Camper, San Gil campus' },
      ],
    },
  },

  about: {
    hero: {
      eyebrow: 'Campuslands',
      title: 'The story of how an idea can *change lives*',
      text: 'We connect your company with pre-vetted developers who quickly integrate into your internal processes.',
      videoLabel: 'Video by Diego Tarazona',
      person: 'Diego Tarazona',
      role: 'C.E.O Campuslands',
    },
    impact: {
      eyebrow: 'Our campuses',
      title: 'Places where we make an *impact*',
      stats: [
        { label: 'Total impact', value: '+6,480', note: '' },
        { label: '2026 impact', value: '1650', note: '4+ family members per young person impacted' },
        { label: 'Year 2026', value: 'Campus Guatemala', note: 'New international campus' },
      ],
      mapTitle: 'Campuses and capacity',
      capacity: 'campers',
      noData: 'Capacity to be confirmed',
      countries: [
        { name: 'Colombia', sedes: [
          { name: 'Bucaramanga', capacity: 670 },
          { name: 'Bogotá', capacity: 280 },
          { name: 'Norte de Santander', capacity: 70 },
          { name: 'Barranquilla', capacity: null },
          { name: 'Cali', capacity: null },
        ] },
        { name: 'Guatemala', sedes: [
          { name: 'Guatemala City', capacity: null, isNew: true },
        ] },
      ],
      newLabel: 'New campus',
      capacityLabel: 'Capacity',
      mapLabel: 'Map of Campuslands campuses in Colombia and Guatemala',
    },
    purpose: {
      mission: { eyebrow: 'Our mission', title: 'Transforming *talent*', quote: 'To empower young people from diverse backgrounds through accessible technology education, developing their skills in programming, English and social competencies to open doors to high-impact professional opportunities.' },
      vision: { eyebrow: 'The vision that guides us', title: 'A new *digital* class', quote: 'To build a global community of digital talent, where young people anywhere have access to the tools they need for a prosperous and meaningful future, contributing to a new digital social class.' },
    },
    knowledge: {
      eyebrow: 'Campuslands',
      title: 'Today campuslands is born, the third generation of *knowledge*',
      todayTitle: 'Fourth industrial revolution – today',
      futureTitle: 'Technologies of the future',
      today: [
        { name: 'AI', text: 'Systems that learn and help make decisions.' },
        { name: 'Programming', text: 'The language for building software and solutions.' },
        { name: 'Robotics', text: 'Machines that perform tasks autonomously.' },
        { name: 'Big Data', text: 'Large volumes of data turned into decisions.' },
        { name: 'Cloud', text: 'Services and data available from anywhere.' },
        { name: 'English', text: 'The common language of the tech industry.' },
        { name: 'Cybersecurity', text: 'Protecting systems, data and people.' },
        { name: 'Metaverse', text: 'Immersive, shared digital spaces.' },
        { name: 'Low Code', text: 'Building apps with little code.' },
        { name: 'Blockchain', text: 'Secure, verifiable digital records.' },
        { name: 'Edge Computing', text: 'Processing data close to where it is created.' },
        { name: 'Virtual Reality', text: 'Three-dimensional digital experiences.' },
        { name: 'Automation', text: 'Processes that run by themselves, error-free.' },
        { name: '5G', text: 'Ultra-fast mobile connections.' },
      ],
      future: [
        { name: 'Autonomous Robots', text: 'Machines that perceive, decide and act on their own.' },
        { name: 'Quantum Computing', text: 'Calculations impossible for today’s computers.' },
        { name: 'Neural Networks', text: 'Models inspired by the human brain.' },
        { name: 'Holograms', text: 'Three-dimensional images projected in space.' },
        { name: 'Web 3.0', text: 'A decentralized internet owned by its users.' },
        { name: 'Fusion Energy', text: 'Clean, almost limitless energy.' },
      ],
    },
    stories: {
      eyebrow: 'Testimonials',
      title: 'Success *stories*',
      text: 'See how our campers turned their talent into real opportunities in the tech industry.',
      cta: 'I want to start',
      secondary: 'Request advice',
      video: 'Camper testimonial',
      featured: 'Programming the Future – From Tibú, Norte de Santander, to Campuslands',
      prev: 'Previous video',
      next: 'Next video',
    },
  },

  credits: {
    eyebrow: 'Legal',
    title: 'Credits and *licenses*',
    intro: 'This site uses third-party typefaces, map data, a satellite image and software. Here are their credits and licenses.',
    license: 'View license',
    sections: [
      {
        title: 'Typefaces',
        text: 'Hanken Grotesk, Newsreader and Poppins are distributed under the SIL Open Font License 1.1 and are hosted on this site.',
        items: [
          { name: 'Hanken Grotesk — © The Hanken Grotesk Project Authors', href: '/licenses/OFL-hankengrotesk.txt' },
          { name: 'Newsreader — © The Newsreader Project Authors', href: '/licenses/OFL-newsreader.txt' },
          { name: 'Poppins — © The Poppins Project Authors', href: '/licenses/OFL-poppins.txt' },
        ],
      },
      {
        title: 'Campus map',
        text: 'Map data © OpenStreetMap contributors, available under the Open Database License (ODbL). When the interactive map is shown, your browser connects to OpenStreetMap servers to download the map images. If that service is unavailable, a picture of the same map is shown instead.',
        items: [
          { name: '© OpenStreetMap contributors — Copyright and license', href: 'https://www.openstreetmap.org/copyright' },
          { name: 'Leaflet — © Volodymyr Agafonkin (BSD-2-Clause)', href: '/licenses/LICENSE-leaflet.txt' },
        ],
      },
      {
        title: 'Satellite image (About us)',
        text: 'The satellite view of Central and South America is a crop of "Blue Marble: Next Generation" (December 2004, with topography and bathymetry) by NASA Earth Observatory. NASA images are in the public domain; the source is credited as NASA requests. The image is hosted on this site.',
        items: [
          { name: 'Image: NASA Earth Observatory (Reto Stöckli) — Blue Marble: Next Generation', href: 'https://visibleearth.nasa.gov/images/73909/december-blue-marble-next-generation-w-topography-and-bathymetry' },
          { name: 'NASA image use guidelines', href: 'https://www.nasa.gov/nasa-brand-center/images-and-media/' },
        ],
      },
      {
        title: 'Technology logos (Emplea)',
        text: 'The Python, HTML5, CSS3, JavaScript, MySQL, PostgreSQL, Node.js, Java (OpenJDK), PHP, .NET and Git logos come from Simple Icons, released under CC0 1.0 (public domain). They are trademarks of their respective owners and are shown only to name the technologies we teach.',
        items: [
          { name: 'Simple Icons — CC0 1.0', href: 'https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md' },
        ],
      },
      {
        title: 'Open-source software',
        text: 'The site is built with the following libraries, distributed under the MIT license.',
        items: [
          { name: 'React and React DOM — © Meta Platforms, Inc. and affiliates', href: '/licenses/LICENSE-react.txt' },
          { name: 'Scheduler — © Meta Platforms, Inc. and affiliates', href: '/licenses/LICENSE-scheduler.txt' },
          { name: 'React Router — © React Training LLC and Remix Software Inc.', href: '/licenses/LICENSE-react-router.txt' },
        ],
      },
      {
        title: 'Trademarks',
        text: 'Partner logos are trademarks of their respective owners and are shown to identify their partnership with Campuslands. WhatsApp, Instagram, TikTok, LinkedIn and Facebook are trademarks of their respective holders; they are named only to link to Campuslands’ official profiles.',
        items: [],
      },
    ],
  },

  // Campuslands Emplea (English translation of Content MD/Servicios/Servicios Emplea.md).
  // PROVISIONAL (our own texts): the hero sample program and its translation, and the
  // technology descriptions in "Specialists".
  emplea: {
    hero: {
      eyebrow: 'Campuslands Emplea',
      title: 'Boost your growth with *the talent your company needs.*',
      text: 'We simplify hiring IT profiles with hands-on training, technical skills and adaptive skills. Ready to make an impact from day one.',
      cta: 'Find your IT talent',
      statValue: '+800',
      statLabel: 'Campus talents working at tech companies',
      file: 'my_first_program.py',
      codeLabel: 'Python',
      plainLabel: 'In plain words',
      replay: 'Play again',
      blocks: [
        {
          code: ['name = "Ana"', 'age = 19'],
          plain: 'Stores two pieces of data: a person’s name, Ana, and her age, 19.',
        },
        {
          code: ['if age >= 17:', '    print("Hi, " + name + ". You can be a camper")'],
          plain: 'If she is 17 or older, it greets her by name and tells her she can become a camper.',
        },
        {
          code: ['topics = ["Python", "AI", "English"]', 'for topic in topics:', '    print("Today I learn", topic)'],
          plain: 'Makes a list of three topics and, one by one, shows on screen what she learns today.',
        },
      ],
    },
    leap: {
      eyebrow: 'Tech Leap',
      title: 'Your path to hiring *IT talent*',
      text: 'Six stages designed to guarantee the perfect match between your needs and our IT talent.',
      prev: 'Previous stage',
      next: 'Next stage',
      steps: [
        { title: 'Discovery', text: 'We understand your needs, technologies and goals to identify the ideal profile.' },
        { title: 'Talent search', text: 'We select and validate candidates who meet the technical and human requirements.' },
        { title: 'Profile presentation', text: 'Receive a selection of talent and schedule interviews with the candidates who best fit your team.' },
        { title: 'Selection', text: 'Choose the professional who best aligns with your culture, tech stack and goals.' },
        { title: 'Onboarding', text: 'We formalize the hiring model and support the talent’s onboarding.' },
        { title: 'Guarantee', text: 'We provide continuous follow-up to ensure a successful integration and offer support throughout the process.' },
      ],
      testimonialsTitle: 'Testimonials from partner companies',
      testimonials: [
        {
          name: 'Cristian Velez',
          role: 'Director @Mantis App',
          quote: 'Working with a Camper was a key decision for our company’s growth. Their preparation, together with their willingness to learn, adapt and contribute meaningfully, made a big difference in our team. We look forward to keep hiring top-caliber talent, fully trusting Campuslands.',
        },
        {
          name: 'Clément Memain',
          role: 'CEO Consulting @Data/AI',
          quote: 'We have loved the IT talent coming from Campuslands, with whom we have developed the Coding Queendom project. Today, 17 women are part of this initiative, and we are committed to increasing this number in the coming years.',
        },
      ],
    },
    stack: {
      eyebrow: 'Specialists',
      title: 'Specialists in the technologies that *drive your business*',
      text: 'We train talent in the most in-demand tools to ensure immediate integration into your projects.',
      areas: ['Artificial intelligence', 'Programming', 'Leadership and teamwork'],
      hint: 'Pick a technology',
      items: [
        { key: 'python', name: 'Python', area: 'Programming and AI', text: 'The most used language for data, automation and artificial intelligence. Campers write scripts, analyze information and build services with it.' },
        { key: 'web', name: 'HTML5 / CSS3 / JavaScript', area: 'Web development', text: 'The foundation of every web page and app: structure, design and behavior. They build clear interfaces that work on any screen.' },
        { key: 'mysql', name: 'MySQL', area: 'Databases', text: 'They design tables, query and relate information in one of the databases most used by companies.' },
        { key: 'postgresql', name: 'PostgreSQL', area: 'Databases', text: 'A robust database for growing projects: advanced queries, data integrity and good performance.' },
        { key: 'node', name: 'Node.js', area: 'Backend', text: 'Server-side JavaScript to build fast APIs and services that connect applications with their data.' },
        { key: 'java', name: 'Java', area: 'Enterprise backend', text: 'A stable language widely used in large companies. Object-oriented programming and long-lived applications.' },
        { key: 'php', name: 'PHP', area: 'Web development', text: 'It powers a large part of the web. They build custom sites and systems connected to databases.' },
        { key: 'dotnet', name: 'C# (.NET)', area: 'Enterprise backend', text: 'Microsoft’s ecosystem for business applications, APIs and cloud services.' },
        { key: 'git', name: 'Git / Version control', area: 'Teamwork', text: 'They keep the history of every change and collaborate on the same code without stepping on each other, like professional teams do.' },
      ],
    },
    why: {
      eyebrow: 'Hiring models',
      title: 'Why leading companies *choose us*',
      prev: 'Previous',
      next: 'Next',
      goTo: 'Go to',
      pending: 'pending',
      slides: [
        { title: 'SENA quota', tag: 'Practice with us', text: 'Talent in training who works at your company. We train your future collaborator for 10 months in IT skills. In the following 6 months they join your company in their productive stage, already trained and ready to add value.' },
        { title: 'Talent Pool', tag: 'Hire now', text: 'We provide junior and semi-senior candidates who are already trained and experienced. We make the match, you hire directly.' },
        { title: 'Staffing', tag: 'Grow your team', text: 'We assign developers who work as part of your team, but under our administration. You lead, we manage.' },
        { title: 'Zero selection risk', tag: 'Guarantee', text: 'We follow up constantly: if the talent does not meet your expectations, we replace them at no additional cost.' },
      ],
    },
    companies: {
      eyebrow: 'Talent recruiters',
      title: 'Companies that hire *Campuslands talent*',
      text: 'These companies already hire and sponsor Campuslands talent.',
    },
    contact: {
      eyebrow: 'Sales team',
      title: 'Ready to scale *your team*?',
      team: 'Campuslands Business Relations',
      phone: '+57 318 945 6901',
      email: 'karolain.huerfano@campuslands.com',
      location: 'Floridablanca, Colombia',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      locationLabel: 'Location',
      cta: 'Contact us now',
      follow: 'Follow us',
    },
  },

  legal: {
    index: 'Contents',
    onlySpanish: 'This document is only available in Spanish.',
  },

  comingSoon: {
    title: 'Under construction',
    text: 'We are redesigning this page. It will be available very soon.',
    back: 'Back to home',
  },

  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    back: 'Back to home',
  },

  mascot: {
    label: 'Campuslands mascot: tap it!',
  },

  placeholder: {
    image: 'Image',
    video: 'Video',
    logo: 'Logo',
  },

  home: {
    hero: {
      title: 'We are revolutionizing *tech* talent',
      text: 'We are an IT talent factory training the young people who will build tomorrow’s technology. The future won’t wait — at Campuslands, it’s being built.',
      tag: '#GoForIt',
      ctaJoin: 'Join Campuslands',
      ctaTalent: 'Meet our IT talent',
    },

    metrics: {
      title: 'Impact metrics',
      statement: 'The only Colombian tech hub with an international presence',
      stats: [
        { value: '+1,500', label: 'Graduated campers' },
        { value: '200+', label: 'Tech companies' },
        { value: '90.4%', label: 'Job match' },
      ],
    },

    pillars: {
      title: 'What do our *campers* learn?',
      items: [
        {
          title: 'Software development',
          text: 'They build real applications, from logic to databases, using the practices the industry relies on.',
        },
        {
          title: 'Artificial intelligence',
          text: 'They use AI to code, automate tasks and solve problems faster.',
        },
        {
          title: 'English',
          text: 'They strengthen the technical and conversational English that tech companies worldwide ask for.',
        },
        {
          title: 'Adaptive skills',
          text: 'They develop communication, teamwork and leadership to grow in any environment.',
        },
      ],
    },

    services: {
      eyebrow: 'End-to-end solutions',
      title: 'Our *services*',
      items: [
        {
          key: 'aiAcademy',
          name: 'Campuslands AI Academy',
          text: 'Intensive training in generative AI, process automation and AI tools to empower teams and companies.',
          cta: 'Learn AI',
        },
        {
          key: 'staffing',
          name: 'IT Staffing',
          text: 'Strategic recruitment and selection of qualified technical talent in software development, cloud architecture and data, ready to join your company.',
          cta: 'Hire talent',
        },
        {
          key: 'emplea',
          name: 'Campuslands Emplea',
          text: 'A smart employability platform that matches qualified developers directly with the best tech companies.',
          cta: 'Discover Emplea',
        },
        {
          key: 'fullService',
          name: 'FullService Software',
          text: 'Custom digital projects, software factories and turnkey solutions backed by specialized talent.',
          cta: 'Start a project',
        },
        {
          key: 'international',
          name: 'Campuslands International',
          text: 'Connecting Latin American tech talent with global markets and international projects.',
          cta: 'Explore Global',
        },
      ],
    },

    partners: {
      eyebrow: 'Partner ecosystem',
      title: 'Our *strategic* partners',
      text: 'These companies already hire and sponsor Campuslands talent.',
      ctaHire: 'Hire talent',
      ctaSponsor: 'Sponsor talent',
      prev: 'Previous partners',
      next: 'More partners',
    },

    orbit: {
      eyebrow: 'Chatbot agent | Information Campbase',
      title: 'Ask *Órbit*.',
      text: 'Got a question? Órbit is ready to answer anything you want to know about our programs.',
      cta: 'Start chat',
      windowTitle: 'Órbit · WhatsApp',
      windowUrl: 'wa.me/573009711559',
      imageLabel: 'Screenshot of the Órbit WhatsApp chat',
    },

    locations: {
      eyebrow: 'Base location | Coordinates',
      title: 'Visit our *campuses*',
      text: 'Visit our campuses and see how Campuslands is transforming tech talent across the continent.',
      cta: 'Schedule a visit',
      selectLabel: 'Find a campus',
      addressPending: 'Address to be confirmed',
    },

    social: {
      eyebrow: 'Follow us',
      title: 'More about our *mission* on social media',
      videoLabel: 'Juliana’s video',
    },
  },
}

export default en
