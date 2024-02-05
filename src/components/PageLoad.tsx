import { useState } from 'react'
import Video from '~/assets/videos/GroupAtWork.mp4'
import { cn } from '~/utils/cn'

export const PageLoad = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  console.log(videoLoaded ? 'video is loaded' : 'video is not loaded')

  return (
    <>
      <div
        className={cn(
          'w-full h-screen bg-black duration-1000 absolute',
          videoLoaded ? 'opacity-0' : 'opacity-1',
        )}
      ></div>
      <div className="bg-[#1e1d1c33] w-full h-screen">
        <video
          className="fullHeightVideo"
          src={Video}
          autoPlay
          muted
          loop
          onLoadedData={handleVideoLoad}
        />
      </div>
    </>
  )
}
