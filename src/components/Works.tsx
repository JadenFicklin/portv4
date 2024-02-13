import { useEffect, useRef } from 'react'
import { WorkArray } from '~/data/work'
import { Project } from '~/utils/Project'

export const Works = () => {
  const scrollTextRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTextRef.current) {
        const { scrollTop } = document.documentElement
        const scrollLeft = -scrollTop * 0.8
        scrollTextRef.current.style.transform = `translateX(${scrollLeft}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <h2 className="relative w-full mb-32 overflow-hidden text-3xl h-min mt-52 xs:text-4xl sm:text-6xl md:text-7xl lg:text-9xl">
        <span className="opacity-0">a</span>
        <span
          ref={scrollTextRef}
          className="absolute text-max whitespace-nowrap"
          style={{ transform: 'translateX(0px)' }}
        >
          SELECTED PROJECTS - SELECTED PROJECTS - SELECTED PROJECTS - SELECTED
          PROJECTS - SELECTED PROJECTS -
        </span>
      </h2>
      <div className="flex flex-wrap w-9/12 gap-10 mx-auto h-max">
        {WorkArray.map((work, index) => (
          <Project
            key={index}
            data={work}
            orientation={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </>
  )
}
