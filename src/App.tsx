import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { Landing } from '~/pages/Landing'
import { Archive } from '~/pages/Archive'
import CaseStudy from '~/pages/CaseStudy'
import { useEffect } from 'react'
import { useThemeStore } from '~/globalState/themeStore'
import {
  lightTheme,
  darkTheme,
  binary,
  cherryBlossom,
  blueTheme,
} from '~/data/themeConfig'
import Lenis from '@studio-freight/lenis'
import { scrollToTop, stopScrolling } from '~/utils/scrollUtils'

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop(true) // Use our utility function
  }, [pathname])

  return null
}

// Declare global lenis instance type
declare global {
  interface Window {
    lenis: Lenis
  }
}

export const App = () => {
  const { theme } = useThemeStore()

  useEffect(() => {
    const themes = {
      light: lightTheme,
      dark: darkTheme,
      binary,
      cherryBlossom,
      blueTheme,
    }
    const themeColors = themes[theme]
    Object.entries(themeColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
  }, [theme])

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      touchMultiplier: 2.5,
      smoothWheel: true,
      wheelMultiplier: 1.2,
      infinite: false,
      syncTouch: true,
      gestureOrientation: 'vertical',
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Make lenis instance available globally for manual scrolling
    window.lenis = lenis

    // Stop scrolling animation on route change
    const stopScrolling = () => {
      lenis.stop()
      setTimeout(() => lenis.start(), 100)
    }

    window.addEventListener('popstate', stopScrolling)

    return () => {
      window.removeEventListener('popstate', stopScrolling)
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/casestudy/:slug" element={<CaseStudy />} />
      </Routes>
    </Router>
  )
}
