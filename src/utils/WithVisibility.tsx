import React, { useRef, useEffect, ReactNode } from 'react'

interface WithVisibilityProps {
  children: ReactNode
  position?: number
  name?: string
  onVisibilityChange?: (isVisible: boolean, name: string) => void
}

const WithVisibility: React.FC<WithVisibilityProps> = ({
  children,
  position = 0,
  name = 'UnnamedComponent',
  onVisibilityChange,
}) => {
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentElement = componentRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange?.(entry.isIntersecting, name)
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
  }, [position, name, onVisibilityChange])

  return <div ref={componentRef}>{children}</div>
}

export default WithVisibility
