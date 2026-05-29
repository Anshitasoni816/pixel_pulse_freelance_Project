import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const checkCursor = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (el) {
        const style = window.getComputedStyle(el)
        setIsPointer(style.cursor === 'pointer')
      }
    }
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousemove', checkCursor, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkCursor)
    }
  }, [])

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: isPointer ? 1.8 : 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.5 }}
        style={{
          width: 40,
          height: 40,
          background: 'radial-gradient(circle, rgba(0,92,255,0.15) 0%, transparent 70%)',
          border: '1px solid rgba(0, 92, 255, 0.4)',
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          width: 8,
          height: 8,
          background: '#005CFF',
          boxShadow: '0 0 10px rgba(0, 92, 255, 1)',
        }}
      />
    </>
  )
}

export default CursorGlow
