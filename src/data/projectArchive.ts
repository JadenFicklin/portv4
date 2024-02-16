import blck from '~/assets/images/archive/archive-blck.png'
import calculator from '~/assets/images/archive/archive-calculator.png'
import euka from '~/assets/images/archive/archive-euka.png'
import kerrie from '~/assets/images/archive/archive-kerrie.png'
import lux from '~/assets/images/archive/archive-lux.png'
import oakandstone from '~/assets/images/archive/archive-oakandstone.png'
import pina from '~/assets/images/archive/archive-pina.png'
import sopi from '~/assets/images/archive/archive-sopi.png'
import svg from '~/assets/images/archive/archive-svg.png'
import thuja from '~/assets/images/archive/archive-thuja.png'
import timo from '~/assets/images/archive/archive-timo.png'
import v1 from '~/assets/images/archive/archive-v1.png'
import v2 from '~/assets/images/archive/archive-v2.png'
import v3 from '~/assets/images/archive/archive-v3.png'
import v4 from '~/assets/images/archive/archive-v4.png'

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
    builtWith: ['React', 'Javascript', 'Tailwind', 'Vercel', 'Vite'],
    link: 'https://jadenficklin.com/',
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
    project: 'OreSMP',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'Tailwind', 'Netlify'],
    link: 'https://tiptow.netlify.app/',
    image: timo,
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
    year: 2022,
    project: 'Beauty by kerrie',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'CSS', 'Netlify'],
    link: 'https://beauty-by-kerrie.netlify.app',
    image: kerrie,
  },
  {
    year: 2022,
    project: 'Calculator',
    madeAt: 'Freelance',
    builtWith: ['React', 'Javascript', 'CSS', 'Netlify'],
    link: 'https://projects-calculator.netlify.app',
    image: calculator,
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
