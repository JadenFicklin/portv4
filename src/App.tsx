import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing } from '~/pages/Landing'
import { Archive } from '~/pages/Archive'
import { Nav } from '~/components/Nav'
import { useSmoothScroll } from '~/utils/useSmoothScroll'

export const App = () => {
  useSmoothScroll('#root')

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  )
}
