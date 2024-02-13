// import { ExperienceArray } from '~/data/experience'

import { cn } from '~/utils/cn'

type ProjectType = {
  name: string
  description: string
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

type ProjectProps = {
  data: ProjectType
  orientation: string
}

export const Project: React.FC<ProjectProps> = ({ data, orientation }) => {
  const { name, description, technologies, image, link } = data
  return (
    <>
      <div className={cn('w-full py-10  h-max')}>
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <div>{orientation}</div>
          <div>{name}</div>
          <div>{description}</div>
          {technologies.map((tech, index) => (
            <div key={index}>{tech}</div>
          ))}
          <a href={link} target="_blank">
            {link}
          </a>
        </div>
      </div>
    </>
  )
}
