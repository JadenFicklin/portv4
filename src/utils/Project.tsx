import { useEffect, useState } from 'react'
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
  const { name, description, technologies, image, link } = data
  const [flagAnimationState, setFlagAnimationState] = useState('')

  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  const handleAnimateFlag = () => {
    setFlagAnimationState('')
    setTimeout(() => {
      setFlagAnimationState('dot')
    }, 1000)
    setTimeout(() => {
      setFlagAnimationState('flag')
    }, 2000)
  }

  useEffect(() => {
    handleAnimateFlag()
  }, [])

  return (
    <>
      <div
        className={cn(
          'w-full py-10 h-[65vh] lg:h-[85vh] grid grid-cols-2',
          className,
        )}
      >
        {/* image section */}
        <div
          className={cn(
            orientation === 'right' && 'order-2 flex justify-end scale-90',
          )}
        >
          <a
            className="relative flex items-center w-10/12 h-full "
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
        {/* text and flag section */}
        <div className="flex flex-wrap">
          <div
            className={cn('w-3/12', orientation.includes('right') && 'order-2')}
          ></div>
          <div className="flex flex-wrap content-center w-9/12">
            <div className="relative w-full h-max">
              {/* animated flag */}
              <div
                className={cn(
                  'duration-1000  ease-in-out absolute bottom-0 w-1 h-full bg-max',
                  !flagAnimationState && 'h-0',
                  orientation.includes('left') && '-left-20',
                  orientation.includes('right') && '-right-20',
                )}
              >
                {/* dot */}
                <div
                  className={cn(
                    'absolute rounded-full -left-1 -bottom-1 size-3 bg-max opacity-0 duration-100',
                    (flagAnimationState === 'dot' ||
                      flagAnimationState === 'flag') &&
                      'opacity-100',
                  )}
                ></div>

                <div
                  className={cn(
                    'duration-300 ease-in-out absolute top-0 h-4 w-0 bg-max',
                    flagAnimationState === 'flag' && 'w-7',
                    orientation.includes('left') && 'left-0',
                    orientation.includes('right') && 'right-0',
                  )}
                ></div>
              </div>
              {/* text */}
              <div className="text-4xl">{name}</div>
              <div className="py-8">
                {description}
                {orientation}
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 text-sm rounded-full text-min bg-max"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
