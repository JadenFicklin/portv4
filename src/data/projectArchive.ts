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
}

export const projectArchiveArray: Project[] = [
  {
    year: 2024,
    project: 'Portfolio V4',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Vercel'],
    link: 'https://jadenficklin2.com/',
    image: v4,
  },
  {
    year: 2024,
    project: 'Portfolio V3',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Netlify'],
    link: 'https://jadenficklin.com/',
    image: v3,
  },
  {
    year: 2023,
    project: 'Pinay Soulmate',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://pinasoulmate.com/',
    image: pina,
  },
  {
    year: 2023,
    project: 'Blck',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://theblck.io/',
    image: blck,
  },
  {
    year: 2023,
    project: 'LuxVesting',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Material UI', 'Firebase'],
    link: 'https://luxvesting.com/',
    image: lux,
  },
  {
    year: 2023,
    project: 'Load To Ride',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://dashboard-ltr-app.firebaseapp.com/',
    image: ltr,
  },
  {
    year: 2023,
    project: 'CargoRx',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://dashboard-ltr-app.firebaseapp.com/',
    image: cargo,
  },
  {
    year: 2023,
    project: 'Thuja',
    madeAt: 'Perspective Developers',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://jointhuja.dev/',
    image: thuja,
  },
  {
    year: 2023,
    project: 'Portfolio V2',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://jaden-ficklin.web.app/',
    image: v2,
  },
  {
    year: 2023,
    project: 'SVG Library',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    link: 'https://svg-library.web.app/',
    image: svg,
  },
  {
    year: 2022,
    project: 'Oak and Stone',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'CSS', 'Netlify'],
    link: 'https://oakandstone.netlify.app',
    image: oakandstone,
  },
  {
    year: 2022,
    project: 'Portfolio V1',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'CSS', 'Netlify'],
    link: 'https://jadenficklin.netlify.app',
    image: v1,
  },
  {
    year: 2021,
    project: 'Sopi',
    madeAt: 'Devmountain',
    builtWith: ['React', 'Javascript', 'CSS', 'Heroku', 'SQL'],
    link: 'https://www.youtube.com/watch?v=8L-vkJSVaJs',
    image: sopi,
  },
  {
    year: 2021,
    project: 'Eureka',
    madeAt: 'Devmountain',
    builtWith: ['React', 'Javascript', 'CSS', 'Heroku'],
    link: 'https://www.youtube.com/watch?v=-Zj5KCwzMwg',
    image: euka,
  },
]
