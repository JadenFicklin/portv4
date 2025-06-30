// TypeScript type for a case study
export type TechnologyItem = {
  name: string
  icon:
    | 'react'
    | 'tailwind'
    | 'firebase'
    | 'netlify'
    | 'analytics'
    | 'eslint'
    | 'router'
    | 'typescript'
    | 'other'
}

export type TechnologyCategory = {
  name: string
  items: TechnologyItem[]
}

export type StatItem = {
  value: string
  icon: 'chart' | 'users' | 'facebook' | 'speed' | 'star' | 'code' | 'check'
}

export type CaseStudy = {
  slug: string
  name: string
  overview: string
  myRole: string
  problemStatement: string
  keyFeatures: string[]
  technologies: TechnologyCategory[]
  challenges: string[]
  stats: StatItem[]
  results: string[]
  screenshots?: {
    src: string
    description: string
  }[]
  whatILearned: string[]
  liveDemo?: string
  callToAction?: {
    title?: string
    description?: string
  }
  navigation?: {
    previous?: {
      slug: string
      name: string
    }
    next?: {
      slug: string
      name: string
    }
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'pina-soulmate',
    name: 'Pina Soulmate',
    overview:
      'Pina Soulmate is a modern, mobile-first dating web application designed to connect Filipinos worldwide. The platform emphasizes safety, real-time interaction, and a delightful user experience, blending advanced technology with culturally relevant features.',
    myRole:
      'Full Stack Developer (Solo)\nLed the end-to-end development: UI/UX, backend, deployment, and optimization',
    problemStatement:
      'Traditional dating platforms often lack cultural nuance, real-time features, and robust moderation. The goal was to create a safe, engaging, and visually appealing space for Filipinos to meet, chat, and build meaningful connections.',
    keyFeatures: [
      'Real-Time Chat & Messaging: Built a real-time chat system using Firebase Realtime Database for instant messaging. Enhanced chat UI with profile images, emoji picker, and subtle animations for a modern feel.',
      'User Authentication & Security: Integrated Firebase Authentication with Facebook and email sign-in. Implemented a robust ban and appeal system, including admin controls and user reporting.',
      'Profile Management: Users can create, edit, and personalize profiles with photos and detailed information. Profile images are optimized and lazy-loaded for performance.',
      'Admin Dashboard: Special admin mode allows for user moderation, impersonation (for support), and ban management. Admin actions are tracked for accountability.',
      'Member Stats & Analytics: Live member stats displayed in the navbar, including total members and new signups today. Integrated Google Analytics 4 for user behavior tracking.',
      'Performance & Optimization: All images are processed and optimized using Sharp and custom scripts. Utilized React Lazy Load and code splitting for fast load times. Deployed on Netlify for global CDN and continuous deployment.',
      'Modern UI/UX: Built with React and TailwindCSS for a responsive, mobile-first design. Used SweetAlert2 for beautiful modals and notifications. Drag-and-drop features for photo management using @dnd-kit.',
    ],
    technologies: [
      {
        name: 'Frontend Core',
        items: [
          { name: 'React 18', icon: 'react' },
          { name: 'TailwindCSS', icon: 'tailwind' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'React Router v6', icon: 'router' },
        ],
      },
      {
        name: 'Backend & Infrastructure',
        items: [
          { name: 'Firebase', icon: 'firebase' },
          { name: 'Netlify', icon: 'netlify' },
          { name: 'Google Analytics 4', icon: 'analytics' },
        ],
      },
      {
        name: 'Development Tools',
        items: [
          { name: 'ESLint', icon: 'eslint' },
          { name: 'Custom Build Scripts', icon: 'other' },
        ],
      },
    ],
    challenges: [
      'Image Optimization: Netlify build failures due to large image sizes and incompatible formats -> Implemented automated pipeline using Sharp to optimize images from Unsplash during build process',
      'User Moderation: Need for real-time user management without disrupting active users -> Developed a flexible admin mode enabling safe user management while maintaining service continuity',
      'Performance: Slow initial load times impacting user experience -> Achieved significant speed improvements through aggressive image and code optimization techniques',
    ],
    stats: [
      { value: '70+ active users', icon: 'chart' },
      { value: '12 daily active users', icon: 'users' },
      { value: '119.9k+ facebook members', icon: 'facebook' },
    ],
    results: [
      'Increased user engagement and inquiries (tracked via Google Analytics).',
      'Fast load times and high Lighthouse scores.',
      'Positive feedback from clients and industry partners.',
      'Expanded service area and improved brand trust.',
    ],
    screenshots: [
      {
        src: '/images/casestudies/pinasoulmate/pinalanding.webp',
        description:
          'Landing Page: Modern, welcoming interface that introduces users to the platform and its core features.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinabrowse.webp',
        description:
          'Browse Page: Discover potential matches with advanced filtering and sorting options.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaprofileoverview.webp',
        description:
          'Profile Overview: Detailed user profiles with photos and personal information.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaglobalchat.webp',
        description:
          'Global Chat: Real-time community chat room for all users to interact.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaindividualchat.webp',
        description:
          'Individual Chat: Private messaging between users with emoji support and media sharing.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaeditprofile.webp',
        description:
          'Edit Profile: User-friendly interface for updating profile information.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinauploadphotos.webp',
        description:
          'Photo Management: Drag-and-drop interface for managing profile photos.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinapreferences.webp',
        description:
          'Preferences: Customize match preferences and app settings.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinafblogin.webp',
        description:
          'Facebook Login: Seamless authentication with Facebook integration.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinareports.webp',
        description:
          'Admin Reports: Comprehensive reporting system for platform moderation.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaanalytics.webp',
        description:
          'Analytics Dashboard: Real-time user activity and engagement metrics.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinafacebookgroup.webp',
        description:
          'Facebook Community: Thriving Facebook group with 119,900+ members.',
      },
    ],
    whatILearned: [
      'Deepened expertise in real-time web apps and Firebase ecosystem',
      'Advanced image optimization and build automation',
      'Balancing security, performance, and user experience in a production environment',
      'Community management and moderation at scale',
      'Analytics integration and user behavior tracking',
    ],
    liveDemo: 'https://pinasoulmate.com',
    callToAction: {
      title: 'Ready to Experience Pina Soulmate?',
      description:
        'Join thousands of Filipino singles worldwide and start your journey to meaningful connections today.',
    },
    navigation: {
      previous: {
        slug: 'oak-and-stone',
        name: 'Oak & Stone',
      },
      next: {
        slug: 'svg-library',
        name: 'SVG Library',
      },
    },
  },

  {
    slug: 'restoration-laser-cleaning',
    name: 'RLC Laser Cleaning & Rust Removal',
    overview:
      'A modern web platform showcasing eco-friendly laser cleaning services. Built with React and TailwindCSS, this site effectively presents the benefits of laser ablation technology while maintaining a clean, professional aesthetic.',
    myRole:
      'Full Stack Developer (Solo)\nLed the design, development, and deployment of the site, including UI/UX, data modeling, and integration of analytics and contact workflows.',
    problemStatement:
      'Traditional cleaning methods (sandblasting, chemicals) are damaging, inefficient, and environmentally harmful. The goal was to create a digital presence that educates and converts users to a safer, faster, and greener alternative—laser cleaning.',
    keyFeatures: [
      'Service showcase: Rust removal, paint stripping, heritage restoration, graffiti removal, cabinet refinishing, and more.',
      'Equipment catalog: Detailed specs and features for each laser unit.',
      'Team and company info: Humanizes the brand and builds trust.',
      'Blog and FAQ: Educates users on laser cleaning technology and its advantages.',
      'Service area map: Interactive embed for coverage.',
      'Modern, responsive UI with fast navigation and lazy-loaded media.',
      'Analytics integration for tracking engagement.',
      'Contact and inquiry workflow.',
    ],
    technologies: [
      {
        name: 'Frontend Core',
        items: [
          { name: 'React 19', icon: 'react' },
          { name: 'TailwindCSS', icon: 'tailwind' },
          { name: 'Jotai', icon: 'other' },
          { name: 'React Router v6', icon: 'router' },
        ],
      },
      {
        name: 'Backend & Infrastructure',
        items: [
          { name: 'Firebase', icon: 'firebase' },
          { name: 'Google Analytics 4', icon: 'analytics' },
        ],
      },
      {
        name: 'Development Tools',
        items: [
          { name: 'SweetAlert2', icon: 'other' },
          { name: 'Framer Motion', icon: 'other' },
          { name: 'clsx', icon: 'other' },
          { name: 'tailwind-merge', icon: 'other' },
        ],
      },
    ],
    challenges: [
      'Educating users on a new technology and its benefits.',
      'Optimizing large numbers of high-res images for fast load times.',
      'Ensuring accessibility and SEO for a niche technical service.',
      'Integrating analytics and tracking without impacting performance.',
    ],
    stats: [
      { value: '20+ pages', icon: 'code' },
      { value: '261 page views per week', icon: 'chart' },
      { value: 'clean UI', icon: 'star' },
    ],
    results: [
      'Increased user engagement and inquiries (tracked via Google Analytics).',
      'Fast load times and high Lighthouse scores.',
      'Positive feedback from clients and industry partners.',
      'Expanded service area and improved brand trust.',
    ],
    screenshots: [
      {
        src: '/images/casestudies/rlc/rlchero1.webp',
        description: 'Landing Page: Rust removal in action.',
      },
      {
        src: '/images/casestudies/rlc/rlcservices2.webp',
        description: 'Paint removal demo.',
      },
      {
        src: '/images/casestudies/rlc/rlcmap3.webp',
        description: 'Heritage restoration.',
      },
      {
        src: '/images/casestudies/rlc/rlcourteam6.webp',
        description: 'The team behind the service.',
      },
      {
        src: '/images/casestudies/rlc/rclequipment5.webp',
        description: 'Equipment highlight.',
      },
      {
        src: '/images/casestudies/rlc/rlcblog8.webp',
        description: 'Laser in action.',
      },
      {
        src: '/images/casestudies/rlc/rlcvideos9.webp',
        description: 'Laser in action.',
      },
      {
        src: '/images/casestudies/rlc/rlcservicearea10.webp',
        description: 'Service area coverage.',
      },
      {
        src: '/images/casestudies/rlc/rlccontact11.webp',
        description: 'Contact and inquiry form.',
      },
    ],
    whatILearned: [
      'Deepened expertise in React and modern frontend tooling.',
      'Advanced image optimization and lazy loading for performance.',
      'Balancing technical education with marketing in content.',
      'Integrating analytics for actionable business insights.',
      'Building trust and clarity for a technical, service-based business.',
    ],
    liveDemo: 'https://renewlasercleaning.com',
    callToAction: {
      title: 'Ready to Transform Your Restoration Projects?',
      description:
        'Experience the power of laser cleaning technology for your heritage restoration, rust removal, and surface cleaning needs.',
    },
    navigation: {
      previous: {
        slug: 'svg-library',
        name: 'SVG Library',
      },
      next: {
        slug: 'pina-soulmate',
        name: 'Pina Soulmate',
      },
    },
  },
]
