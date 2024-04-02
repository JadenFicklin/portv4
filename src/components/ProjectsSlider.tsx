import { useState, useEffect, useRef } from 'react'
import Euka from '~/assets/images/projectsSlider/eukaFull.jpg'
import Euka2 from '~/assets/images/projectsSlider/euka2Full.jpg'
import Euka3 from '~/assets/images/projectsSlider/euka3Full.jpg'
import OakandStone from '~/assets/images/projectsSlider/OakandStoneFull.jpg'
import Portv1Full from '~/assets/images/projectsSlider/portv1Full.jpg'
import Portv2Full from '~/assets/images/projectsSlider/portv2Full.jpg'
import svgFull from '~/assets/images/projectsSlider/svgFull.jpg'
import { Link } from 'react-router-dom'

export const ProjectsSlider = () => {
  const [scrollY, setScrollY] = useState({ down: 0, up: 0 })

  const parentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current) {
        const parentTop =
          parentRef.current.getBoundingClientRect().top + window.scrollY
        const relativeScrollY = Math.max(0, window.scrollY - parentTop)

        let down = relativeScrollY * -1
        let up = relativeScrollY * 1.8

        if (window.innerWidth < 768) {
          down /= 2.8
          up /= 2
        }

        setScrollY({
          down,
          up,
        })
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="relative opacity-0 -top-[80vh]" ref={parentRef}></div>

      <Link
        to="/archive"
        className="w-full h-[60vh] md:h-[80vh] xl:h-[250vh] bg-black bg-opacity-90 overflow-hidden grid grid-cols-4 gap-4 px-4 relative"
      >
        <div
          className="flex flex-wrap gap-4 h-max"
          style={{ transform: `translateY(${scrollY.down}px)` }}
        >
          <img src={Euka} alt="Euka" />
          <img src={Euka2} alt="Euka2" />
          <img src={Portv1Full} alt="Portv1Full" />
          <img src={Portv2Full} alt="Portv2Full" />
          <img src={Euka2} alt="Euka2 again" />
          <img src={Portv2Full} alt="Portv2Full again" />
          <img src={Portv2Full} alt="Portv2Full again" />
          <img src={Euka3} alt="Euka3" />
        </div>
        <div
          className="flex flex-wrap gap-4 h-max relative -top-[70vh] md:-top-[200vh] xl:-top-[340vh]"
          style={{ transform: `translateY(${scrollY.up}px)` }}
        >
          <img src={Portv2Full} alt="Portv2Full" />
          <img src={OakandStone} alt="OakandStone" />
          <img src={OakandStone} alt="OakandStone again" />
          <img src={Portv2Full} alt="Portv2Full again" />
          <img src={OakandStone} alt="OakandStone yet again" />
        </div>
        <div
          className="flex flex-wrap gap-4 h-max"
          style={{ transform: `translateY(${scrollY.down}px)` }}
        >
          <img src={Portv1Full} alt="Portv1Full" />
          <img src={Portv2Full} alt="Portv2Full" />
          <img src={Euka3} alt="Euka3" />
          <img src={svgFull} alt="svgFull" />
          <img src={Euka3} alt="Euka3" />
        </div>
        <div
          className="flex flex-wrap gap-4 h-max relative -top-[70vh] md:-top-[180vh] xl:-top-[330vh]"
          style={{ transform: `translateY(${scrollY.up}px)` }}
        >
          <img src={Portv1Full} alt="Portv1Full" />
          <img src={svgFull} alt="svgFull" />
          <img src={Euka} alt="Euka" />
          <img src={Euka} alt="Euka again" />
        </div>
      </Link>
    </>
  )
}
