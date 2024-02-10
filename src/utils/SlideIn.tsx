import { cn } from '~/utils/cn'

interface SlideInProps {
  text: string
  className: string
  speed: number
  initialDelay: number
}

export const SlideIn: React.FC<SlideInProps> = ({
  text,
  speed,
  initialDelay,
  className,
}) => {
  const letters = text.split('')

  return (
    <div className="flex py-3 overflow-hidden whitespace-pre w-max h-min">
      {letters.map((letter, index) => {
        const letterStyle = {
          animationDelay: `${index * speed + initialDelay}ms`,
          animationFillMode: 'forwards',
        }

        return (
          <p
            key={index}
            className={cn(
              'relative duration-700 ease-in-out animate-slide-up opacity-0 fill-mode-forwards text-black',
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
