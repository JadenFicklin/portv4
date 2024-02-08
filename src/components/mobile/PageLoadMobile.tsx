import { useState, useEffect } from 'react'
import { cn } from '~/utils/cn'
import Video from '~/assets/videos/GroupAtWork.gif'

type TextPositionKey = 'name' | 'profession' | 'attributes'

export const PageLoadMobile = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [textPositions, setTextPositions] = useState<{
    [key in TextPositionKey]: string
  }>({
    name: '-bottom-10',
    profession: '-bottom-10',
    attributes: '-bottom-10',
  })
  const [textFinished, setTextFinished] = useState(false)
  const [videoShrunk, setVideoShrunk] = useState(false)

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
    <div className="block xxl:hidden">
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
        <div className="w-full h-[40px] z-30 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
          {Object.entries(textPositions).map(([key, position]) => (
            <p
              key={key}
              className={cn(
                position,
                'absolute text-2xl text-white tracking-widest font-medium w-max mx-auto duration-[750ms] ease-in-out left-1/2 -translate-x-[50%]',
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
      <video
        className={cn(
          'absolute top-1/2 z-10 left-1/2 translate-x-[-50%] translate-y-[-50%] object-cover duration-1000 ease-in-out',
          textFinished
            ? 'w-[90vw] h-[90vh] duration-500'
            : 'w-[100vw] h-[100vh] ',
          videoShrunk &&
            'relative top-0 left-0 translate-x-0 translate-y-0 mt-10 w-[90vw] h-[60vh] object-cover mx-auto duration-700',
        )}
        src={Video}
        autoPlay
        muted
        loop
        onLoadedData={handleVideoLoad}
      />
    </div>
  )
}

// ,
