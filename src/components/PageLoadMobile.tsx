import { cn } from '~/utils/cn'
import Video from '~/assets/videos/GroupAtWork.mp4'
import { useState } from 'react'

export const PageLoadMobile = () => {
  const [videoDisplayed, setVideoDisplayed] = useState(false)

  setTimeout(() => {
    setVideoDisplayed(true)
  }, 1600)

  return (
    <div className="block xxl:hidden stop-transitions">
      <video
        className={cn(
          '-mt-20 md:-mt-10 w-[90vw] h-[60vh] object-cover mx-auto duration-1000',
          videoDisplayed ? 'opacity-100' : 'opacity-0',
        )}
        src={Video}
        autoPlay
        muted
        loop
      />

      <p className="text-sm sm:text-lg italic font-light max-w-80 w-[80%] mx-auto md:mx-[10%] my-16">
        “I’m a full-stack website developer specializing in JavaScript.
        <div className="w-1/2 bg-max opacity-50 h-[1px] mt-6"></div>
      </p>
    </div>
  )
}
