import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiSearch, HiArrowRight, HiLightningBolt } from 'react-icons/hi'
import AnimatedButton from '../components/AnimatedButton'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import FloatingParticles from '../components/FloatingParticles'
import { faqs } from '../data/index'

const categories = ['All', 'General', 'Services', 'Pricing', 'Process', 'Technical']

const PageHero = () => (
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(255,214,0,0.07) 0%, transparent 70%)' }} />
    <FloatingParticles count={20} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-6" style={{ background: 'rgba(255,214,0,0.1)', border: '1px solid rgba(255,214,0,0.3)', color: '#FFD600' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#FFD600', boxShadow: '0 0 6px #FFD600' }} /> Got Questions?
        </span>
        <h1 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
          Answers to <span className="gradient-text-red">Everything</span>
        </h1>
        <p className="text-white/55 font-inter text-xl max-w-2xl mx-auto leading-relaxed">
          We've answered every question we've ever received so you can move forward with total confidence.
        </p>
      </motion.div>
    </div>
  </section>
)

const FAQsSection = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [focused, setFocused] = useState(false)

  const filtered = faqs.filter(f => {
    const matchCat = activeCategory === 'All' || f.category === activeCategory
    const matchSearch = !search
      || f.question.toLowerCase().includes(search.toLowerCase())
      || f.answer.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <section className="py-10 sm:py-16 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Search + filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <HiSearch size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--theme-t3)' }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search questions..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm font-inter text-white placeholder-white/25 outline-none transition-all duration-200"
              style={{
                background: 'var(--theme-input)',
                border: focused ? '1px solid rgba(255,214,0,0.5)' : '1px solid var(--theme-border-2)',
                boxShadow: focused ? '0 0 15px rgba(255,214,0,0.08)' : 'none',
                color: 'var(--theme-t1)',
              }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2.5 rounded-xl text-xs font-space font-semibold transition-all duration-200 cursor-pointer"
                style={
                  activeCategory === cat
                    ? { background: 'rgba(255,214,0,0.15)', border: '1px solid rgba(255,214,0,0.5)', color: '#FFD600' }
                    : { background: 'var(--theme-input)', border: '1px solid var(--theme-border-2)', color: 'var(--theme-t3)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="text-white/35 text-sm font-inter mb-6">
          Showing {filtered.length} question{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
          {search ? ` matching "${search}"` : ''}
        </p>

        {filtered.length > 0 ? (
          <FAQAccordion faqs={filtered} />
        ) : (
          <div className="text-center py-16">
            <p className="text-white/40 font-inter mb-6">No questions found. Try a different search.</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All') }} className="text-sm font-space font-semibold transition-colors" style={{ color: '#FFD600' }}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

const StillHaveQuestions = () => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <div className="container mx-auto max-w-3xl">
      <div
        className="text-center p-6 sm:p-10 lg:p-12 rounded-3xl relative overflow-hidden"
        style={{ background: 'var(--theme-surface-2)', border: '1px solid rgba(255,214,0,0.15)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(255,214,0,0.04) 0%, transparent 70%)' }} />
        <div className="relative z-10">
          <SectionHeading badge="Still Curious?" title="Didn't Find Your" highlight="Answer?" center subtitle="Our team is standing by to answer any question you have, no matter how specific." highlightVariant="red" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/contact"><AnimatedButton size="lg">Ask Us Directly <HiArrowRight size={18} /></AnimatedButton></Link>
            <Link to="/services"><AnimatedButton variant="ghost" size="lg">Explore Services</AnimatedButton></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const CTASection = () => (
  <section className="py-20 relative overflow-hidden">
    <FloatingParticles count={20} />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,214,0,0.06) 0%, transparent 70%)' }} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-7" style={{ background: 'rgba(255,214,0,0.1)', border: '1px solid rgba(255,214,0,0.3)', color: '#FFD600' }}>
          <HiLightningBolt size={13} /> Ready To Start?
        </span>
        <h2 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Knowledge = Confidence.<br /><span className="gradient-text-red">Action = Growth.</span>
        </h2>
        <p className="text-white/55 font-inter text-lg max-w-xl mx-auto mb-10">
          Now that you know everything, there's only one thing left to do. Let's build something extraordinary together.
        </p>
        <Link to="/contact"><AnimatedButton size="lg">Book Free Strategy Call <HiArrowRight size={18} /></AnimatedButton></Link>
      </motion.div>
    </div>
  </section>
)

const FAQs = () => (
  <>
    <PageHero />
    <FAQsSection />
    <StillHaveQuestions />
    <CTASection />
  </>
)

export default FAQs
