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
  className?: string
}

export const Project: React.FC<ProjectProps> = ({
  data,
  orientation,
  className,
}) => {
  console.log(orientation)
  const { name, description, technologies, image, link } = data

  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <>
      <div className={cn('w-full py-10 h-[65vh] flex flex-wrap', className)}>
        <div className="w-1/2">
          <a
            className="relative flex items-center w-10/12 h-full"
            href={link}
            target="_blank"
            rel="noreferrer"
            style={divStyle}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"></div>
            <img
              src={image}
              alt={name}
              className="relative z-10 w-10/12 mx-auto"
            />
          </a>
        </div>
        <div className="w-1/2">
          <div>{name}</div>
          <div>{description}</div>
          {technologies.map((tech, index) => (
            <div key={index}>{tech}</div>
          ))}
        </div>
      </div>
    </>
  )
}
