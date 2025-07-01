import { cn } from '~/utils/cn'
import Group from '~/assets/images/group.jpg'
import { useEffect, useState, useRef } from 'react'
import { useThemeStore } from '~/globalState/themeStore'

// Cloudinary URL for the video
const VIDEO_URL =
  'https://res.cloudinary.com/dwoubdppz/video/upload/v1751392418/videos/GroupAtWork.mp4'

export const PageLoad = () => {
  const [videoDisplayed, setVideoDisplayed] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { theme } = useThemeStore()

  useEffect(() => {
    // Start loading the video immediately
    if (videoRef.current) {
      videoRef.current.load()
    }

    // Show content after initial delay
    const displayTimer = setTimeout(() => {
      setVideoDisplayed(true)
    }, 1600)

    return () => clearTimeout(displayTimer)
  }, [])

  const handleVideoLoaded = () => {
    setVideoLoaded(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

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

      {/* Loading Indicator */}
      {!videoLoaded && videoDisplayed && (
        <div className="hidden absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 xxl:block">
          <div className="w-10 h-10 rounded-full border-4 animate-spin border-max/20 border-t-max/80" />
        </div>
      )}

      <video
        ref={videoRef}
        className={cn(
          'hidden xxl:block absolute top-1/2 left-1/2 object-cover -z-10 w-[53vw] h-screen translate-x-[-10%] translate-y-[-5%]',
          'transition-all duration-1000 ease-in-out',
          theme === 'dark' && 'filter brightness-[85%]',
          theme === 'binary' && 'filter brightness-[85%]',
          videoDisplayed && videoLoaded ? 'opacity-100' : 'opacity-0',
        )}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoaded}
      />

      <div className="text-sm sm:text-lg italic font-light xxl:top-[110%] xxl:absolute text-max max-w-80 w-[80%] mx-auto md:mx-[10%] my-16">
        Frontend React Developer<br></br> seeking full time opportunities
        <div className="w-1/2 bg-max opacity-50 h-[1px] mt-6"></div>
      </div>
    </div>
  )
}
