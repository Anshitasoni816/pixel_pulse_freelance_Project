import { useMemo } from 'react'
import { motion } from 'framer-motion'

const FloatingParticles = ({ count = 40, className = '' }) => {
  const particles = useMemo(() => {
    const colors = ['#005CFF', '#FF2B2B', '#00C853', '#FFD600', '#9D00FF', '#00F5FF']
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: colors[i % colors.length],
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 4,
      yMove: Math.random() * 40 + 10,
    }))
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          animate={{
            y: [0, -p.yMove, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
