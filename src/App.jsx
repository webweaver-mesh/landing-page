import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Business from './pages/Business.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Pricing from './pages/Pricing.jsx'
import Pro from './pages/Pro.jsx'
import SampleTemplates from './pages/SampleTemplates.jsx'
import Starter from './pages/Starter.jsx'
import Theater from './pages/templates/Theater.jsx'
import WineTrader from './pages/templates/WineTrader.jsx'
import FashionShow from './pages/templates/FashionShow.jsx'
import Techstartup from './pages/templates/Techstartup.jsx'
import Retro from './pages/templates/Retro.jsx'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    if (!id) return

    // Let the route render before scrolling.
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => cancelAnimationFrame(raf)
  }, [location.hash, location.pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sample-templates" element={<SampleTemplates />} />
        <Route path="/templates/theater" element={<Theater />} />
        <Route path="/templates/winetrader" element={<WineTrader />} />
        <Route path="/templates/fashionshow" element={<FashionShow />} />
        <Route path="/templates/techstartup" element={<Techstartup />} />
        <Route path="/templates/retro" element={<Retro />} />
        <Route path="/starter" element={<Starter />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/business" element={<Business />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
