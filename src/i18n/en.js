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
    final: {
      title: 'Your career of the *future* starts today',
      text: 'Message us and we will help you choose the right path for you.',
      cta: 'I want to start',
      secondary: 'See paths',
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

  credits: {
    eyebrow: 'Legal',
    title: 'Credits and *licenses*',
    intro: 'This site uses third-party typefaces, map data and software. Here are their credits and licenses.',
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
      hint: 'Hover over each pillar to see what they train in',
      items: [
        {
          title: 'Software development',
          text: 'They build real applications, from logic to databases, using the practices the industry relies on.',
          bars: [{ label: 'Frontend', value: 40 }, { label: 'Backend', value: 35 }, { label: 'Databases', value: 25 }],
        },
        {
          title: 'Artificial intelligence',
          text: 'They use AI to code, automate tasks and solve problems faster.',
          bars: [{ label: 'Generative AI', value: 45 }, { label: 'Prompting', value: 30 }, { label: 'Automation', value: 25 }],
        },
        {
          title: 'English',
          text: 'They strengthen the technical and conversational English that tech companies worldwide ask for.',
          bars: [{ label: 'Conversation', value: 45 }, { label: 'Technical English', value: 35 }, { label: 'Writing', value: 20 }],
        },
        {
          title: 'Adaptive skills',
          text: 'They develop communication, teamwork and leadership to grow in any environment.',
          bars: [{ label: 'Teamwork', value: 40 }, { label: 'Communication', value: 35 }, { label: 'Leadership', value: 25 }],
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
