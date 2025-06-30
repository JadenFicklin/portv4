// TypeScript type for a case study
export type CaseStudy = {
  slug: string
  name: string
  overview: string
  myRole: string
  problemStatement: string
  keyFeatures: string[]
  technologies: string[]
  challenges: string[]
  results: string[]
  screenshots?: {
    src: string
    description: string
  }[]
  whatILearned: string[]
  liveDemo?: string
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
      'React 18',
      'TailwindCSS',
      'Jotai',
      'React Router v6',
      'React Icons',
      'Emoji Picker',
      'Firebase (Auth, Realtime DB, Storage, Security Rules)',
      'Netlify',
      'Google Analytics 4',
      'SweetAlert2',
      'Sharp',
      '@dnd-kit',
      'React Select',
      'ESLint',
      'Custom Build Scripts',
      'react-lazy-load-image-component',
      'React Helmet Async',
      'tailwind-merge',
      'clsx',
    ],
    challenges: [
      'Image Optimization: Netlify build failures due to image size/format were solved by scripting downloads from Unsplash and optimizing with Sharp.',
      'User Moderation: Developed a flexible admin mode for safe user management without service interruption.',
      'Performance: Achieved fast load times through aggressive image and code optimization.',
    ],
    results: [
      '70+ active users in the last 7 days (Google Analytics)',
      '12 daily active users (Firebase Analytics)',
      '119,900+ members in the associated Facebook group',
      '<1s average page load time on mobile and desktop',
    ],
    screenshots: [
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinalanding.webp',
        description:
          'Landing Page: Modern, welcoming interface that introduces users to the platform and its core features.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinabrowse.webp',
        description:
          'Browse Page: Discover potential matches with advanced filtering and sorting options.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinaprofileoverview.webp',
        description:
          'Profile Overview: Detailed user profiles with photos and personal information.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinaglobalchat.webp',
        description:
          'Global Chat: Real-time community chat room for all users to interact.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinaindividualchat.webp',
        description:
          'Individual Chat: Private messaging between users with emoji support and media sharing.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinaeditprofile.webp',
        description:
          'Edit Profile: User-friendly interface for updating profile information.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinauploadphotos.webp',
        description:
          'Photo Management: Drag-and-drop interface for managing profile photos.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinapreferences.webp',
        description:
          'Preferences: Customize match preferences and app settings.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinafblogin.webp',
        description:
          'Facebook Login: Seamless authentication with Facebook integration.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinareports.webp',
        description:
          'Admin Reports: Comprehensive reporting system for platform moderation.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinaanalytics.webp',
        description:
          'Analytics Dashboard: Real-time user activity and engagement metrics.',
      },
      {
        src: '/src/assets/images/casestudies/pinasoulmate/pinafacebookgroup.webp',
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
    liveDemo: '', // Add live link if available
  },
]
