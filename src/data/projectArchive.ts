import { getThumbnailUrl } from '~/utils/cloudinaryUrl'

type Project = {
  year: number
  project: string
  madeAt: string
  builtWith: string[]
  link: string
  image: string
  description: string
}

export const projectArchiveArray: Project[] = [
  {
    year: 2025,
    project: 'Restoration Laser Cleaning',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Netlify'],
    link: 'https://renewlasercleaning.com/',
    image: getThumbnailUrl(
      'src/assets/images/archive/RestorationLaserCleaningLanding.jpg',
    ),
    description:
      'A modern, informative site for a laser cleaning business, highlighting eco-friendly rust removal and restoration services with a clean, educational design.',
  },
  {
    year: 2025,
    project: 'Oak and Stone V2',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Netlify'],
    link: 'https://oakandstoneremodel.com/',
    image: getThumbnailUrl('src/assets/images/archive/oakandstonelanding.jpg'),
    description:
      'A visually rich portfolio for a remodeling company, featuring a categorized gallery, real-time lead capture, and seamless integration with project management tools.',
  },
  {
    year: 2025,
    project: 'Camvio clone',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Netlify'],
    link: 'https://camvio-clone.netlify.app/',
    image: getThumbnailUrl('src/assets/images/archive/camviolanding.jpg'),
    description:
      'A functional clone of the Camvio platform, built to demonstrate modern React techniques, responsive design, and real-world SaaS UI/UX patterns.',
  },
  {
    year: 2024,
    project: 'Portfolio V4',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Netlify'],
    link: 'https://jadenficklin.com/',
    image: getThumbnailUrl('src/assets/images/archive/archive-v4.jpg'),
    description:
      'A modern web development agency website focused on creating beautiful, performant digital experiences for small businesses.',
  },
  {
    year: 2024,
    project: 'Portfolio V3',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Netlify'],
    link: 'https://jadenv3.netlify.app/',
    image: getThumbnailUrl('src/assets/images/archive/archive-v3.jpg'),
    description:
      'A developer tool for quickly finding, customizing, and copying SVG code with real-time preview and color customization.',
  },
  {
    year: 2023,
    project: 'Pina Soulmate',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://pinasoulmate.com/',
    image: getThumbnailUrl('src/assets/images/archive/archive-pina.jpg'),
    description:
      'A social platform helping people find meaningful connections through shared interests and personality matching.',
  },
  {
    year: 2023,
    project: 'Blck',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://theblck.io/',
    image: getThumbnailUrl('src/assets/images/archive/archive-blck.jpg'),
    description: '',
  },
  {
    year: 2023,
    project: 'LuxVesting',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Material UI', 'Firebase'],
    link: 'https://luxvesting.com/',
    image: getThumbnailUrl('src/assets/images/archive/archive-lux.jpg'),
    description: '',
  },
  {
    year: 2023,
    project: 'Load To Ride',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://dashboard-ltr-app.firebaseapp.com/',
    image: getThumbnailUrl('src/assets/images/archive/archive-ltr.jpg'),
    description: '',
  },
  {
    year: 2023,
    project: 'CargoRx',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://dashboard-ltr-app.firebaseapp.com/',
    image: getThumbnailUrl('src/assets/images/archive/archive-cargo.jpg'),
    description: '',
  },
  {
    year: 2023,
    project: 'Thuja',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://jointhuja.dev/',
    image: getThumbnailUrl('src/assets/images/archive/archive-thuja.jpg'),
    description: '',
  },
  {
    year: 2023,
    project: 'Portfolio V2',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://jadenv2.netlify.app/',
    image: getThumbnailUrl('src/assets/images/archive/archive-v2.jpg'),
    description: '',
  },
  {
    year: 2023,
    project: 'SVG Library',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://svg-library.web.app/',
    image: getThumbnailUrl('src/assets/images/archive/archive-svg.jpg'),
    description: '',
  },
  {
    year: 2022,
    project: 'Oak and Stone',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'CSS', 'Netlify'],
    link: 'https://oakandstone.netlify.app',
    image: getThumbnailUrl('src/assets/images/archive/archive-oakandstone.jpg'),
    description: '',
  },
  {
    year: 2022,
    project: 'Portfolio V1',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'CSS', 'Netlify'],
    link: 'https://jadenv1.netlify.app/',
    image: getThumbnailUrl('src/assets/images/archive/archive-v1.jpg'),
    description: '',
  },
  {
    year: 2021,
    project: 'Sopi',
    madeAt: 'Devmountain',
    builtWith: ['React', 'Javascript', 'CSS', 'Heroku', 'SQL'],
    link: 'https://www.youtube.com/watch?v=8L-vkJSVaJs',
    image: getThumbnailUrl('src/assets/images/archive/archive-sopi.jpg'),
    description: '',
  },
  {
    year: 2021,
    project: 'Eureka',
    madeAt: 'Devmountain',
    builtWith: ['React', 'Javascript', 'CSS', 'Heroku'],
    link: 'https://www.youtube.com/watch?v=-Zj5KCwzMwg',
    image: getThumbnailUrl('src/assets/images/archive/archive-euka.jpg'),
    description: '',
  },
]
