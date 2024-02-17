import { useEffect, useState } from 'react'
import { FAQDrawer } from '~/components/FAQDrawer'
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
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 1000)

  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`,
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
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth < 1000)
    }

    // Set up the event listener
    window.addEventListener('resize', handleResize)

    // Call the handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    handleAnimateFlag()
  }, [])

  return (
    <>
      <div
        className={cn(
          'w-full py-10 h-max grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 grid-rows-auto ',
          className,
          orientation.includes('right') && 'lg:-ml-10',
        )}
      >
        {/* image section */}
        <div
          className={cn(
            'flex justify-center',
            orientation === 'right' && 'lg:order-2 lg:justify-end lg:scale-90',
            isNarrowScreen && 'order-2',
          )}
        >
          <a
            className="relative flex items-center w-full lg:w-10/12 h-[35vh] md:h-[45vh] lg:h-[55vh] xxl:h-[75vh] mt-10 lg:mt-0"
            href={link}
            target="_blank"
            rel="noreferrer"
            style={divStyle}
          >
            <div className="absolute inset-0 bg-black bg-opacity-10 border-[1px] border-black border-opacity-20 backdrop-filter backdrop-blur-sm"></div>
            <img
              src={image}
              alt={name}
              className="relative z-10 w-10/12 mx-auto border-[1px] border-black border-opacity-20"
            />
          </a>
        </div>
        {/* text and flag section */}
        <div className="flex flex-wrap group">
          <div className={cn('w-3/12 hidden lg:block ')}></div>
          <div className="flex flex-wrap content-center w-10/12 pl-10 mx-auto mt-10 scale-90 lg:w-9/12 lg:px-0 lg:mx-0">
            <div className="relative w-full h-max">
              {/* animated flag */}
              <div
                className={cn(
                  'duration-1000  ease-in-out absolute bottom-0 w-1 h-full bg-max',
                  !flagAnimationState && 'h-0',
                  orientation.includes('left') && '-left-20',
                  orientation.includes('right') && '-left-20 lg:-right-20',
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
                    orientation.includes('right') && 'left-0 lg:right-0',
                  )}
                ></div>
              </div>
              {/* text */}
              <FAQDrawer
                key={name}
                number={0}
                showNumbers={false}
                showPlus={false}
                showUnderline={false}
                title={name}
              >
                <p></p>
              </FAQDrawer>
              {/* <div className="text-3xl sm:text-4xl">{name}</div> */}
              <div className="py-8 max-w-96 text-max">{description}</div>
              <div className="flex flex-wrap gap-2 max-w-96">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 text-sm rounded-full text-custom bg-max/40"
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
