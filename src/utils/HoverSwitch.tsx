import { cn } from '~/utils/cn'

interface HoverSwitchProps {
  textOne: string
  textTwo: string
  className: string
  speed: number
}

export const HoverSwitch: React.FC<HoverSwitchProps> = ({
  textOne,
  textTwo,
  className,
  speed,
}) => {
  console.log(speed)
  return (
    <div
      className={cn(
        'flex bg-blue-500 w-max overflow-hidden group cursor-pointer',
        className,
      )}
    >
      <p className="relative top-0 duration-300 group-hover:-top-full">
        {textOne}
      </p>
      <div className="relative bottom-0 whitespace-pre duration-300 group-hover:-bottom-[20px]">
        <p>{textTwo}</p>
        <p>{textTwo}</p>
      </div>
    </div>
  )
}
