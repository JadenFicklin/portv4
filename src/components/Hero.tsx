import { useEffect, useState } from 'react'
import { SlideIn } from '~/utils/SlideIn'
import Video from '~/assets/videos/GroupAtWork.mp4'
import { cn } from '~/utils/cn'

export const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [video, setVideo] = useState(false)

  setTimeout(() => {
    setVideo(true)
  }, 700)
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth)
    }
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [])

  return (
    <>
      <div className="z-10 flex flex-col flex-wrap ml-[5%] xxl:relative w-max pt-48 xxl:pt-0 xxl:ml-[0%] xxl:top-64 xxl:left-32">
        <h1 className=" pb-[26px]">
          <SlideIn
            text="Jaden Ficklin, Website Developer"
            className="text-text text-[16px] xs:text-[20px] sm:text-[23px] xl:text-[26px] italic font-light tracking-tight"
            speed={20}
            initialDelay={window.innerWidth > 1400 ? 5800 : 200}
          />
        </h1>
        <div className="text-[30px] xs:text-[37px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[110px] xxl:text-[128px] text-text">
          <SlideIn
            text="Innovative web dev"
            className=""
            speed={20}
            initialDelay={window.innerWidth > 1400 ? 6000 : 400}
          />
          <SlideIn
            text="built to engage"
            className="xxl:-mt-8"
            speed={20}
            initialDelay={window.innerWidth > 1400 ? 6200 : 400}
          />
          <SlideIn
            text="and preform"
            className="xxl:-mt-8"
            speed={20}
            initialDelay={window.innerWidth > 1400 ? 6400 : 600}
          />
        </div>
      </div>
      {windowWidth < 1400 && (
        <video
          className={cn(
            'w-[90vw] h-[60vh] object-cover mx-auto mt-10 duration-700',
            video ? 'opacity-1' : 'opacity-0',
          )}
          src={Video}
          autoPlay
          muted
          loop
        />
      )}
    </>
  )
}
