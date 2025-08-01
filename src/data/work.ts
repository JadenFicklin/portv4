import OakandStone from '~/assets/images/OakandStone.webp'
// import PinaSoulmate from '~/assets/images/PinaSoulmate.jpg'
import PinaSoulmateNew from '~/assets/images/pinasoulmatenew.webp'
import SVGLibrary from '~/assets/images/SVGLibrary.jpg'
import RestorationLaserCleaning from '~/assets/images/RestorationLaserCleaning.webp'

export type ProjectProps = {
  name: string
  description: string
  email?: string
  password?: string
  type?: string
  technologies: string[]
  image: string
  link: string
  goalsAndObjectives: string
  myRole: string
  challengesAndSolutions: string
  developmentProcess: string
  keyFeaturesAndFunctionalities: string
  resultsAndImpact: string
  visuals: string[]
  lessonsLearnedAndTakeaways: string
}

export const WorkArray: ProjectProps[] = [
  {
    name: 'Restoration Laser Cleaning',
    description:
      'A website for a laser cleaning company that specializes in cleaning and restoring surfaces using laser technology.',
    technologies: ['React', 'Javascript', 'Tailwind', 'Netlify', 'Firebase'],
    type: 'Frontend website',
    image: RestorationLaserCleaning,
    link: 'https://renewlasercleaning.com/',
    goalsAndObjectives:
      'To create a website for a laser cleaning company that specializes in cleaning and restoring surfaces using laser technology.',
    myRole:
      'Sole developer responsible for conceptualizing, designing, and implementing the entire project.',
    challengesAndSolutions:
      'One of the main challenges was creating an intuitive UI for the website. Implemented a user-friendly interface with range sliders for seamless customization. Ensured cross-browser compatibility and responsive design.',
    developmentProcess:
      'Started with designing the UI/UX in Figma, focusing on simplicity and usability. The design was then translated into a functional website using React, incorporating state management with Zustand for a smooth user experience. The website is hosted on Netlify and the database is hosted on Firebase.',
    keyFeaturesAndFunctionalities:
      'Interactive range sliders for customizing SVG properties like size, stroke, and color; feature to copy customized SVG code directly for use in other projects; real-time preview of SVG changes; user-friendly interface designed for ease of use. The website is hosted on Netlify and the database is hosted on Firebase.',

    resultsAndImpact:
      'Successfully launched a website for a laser cleaning company that specializes in cleaning and restoring surfaces using laser technology. Received positive feedback for its ease of use and functionality.',
    visuals: ['URL_to_image1', 'URL_to_image2', 'URL_to_image3'],
    lessonsLearnedAndTakeaways:
      'Gained deeper insights into UI/UX design, particularly in creating tools for developers. Enhanced skills in React and state management with Zustand, and learned the importance of intuitive design in user interface development. Learned the importance of responsive design and cross-browser compatibility.',
  },

  {
    name: 'Oak and Stone',
    description:
      'A custom-built showcase site highlighting the work and services of Oak and Stone, a construction company. This website features a portfolio of their craftsmanship, an introduction to the company, and an easy-to-use contact section, as well as admin control. ',
    type: 'Frontend website',
    technologies: [
      'React',
      'Javascript',
      'EmailJs',
      'Maps API',
      'Netlify',
      'Vanilla CSS',
    ],
    image: OakandStone,
    link: 'https://oakandstonedev.netlify.app/',
    goalsAndObjectives: '...',
    myRole: '...',
    challengesAndSolutions: '...',
    developmentProcess: '...',
    keyFeaturesAndFunctionalities: '...',
    resultsAndImpact: '...',
    visuals: ['...', '...', '...'],
    lessonsLearnedAndTakeaways: '...',
  },
  {
    name: 'Pina Soulmate',
    description:
      'A dating website built to connect foreigners and locals of the Philippines. Users can create accounts, filter, like and message other users.',
    email: ' abc@gmail.com',
    password: 'PortfolioKey#24',
    type: 'Fullstack website',
    technologies: ['React', 'Javascript', 'Tailwind', 'Firebase'],
    image: PinaSoulmateNew,
    link: 'https://pinasoulmate.com/',
    goalsAndObjectives:
      'To create a cost-effective and user-friendly dating platform tailored for expats and locals in the Philippines.',
    myRole:
      'Sole developer with occasional assistance from a senior developer. Handled all aspects of front-end and back-end development.',
    challengesAndSolutions:
      'Faced challenges in database structure and user security. Enhanced security measures to protect user data and implemented a robust database structure to prevent potential hacking threats.',
    developmentProcess:
      'Designed the initial website layout in Figma, following an agile development approach. Emphasized iterative development with continuous testing and refinement.',
    keyFeaturesAndFunctionalities:
      'User account setup and authentication via Firebase, a functional dashboard with filtered user display, messaging functionality, Stripe integration for membership purchases, profile information updates, algorithm-based user permission limits based on membership tier, and backend user data protection.',
    resultsAndImpact:
      'Successfully launched a fully-functional dating site, receiving positive feedback on user experience and interface design. The site offers an affordable and engaging platform for its target audience.',
    visuals: ['URL_to_image1', 'URL_to_image2', 'URL_to_image3'],
    lessonsLearnedAndTakeaways:
      'Gained significant experience in Stripe and Firebase database interactions, improved understanding of user security in web applications, and enhanced skills in full-stack development, particularly in React and JavaScript.',
  },
  {
    name: 'SVG Library',
    description:
      'Users can customize SVG’s using range sliders to adjust size, stroke, and color of SVG’s which they can then copy the code for and use in their projects.',
    technologies: ['React', 'Javascript', 'Tailwind', 'Zustand', 'Firebase'],
    type: 'Frontend website',
    image: SVGLibrary,
    link: 'https://svg-library.web.app/',
    goalsAndObjectives:
      'To simplify the customization of SVGs for developers, enabling easy adjustment of size, stroke, and color, and to facilitate the direct use of these custom SVGs in their projects.',
    myRole:
      'Sole developer responsible for conceptualizing, designing, and implementing the entire project.',
    challengesAndSolutions:
      'One of the main challenges was creating an intuitive UI for adjusting SVG properties. Implemented a user-friendly interface with range sliders for seamless customization. Ensured cross-browser compatibility and responsive design.',
    developmentProcess:
      'Started with designing the UI/UX in Figma, focusing on simplicity and usability. The design was then translated into a functional website using React, incorporating state management with Zustand for a smooth user experience.',
    keyFeaturesAndFunctionalities:
      'Interactive range sliders for customizing SVG properties like size, stroke, and color; feature to copy customized SVG code directly for use in other projects; real-time preview of SVG changes; user-friendly interface designed for ease of use.',
    resultsAndImpact:
      'Successfully launched a tool that simplifies the SVG customization process for web developers, enhancing their productivity. Received positive feedback for its ease of use and functionality.',
    visuals: ['URL_to_image1', 'URL_to_image2', 'URL_to_image3'],
    lessonsLearnedAndTakeaways:
      'Gained deeper insights into UI/UX design, particularly in creating tools for developers. Enhanced skills in React and state management with Zustand, and learned the importance of intuitive design in user interface development.',
  },
]
