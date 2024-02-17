import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing } from '~/pages/Landing'
import { Archive } from '~/pages/Archive'
import { useEffect } from 'react'
import { useThemeStore } from '~/globalState/themeStore'
import {
  lightTheme,
  darkTheme,
  binary,
  cherryBlossom,
  blueTheme,
} from '~/data/themeConfig'

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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  )
}
