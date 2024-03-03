type Project = {
  timeframe: string
  months: number
  name: string
  position: string
  description: string
  technologies: string[]
  link: string
}

export const ExperienceArray: Project[] = [
  {
    timeframe: 'DEC 2021 - APR 2022',
    months: 5,
    name: 'Devmountain',
    position: 'Website Developer (Student)',
    description: 'Learned how to create fullstack websites',
    technologies: [
      'React',
      'JavaScript',
      'Github',
      'CSS',
      'HTML6',
      'SQL',
      'Heroku',
    ],
    link: 'https://devmountain.com/',
  },
  {
    timeframe: 'MAY 2022 - DEC 2022',
    months: 7,
    name: 'Freelance Developer',
    position: 'Website Developer (Fullstack)',
    description:
      'Refined the coding languages learned in Devmountain by working with clients to build fullstack websites like OakandStone, PinaSoulmate, and SVG Library.',
    technologies: [
      'React',
      'JavaScript',
      'Github',
      'Tailwind',
      'Firebase',
      'Netlify',
    ],
    link: 'https://www.linkedin.com/in/jaden-ficklin-b1686a21a/',
  },
  {
    timeframe: 'JAN 2023 - PRESENT',
    months: 14,
    name: 'Perspective Developer',
    position: 'Website Developer (Fullstack)',
    description:
      'I work with a team of Developers to deliver high-quality, robust production code for a diverse array of projects and clients including Blck, k-12 Samudra, and Luxvesting',
    technologies: [
      'React',
      'TypeScript',
      'Gitlab',
      'Tailwind',
      'JavaScript',
      'Firebase',
    ],
    link: 'https://perspectdev.com/',
  },
]
