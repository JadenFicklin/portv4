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

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return null
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
