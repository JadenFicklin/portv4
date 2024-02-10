import { useState, useEffect } from 'react'
import Video from '~/assets/videos/GroupAtWork.mp4'
// import Video from '~/assets/videos/code.mp4'
import { cn } from '~/utils/cn'

type TextPositionKey = 'name' | 'profession' | 'attributes'

export const PageLoadDesktop = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [textPositions, setTextPositions] = useState<{
    [key in TextPositionKey]: string
  }>({
    name: '-bottom-10',
    profession: '-bottom-10',
    attributes: '-bottom-10',
  })
  const [textFinished, setTextFinished] = useState(false)
  const [videoState, setVideoState] = useState('initial')

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
        setVideoState('shrinking')
      }, 5500)
      setTimeout(() => {
        setVideoState('finished')
      }, 7000)
    }
  }, [videoLoaded])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  return (
    <div className="hidden xxl:block">
      <div
        className={cn(
          'w-full h-screen bg-black duration-1000 absolute pointer-events-none',
          videoLoaded ? 'opacity-0' : 'opacity-1',
        )}
      ></div>

      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
        <div className="w-full h-[40px] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
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
          'w-full h-screen duration-300 absolute pointer-events-none',
          textFinished ? 'bg-transparent' : 'bg-[#1e1d1c33]',
        )}
      ></div>

      <video
        className={cn(
          'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] object-cover duration-1000 ease-in-out -z-10',
          textFinished
            ? 'w-[95vw] h-[90vh] duration-500'
            : 'w-[100vw] h-[100vh] ',
          (videoState === 'shrinking' || videoState === 'finished') &&
            'w-[53vw] h-[100vh] translate-x-[-10%] translate-y-[-5%] duration-[1500ms]',
          videoState === 'finished' && 'duration-0',
        )}
        src={Video}
        autoPlay
        muted
        loop
        onLoadedData={handleVideoLoad}
      />

      <p className="text-lg italic font-light mx-[10%] top-[110%]  absolute max-w-80">
        “I’m a full-stack website developer specializing in JavaScript.
        <div className="w-1/2 bg-max opacity-50 h-[1px] mt-6"></div>
      </p>
    </div>
  )
}
