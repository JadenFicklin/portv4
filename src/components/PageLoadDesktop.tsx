import { useState, useEffect } from 'react'
import Video from '~/assets/videos/GroupAtWork.mp4'
// import Video from '~/assets/videos/code.mp4'
import { cn } from '~/utils/cn'

type TextPositionKey = 'name' | 'profession' | 'attributes'

export const PageLoadDesktop = () => {
  const normalDisplaySpeed = true

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
          {
            key: 'name',
            value: 'bottom-0',
            delay: normalDisplaySpeed ? 500 : 0,
          },
          {
            key: 'name',
            value: 'bottom-16',
            delay: normalDisplaySpeed ? 1750 : 0,
          },
          {
            key: 'attributes',
            value: 'bottom-0',
            delay: normalDisplaySpeed ? 1750 : 0,
          },
          {
            key: 'attributes',
            value: 'bottom-16',
            delay: normalDisplaySpeed ? 3000 : 0,
          },
          {
            key: 'profession',
            value: 'bottom-0',
            delay: normalDisplaySpeed ? 3000 : 0,
          },
          {
            key: 'profession',
            value: 'bottom-16',
            delay: normalDisplaySpeed ? 4250 : 0,
          },
        ]

      timeouts.forEach(({ key, value, delay }) => {
        setTimeout(() => {
          setTextPositions((prevPositions) => ({
            ...prevPositions,
            [key]: value,
          }))
        }, delay)
      })

      setTimeout(
        () => {
          setTextFinished(true)
        },
        normalDisplaySpeed ? 4400 : 0,
      )
      setTimeout(
        () => {
          setVideoState('shrinking')
        },
        normalDisplaySpeed ? 5500 : 0,
      )
      setTimeout(
        () => {
          setVideoState('finished')
        },
        normalDisplaySpeed ? 7000 : 0,
      )
    }
  }, [videoLoaded, normalDisplaySpeed])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  return (
    <div className={cn('hidden xxl:block')}>
      <div
        className={cn(
          'w-full h-screen bg-black duration-1000 absolute pointer-events-none top-0',
          videoLoaded ? 'opacity-0' : 'opacity-1',
        )}
      ></div>

      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
        <div className="absolute w-full h-10 overflow-hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          {Object.entries(textPositions).map(([key, position]) => (
            <p
              key={key}
              className={cn(
                position,
                'absolute text-3xl text-white tracking-widest font-medium w-max mx-auto duration-700 ease-in-out left-1/2 -translate-x-1/2',
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
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover duration-1000 ease-in-out -z-10',
          textFinished ? 'w-[95vw] h-[90vh] duration-500' : 'w-screen h-screen',
          (videoState === 'shrinking' || videoState === 'finished') &&
            'w-[53vw] h-screen translate-x-[-10%] translate-y-[-5%] duration-[1500ms]',
          videoState === 'finished' && 'duration-0',
        )}
        src={Video}
        autoPlay
        muted
        loop
        onLoadedData={handleVideoLoad}
      />

      <div className="text-lg italic font-light mx-[10%] top-[110%]  absolute max-w-80">
        “I am a website developer specializing in JavaScript.
        <div className="w-1/2 bg-max opacity-50 h-[1px] mt-6"></div>
      </div>
    </div>
  )
}
