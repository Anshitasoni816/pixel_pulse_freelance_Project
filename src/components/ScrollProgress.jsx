import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setScrollProgress(total > 0 ? current / total : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px]" style={{ background: 'var(--theme-border-2)' }}>
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: scrollProgress,
          background: 'linear-gradient(90deg, #005CFF, #9D00FF, #FF2B2B)',
          boxShadow: '0 0 10px rgba(0, 92, 255, 0.8)',
        }}
      />
    </div>
  )
}

export default ScrollProgress
