import React, { useState } from 'react'

interface GridProps {
  horizontalLines: number // Number of horizontal lines
  verticalLines: number // Number of vertical lines
}

export const Grid: React.FC<GridProps> = ({
  horizontalLines,
  verticalLines,
}) => {
  const [displayGrid, setDisplayGrid] = useState(false)

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
        className="fixed top-0 flex flex-wrap items-center justify-center w-full h-screen overflow-hidden -z-20"
        onClick={() => setDisplayGrid(!displayGrid)}
      >
        {horizontalArray.map((index) => (
          <div
            key={index}
            className="bg-max bg-opacity-15"
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
            className="bg-max bg-opacity-15"
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
