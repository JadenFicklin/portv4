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
        name: 'Oak and Stone',
      },
      next: {
        slug: 'svg-library',
        name: 'SVG Library',
      },
    },
  },

  {
    slug: 'restoration-laser-cleaning',
    name: 'Restoration Laser Cleaning & Rust Removal',
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
        slug: 'oak-and-stone',
        name: 'Oak & Stone',
      },
    },
  },
  {
    slug: 'oak-and-stone',
    name: 'Oak & Stone Construction',
    overview:
      'A modern, responsive web platform for Oak & Stone Construction, a premier home remodeling company with 35+ years of experience. The site showcases their expertise in kitchen and bathroom remodeling, custom cabinetry, and home renovations while providing a seamless user experience for potential clients.',
    myRole:
      'Full Stack Developer (Solo)\nLed the development of the entire platform, including UI/UX design, component architecture, and integration of project management tools.',
    problemStatement:
      'Oak & Stone needed a modern digital presence that effectively showcases their craftsmanship, streamlines client communication, and manages project workflows. The challenge was to create a platform that balances visual appeal with functionality while maintaining high performance with a large image gallery.',
    keyFeatures: [
      'Dynamic Portfolio Gallery: Built a responsive image gallery system with categorized sections (Kitchen, Bathroom, Custom Woodwork) featuring lazy loading and smooth animations.',
      'Project Management Integration: Integrated JobTread software for real-time project updates, budget tracking, and document management.',
      'Lead Generation System: Implemented a comprehensive contact form with Discord webhook integration for instant lead notifications.',
      "Team & Process Showcase: Created engaging sections to highlight the company's 35+ year legacy, team members, and detailed project process.",
      'SEO Optimization: Implemented React Helmet for dynamic meta tags and descriptions, optimizing for local search visibility.',
      'Responsive Design: Mobile-first approach with TailwindCSS, ensuring a seamless experience across all devices.',
      'Performance Optimization: Implemented image optimization and lazy loading for a large gallery of high-quality project photos.',
    ],
    technologies: [
      {
        name: 'Frontend Core',
        items: [
          { name: 'React 18', icon: 'react' },
          { name: 'TailwindCSS', icon: 'tailwind' },
          { name: 'React Router v6', icon: 'router' },
        ],
      },
      {
        name: 'Backend & Infrastructure',
        items: [
          { name: 'Firebase', icon: 'firebase' },
          { name: 'Google Analytics 4', icon: 'analytics' },
          { name: 'Netlify', icon: 'netlify' },
        ],
      },
      {
        name: 'Development Tools',
        items: [
          { name: 'ESLint', icon: 'eslint' },
          { name: 'Framer Motion', icon: 'other' },
          { name: 'JobTread Integration', icon: 'other' },
        ],
      },
    ],
    challenges: [
      'Image Management: Handling a large collection of high-resolution project photos while maintaining fast load times -> Implemented WebP format and lazy loading',
      "Project Process Visualization: Creating an intuitive way to showcase the company's workflow -> Developed an interactive timeline component with animations",
      'Lead Capture: Building a reliable system for capturing and managing leads -> Integrated Discord webhooks for real-time notifications',
      'Mobile Responsiveness: Ensuring complex gallery layouts work seamlessly on all devices -> Implemented adaptive grid systems and touch-friendly controls',
    ],
    stats: [
      { value: '35+ years experience', icon: 'star' },
      { value: '100+ project photos', icon: 'code' },
      { value: '4 service regions', icon: 'chart' },
    ],
    results: [
      "Successfully launched a modern, responsive website that effectively showcases Oak & Stone's craftsmanship",
      'Streamlined lead generation process with instant notifications',
      'Improved project management workflow with JobTread integration',
      'Enhanced visual presentation of portfolio with optimized image gallery',
      'Increased visibility in Weber, Davis, and Box Elder counties',
    ],
    screenshots: [
      {
        src: '/images/casestudies/oak/oaklanding1.webp',
        description:
          'Landing Page: Modern hero section with full-width imagery showcasing premium remodeling work',
      },
      {
        src: '/images/casestudies/oak/oakportfolio2.webp',
        description:
          'Portfolio Overview: Elegant grid layout featuring completed kitchen and bathroom projects',
      },
      {
        src: '/images/casestudies/oak/oakabout3.webp',
        description:
          'About Section: Company history and values presentation with modern design',
      },
      {
        src: '/images/casestudies/oak/oakselectedworks4.webp',
        description:
          'Selected Works: Curated gallery of exceptional remodeling projects',
      },
      {
        src: '/images/casestudies/oak/oaktestimonies5.webp',
        description:
          'Client Testimonials: Real feedback from satisfied homeowners',
      },
      {
        src: '/images/casestudies/oak/oakprocess6.webp',
        description:
          'Process Overview: Step-by-step guide to our remodeling journey',
      },
      {
        src: '/images/casestudies/oak/oakabout7.webp',
        description:
          'Team Showcase: Meet the skilled craftsmen behind Oak & Stone',
      },
      {
        src: '/images/casestudies/oak/oakcareers8.webp',
        description: 'Careers Page: Join our team of remodeling professionals',
      },
      {
        src: '/images/casestudies/oak/oakservicearea9.webp',
        description:
          'Service Areas: Interactive map showing our coverage in Utah',
      },
      {
        src: '/images/casestudies/oak/oakconsultationpage10.webp',
        description:
          'Consultation Page: Easy-to-use form for scheduling project consultations',
      },
      {
        src: '/images/casestudies/oak/oakimagemodule11.webp',
        description:
          'Image Gallery: Dynamic module for browsing project photos by category',
      },
    ],
    whatILearned: [
      'Advanced image optimization techniques for large galleries',
      'Integration of third-party project management tools',
      'Effective showcase of craftsmanship through web design',
      'Building trust through design in the home improvement industry',
      'Balancing visual appeal with performance in image-heavy applications',
    ],
    liveDemo: 'https://oakandstoneremodel.com',
    callToAction: {
      title: 'Ready to Transform Your Space?',
      description:
        'Experience the Oak & Stone difference in home remodeling. Contact us for a consultation today.',
    },
    navigation: {
      previous: {
        slug: 'restoration-laser-cleaning',
        name: 'Restoration Laser Cleaning',
      },
      next: {
        slug: 'pina-soulmate',
        name: 'Pina Soulmate',
      },
    },
  },
  {
    slug: 'svg-library',
    name: 'SVG Library',
    overview:
      'A modern, interactive SVG icon library built with React and TailwindCSS. The application provides a collection of customizable SVG icons with real-time color, size, and stroke width adjustments. The library emphasizes user experience with an intuitive interface and immediate visual feedback.',
    myRole:
      'Full Stack Developer (Solo)\nLed the development of the entire application, including component architecture, state management, and UI/UX design.',
    problemStatement:
      'Developers often struggle with finding customizable SVG icons that can be easily modified to match their design requirements. Most icon libraries offer limited customization options and require manual editing of SVG code. The goal was to create a user-friendly platform where developers can customize and preview SVG icons in real-time.',
    keyFeatures: [
      'Dynamic SVG Customization: Real-time adjustment of icon size, stroke width, and colors through an intuitive interface',
      'Extensive Icon Collection: Large library of professionally designed SVG icons available for immediate use',
      'Color Management: Advanced color picker with preset color schemes and custom color input support',
      'Responsive Design: Mobile-first approach ensuring a seamless experience across all devices',
      'State Management: Efficient state handling using Zustand for smooth real-time updates',
      'Modern UI: Clean, minimalist interface with dark/light mode support based on selected colors',
      'Performance Optimized: Lightweight implementation with minimal dependencies',
    ],
    technologies: [
      {
        name: 'Frontend Core',
        items: [
          { name: 'React 18', icon: 'react' },
          { name: 'TailwindCSS', icon: 'tailwind' },
          { name: 'Zustand', icon: 'other' },
        ],
      },
      {
        name: 'Development Tools',
        items: [
          { name: 'ESLint', icon: 'eslint' },
          { name: 'rc-slider', icon: 'other' },
          { name: 'classnames', icon: 'other' },
        ],
      },
    ],
    challenges: [
      'SVG Manipulation: Implementing real-time SVG modifications while maintaining performance -> Used efficient state management with Zustand',
      'Color System: Creating an intuitive color selection system with both presets and custom inputs -> Developed a hybrid approach with color picker and preset swatches',
      'Responsive Design: Ensuring consistent icon preview and controls across different screen sizes -> Implemented mobile-first design with TailwindCSS',
      'State Synchronization: Maintaining synchronized state across multiple components -> Centralized state management with Zustand store',
    ],
    stats: [
      { value: '100+ SVG icons', icon: 'code' },
      { value: '3 customization options', icon: 'check' },
      { value: 'Fast load times', icon: 'speed' },
    ],
    results: [
      'Created a user-friendly platform for SVG icon customization',
      'Implemented real-time preview and adjustment capabilities',
      'Built an extensive library of professional SVG icons',
      'Achieved smooth performance with efficient state management',
    ],
    whatILearned: [
      'Advanced SVG manipulation techniques in React',
      'Efficient state management with Zustand',
      'Real-time UI updates with optimized performance',
      'Color system implementation and management',
      'Mobile-first responsive design principles',
    ],
    screenshots: [
      {
        src: '/images/casestudies/svg/svglanding1.webp',
        description:
          'Landing Page: Clean, modern interface showcasing the SVG icon library with customization controls.',
      },
      {
        src: '/images/casestudies/svg/svgcolor2.webp',
        description:
          'Color Customization: Intuitive color picker interface for real-time icon color adjustments.',
      },
      {
        src: '/images/casestudies/svg/svgsize3.webp',
        description:
          'Size Controls: Precise size adjustment controls with immediate visual feedback.',
      },
      {
        src: '/images/casestudies/svg/svgstroke4.webp',
        description:
          'Stroke Width: Dynamic stroke width modification for line-based icons.',
      },
      {
        src: '/images/casestudies/svg/svghex5.webp',
        description:
          'Hex Color Input: Direct hex color input support for precise color matching.',
      },
      {
        src: '/images/casestudies/svg/svgcopied6.webp',
        description:
          'Copy Feedback: Smooth copy-to-clipboard functionality with visual confirmation.',
      },
      {
        src: '/images/casestudies/svg/svgsearch7.webp',
        description:
          'Search Feature: Quick icon search and filtering capabilities.',
      },
      {
        src: '/images/casestudies/svg/svgdarkmode8.webp',
        description:
          'Dark Mode: Elegant dark mode support with color-aware interface adjustments.',
      },
    ],
    liveDemo: 'https://svg-library.web.app/',
    callToAction: {
      title: 'Start Customizing Your Icons',
      description:
        'Access our library of professional SVG icons and customize them to match your design needs perfectly.',
    },
    navigation: {
      previous: {
        slug: 'pina-soulmate',
        name: 'Pina Soulmate',
      },
      next: {
        slug: 'restoration-laser-cleaning',
        name: 'Restoration Laser Cleaning',
      },
    },
  },
]
