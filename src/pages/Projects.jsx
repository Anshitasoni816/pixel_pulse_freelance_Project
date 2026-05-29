import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiLightningBolt } from 'react-icons/hi'
import AnimatedButton from '../components/AnimatedButton'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import FloatingParticles from '../components/FloatingParticles'
import { projects } from '../data/index'

const categories = ['All', 'Branding', 'SEO', 'Social Media', 'Meta Ads', 'Web Design', 'Lead Generation', 'Content Marketing', 'Email Marketing']

const PageHero = () => (
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,200,83,0.08) 0%, transparent 70%)' }} />
    <FloatingParticles count={25} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-6" style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.3)', color: '#00C853' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00C853', boxShadow: '0 0 6px #00C853' }} /> Our Portfolio
        </span>
        <h1 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
          Work That <span className="gradient-text-green">Speaks Louder</span>
        </h1>
        <p className="text-white/55 font-inter text-xl max-w-2xl mx-auto leading-relaxed">
          Real campaigns, real results. Explore the projects that made our clients industry leaders.
        </p>
      </motion.div>
    </div>
  </section>
)

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter || p.tags.includes(activeFilter))

  return (
    <section className="py-10 sm:py-16 relative">
      <div className="container mx-auto">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 sm:mb-12 justify-center sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-lg text-sm font-space font-semibold transition-all duration-200 cursor-pointer"
              style={
                activeFilter === cat
                  ? { background: 'rgba(0,200,83,0.15)', border: '1px solid rgba(0,200,83,0.5)', color: '#00C853', boxShadow: '0 0 15px rgba(0,200,83,0.15)' }
                  : { background: 'var(--theme-input)', border: '1px solid var(--theme-border-2)', color: 'var(--theme-t3)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 font-inter">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}

const StatsStrip = () => (
  <section className="py-8 sm:py-12 relative">
    <div className="container mx-auto">
      <div
        className="rounded-2xl p-5 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8"
        style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
      >
        {[
          { value: '9+', label: 'Industries', color: '#005CFF' },
          { value: '$10M+', label: 'Client Revenue', color: '#00C853' },
          { value: '1200+', label: 'Campaigns Run', color: '#FFD600' },
          { value: '98%', label: 'Client Retention', color: '#FF2B2B' },
        ].map(({ value, label, color }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <div className="font-orbitron font-black text-3xl mb-1" style={{ color }}>{value}</div>
            <div className="text-white/45 text-sm font-inter">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const CTASection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
    <FloatingParticles count={20} />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,200,83,0.07) 0%, transparent 70%)' }} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-7" style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.3)', color: '#00C853' }}>
          <HiLightningBolt size={13} /> Your Project Next
        </span>
        <h2 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Ready to Add Your Brand<br /><span className="gradient-text-green">to Our Portfolio?</span>
        </h2>
        <p className="text-white/55 font-inter text-lg max-w-xl mx-auto mb-10">
          Let's create a case study worth showing off. Book your free strategy call today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact"><AnimatedButton size="lg" variant="green">Start Your Project <HiArrowRight size={18} /></AnimatedButton></Link>
          <Link to="/services"><AnimatedButton variant="ghost" size="lg">View Services</AnimatedButton></Link>
        </div>
      </motion.div>
    </div>
  </section>
)

const Projects = () => (
  <>
    <PageHero />
    <PortfolioSection />
    <StatsStrip />
    <CTASection />
  </>
)

export default Projects
