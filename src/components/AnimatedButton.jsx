import { motion } from 'framer-motion'

const variants = {
  primary: {
    bg: 'linear-gradient(135deg, #005CFF, #0040CC)',
    shadow: '0 0 20px rgba(0,92,255,0.4), 0 0 40px rgba(0,92,255,0.2)',
    hoverShadow: '0 0 30px rgba(0,92,255,0.7), 0 0 60px rgba(0,92,255,0.4)',
    border: 'none',
    text: '#ffffff',
  },
  outline: {
    bg: 'transparent',
    shadow: 'none',
    hoverShadow: '0 0 20px rgba(0,92,255,0.3)',
    border: '1px solid rgba(0,92,255,0.5)',
    text: 'var(--theme-t1)',
  },
  red: {
    bg: 'linear-gradient(135deg, #FF2B2B, #CC0000)',
    shadow: '0 0 20px rgba(255,43,43,0.4)',
    hoverShadow: '0 0 30px rgba(255,43,43,0.7), 0 0 60px rgba(255,43,43,0.4)',
    border: 'none',
    text: '#ffffff',
  },
  green: {
    bg: 'linear-gradient(135deg, #00C853, #009A3C)',
    shadow: '0 0 20px rgba(0,200,83,0.4)',
    hoverShadow: '0 0 30px rgba(0,200,83,0.7)',
    border: 'none',
    text: '#ffffff',
  },
  ghost: {
    bg: 'var(--theme-input)',
    shadow: 'none',
    hoverShadow: '0 0 20px rgba(0,92,255,0.15)',
    border: '1px solid var(--theme-border-3)',
    text: 'var(--theme-t1)',
  },
}

const AnimatedButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const v = variants[variant] || variants.primary
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center gap-2 font-space font-semibold rounded-lg tracking-wide cursor-pointer transition-all duration-300 overflow-hidden group ${sizeClasses[size]} ${className}`}
      style={{
        background: v.bg,
        boxShadow: v.shadow,
        border: v.border,
        color: v.text,
        opacity: disabled ? 0.5 : 1,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: v.hoverShadow,
      }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Shimmer overlay */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          transform: 'translateX(-100%)',
          animation: 'shimmer 1.5s infinite',
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )
}

export default AnimatedButton
