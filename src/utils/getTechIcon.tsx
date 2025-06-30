import { FaReact, FaCode } from 'react-icons/fa6'
import {
  SiTailwindcss,
  SiFirebase,
  SiNetlify,
  SiGoogleanalytics,
  SiEslint,
  SiReactrouter,
  SiTypescript,
} from 'react-icons/si'

type IconType =
  | 'react'
  | 'tailwind'
  | 'firebase'
  | 'netlify'
  | 'analytics'
  | 'eslint'
  | 'router'
  | 'typescript'
  | 'other'

export const getTechIcon = (icon: IconType) => {
  switch (icon) {
    case 'react':
      return <FaReact className="text-blue-400" />
    case 'tailwind':
      return <SiTailwindcss className="text-cyan-400" />
    case 'firebase':
      return <SiFirebase className="text-orange-400" />
    case 'netlify':
      return <SiNetlify className="text-teal-400" />
    case 'analytics':
      return <SiGoogleanalytics className="text-yellow-400" />
    case 'eslint':
      return <SiEslint className="text-purple-400" />
    case 'router':
      return <SiReactrouter className="text-red-400" />
    case 'typescript':
      return <SiTypescript className="text-blue-600" />
    default:
      return <FaCode className="text-gray-400" />
  }
}
