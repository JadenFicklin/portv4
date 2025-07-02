import { useEffect, useState } from 'react'

interface ImagePreloaderProps {
  images: string[]
  children: React.ReactNode
}

const LoadingSpinner = () => (
  <div className="flex fixed inset-0 justify-center items-center bg-min">
    <div className="w-10 h-10 rounded-full border-4 animate-spin border-max/20 border-t-max/80" />
  </div>
)

export const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  images,
  children,
}) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [, setAllLoaded] = useState(false)

  useEffect(() => {
    // Reset state when images array changes
    setLoadedImages(new Set())
    setAllLoaded(false)

    // Load each image
    images.forEach((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
      img.onload = () => {
        setLoadedImages((prev) => {
          const next = new Set(prev)
          next.add(imageSrc)
          // Check if all images are loaded
          if (next.size === images.length) {
            setAllLoaded(true)
          }
          return next
        })
      }
      img.onerror = () => {
        console.warn(`Failed to load image: ${imageSrc}`)
        setLoadedImages((prev) => {
          const next = new Set(prev)
          next.add(imageSrc) // Count errored images as loaded to prevent hanging
          // Check if all images are loaded
          if (next.size === images.length) {
            setAllLoaded(true)
          }
          return next
        })
      }
    })
  }, [images])

  // Show loading spinner only if no images have loaded yet
  if (loadedImages.size === 0) {
    return <LoadingSpinner />
  }

  // Show content once at least some images have loaded
  return <>{children}</>
}
