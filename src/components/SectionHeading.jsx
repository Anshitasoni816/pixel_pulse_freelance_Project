import { motion } from 'framer-motion'

const SectionHeading = ({
  badge,
  title,
  highlight,
  subtitle,
  center = false,
  highlightVariant = 'blue',
}) => {
  const gradients = {
    blue: 'gradient-text',
    red: 'gradient-text-red',
    green: 'gradient-text-green',
    white: 'gradient-text-white',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={center ? 'text-center' : ''}
    >
      {badge && (
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-5"
          style={{
            background: 'rgba(0,92,255,0.1)',
            border: '1px solid rgba(0,92,255,0.3)',
            color: '#005CFF',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#005CFF', boxShadow: '0 0 6px #005CFF' }}
          />
          {badge}
        </span>
      )}

      <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4" style={{ color: 'var(--theme-t1)' }}>
        {title}{' '}
        {highlight && (
          <span className={gradients[highlightVariant]}>{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg leading-relaxed max-w-2xl font-inter" style={{ color: 'var(--theme-t2)' }}>
          {subtitle}
        </p>
      )}

      {!center && (
        <div className="section-divider mt-6" />
      )}

      {center && (
        <div className="flex justify-center mt-6">
          <div className="section-divider" />
        </div>
      )}
    </motion.div>
  )
}

export default SectionHeading
