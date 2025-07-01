import Lenis from '@studio-freight/lenis'

// Declare global lenis instance type
declare global {
  interface Window {
    lenis: Lenis
  }
}

/**
 * Utility functions for handling scroll behavior consistently across the app
 */

/**
 * Scrolls to the top of the page using the global Lenis instance
 * @param immediate Whether to scroll immediately or with animation
 */
export const scrollToTop = (immediate: boolean = true) => {
  if (window.lenis) {
    window.lenis.scrollTo(0, { immediate })
  }
}

/**
 * Scrolls to a specific position using the global Lenis instance
 * @param position The position to scroll to
 * @param options Scroll options
 */
export const scrollToPosition = (
  position: number,
  options: { duration?: number; immediate?: boolean } = {},
) => {
  if (window.lenis) {
    window.lenis.scrollTo(position, {
      duration: options.duration || 1.2,
      immediate: options.immediate || false,
    })
  }
}

/**
 * Stops the current scroll animation
 */
export const stopScrolling = () => {
  if (window.lenis) {
    window.lenis.stop()
    setTimeout(() => window.lenis.start(), 100)
  }
}
