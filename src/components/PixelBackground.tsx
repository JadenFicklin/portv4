import { motion } from 'framer-motion'
import { cn } from '~/utils/cn'

interface PixelBackgroundProps {
  theme: string
}

const PixelBackground: React.FC<PixelBackgroundProps> = ({ theme }) => {
  const pixels = Array.from({ length: 100 }, () => ({
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2,
  }))

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className={cn(
          'grid grid-cols-10 gap-1 w-full h-full p-1',
          'transform -skew-y-12',
          theme === 'dark' ? 'opacity-30' : 'opacity-20',
        )}
      >
        {pixels.map((pixel, i) => (
          <motion.div
            key={i}
            className={cn(
              'w-full h-full rounded-sm',
              theme === 'dark' ? 'bg-max/[0.15]' : 'bg-max/[0.1]',
            )}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: pixel.duration,
              repeat: Infinity,
              delay: pixel.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default PixelBackground
