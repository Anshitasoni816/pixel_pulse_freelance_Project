import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiStar } from 'react-icons/hi2'

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        border: hovered ? `1px solid ${project.bgColor}50` : '1px solid var(--theme-border)',
        boxShadow: hovered ? `0 0 40px ${project.bgColor}20` : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-52 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.bgColor}30, ${project.bgColor}10)`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 grid-bg opacity-30"
          style={{
            backgroundImage:
              `linear-gradient(${project.bgColor}20 1px, transparent 1px), linear-gradient(90deg, ${project.bgColor}20 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        {/* Center icon/letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 5 : 0 }}
            transition={{ duration: 0.4 }}
            className="w-20 h-20 rounded-2xl flex items-center justify-center font-orbitron font-black text-2xl"
            style={{
              background: `${project.bgColor}25`,
              border: `2px solid ${project.bgColor}50`,
              color: project.bgColor,
              boxShadow: `0 0 30px ${project.bgColor}40`,
            }}
          >
            {project.title.charAt(0)}
          </motion.div>
        </div>

        {/* Category tag */}
        <div
          className="absolute top-4 left-4 text-xs font-space font-bold px-3 py-1 rounded-full"
          style={{
            background: `${project.bgColor}25`,
            border: `1px solid ${project.bgColor}40`,
            color: project.bgColor,
          }}
        >
          {project.category}
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: `${project.bgColor}20`, backdropFilter: 'blur(4px)' }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-space font-semibold text-sm text-white"
                style={{
                  background: `linear-gradient(135deg, ${project.bgColor}, ${project.bgColor}cc)`,
                  boxShadow: `0 0 20px ${project.bgColor}50`,
                }}
              >
                View Project <HiArrowRight size={16} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div
        className="p-6"
        style={{
          background: 'var(--theme-surface-3)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-space px-2 py-0.5 rounded"
              style={{ background: 'var(--theme-input)', color: 'var(--theme-t3)' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-space font-bold text-lg mb-2" style={{ color: 'var(--theme-t1)' }}>
          {project.title}
        </h3>
        <p className="text-sm font-inter leading-relaxed mb-4" style={{ color: 'var(--theme-t2)' }}>
          {project.description}
        </p>
        <div
          className="inline-flex items-center gap-2 text-xs font-space font-bold px-3 py-1.5 rounded-lg"
          style={{
            background: `${project.bgColor}15`,
            color: project.bgColor,
            border: `1px solid ${project.bgColor}30`,
          }}
        >
          <HiStar size={12} />
          {project.result}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
