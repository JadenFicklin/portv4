import React, { useRef, useEffect, useCallback, useState } from 'react'

export interface GetScrollPositionProps {
  children: React.ReactNode
  position?: string
  name?: string
}

const GetScrollPosition: React.FC<GetScrollPositionProps> = ({
  children,
  position = '0px',
  name = 'Component', // Default name if not provided
}) => {
  const componentRef = useRef<HTMLDivElement>(null)
  const [lastLoggedPosition, setLastLoggedPosition] = useState<number | null>(
    null,
  )

  const parsePositionAdjustment = useCallback((position: string): number => {
    return Number(position.replace('px', ''))
  }, [])

  const logScrollPosition = useCallback(() => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const elementTopRelativeToPage = rect.top + scrollTop
      const adjustedPosition =
        elementTopRelativeToPage + parsePositionAdjustment(position || '')

      // Log the position only if it has changed or on initial load, including the name
      if (
        lastLoggedPosition === null ||
        lastLoggedPosition !== adjustedPosition
      ) {
        console.log(adjustedPosition)
        console.log(name)
        setLastLoggedPosition(adjustedPosition)
      }
    }
  }, [name, position, parsePositionAdjustment, lastLoggedPosition])

  // Effect to log initial position
  useEffect(() => {
    logScrollPosition()
  }, [logScrollPosition])

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(logScrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [logScrollPosition])

  return <div ref={componentRef}>{children}</div>
}

export default GetScrollPosition
