import blck from '~/assets/images/archive/archive-blck.jpg'
import euka from '~/assets/images/archive/archive-euka.jpg'
import lux from '~/assets/images/archive/archive-lux.jpg'
import oakandstone from '~/assets/images/archive/archive-oakandstone.jpg'
import pina from '~/assets/images/archive/archive-pina.jpg'
import sopi from '~/assets/images/archive/archive-sopi.jpg'
import svg from '~/assets/images/archive/archive-svg.jpg'
import thuja from '~/assets/images/archive/archive-thuja.jpg'
import cargo from '~/assets/images/archive/archive-cargo.jpg'
import ltr from '~/assets/images/archive/archive-ltr.jpg'
import v1 from '~/assets/images/archive/archive-v1.jpg'
import v2 from '~/assets/images/archive/archive-v2.jpg'
import v3 from '~/assets/images/archive/archive-v3.jpg'
import v4 from '~/assets/images/archive/archive-v4.jpg'

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
    year: 2024,
    project: 'Portfolio V4',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Vercel'],
    link: 'https://jadenficklin.com/',
    image: v4,
    description:
      'A modern web development agency website focused on creating beautiful, performant digital experiences for small businesses.',
  },
  {
    year: 2024,
    project: 'Portfolio V3',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Netlify'],
    link: 'https://jadenv3.netlify.app/',
    image: v3,
    description:
      'A developer tool for quickly finding, customizing, and copying SVG code with real-time preview and color customization.',
  },
  {
    year: 2023,
    project: 'Pina Soulmate',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://pinasoulmate.com/',
    image: pina,
    description:
      'A social platform helping people find meaningful connections through shared interests and personality matching.',
  },
  {
    year: 2023,
    project: 'Blck',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://theblck.io/',
    image: blck,
    description: '',
  },
  {
    year: 2023,
    project: 'LuxVesting',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Material UI', 'Firebase'],
    link: 'https://luxvesting.com/',
    image: lux,
    description: '',
  },
  {
    year: 2023,
    project: 'Load To Ride',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://dashboard-ltr-app.firebaseapp.com/',
    image: ltr,
    description: '',
  },
  {
    year: 2023,
    project: 'CargoRx',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://dashboard-ltr-app.firebaseapp.com/',
    image: cargo,
    description: '',
  },
  {
    year: 2023,
    project: 'Thuja',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://jointhuja.dev/',
    image: thuja,
    description: '',
  },
  {
    year: 2023,
    project: 'Portfolio V2',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://jadenv2.netlify.app/',
    image: v2,
    description: '',
  },
  {
    year: 2023,
    project: 'SVG Library',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://svg-library.web.app/',
    image: svg,
    description: '',
  },
  {
    year: 2022,
    project: 'Oak and Stone',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'CSS', 'Netlify'],
    link: 'https://oakandstone.netlify.app',
    image: oakandstone,
    description: '',
  },
  {
    year: 2022,
    project: 'Portfolio V1',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'CSS', 'Netlify'],
    link: 'https://jadenv1.netlify.app/',
    image: v1,
    description: '',
  },
  {
    year: 2021,
    project: 'Sopi',
    madeAt: 'Devmountain',
    builtWith: ['React', 'Javascript', 'CSS', 'Heroku', 'SQL'],
    link: 'https://www.youtube.com/watch?v=8L-vkJSVaJs',
    image: sopi,
    description: '',
  },
  {
    year: 2021,
    project: 'Eureka',
    madeAt: 'Devmountain',
    builtWith: ['React', 'Javascript', 'CSS', 'Heroku'],
    link: 'https://www.youtube.com/watch?v=-Zj5KCwzMwg',
    image: euka,
    description: '',
  },
]
