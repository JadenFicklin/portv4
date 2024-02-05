import { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar'

export const useSmoothScroll = (selector: string) => {
  useEffect(() => {
    const element = document.querySelector(selector) as HTMLElement | null
    if (element) {
      const scrollbar = Scrollbar.init(element, {
        damping: 0.07,
        renderByPixels: true,
      })

      return () => {
        scrollbar.destroy()
      }
    }
  }, [selector])
}
