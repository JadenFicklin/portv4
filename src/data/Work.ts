type Project = {
  name: string
  description: string
  technologies: string[]
  image: string
  link: string
}

export const WorkArray: Project[] = [
  {
    name: 'PinaSoulmate',
    description:
      'A dating website built to connect foreigners and people in the Philippines. Users can create accounts, filter, like, favorite, message other users, and purchase monthly memberships.',
    technologies: [
      'React',
      'Javascript',
      'Tailwind',
      'Stripe',
      'Firebase',
      'Mailgun',
    ],
    image: 'PinaSoulmate',
    link: 'https://pinasoulmate.com/',
  },
  {
    name: 'SVG Library',
    description:
      'Users can customize SVG’s using range sliders to adjust size, stroke and color of SVG’s which they can then copy the code for and use in their projects.',
    technologies: ['React', 'Javascript', 'Tailwind', 'Zustand', 'Firebase'],
    image: 'SVGLibrary',
    link: 'https://svg-library.web.app/',
  },
  {
    name: 'Oak and Stone',
    description:
      'A brochure website with emphasis on interactive UI to bring an enjoyable viewing experience for the user.',
    technologies: ['React', 'Javascript', 'EmailJs', 'Maps API', 'Netlify'],
    image: 'OakandStone',
    link: 'https://oakandstone.netlify.app/',
  },
]
