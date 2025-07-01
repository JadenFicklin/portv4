import { useEffect, useState } from 'react'

interface ImagePreloaderProps {
  images: string[]
  children: React.ReactNode
}

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-min">
    <div className="w-10 h-10 border-4 border-max/20 border-t-max/80 rounded-full animate-spin" />
  </div>
)

export const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  images,
  children,
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const imagePromises = images.map((imageSrc) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = imageSrc
        img.onload = resolve
        img.onerror = resolve // Resolve even on error to continue loading
      })
    })

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true)
    })
  }, [images])

  if (!imagesLoaded) {
    return <LoadingSpinner />
  }

  return <>{children}</>
}
