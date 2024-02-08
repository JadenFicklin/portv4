import { cn } from '~/utils/cn'
import Video from '~/assets/videos/GroupAtWork.mp4'
import { useState } from 'react'

export const PageLoadMobile = () => {
  const [videoDisplayed, setVideoDisplayed] = useState(false)

  setTimeout(() => {
    setVideoDisplayed(true)
  }, 1600)

  return (
    <div className="block xxl:hidden">
      <video
        className={cn(
          'mt-10 w-[90vw] h-[60vh] object-cover mx-auto duration-1000',
          videoDisplayed ? 'opacity-100' : 'opacity-0',
        )}
        src={Video}
        autoPlay
        muted
        loop
      />
    </div>
  )
}