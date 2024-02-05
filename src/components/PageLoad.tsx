import { useState, useEffect } from 'react'
import Video from '~/assets/videos/GroupAtWork.mp4'
import { cn } from '~/utils/cn'

type TextPositionKey = 'name' | 'profession' | 'attributes'

export const PageLoad = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [textPositions, setTextPositions] = useState<{
    [key in TextPositionKey]: string
  }>({
    name: '-bottom-10',
    profession: '-bottom-10',
    attributes: '-bottom-10',
  })
  // State to control video size
  const [textFinished, setTextFinished] = useState(false)
  const [videoShrunk, setVideoShrunk] = useState(false)

  useEffect(() => {
    // Disable scrolling when the video is not yet shrunk
    if (!videoShrunk) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [videoShrunk])

  useEffect(() => {
    if (videoLoaded) {
      const timeouts: { key: TextPositionKey; value: string; delay: number }[] =
        [
          { key: 'name', value: 'bottom-0', delay: 500 },
          { key: 'name', value: 'bottom-16', delay: 1750 },
          { key: 'attributes', value: 'bottom-0', delay: 1750 },
          { key: 'attributes', value: 'bottom-16', delay: 3000 },
          { key: 'profession', value: 'bottom-0', delay: 3000 },
          { key: 'profession', value: 'bottom-16', delay: 4250 },
        ]

      timeouts.forEach(({ key, value, delay }) => {
        setTimeout(() => {
          setTextPositions((prevPositions) => ({
            ...prevPositions,
            [key]: value,
          }))
        }, delay)
      })

      setTimeout(() => {
        setTextFinished(true)
      }, 4400)
      setTimeout(() => {
        setVideoShrunk(true)
      }, 5500)
    }
  }, [videoLoaded])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  return (
    <>
      <div
        className={cn(
          'w-full h-screen bg-black duration-1000 absolute z-20',
          videoLoaded ? 'opacity-0' : 'opacity-1',
        )}
      ></div>
      <div className="absolute top-0 left-0 w-full h-screen ">
        <div className="w-full h-[40px] z-20 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
          {Object.entries(textPositions).map(([key, position]) => (
            <p
              key={key}
              className={cn(
                position,
                'absolute text-3xl text-white tracking-widest font-medium w-max mx-auto duration-[750ms] ease-in-out left-1/2 -translate-x-[50%]',
              )}
            >
              {key === 'name'
                ? 'Jaden Ficklin'
                : key === 'attributes'
                ? 'Creative Thinker'
                : 'Website Developer'}
            </p>
          ))}
        </div>
      </div>
      <div
        className={cn(
          'w-full h-screen duration-300 absolute',
          textFinished ? 'bg-transparent' : 'bg-[#1e1d1c33]',
        )}
      >
        <video
          className={cn(
            'absolute top-1/2 z-10 left-1/2 translate-x-[-50%] translate-y-[-50%] object-cover duration-1000 ease-in-out',
            textFinished
              ? 'w-[95vw] h-[90vh] duration-500'
              : 'w-[100vw] h-[100vh] ',
            videoShrunk &&
              'w-[40vw] h-[80vh] translate-x-[-140%] translate-y-[-20%] duration-[1500ms] ',
          )}
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
