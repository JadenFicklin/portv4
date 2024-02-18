import React, { useRef, useEffect, useState } from 'react'

export interface GetScrollPositionProps {
  children: React.ReactNode
  position?: string
  name?: string
}

const GetScrollPosition: React.FC<GetScrollPositionProps> = ({
  children,
  position = '0px',
  name = 'Component',
}) => {
  const componentRef = useRef<HTMLDivElement>(null)
  const [lastLoggedPosition, setLastLoggedPosition] = useState<number | null>(
    null,
  )

  useEffect(() => {
    const logScrollPosition = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect()
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const elementTopRelativeToPage = rect.top + scrollTop
        const adjustedPosition =
          elementTopRelativeToPage + Number(position.replace('px', ''))
        if (
          lastLoggedPosition === null ||
          lastLoggedPosition !== adjustedPosition
        ) {
          console.log(`${name} scroll position: ${adjustedPosition}px`) //console logs the position and the name
          setLastLoggedPosition(adjustedPosition)
        }
      }
    }

    logScrollPosition() //gets initial position value

    const handleScroll = () => {
      requestAnimationFrame(logScrollPosition)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [name, position, lastLoggedPosition])

  return <div ref={componentRef}>{children}</div>
}

export default GetScrollPosition
