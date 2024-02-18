import React, { useRef, useEffect, ReactNode } from 'react'

interface WithVisibilityProps {
  children: ReactNode
  position?: number
  name?: string
}

const WithVisibility: React.FC<WithVisibilityProps> = ({
  children,
  position = 0,
  name = 'Component',
}) => {
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = componentRef.current
    const rootMarginValue = `${position}px`

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        console.log(
          `${name} is now ${isVisible ? 'visible' : 'hidden'} in the viewport.`,
        )
      },
      {
        root: null,
        rootMargin: rootMarginValue,
        threshold: 0.1,
      },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [position, name]) // Depend on position (number) and name

  return <div ref={componentRef}>{children}</div>
}

export default WithVisibility
