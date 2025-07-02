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
  challenges: { challenge: string; solution: string }[]
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
      'Pina Soulmate is a real-time, mobile-first dating platform built to support a vibrant Filipino community. Designed with performance, moderation, and customization in mind, the project blends modern tooling with thoughtful UX to handle large-scale social interaction in a lightweight, scalable website.',
    myRole:
      'Full Stack Developer (Solo)\nLed the full development cycle—from architecture and UI/UX to backend logic, optimization, and deployment.',
    problemStatement:
      'Most dating platforms overlook cultural relevance and real-time experience, especially for international communities. This project aimed to build a trustworthy, responsive environment with real-time features, admin tools, and user personalization—while remaining lightweight and maintainable.',
    keyFeatures: [
      'Real-Time Chat & Messaging: Integrated Firebase Realtime Database to support live messaging with emojis, profile pictures, and animated transitions.',
      'User Authentication & Security: Facebook and email login via Firebase Auth, complete with moderation features like ban appeals and admin view for support.',
      'Profile Management: Users can upload and organize photos using a drag-and-drop system, and update personalized profile fields with live previews.',
      'Admin Dashboard: Robust moderation panel for reviewing reports, and managing bans or edits across the platform.',
      'Live Stats & Analytics: Real-time display of user count and signups. GA4 is integrated to track engagement and behavior trends.',
      'Performance & Optimization: Sharp-based image processing, lazy loading, code splitting, and CDN deployment ensure fast performance across devices.',
      'Modern UI/UX: Fully responsive design using React and TailwindCSS. Drag-and-drop photo tools, modal UI with SweetAlert2, and smooth transitions with @dnd-kit and Framer Motion.',
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
      {
        challenge:
          'Keeping the image upload process fast and reliable for users with slow internet connections.',
        solution:
          'Implemented client-side compression for image uploads and offloaded heavy processing to Cloudinary, ensuring quick feedback and smooth performance even on mobile networks.',
      },
      {
        challenge:
          'Managing user bans and support actions without affecting other users in real time.',
        solution:
          'Developed an isolated admin mode, review, and moderation in a safe, reversible way.',
      },
      {
        challenge:
          'Slow first load affecting conversion and mobile experience.',
        solution:
          'Implemented aggressive code splitting, lazy loading, and image delivery optimization to significantly reduce time to interaction.',
      },
    ],
    stats: [
      { value: '70+ active users', icon: 'chart' },
      { value: '12 daily active users', icon: 'users' },
      { value: '119.9k+ Facebook group members', icon: 'facebook' },
    ],
    results: [
      'Built a stable, real-time dating platform with full moderation and analytics.',
      'Reduced image payloads by 70% through automated optimization scripts.',
      'Successfully supported a 119k+ member Facebook group with consistent user signups.',
      'Positive feedback on usability, speed, and simplicity from early users.',
    ],
    screenshots: [
      {
        src: '/images/casestudies/pinasoulmate/pinalanding.webp',
        description:
          'Landing Page: Welcoming, modern design introducing the platform and its purpose.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinabrowse.webp',
        description:
          'Browse Page: Match discovery interface with dynamic filtering.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaprofileoverview.webp',
        description:
          'Profile Overview: User details with photos, bios, and interaction buttons.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaglobalchat.webp',
        description:
          'Global Chat: Public chatroom with live updates and moderation.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaindividualchat.webp',
        description:
          'Individual Chat: Private messaging with emoji support and smooth UX.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaeditprofile.webp',
        description:
          'Edit Profile: Form-based profile editing with previews and validation.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinauploadphotos.webp',
        description:
          'Photo Management: Drag-and-drop uploader and reordering interface.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinapreferences.webp',
        description: 'Preferences: Set match filters and personal settings.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinafblogin.webp',
        description:
          'Facebook Login: One-tap account creation using Facebook auth.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinareports.webp',
        description: 'Admin Reports: Review and moderate flagged content.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinaanalytics.webp',
        description:
          'Analytics Dashboard: GA4 data visualized in a simple internal tool.',
      },
      {
        src: '/images/casestudies/pinasoulmate/pinafacebookgroup.webp',
        description: 'Facebook Community: Connected group with 119k+ members.',
      },
    ],
    whatILearned: [
      'Advanced real-time architecture using Firebase and React.',
      'Image optimization at scale using custom Sharp pipelines.',
      'Balancing UX, security, and performance for a large user base.',
      'Building admin tools that are powerful yet safe to use.',
      'Understanding analytics and using data to iterate design choices.',
    ],
    liveDemo: 'https://pinasoulmate.com',
    callToAction: {
      title: 'Explore the Pina Soulmate Platform',
      description:
        'A fast, real-time web app built for connection and community — all from scratch.',
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
    name: 'Restoration Laser Cleaning',
    overview:
      'A modern, informative web platform for a laser cleaning business. Built with React and TailwindCSS, it showcases eco-friendly surface restoration methods and positions the brand as a reliable expert in rust removal and restoration.',
    myRole:
      'Full Stack Developer (Solo)\nHandled the full lifecycle—from planning and design to development and deployment. Focused on UI/UX, page performance, state management, and analytics integration.',
    problemStatement:
      'Most people haven’t heard of laser cleaning, and traditional methods like sandblasting or chemical stripping are either messy, damaging, or unsafe. This project aimed to build awareness, trust, and conversions through a fast, educational, and visually appealing site.',
    keyFeatures: [
      'Service showcase: Highlights common use cases like rust removal, paint stripping, and heritage restoration.',
      'Equipment catalog: Each unit includes specs, power levels, and suitable applications.',
      'Team and company bio: Helps visitors connect and builds local trust.',
      'Blog and FAQ: Breaks down how laser cleaning works and why it’s a better option.',
      'Interactive service area map to show coverage.',
      'Mobile-friendly, responsive UI with optimized images and lazy loading.',
      'Integrated Google Analytics for visitor behavior insights.',
      'Custom contact form workflow for user inquiries.',
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
      {
        challenge: 'Educating users on a niche, unfamiliar service.',
        solution:
          'Wrote simple, approachable content, added blog posts, and used real before/after images and videos to visually explain laser cleaning.',
      },
      {
        challenge: 'Handling high-res media without slowing the site down.',
        solution:
          'Used .webp image formats, lazy loading, and scaled images down where appropriate to balance quality and performance.',
      },
      {
        challenge: 'Making the site accessible and SEO-friendly.',
        solution:
          'Added alt text, semantic HTML, and structured content. Planned for future improvements like dynamic meta tags and schema markup.',
      },
      {
        challenge: 'Integrating analytics while keeping the UX fast.',
        solution:
          'Used Google Analytics and ensured tracking scripts didn’t block rendering or slow down interactions.',
      },
    ],
    stats: [
      { value: '20+ pages', icon: 'code' },
      { value: '261 page views per week', icon: 'chart' },
      { value: 'Clean, modern UI', icon: 'star' },
    ],
    results: [
      'Consistent engagement with visitors across services and blog content.',
      'Excellent Lighthouse scores for performance and accessibility.',
      'Visitors often comment on the clean design and professionalism.',
      'Built local trust and expanded inquiries within the service area.',
    ],
    screenshots: [
      {
        src: '/images/casestudies/rlc/rlchero1.webp',
        description: 'Landing Page: Rust removal in action.',
      },
      {
        src: '/images/casestudies/rlc/rlcservices2.webp',
        description:
          'interactive cards as a fun way to display more information on hover and teach about what can be cleaned with a laser.',
      },
      {
        src: '/images/casestudies/rlc/rlcmap3.webp',
        description: 'Interactive map showing service coverage.',
      },
      {
        src: '/images/casestudies/rlc/rlcourteam6.webp',
        description: 'About the team section builds trust.',
      },
      {
        src: '/images/casestudies/rlc/rclequipment5.webp',
        description: 'Overview of laser equipment.',
      },
      {
        src: '/images/casestudies/rlc/rlcblog8.webp',
        description: 'Blog content educating users about laser cleaning.',
      },
      {
        src: '/images/casestudies/rlc/rlcvideos9.webp',
        description: 'Laser in action: satisfying and educational.',
      },
      {
        src: '/images/casestudies/rlc/rlcservicearea10.webp',
        description: 'Service area and location info.',
      },
      {
        src: '/images/casestudies/rlc/rlccontact11.webp',
        description: 'Custom contact and inquiry form.',
      },
    ],
    whatILearned: [
      'Got better at balancing visual storytelling with performance constraints.',
      'Improved my workflow for optimizing media assets at scale.',
      'Learned to write content that both educates and converts.',
      'Built deeper understanding of frontend accessibility and SEO.',
      'Recognized the value of fast feedback loops using analytics data.',
    ],
    liveDemo: 'https://renewlasercleaning.com',
    callToAction: {
      title: 'See the Site That Cuts Through Rust',
      description:
        'Experience how laser cleaning is brought to life through clean design and a smooth user experience.',
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
      'A modern, image-driven web platform for Oak & Stone Construction — a remodeling company with decades of experience. The project highlights craftsmanship through a large gallery system, integrates real-time lead capture tools, and ensures long-term maintainability through modular, component-based design.',
    myRole:
      'Full Stack Developer (Solo)\nDesigned and built the site from the ground up, focusing on UX, performance, and seamless integration with third-party tools for lead management and project visibility.',
    problemStatement:
      'Oak & Stone needed a digital presence that could visually represent their high-end remodeling work, streamline communication with new leads, and maintain performance across a large collection of project imagery. The site needed to be mobile-friendly, easy to maintain, and optimized for local SEO.',
    keyFeatures: [
      'Dynamic Portfolio Gallery: Built a categorized image gallery with adaptive layouts, smooth transitions, and lazy loading for high-res project photos.',
      'Project Management Integration: Integrated JobTread for managing inquiries and tracking project workflows through external scripts and event listeners.',
      'Real-Time Lead Capture: Custom contact form with Discord webhook integration to notify instantly of new inquiries.',
      'Team & Process Showcase: Highlighted company values, team members, and a visual step-by-step guide for potential clients.',
      'SEO Optimization: Used React Helmet for dynamic page meta tags and better indexing across search engines.',
      'Responsive Design: Tailored layouts using TailwindCSS to ensure smooth performance across desktop, tablet, and mobile devices.',
      'Performance Optimization: Prioritized loading strategies for large media files using .webp format and image organization by category.',
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
      {
        challenge:
          'Handling high-resolution image galleries without sacrificing performance.',
        solution:
          'Used .webp image format, lazy loading, and organized assets into category folders for better maintainability and performance.',
      },
      {
        challenge:
          'Integrating a third-party project management tool (JobTread) into a React-based workflow.',
        solution:
          'Used script injection and event listeners inside a React lifecycle-safe useEffect hook with cleanup logic to prevent memory leaks.',
      },
      {
        challenge:
          'Delivering lead notifications in real-time with error handling.',
        solution:
          'Integrated a Discord webhook with async/await logic, stored secrets in environment variables, and handled fallback cases gracefully.',
      },
      {
        challenge:
          'Ensuring complex image layouts and interactions work consistently across all screen sizes.',
        solution:
          'Built adaptive grid systems using TailwindCSS and tested with simulated mobile conditions to validate responsiveness.',
      },
    ],
    stats: [
      { value: '35+ years experience', icon: 'star' },
      { value: '100+ project photos', icon: 'code' },
      { value: '4 service regions', icon: 'chart' },
    ],
    results: [
      'Launched a responsive portfolio site that balances visual storytelling with speed and usability.',
      'Created a scalable image system for showcasing a growing collection of remodeling work.',
      'Implemented a real-time lead notification system using Discord webhooks.',
      'Successfully integrated third-party tools into a clean React codebase.',
      'Improved visibility and client engagement within target Utah counties.',
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
        description: 'Service Areas: map showing our coverage in Utah',
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
      'Best practices for managing large visual assets in React projects',
      'How to integrate external tools (like JobTread and Discord) into modern frontends',
      'Optimizing load performance for media-heavy layouts',
      'Using design to build trust for service-based businesses',
      'Balancing custom functionality with third-party dependencies',
    ],
    liveDemo: 'https://oakandstoneremodel.com',
    callToAction: {
      title: 'See the Oak & Stone Site Live',
      description:
        'A polished, performance-focused React site that showcases craftsmanship and client experience.',
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
      'A modern, lightweight SVG customization tool built with React and TailwindCSS. It allows developers to explore and personalize a curated collection of icons in real-time — adjusting color, stroke, and size with instant visual feedback in a clean, responsive UI.',
    myRole:
      'Full Stack Developer (Solo)\nBuilt the app end-to-end: from architecture and state management to customization features, CI/CD, and Firebase deployment.',
    problemStatement:
      'Most icon libraries are either difficult to customize or require editing raw SVG markup. This project aimed to solve that by giving developers a live playground where they can easily adjust SVG properties visually and export usable code without touching the SVG file directly.',
    keyFeatures: [
      'Live SVG Customization: Real-time controls for adjusting stroke width, icon size, and colors using sliders and pickers.',
      'Responsive Icon Grid: Organized, searchable grid of 100+ SVGs rendered as dynamic React components.',
      'Color System: Hybrid color picker with both custom hex input and predefined palettes.',
      'State Management: Zustand store ensures real-time reactivity without prop drilling or overcomplication.',
      'Performance First: Clean React architecture, minimal dependencies, and fast feedback loop even on mobile.',
      'Dark Mode Support: Theme-aware interface with adaptive contrast handling.',
      'CI/CD Workflow: Firebase hosting with automated GitHub Actions deployment on pull request and merge.',
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
      {
        challenge:
          'Scalability concerns from storing all SVGs in one massive file.',
        solution:
          'Planned a future refactor using dynamic imports and/or a build-time icon registry to enable modular loading and reduce bundle size.',
      },
      {
        challenge:
          'Making customization feel instant without janky UI or heavy re-renders.',
        solution:
          'Used Zustand to centralize state and enable reactive updates across components without prop chains.',
      },
      {
        challenge:
          'Designing a color system that was flexible but easy to use.',
        solution:
          'Built a dual-interface solution: a hex input for precision and a grid of theme presets for quick access.',
      },
      {
        challenge:
          'Supporting mobile users without sacrificing desktop layout control.',
        solution:
          'Built responsive grid and slider components with Tailwind’s mobile-first utilities, and tested across devices.',
      },
    ],
    stats: [
      { value: '100+ SVG icons', icon: 'code' },
      { value: '3+ live customization controls', icon: 'check' },
      { value: 'Deployed with CI/CD', icon: 'speed' },
    ],
    results: [
      'Built a fast, intuitive interface for customizing and copying production-ready SVGs.',
      'Successfully handled real-time updates with minimal state complexity using Zustand.',
      'Deployed via Firebase with GitHub Actions for smooth iteration and previewing.',
      'Received positive feedback from other devs using it for rapid prototyping.',
      'Planned future improvements for icon scalability and accessibility.',
    ],
    whatILearned: [
      'Best practices for rendering dynamic SVGs in React.',
      'Real-time state control using lightweight tools like Zustand.',
      'Color input systems and UI patterns for non-textual customization.',
      'CI/CD pipelines using Firebase Hosting and GitHub Actions.',
      'Performance trade-offs when managing large static libraries in SPAs.',
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
      title: 'Explore the SVG Customizer',
      description:
        'A fast, flexible playground for customizing icons with React and Tailwind.',
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
