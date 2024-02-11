import { cn } from '~/utils/cn'

interface HoverSwitchProps {
  textOne: string
  textTwo: string
  className: string
}

export const HoverSwitch: React.FC<HoverSwitchProps> = ({
  textOne,
  textTwo,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex w-max overflow-hidden group relative cursor-pointer',
        className,
      )}
    >
      <div className="relative whitespace-pre group">
        <p className="opacity-0">{textOne}</p>
        <p className="absolute duration-500 group-hover:bottom-[0%] -bottom-[150%] ease-in-out">
          {textOne}
        </p>
        <p className="absolute duration-500 top-[0%] group-hover:-top-[150%] ease-in-out">
          {textOne}
        </p>
      </div>
      <div className="relative whitespace-pre group">
        <p className="opacity-0">{textTwo}</p>
        <p className="absolute duration-500 group-hover:top-[0%] -top-[150%] ease-in-out">
          {textTwo}
        </p>
        <p className="absolute duration-500 bottom-[0%] group-hover:-bottom-[150%] ease-in-out">
          {textTwo}
        </p>
      </div>
    </div>
  )
}
