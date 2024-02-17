import React, { useEffect, useState } from 'react'
import { cn } from '~/utils/cn'

interface GridProps {
  horizontalLines: number
  verticalLines: number
  initialDelay: number
  className: string
}

export const Grid: React.FC<GridProps> = ({
  horizontalLines,
  verticalLines,
  initialDelay,
  className,
}) => {
  const [displayGrid, setDisplayGrid] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayGrid(true)
    }, initialDelay)

    return () => clearTimeout(timer) // Clean up the timer
  }, [initialDelay])

  const generateHorizontalStyle = (index: number) => {
    // Adjusted for scaling and translation
    const styles = [
      {
        transform: displayGrid
          ? 'scaleX(1) translateX(0)'
          : 'scaleX(0) translateX(-50%)',
        transformOrigin: 'left',
      }, // Center outwards
      {
        transform: displayGrid ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
      }, // From left
      {
        transform: displayGrid ? `scaleX(1)` : 'scaleX(0)',
        transformOrigin: `${index * 10}%`,
      }, // Scale from a percentage of the left
    ]
    return {
      ...styles[index % styles.length], // Cycle through styles based on index
      left: '0', // Always start from 0 to cover full width
      width: '100%', // Ensure full width
    }
  }

  const generateVerticalStyle = (index: number) => {
    // Adjusted for scaling and translation
    const styles = [
      {
        transform: displayGrid
          ? 'scaleY(1) translateY(0)'
          : 'scaleY(0) translateY(-50%)',
        transformOrigin: 'top',
      }, // Center downwards
      {
        transform: displayGrid ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'top',
      }, // From top
      {
        transform: displayGrid ? `scaleY(1)` : 'scaleY(0)',
        transformOrigin: `${index * 10}%`,
      }, // Scale from a percentage of the top
    ]
    return {
      ...styles[index % styles.length], // Cycle through styles based on index
      top: '0', // Always start from 0 to cover full height
      height: '100%', // Ensure full height
    }
  }

  const horizontalArray = Array.from({ length: horizontalLines }, (_, i) => i)
  const verticalArray = Array.from({ length: verticalLines }, (_, i) => i)

  return (
    <>
      <div
        className={cn(
          'fixed top-0 flex flex-wrap items-center justify-center w-full h-screen overflow-hidden -z-20',
          className,
        )}
        onClick={() => setDisplayGrid(!displayGrid)}
      >
        {horizontalArray.map((index) => (
          <div
            key={index}
            className="bg-max/10"
            style={{
              height: '1px',
              transition: 'transform 1000ms ease-in-out',
              position: 'absolute',
              top: `${(index + 1) * 100}px`,
              ...generateHorizontalStyle(index),
            }}
          ></div>
        ))}
        {verticalArray.map((index) => (
          <div
            key={index}
            className="bg-max/10"
            style={{
              width: '1px',
              transition: 'transform 1000ms ease-in-out',
              position: 'absolute',
              left: `${(index + 1) * 100}px`,
              ...generateVerticalStyle(index),
            }}
          ></div>
        ))}
      </div>
    </>
  )
}
