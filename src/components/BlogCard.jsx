import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiClock, HiUser } from 'react-icons/hi'
import { HiCalendar } from 'react-icons/hi2'

const BlogCard = ({ post, index, featured = false }) => {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden col-span-full lg:col-span-2 group cursor-pointer"
        style={{
          background: 'var(--theme-surface-2)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--theme-border)',
        }}
      >
        {/* Featured thumbnail */}
        <div
          className="relative h-64 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${post.color}30, ${post.color}10)`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${post.color}15 1px, transparent 1px), linear-gradient(90deg, ${post.color}15 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-orbitron font-black text-8xl opacity-10"
              style={{ color: post.color }}
            >
              {post.category.charAt(0)}
            </span>
          </div>
          <div
            className="absolute top-4 left-4 text-xs font-space font-bold px-3 py-1.5 rounded-full"
            style={{
              background: `${post.color}25`,
              color: post.color,
              border: `1px solid ${post.color}50`,
            }}
          >
            ★ Featured · {post.category}
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <h2 className="font-space font-bold text-xl sm:text-2xl mb-3 transition-all duration-300 leading-tight" style={{ color: 'var(--theme-t1)' }}>
            {post.title}
          </h2>
          <p className="font-inter leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base" style={{ color: 'var(--theme-t2)' }}>{post.excerpt}</p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-inter" style={{ color: 'var(--theme-t3)' }}>
              <span className="flex items-center gap-1.5">
                <HiUser size={12} style={{ color: post.color }} /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <HiCalendar size={12} style={{ color: post.color }} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <HiClock size={12} style={{ color: post.color }} /> {post.readTime}
              </span>
            </div>
            <Link
              to={`/blog/${post.id}`}
              className="flex items-center gap-2 text-sm font-space font-semibold group/link transition-all duration-200 shrink-0"
              style={{ color: post.color }}
            >
              Read More <HiArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-400 hover:scale-[1.02]"
      style={{
        background: 'var(--theme-surface)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--theme-border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${post.color}40`
        e.currentTarget.style.boxShadow = `0 0 30px ${post.color}15`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--theme-border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        className="h-44 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${post.color}25, ${post.color}08)` }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${post.color}12 1px, transparent 1px), linear-gradient(90deg, ${post.color}12 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-orbitron font-black text-6xl opacity-10" style={{ color: post.color }}>
            {post.category.charAt(0)}
          </span>
        </div>
        <span
          className="absolute top-3 left-3 text-xs font-space font-bold px-2.5 py-1 rounded-full"
          style={{ background: `${post.color}25`, color: post.color, border: `1px solid ${post.color}40` }}
        >
          {post.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-space font-bold text-base mb-2 leading-snug line-clamp-2" style={{ color: 'var(--theme-t1)' }}>
          {post.title}
        </h3>
        <p className="text-sm font-inter leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--theme-t2)' }}>{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-inter" style={{ color: 'var(--theme-t4)' }}>
            <span className="flex items-center gap-1">
              <HiClock size={11} style={{ color: post.color }} /> {post.readTime}
            </span>
            <span>{post.date}</span>
          </div>
          <HiArrowRight size={16} style={{ color: post.color }} className="group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </motion.article>
  )
}

export default BlogCard
