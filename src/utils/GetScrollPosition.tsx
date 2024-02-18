import React, { useRef, useEffect, useState } from 'react'
import { useElementsLocationStore } from '~/globalState/elementsLocationStore'

export interface GetScrollPositionProps {
  children: React.ReactNode
  position?: number
  name?: string
}

const GetScrollPosition: React.FC<GetScrollPositionProps> = ({
  children,
  position = 0,
  name = 'Component',
}) => {
  const componentRef = useRef<HTMLDivElement>(null)
  const [lastLoggedPosition, setLastLoggedPosition] = useState<number | null>(
    null,
  )
  const { setAbout, setWork, setContact, setArchive } =
    useElementsLocationStore()

  useEffect(() => {
    const logScrollPosition = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect()
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const elementTopRelativeToPage = rect.top + scrollTop
        const adjustedPosition = elementTopRelativeToPage + position

        if (
          lastLoggedPosition === null ||
          lastLoggedPosition !== adjustedPosition
        ) {
          setLastLoggedPosition(adjustedPosition)

          switch (name.toLowerCase()) {
            case 'about':
              setAbout(adjustedPosition)
              break
            case 'works':
              setWork(adjustedPosition)
              break
            case 'contact':
              setContact(adjustedPosition)
              break
            case 'archive':
              setArchive(adjustedPosition)
              break
            default:
              console.log(`aa`)
          }
        }
      }
    }

    logScrollPosition()

    const handleScroll = () => {
      requestAnimationFrame(logScrollPosition)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [
    name,
    position,
    lastLoggedPosition,
    setAbout,
    setWork,
    setContact,
    setArchive,
  ])

  return <div ref={componentRef}>{children}</div>
}

export default GetScrollPosition
