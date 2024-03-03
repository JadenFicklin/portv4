import { useState } from 'react'
import { cn } from '~/utils/cn'
import { Drawer } from '~/components/Drawer'

type FAQDrawerProps = {
  number: number
  title: string
  duration?: string
  showNumbers?: boolean
  children: React.ReactNode
  className?: string
  showPlus?: boolean
  showUnderline?: boolean
}

export const FAQDrawer: React.FC<FAQDrawerProps> = (props) => {
  const {
    number,
    title,
    duration = '200ms',
    showNumbers,
    children,
    className,
    showPlus,
    showUnderline,
  } = props
  const [show, setShow] = useState(false)

  const toggle = () => setShow(!show)

  const order = number < 10 ? `0${number}` : String(number)

  const splitOrder = order.split('')
  const splitTitle = title.split(' ')

  const determineDirection = (items: string[]) => {
    return items.map((item, index): AnimatedWords => {
      const direction = index % 2 ? 'up' : 'down'
      return { item, direction }
    })
  }

  const animatedOrder = determineDirection(splitOrder)
  const animatedTitle = determineDirection(splitTitle)

  const wrapperClasses = cn(
    'py-8 relative group border-b border-max cursor-pointer',
    className,
    !showUnderline && 'border-none',
  )
  const handleClasses = 'flex items-center justify-between'
  const hoverBorder = cn(
    'absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-max duration-500 ease-in-out bg-max',
    !showUnderline && 'hidden',
  )
  return (
    <div className={wrapperClasses} onClick={toggle}>
      <div className={handleClasses}>
        <div className="flex gap-6">
          {showNumbers && (
            <AnimatedWords
              words={animatedOrder}
              className="text-base md:text-xl gap-0.5"
            />
          )}
          <AnimatedWords
            words={animatedTitle}
            className="gap-2 text-xl xs:text-2xl sm:text-3xl md:text-4xl"
          />
        </div>
        {showPlus && (
          <div className="relative size-7">
            <div
              className={cn(
                'absolute w-full h-[3px] -translate-y-1/2 bg-max top-1/2 duration-200 rounded-full',
                show ? 'rotate-180 ' : ' rotate-0',
              )}
            ></div>
            <div
              className={cn(
                'absolute duration-200 w-[3px] h-full -translate-x-1/2 bg-max left-1/2 rounded-full',
                show ? 'rotate-90 ' : ' rotate-0',
              )}
            ></div>
          </div>
        )}
      </div>
      <Drawer show={show} duration={duration}>
        {children}
      </Drawer>
      <div className={hoverBorder} />
    </div>
  )
}

type AnimatedWords = {
  item: string
  direction: 'up' | 'down'
}

type AnimatedWordsProps = {
  words: AnimatedWords[]
  className?: string
}

const AnimatedWords: React.FC<AnimatedWordsProps> = (props) => {
  const { words, className } = props

  const wrapperClasses = cn('flex self-start overflow-hidden', className)

  return (
    <div className={wrapperClasses}>
      {words.map(({ item, direction }, index) => {
        const isUp = direction === 'up'
        const isDown = direction === 'down'

        const wordClasses = 'duration-700'

        const initialWordClassIsUp = 'absolute top-0 group-hover:-top-[200%]'
        const replacementWordClassIsUp = 'absolute top-[200%] group-hover:top-0'

        const initialWordClasses = cn(
          wordClasses,
          isUp && initialWordClassIsUp,
          isDown && 'absolute -top-[200%] group-hover:top-0',
        )

        const replacementWordClasses = cn(
          wordClasses,
          isUp && replacementWordClassIsUp,
          isDown && 'absolute top-0 group-hover:top-[200%]',
        )

        return (
          <div className="relative flex flex-col text-max" key={index}>
            <span className="opacity-0">{item}</span>
            <span className={initialWordClasses}>{item}</span>
            <span className={replacementWordClasses}>{item}</span>
          </div>
        )
      })}
    </div>
  )
}
