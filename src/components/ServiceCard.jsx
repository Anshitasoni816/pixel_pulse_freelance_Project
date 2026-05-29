import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaSearch, FaBullseye, FaHashtag, FaPaintBrush,
  FaDesktop, FaFileAlt, FaUsers, FaEnvelope
} from 'react-icons/fa'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const iconMap = {
  search: FaSearch,
  bullseye: FaBullseye,
  hashtag: FaHashtag,
  paint: FaPaintBrush,
  desktop: FaDesktop,
  file: FaFileAlt,
  users: FaUsers,
  envelope: FaEnvelope,
}

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = iconMap[service.icon] || FaSearch

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl p-7 cursor-pointer group transition-all duration-500 overflow-hidden"
      style={{
        background: hovered
          ? `rgba(${hexToRgb(service.color)}, 0.06)`
          : 'var(--theme-surface)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: hovered
          ? `1px solid ${service.color}50`
          : '1px solid var(--theme-border)',
        boxShadow: hovered ? `0 0 40px ${service.color}20` : 'none',
      }}
    >
      {service.tag && (
        <span
          className="absolute top-4 right-4 text-xs font-space font-bold px-3 py-1 rounded-full"
          style={{
            background: `${service.color}20`,
            color: service.color,
            border: `1px solid ${service.color}40`,
          }}
        >
          {service.tag}
        </span>
      )}

      {/* Animated corner glow */}
      <motion.div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(circle, ${service.color}30 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
        style={{
          background: `${service.color}18`,
          border: `1px solid ${service.color}30`,
          boxShadow: hovered ? `0 0 20px ${service.color}40` : 'none',
        }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </div>

      <h3 className="font-space font-bold text-xl mb-3 transition-colors" style={{ color: 'var(--theme-t1)' }}>
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed font-inter mb-6 flex-1" style={{ color: 'var(--theme-t2)' }}>
        {service.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2 mb-7">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs font-inter" style={{ color: 'var(--theme-t3)' }}>
            <HiCheckCircle size={14} style={{ color: service.color, flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>

      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-sm font-space font-semibold transition-all duration-200 group/link"
        style={{ color: service.color }}
      >
        Learn More
        <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
          <HiArrowRight size={16} />
        </motion.span>
      </Link>
    </motion.div>
  )
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 92, 255'
}

export default ServiceCard
