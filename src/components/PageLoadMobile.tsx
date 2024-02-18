import { cn } from '~/utils/cn'
import Video from '~/assets/videos/GroupAtWork.gif'
import { useState } from 'react'

export const PageLoadMobile = () => {
  const [videoDisplayed, setVideoDisplayed] = useState(false)

  setTimeout(() => {
    setVideoDisplayed(true)
  }, 1600)

  return (
    <div className="block xxl:hidden">
      <img
        className={cn(
          '-mt-20 md:-mt-10 w-[90vw] h-[60vh] object-cover opacity-0 mx-auto duration-1000',
          videoDisplayed && 'opacity-100',
        )}
        src={Video}
      />

      <div className="text-sm sm:text-lg italic font-light text-max max-w-80 w-[80%] mx-auto md:mx-[10%] my-16">
        I am a Fullstack React Engineer actively seeking opportunities in
        Website Development.
        <div className="w-1/2 bg-max opacity-50 h-[1px] mt-6"></div>
      </div>
    </div>
  )
}
