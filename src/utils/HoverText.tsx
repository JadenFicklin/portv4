import { cn } from '~/utils/cn'

interface HoverTextProps {
  wrapperClassName: string
  text: string
  className: string
  speed: number
}

export const HoverText: React.FC<HoverTextProps> = ({
  wrapperClassName,
  text,
  speed,
  className,
}) => {
  const letters = text.split('')

  const wrapperClasses = cn(
    'flex duration-700 hover:pl-10 group whitespace-pre w-max',
    wrapperClassName,
  )
  const letterClasses = cn(
    'text-white text-8xl font-bold ',
    'group-hover:animate-outline-hover cursor-pointer duration',
    className,
  )

  return (
    <div className={wrapperClasses}>
      {letters.map((letter, index) => {
        const letterStyle = {
          animationDelay: `${index * speed}ms`,
          animationFillMode: 'forwards',
        }

        return (
          <p key={index} className={letterClasses} style={letterStyle}>
            {letter}
          </p>
        )
      })}
    </div>
  )
}
