import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing } from '~/pages/Landing'
import { Archive } from '~/pages/Archive'
import { Nav } from '~/components/Nav'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="w-full min-h-screen bg-background text-text">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
)
