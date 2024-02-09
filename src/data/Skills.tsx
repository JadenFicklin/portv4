import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiExpress,
  SiPostman,
  SiHeroku,
  SiFirebase,
  SiAxios,
} from 'react-icons/si'
import {
  FaNodeJs,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaCcStripe,
} from 'react-icons/fa'
import { FaGitlab } from 'react-icons/fa6'
import { SiNetlify } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'

const svgClass = 'w-full h-full fill-counterText '

export const skillsArray = [
  {
    name: 'React',
    icon: <SiReact className={svgClass} />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className={svgClass} />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className={svgClass} />,
  },

  {
    name: 'NodeJs',
    icon: <FaNodeJs className={svgClass} />,
  },
  {
    name: 'Express',
    icon: <SiExpress className={svgClass} />,
  },
  {
    name: 'Axios',
    icon: <SiAxios className={svgClass} />,
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className={svgClass} />,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className={svgClass} />,
  },

  {
    name: 'HTML5',
    icon: <FaHtml5 className={svgClass} />,
  },

  {
    name: 'Git',
    icon: <FaGit className={svgClass} />,
  },
  {
    name: 'GitHub',
    icon: <FaGithub className={svgClass} />,
  },
  {
    name: 'Gitlab',
    icon: <FaGitlab className={svgClass} />,
  },
  {
    name: 'Postman',
    icon: <SiPostman className={svgClass} />,
  },

  {
    name: 'Heroku',
    icon: <SiHeroku className={svgClass} />,
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className={svgClass} />,
  },
  {
    name: 'Netlify',
    icon: <SiNetlify className={svgClass} />,
  },

  {
    name: 'Stripe',
    icon: <FaCcStripe className={svgClass} />,
  },
]
