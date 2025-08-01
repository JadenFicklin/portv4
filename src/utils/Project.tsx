import React, { useState, useEffect } from 'react'
import CursorFollow from '~/utils/CursorFollow'
import WithVisibility from '~/utils/WithVisibility'
import { cn } from '~/utils/cn'
import { useThemeStore } from '~/globalState/themeStore'

type ProjectType = {
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
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false)
  const { theme } = useThemeStore()

  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  const handleMouseEnter = () => {
    const cursorFollower = document.querySelector(
      '.cursor-follower',
    ) as HTMLElement
    if (cursorFollower) {
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  }

  const handleMouseLeave = () => {
    const cursorFollower = document.querySelector(
      '.cursor-follower',
    ) as HTMLElement
    if (cursorFollower) {
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(0)'
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth < 1000)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleAnimateFlag = () => {
      if (!hasAnimatedOnce) {
        setFlagAnimationState('dot')
        setTimeout(() => {
          setFlagAnimationState('flag')
          setHasAnimatedOnce(true)
        }, 100)
      }
    }

    handleAnimateFlag()
  }, [hasAnimatedOnce])

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
          {!isNarrowScreen && <CursorFollow text="View site" />}
          <a
            className="relative lg:cursor-none flex items-center w-full duration-150 lg:w-10/12 h-[35vh] md:h-[45vh] lg:h-[55vh] xxl:h-[75vh] mt-10 lg:mt-0 hover-effect group"
            href={link}
            target="_blank"
            rel="noreferrer"
            style={divStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute inset-0 bg-black bg-opacity-10 border-[1px] border-black border-opacity-20 backdrop-filter backdrop-blur-sm"></div>
            <img
              src={image}
              alt={name}
              className="relative z-10 w-10/12 mx-auto border-[1px] border-black border-opacity-20 group-hover:scale-95 duration-300"
            />
          </a>
        </div>
        {/* text and flag section */}
        <div className="flex flex-wrap group">
          <div className={cn('hidden w-3/12 lg:block')}></div>
          <div className="flex flex-wrap content-center pl-10 mx-auto mt-10 w-10/12 scale-90 lg:w-9/12 lg:px-0 lg:mx-0">
            <div className="relative w-full h-max">
              {/* animated flag */}
              <WithVisibility
                name={name}
                position={0}
                onVisibilityChange={(isVisible, name) => {
                  console.log(
                    `${name} is ${isVisible ? 'visible' : 'not visible'}`,
                  )
                  if (isVisible) {
                    setFlagAnimationState('dot')
                    setTimeout(() => {
                      setFlagAnimationState('flag')
                    }, 200)
                  } else {
                    setFlagAnimationState('')
                  }
                }}
              >
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
              </WithVisibility>
              {/* text */}
              <div className="text-3xl sm:text-5xl text-max">{name}</div>
              {/* <div className="pt-1 pl-5 text-lg text-opacity-70 text-max">
                - {type}
              </div> */}
              <div className="py-8">
                <div className="max-w-96 text-max">{description}</div>
              </div>
              <div className="flex flex-wrap gap-2 max-w-96">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={cn(
                      'px-3 py-1 text-sm rounded-full text-custom bg-max/60',
                      theme === 'binary' && 'bg-max/20',
                      theme === 'dark' && 'bg-max/20',
                    )}
                  >
                    {tech}
                  </div>
                ))}
              </div>
              {/* View Case Study Button */}
              <div className="mt-6">
                <a
                  href={`/casestudy/${slugify(name)}`}
                  className="inline-block px-6 py-2 text-base font-semibold rounded-full shadow transition-colors duration-200 bg-max/80 text-custom hover:bg-max/60"
                >
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
