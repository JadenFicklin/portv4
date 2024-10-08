import { cn } from '~/utils/cn'
import Group from '~/assets/images/group.jpg'
import { useState } from 'react'
import Video from '~/assets/videos/GroupAtWork.mp4'
import { useThemeStore } from '~/globalState/themeStore'

export const PageLoad = () => {
  const [videoDisplayed, setVideoDisplayed] = useState(false)
  const { theme } = useThemeStore()

  setTimeout(() => {
    setVideoDisplayed(true)
  }, 1600)

  return (
    <div className="">
      <img
        className={cn(
          '-mt-20 md:-mt-10 w-[90vw] h-[60vh] object-cover opacity-0 mx-auto duration-1000 block xxl:hidden',
          videoDisplayed && 'opacity-100',
        )}
        src={Group}
        alt="group at work"
      />
      <video
        className={cn(
          'hidden xxl:block absolute top-1/2 left-1/2 object-cover opacity-0 duration-1000 ease-in-out -z-10 w-[53vw] h-screen translate-x-[-10%] translate-y-[-5%]',
          theme === 'dark' && 'filter brightness-[85%]',
          theme === 'binary' && 'filter brightness-[85%]',
          videoDisplayed && 'opacity-100',
        )}
        src={Video}
        autoPlay
        muted
        loop
      />

      <div className="text-sm sm:text-lg italic font-light xxl:top-[110%] xxl:absolute text-max max-w-80 w-[80%] mx-auto md:mx-[10%] my-16">
        Frontend and Fullstack React Engineer<br></br> seeking full time
        opportunities
        <div className="w-1/2 bg-max opacity-50 h-[1px] mt-6"></div>
      </div>
    </div>
  )
}
