import { cn } from '~/utils/cn'

interface HoverTextProps {
  text: string
  className: string
  speed: number
}

export const HoverText: React.FC<HoverTextProps> = ({
  text,
  speed,
  className,
}) => {
  const letters = text.split('')

  const wrapperClasses =
    'flex duration-300 hover:ml-10 group whitespace-pre w-max'
  const letterClasses = cn(
    'text-white text-[100px] font-bold',
    'group-hover:animate-outline-hover cursor-pointer',
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
