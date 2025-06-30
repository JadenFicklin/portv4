import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useThemeStore } from '~/globalState/themeStore'

// Add a hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

interface ImageModalProps {
  images: { src: string; description: string }[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export const ImageModal: React.FC<ImageModalProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 })
  const [imageLoaded, setImageLoaded] = useState(false)
  const { theme } = useThemeStore()
  const isMobile = useIsMobile()

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image()
      img.src = image.src
    })
  }, [images])

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
      setIsZoomed(false)
      setImageLoaded(false)
    }
  }, [isOpen, initialIndex])

  // Image navigation
  const navigateImages = useCallback(
    (direction: 'prev' | 'next') => {
      if (isZoomed) return

      setImageLoaded(false)
      setCurrentIndex((prev) => {
        if (direction === 'prev') {
          return prev === 0 ? images.length - 1 : prev - 1
        } else {
          return prev === images.length - 1 ? 0 : prev + 1
        }
      })
    },
    [isZoomed, images.length],
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowLeft':
          navigateImages('prev')
          break
        case 'ArrowRight':
          navigateImages('next')
          break
        case 'Escape':
          onClose()
          break
        case ' ':
          e.preventDefault()
          setIsZoomed((prev) => !prev)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, navigateImages])

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStart.x
    const deltaY = e.changedTouches[0].clientY - touchStart.y

    // Only handle horizontal swipes
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        navigateImages('prev')
      } else {
        navigateImages('next')
      }
    }
  }

  // Prevent scroll when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isZoomed])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 backdrop-blur-xl"
            style={{
              backgroundColor:
                theme === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
            }}
          />

          {/* Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative z-10 w-full max-w-7xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 rounded-full bg-min/80 text-max hover:bg-min transition-colors z-50"
            >
              <FiX size={24} />
            </button>

            <div className="flex flex-col">
              {/* Image Container */}
              <div
                className="relative overflow-hidden rounded-lg shadow-2xl aspect-video bg-min/20"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Loading Indicator */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-max/20 border-t-max/80 rounded-full animate-spin" />
                  </div>
                )}

                {/* Main Image */}
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].description}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: imageLoaded ? 1 : 0,
                    scale: isZoomed ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  onLoad={() => setImageLoaded(true)}
                  style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                {/* Navigation Buttons */}
                {!isZoomed && imageLoaded && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigateImages('prev')
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-min/80 text-max hover:bg-min transition-colors"
                    >
                      <FiChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigateImages('next')
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-min/80 text-max hover:bg-min transition-colors"
                    >
                      <FiChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Desktop Image Info Overlay (hidden on mobile) */}
                {!isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 right-0 bottom-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 hidden md:block"
                  >
                    <div className="p-4 bg-gradient-to-t from-min/95 via-min/90 to-transparent">
                      <div className="flex items-end justify-between">
                        <div className="flex-1 mr-4">
                          <p className="text-max/90 text-sm md:text-base mb-1 line-clamp-2">
                            {images[currentIndex].description}
                          </p>
                          <p className="text-max/60 text-xs md:text-sm">
                            {currentIndex + 1} of {images.length}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <div className="text-max/60 text-xs backdrop-blur-sm bg-min/30 px-3 py-1.5 rounded-full">
                            ← → Arrow keys to navigate • Space to zoom
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Mobile Info Section (shown below image) */}
              {isMobile && imageLoaded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-min/95 shadow-lg md:hidden"
                >
                  <div className="space-y-3">
                    <p className="text-max/90 text-sm">
                      {images[currentIndex].description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-max/60 text-xs">
                        {currentIndex + 1} of {images.length}
                      </p>
                      <div className="text-max/60 text-xs backdrop-blur-sm bg-min/30 px-3 py-1.5 rounded-full">
                        Swipe to navigate • Tap to zoom
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
