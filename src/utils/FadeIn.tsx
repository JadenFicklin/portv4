import { useEffect, useState } from 'react'
import { cn } from '~/utils/cn'

interface FadeInProps {
  text: string
  styling: string
  delay: number
}

export const FadeIn: React.FC<FadeInProps> = ({ text, styling, delay }) => {
  const [waited, setWaited] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setWaited(true)
    }, delay)
  }, [delay])

  return (
    <>
      <div
        className={cn(
          'relative -bottom-6 duration-[700ms] ease-in-out opacity-0',
          styling,
          waited && 'opacity-1 bottom-0',
        )}
      >
        {text}
      </div>
    </>
  )
}
