import { BrowserRouter, Route, Routes, useLocation } from 'react-router'

import { Home } from '../../pages/Home'
import { About } from '../../pages/About'
import { NotFound } from '../../pages/NotFound'
import { useEffect } from 'react'
import { History } from '../../pages/History'
import { Settings } from '../../pages/Settings'
import { Project } from '../../pages/Project'

function ScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about-pomodoro" element={<About />} />
        <Route path="/about-project" element={<Project />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  )
}
