import { cn } from '~/utils/cn'
import Video from '~/assets/videos/GroupAtWork.mp4'

export const PageLoadMobile = () => {
  return (
    <div className="block xxl:hidden">
      <video
        className={cn(
          'mt-10 w-[90vw] h-[60vh] object-cover mx-auto duration-700',
        )}
        src={Video}
        autoPlay
        muted
        loop
      />
    </div>
  )
}

// ,
