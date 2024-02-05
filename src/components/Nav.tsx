import { FadeIn } from '~/utils/FadeIn'
import { cn } from '~/utils/cn'

export const Nav = () => {
  return (
    <div
      className={cn('fixed top-0 z-30 flex justify-center w-full py-6 h-min')}
    >
      <FadeIn
        text="JADEN FICKLIN"
        styling="text-lg font-bold tracking-wide -skew-x-[15deg] text-text"
        delay={6000}
      />
    </div>
  )
}
