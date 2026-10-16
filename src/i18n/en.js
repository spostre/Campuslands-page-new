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
      emplea: 'Emplea',
      fullService: 'Full Service',
      international: 'Campuslands Global',
      aiAcademy: 'Campuslands AI Academy',
      staffing: 'Tech staffing',
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
      watch: 'Watch the testimonial of',
      close: 'Close video',
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
        title: 'Earth at night (Campuslands Global)',
        text: 'The Campuslands Global hero background is our own render made from the public-domain "Black Marble 2016" map (Earth at night) by NASA Earth Observatory: projected onto a sphere (Europe and Africa) with an added atmosphere rim. Hosted on this site.',
        items: [
          { name: 'Map: NASA Earth Observatory — Black Marble 2016', href: 'https://earthobservatory.nasa.gov/features/NightLights' },
        ],
      },
      {
        title: 'Moon image (FullService)',
        text: 'The Moon behind the FullService contact section is an image from the NASA Goddard archive (Lunar Reconnaissance Orbiter), in the public domain. The source is credited as NASA requests. The image is hosted on this site.',
        items: [
          { name: 'Image: NASA Goddard Space Flight Center — GSFC_20171208_Archive_e001860', href: 'https://images.nasa.gov/details/GSFC_20171208_Archive_e001860' },
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

  // Campuslands Emplea (English translation of Content MD/Whole page/Servicios/Servicios Emplea.md).
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

  // FullService (English translation of Content MD/Whole page/Servicios/Servicios Full service.md).
  fullService: {
    hero: {
      eyebrow: 'FullService',
      title: 'High-performance *engineering*',
      text: 'We translate business visions into scalable software architectures.',
      cta: 'Quote my project',
      tags: ['Tech staffing', 'Custom AI software', 'Custom software'],
    },
    phases: {
      eyebrow: 'How we work',
      title: 'Process *phases*',
      items: [
        { code: 'Phase_01', title: 'Discovery', text: 'Project discovery, a conversation about the business and getting to know the systems.' },
        { code: 'Phase_02', title: 'Recognition', text: 'Assignment of requirements and goals.' },
        { code: 'Phase_03', title: 'Development', text: 'Iterative project development.' },
        { code: 'Phase_04', title: 'Testing', text: 'Quality testing.' },
      ],
    },
    services: {
      eyebrow: 'Our services',
      title: 'See what we *offer* you',
      cta: 'Contact us now',
      groups: [
        {
          label: 'Artificial intelligence',
          items: [
            { title: 'Custom AI software', text: 'We automate processes, analyze data and build intelligent solutions that create a real competitive advantage.' },
          ],
        },
        {
          label: 'Software development',
          items: [
            { title: 'Custom software', text: 'Personalized systems aligned with your business processes, from web applications to robust, scalable enterprise systems.' },
            { title: 'Software consulting', text: 'We design and modernize software architectures to make your systems more secure and scalable.' },
            { title: 'Tech staffing', text: 'We add high-level developers and technical profiles to your team to fill critical roles and speed up development.' },
            { title: 'Tech BPO', text: 'We take care of the complete technical operation: teams, processes and infrastructure so you can scale your development.' },
          ],
        },
      ],
    },
    stack: {
      eyebrow: 'FullService Core',
      title: 'Tech_Stack',
      text: 'We use modern technologies to keep up with the tech market.',
      items: ['Next.js', 'AWS Cloud', 'Rust'],
    },
    clients: {
      eyebrow: 'Clients',
      title: 'Companies of every size *trust* our work',
      text: 'We build projects with high-performance engineering.',
    },
    contact: {
      title: 'Got a *challenge*?',
      text: 'We are ready to start.',
      cta: 'Quote my project',
      follow: 'Follow us',
      company: 'Company_name',
      email: 'Email',
      needs: 'Describe your needs',
      words: 'words',
      submit: 'Send information',
      consentBefore: 'By sending, you accept the ',
      consentLink: 'data processing policy',
      required: 'Please fill in this field.',
      invalidEmail: 'Please enter a valid email.',
      tooManyWords: '250 words maximum.',
      sent: 'Your email app opened with the message ready to send.',
      mailSubject: 'FullService quote',
    },
  },

  // Campuslands Global. Source: Content MD/Whole page/Servicios/Servicios Campuslands Global.md (translated)
  global: {
    hero: {
      word: 'Global',
      eyebrow: 'Campuslands International · #BuildingTeams',
      title: 'Hire pre-vetted bilingual developers who blend into your *team.*',
      text: 'We present candidates assessed on technical, communication and remote-adaptation skills to speed up your hiring without sacrificing quality.',
      cta: 'Request pre-vetted candidates',
    },
    process: {
      title: 'How does the hiring process work?',
      text: 'Transparency and speed at every stage to bring the best talent into your team.',
      steps: [
        { title: 'We define the profile', text: 'We analyze your technical requirements, culture and project goals to find the ideal profile.' },
        { title: 'You get a shortlist', text: 'We present a list of validated, technically pre-vetted candidates.' },
        { title: 'Interviews and selection', text: 'You run the final interviews, choose the right developer and coordinate a frictionless onboarding.' },
      ],
    },
    orbit: {
      eyebrow: 'Agent console | Global reach',
      title: 'Ask *Órbit* on WhatsApp',
      text: 'Chat with our assistant about available profiles, delivery times, development stacks and our selection process.',
      cta: 'Message us on WhatsApp',
    },
    model: {
      eyebrow: 'Service model',
      title: 'Profiles by seniority and *operational need*',
      text: 'Find the right level of experience to join your engineering team remotely.',
      label: 'Remote hiring',
      name: 'Global Staffing',
      badge: 'World class',
      features: ['Bilingual developers', 'Thorough technical assessment', 'Onboarding and support', 'Adaptation guarantee'],
      levels: [
        { name: 'Junior', title: 'Solid technical foundation', text: 'Campuslands experience.' },
        { name: 'Semi-senior', title: 'Experienced autonomous developer', text: 'Previous work experience.' },
        { name: 'Senior', title: 'Leadership and experience', text: 'Extensive work experience.' },
      ],
      cta: 'Request talent',
    },
    companies: {
      eyebrow: 'Talent recruiters',
      title: 'Companies hiring *Campuslands* talent',
      text: 'These companies already hire and sponsor Campuslands talent.',
    },
  },

  // Campuslands AI Academy. Source: Content MD/Whole page/Servicios/Servicios Campuslands AI Academy.md (translated)
  // [PROVISIONAL] Tool descriptions (tools.items[].text) were written by us.
  aiAcademy: {
    hero: {
      eyebrow: 'Campuslands AI Academy',
      title: 'Turn AI into your company\'s *Operating System*',
      text: 'If you made it here, you know AI is key for your business in 2026... but you are still not sure how to bring it into daily operations.',
      punch: 'You don\'t lack vision. You lack a clear implementation system.',
      ctaPrograms: 'See programs',
      ctaContact: 'Contact us',
    },
    // Rótulos fijos del pase de la próxima masterclass. Los DATOS que cambian (tema, fecha,
    // horario, instructor) están en src/data/masterclass.js.
    masterclass: {
      status: 'Next Masterclass',
      dateLabel: 'Date',
      timeLabel: 'Time',
      instructorLabel: 'Instructor',
      cta: 'I want to attend',
      // [PROVISIONAL] our own copy to go with the pass
      kicker: 'Live class',
      lead: 'A hands-on session with a specialist to start applying AI in your work from day one. Save your seat.',
    },
    pain: {
      eyebrow: 'Diagnosis',
      title: 'We understand the frustration of watching the industry move *while you think it over*',
      items: [
        'Your team experiments with AI, but without strategic direction',
        'Your competitors move faster because they execute better',
        'You still run on manual tasks that eat up critical time',
      ],
      close: 'Where speed defines the market, improvising is expensive. Without a system, AI becomes noise.',
      cta: 'I want to implement AI',
    },
    missions: {
      eyebrow: 'Space training plans',
      title: 'Our *missions*',
      text: 'Choose the plan that best powers your mission toward Artificial Intelligence.',
      includes: 'Includes',
      items: [
        { code: 'Mission 01', name: 'Ignition', duration: '4 hours', cta: 'Enroll now', features: ['The real impact of AI on your industry', 'Generative AI as a daily assistant', 'Top 10 AI tools', 'Building basic agents live'] },
        { code: 'Mission 02', name: 'Booster', duration: '8 hours', cta: 'Enroll now', features: ['All of Ignition with a professional focus', 'Advanced prompting techniques', 'Master 2 AI tools of your choice', 'Custom agents for your role'] },
        { code: 'Mission 03', name: 'Liftoff', duration: '12 hours', cta: 'Enroll now', features: ['All of Booster to scale your operation', 'Process automation with n8n', 'Designing automated business flows', 'Mastery of an additional tool of your choice'] },
        { code: 'Mission 04', name: 'Odyssey', duration: 'Custom', cta: 'Enroll now', features: ['100% custom program for companies', 'Choice of tools and duration', 'Real use cases by industry', 'Support and tactical sessions'] },
        { code: 'Mission 05', name: 'Nébula', duration: 'Pre-recorded', cta: 'Get access', features: ['Content by learning level', 'Assessments to track progress', '24/7 access to materials and resources', 'Active support community'] },
      ],
    },
    method: {
      eyebrow: 'AI Academy Method',
      title: 'An *executive* implementation system',
      text: 'To maximize resources, speed up execution and scale your operation.',
      pillars: ['Value', 'Velocity', 'Vision'],
      gainsTitle: 'With the AI Academy method you get',
      gains: [
        'Reusable systems that scale with your company',
        'Automated processes that fit your operation',
        'A clear AI implementation architecture',
        'In-house capacity to lead with AI (without full dependency)',
      ],
      ctaStart: 'I want to start',
      ctaMasterclass: 'Go to AI masterclass',
    },
    modules: {
      eyebrow: 'Training modules',
      title: 'Specialists in the technologies that *move your business*',
      text: 'We train talent in the most in-demand tools to ensure immediate integration into your projects.',
      items: [
        { title: 'Hands-on training', text: 'Learn with real cases. No empty theory, only execution applied to today\'s market.' },
        { title: 'Ready deliverables', text: 'Leave every session with tools and digital assets ready to use in your work.' },
        { title: 'Ongoing support', text: 'Our community and mentors are available 24/7 to solve your technical questions.' },
        { title: 'Flexible paths', text: 'Tailor your learning to your level, from beginner to Nébula expert.' },
      ],
      ctaPlan: 'Get a plan',
      ctaDiagnosis: 'Get a diagnosis',
    },
    tools: {
      title: 'AI technologies that *power your work*',
      items: [
        { name: 'ChatGPT', text: 'OpenAI\'s conversational assistant for writing, analyzing information and solving tasks in natural language.' },
        { name: 'Make', text: 'Visual platform to automate workflows between apps without coding.' },
        { name: 'Gemini', text: 'Google\'s AI built into Workspace to write, summarize and analyze documents, email and data.' },
        { name: 'Claude', text: 'Anthropic\'s AI assistant for analyzing long documents, writing and supporting programming tasks.' },
        { name: 'Microsoft Copilot', text: 'AI inside Microsoft 365 to work faster in Word, Excel, PowerPoint, Outlook and Teams.' },
        { name: 'GitHub Copilot', text: 'Coding assistant that suggests and explains code right in the editor.' },
        { name: 'Midjourney', text: 'High-quality image generation from text descriptions.' },
        { name: 'Notion AI', text: 'AI inside Notion to summarize, write and organize team documentation.' },
        { name: 'Zapier', text: 'Connects thousands of apps to automate repetitive tasks with triggers and actions.' },
        { name: 'Perplexity', text: 'AI search engine that answers questions citing its sources.' },
        { name: 'NotebookLM', text: 'Google\'s research notebook that answers and summarizes from your own documents.' },
        { name: 'Read AI', text: 'Automatically transcribes, summarizes and extracts action items from your meetings.' },
        { name: 'ElevenLabs', text: 'Realistic synthetic voices, narration and dubbing with AI.' },
        { name: 'HeyGen', text: 'AI-generated videos with avatars, translation and dubbing.' },
      ],
    },
    stories: {
      eyebrow: 'Teams that evolved',
      title: 'Real stories of teams that already *lifted off*',
      items: [
        { name: 'Carlos Herrera', role: 'Talent Director at Grupo Andino', quote: 'The 8-hour training was ideal for our team. The industry cases made the difference and answered specific questions.', when: '2 weeks ago' },
        { name: 'Miguel Ángel López', role: 'University Professor', quote: 'Excellent support. They adapted the content to higher education and left us material ready to use in class.', when: '2 weeks ago' },
        { name: 'Juliana Restrepo', role: 'Founder at CrecePyme', quote: 'More than a course, it was a digital strategy experience. The follow-up automations save us hours every week.', when: '3 weeks ago' },
        { name: 'Laura Gómez', role: 'Tech Lead at InnovApp', quote: 'AI Academy gave us concrete tools to speed up our processes. The hands-on approach let us apply what we learned from day one.', when: '2 weeks ago' },
      ],
    },
    final: {
      title: 'Implement AI with *expert guidance*',
      text: 'Diagnosis, design and implementation of AI systems adapted to your context: processes, teams and goals.',
      cta: 'Implement AI now',
    },
  },

  // Tech staffing. Source: Content MD/Link/Links.md (translated)
  staffing: {
    hero: {
      eyebrow: 'Tech staffing',
      title: 'Power your growth with *high-performance* teams.',
      text: 'We connect Campuslands innovation with your company\'s technical challenges. High-performance teams ready to integrate and scale your technology projects.',
      cta: 'Our staffing options',
      preview: 'Three ways to add talent',
    },
    options: {
      eyebrow: 'Staffing options',
      title: 'Choose how to *grow* your team',
      items: [
        {
          key: 'global',
          name: 'Global Staffing',
          badge: 'World class',
          category: 'Corporate level',
          text: 'Speed up software teams with selected tech talent, ready to quickly join projects with global reach.',
          features: ['Centralized management', 'Global standards', 'Elite remote teams', 'High-performance tracking'],
          levels: [
            { name: 'Junior', title: 'Solid technical foundation', text: 'Campuslands experience.' },
            { name: 'Semi-senior', title: 'Experienced autonomous developer', text: 'Previous work experience.' },
            { name: 'Senior', title: 'Leadership and experience', text: 'Extensive work experience.' },
          ],
          cta: 'Request talent',
        },
        {
          key: 'national',
          name: 'National Staffing',
          badge: 'LATAM core',
          category: 'Corporate level',
          text: 'Agile solutions designed specifically for local mid-sized companies looking to strengthen their technical departments.',
          features: ['Flexible hiring', 'Replacement guarantee', 'Curated talent', 'Levels of your choice'],
          levels: [
            { name: 'Junior basic', text: 'Campuslands experience.' },
            { name: 'Junior plus', text: 'Previous work experience.' },
            { name: 'Dev mid', text: 'Extensive work experience.' },
          ],
          cta: 'Request talent',
        },
        {
          key: 'fullService',
          name: 'Full Service Staffing',
          badge: 'BPO projects',
          category: 'Strategic outsourcing',
          text: 'Hand over full technical execution to work cells managed under our academy\'s standards of excellence.',
          features: ['Dedicated cells', 'End-to-end execution', 'Campuslands monitoring', 'Guaranteed agility'],
          levels: [
            { name: 'Dev junior', text: 'Structured support.' },
            { name: 'Dev mid level', text: 'Autonomous development.' },
            { name: 'Dev senior', text: 'Architecture and leadership.' },
          ],
          cta: 'Request service',
        },
      ],
    },
  },

  // Billing. Source: Content MD/Whole page/Servicios/Servicios Facturación.md (translated)
  // [PROVISIONAL] unavailable* and found* are our own copy (no billing API connected yet).
  billing: {
    eyebrow: 'Billing',
    title: 'Manage your payments *quickly and easily*',
    text: 'Enter your invoice number to find all the information.',
    label: 'ID or document number',
    placeholder: 'E.g. 123456789',
    submit: 'Search',
    searching: 'Searching…',
    required: 'Enter your document number.',
    invalid: 'Use numbers only (5 to 15 digits).',
    emptyTitle: 'No invoices found',
    emptyText: 'We could not find invoices linked to the number you entered.',
    emptyHint: 'Check that the number is correct, or try again in a few minutes if the invoice was generated recently.',
    unavailableTitle: 'Online lookup unavailable',
    unavailableText: 'We cannot look up your invoices from here yet. Message us and we will help you with your payment.',
    foundTitle: 'Invoices found',
    help: 'Need help?',
    contact: 'Contact us',
    support: 'Contact support',
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
