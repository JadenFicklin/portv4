/**
 * Utility functions for handling scroll behavior consistently across the app
 */

/**
 * Scrolls to the top of the page
 * @param immediate Whether to scroll immediately or with animation
 */
export const scrollToTop = (immediate: boolean = true) => {
  window.scrollTo({
    top: 0,
    behavior: immediate ? 'auto' : 'smooth',
  })
}

/**
 * Scrolls to a specific position
 * @param position The position to scroll to
 * @param options Scroll options
 */
export const scrollToPosition = (
  position: number,
  options: { duration?: number; immediate?: boolean } = {},
) => {
  window.scrollTo({
    top: position,
    behavior: options.immediate ? 'auto' : 'smooth',
  })
}
