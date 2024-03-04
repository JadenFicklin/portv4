import React, { useState, useRef, ReactNode, useEffect } from 'react'
import { cn } from '~/utils/cn'

interface CursorFollowProps {
  text: string
  offsetX: number
  offsetY: number
  children: ReactNode
}

const CursorFollow: React.FC<CursorFollowProps> = ({
  children,
  offsetX,
  offsetY,
  text,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 1000)
  const [isHovered, setIsHovered] = useState(false)
  const hoverContainer = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverContainer.current) {
      const rect = hoverContainer.current.getBoundingClientRect()
      setCursorPosition({
        x: e.clientX - rect.left + offsetX,
        y: e.clientY - rect.top + offsetY,
      })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth < 1000)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      ref={hoverContainer}
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div
          className={cn(
            'absolute z-50 grid bg-[#000000be] rounded-full pointer-events-none size-28 place-content-center duration-150 text-white',
            isNarrowScreen && 'hidden',
          )}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {text}
        </div>
      )}
    </div>
  )
}

export default CursorFollow
