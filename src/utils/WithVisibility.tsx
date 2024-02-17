import React, { useRef, useEffect, ReactNode } from 'react'

interface WithVisibilityProps {
  children: ReactNode
  position?: string
  name?: string
}

const WithVisibility: React.FC<WithVisibilityProps> = ({
  children,
  position = '0px',
  name = 'Component', // Default name if not provided
}) => {
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Capture the current value of the ref to use in the cleanup function
    const currentRef = componentRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        console.log(
          `${name} is now ${isVisible ? 'visible' : 'hidden'} in the viewport.`,
        )
      },
      {
        root: null, // using the viewport as the root
        rootMargin: position, // Use the position prop to adjust the root margin for the observer
        threshold: 0.1, // 10% of the element is visible
      },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      // Use the captured value for cleanup
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [position, name]) // Include 'name' in the dependency array

  return <div ref={componentRef}>{children}</div>
}

export default WithVisibility
