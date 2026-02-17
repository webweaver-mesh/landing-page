import { useEffect } from 'react'
import Home from './Home.jsx'

export default function Pricing() {
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById('pricing')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return <Home />
}

