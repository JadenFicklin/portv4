import { cn } from '~/utils/cn'

interface SlideInProps {
  text: string
  className: string
  speed: number
  initialDelay: number
}

export const SlideIn: React.FC<SlideInProps> = ({
  text,
  className,
  speed: delay,
  initialDelay,
}) => {
  const letters = text
    .split('')
    .map((letter) => (letter === ' ' ? '\u00A0' : letter))

  return (
    <div className="flex overflow-hidden w-max h-min">
      {letters.map((letter, index) => {
        const letterStyle = {
          animationDelay: `${index * delay + initialDelay}ms`,
          animationFillMode: 'forwards',
        }

        return (
          <p
            className={cn(
              'relative duration-[700ms] ease-in-out animate-slide-up opacity-0  fill-mode-forwards text-black',
              className,
            )}
            style={letterStyle}
          >
            {letter}
          </p>
        )
      })}
    </div>
  )
}
