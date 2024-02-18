import React, { useRef, useEffect, ReactNode } from 'react'
import { useElementVisibleStore } from '~/globalState/elementVisibleStore'

interface WithVisibilityProps {
  children: ReactNode
  position?: number
  name?: string // name can potentially be undefined
}

const WithVisibility: React.FC<WithVisibilityProps> = ({
  children,
  position = 0,
  name = 'UnnamedComponent', // Provide a default name here if you prefer
}) => {
  const componentRef = useRef<HTMLDivElement>(null)
  const { setVisibleElement } = useElementVisibleStore()

  useEffect(() => {
    const currentElement = componentRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && name) {
          // Check that name is not undefined
          setVisibleElement(name)
        }
      },
      {
        root: null,
        rootMargin: `${position}px`,
        threshold: 0.1,
      },
    )

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [position, name, setVisibleElement])

  return <div ref={componentRef}>{children}</div>
}

export default WithVisibility
