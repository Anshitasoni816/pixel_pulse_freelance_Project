import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiSearch, HiArrowRight } from 'react-icons/hi'
import AnimatedButton from '../components/AnimatedButton'
import SectionHeading from '../components/SectionHeading'
import BlogCard from '../components/BlogCard'
import FloatingParticles from '../components/FloatingParticles'
import { blogPosts } from '../data/index'

const categories = ['All', 'SEO', 'Meta Ads', 'Social Media', 'Branding', 'Email Marketing', 'Web Design']

const PageHero = () => (
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,245,255,0.07) 0%, transparent 70%)' }} />
    <FloatingParticles count={20} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-6" style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.3)', color: '#00F5FF' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00F5FF', boxShadow: '0 0 6px #00F5FF' }} /> Growth Insights
        </span>
        <h1 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
          The <span className="gradient-text-green">Pixel Pulse</span> Blog
        </h1>
        <p className="text-white/55 font-inter text-xl max-w-2xl mx-auto leading-relaxed">
          Actionable insights, proven strategies, and deep-dives on digital marketing that actually drives growth.
        </p>
      </motion.div>
    </div>
  </section>
)

const BlogSection = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [focused, setFocused] = useState(false)

  const featuredPost = blogPosts.find(p => p.featured)
  const restPosts = blogPosts.filter(p => !p.featured)

  const filtered = restPosts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <section className="py-10 sm:py-16 relative">
      <div className="container mx-auto">
        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <HiSearch size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--theme-t3)' }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 rounded-xl text-sm font-inter text-white placeholder-white/30 outline-none transition-all duration-200"
              style={{
                background: 'var(--theme-input)',
                border: focused ? '1px solid rgba(0,245,255,0.5)' : '1px solid var(--theme-border-2)',
                boxShadow: focused ? '0 0 15px rgba(0,245,255,0.1)' : 'none',
                color: 'var(--theme-t1)',
              }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-3 py-2 rounded-lg text-xs font-space font-semibold transition-all duration-200 cursor-pointer"
                style={
                  activeCategory === cat
                    ? { background: 'rgba(0,245,255,0.15)', border: '1px solid rgba(0,245,255,0.5)', color: '#00F5FF' }
                    : { background: 'var(--theme-input)', border: '1px solid var(--theme-border-2)', color: 'var(--theme-t3)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured post */}
        {featuredPost && activeCategory === 'All' && !search && (
          <div className="mb-10">
            <BlogCard post={featuredPost} featured={true} />
          </div>
        )}

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 font-inter">No articles found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,245,255,0.05) 0%, transparent 70%)' }} />
      <div className="container mx-auto relative z-10">
        <div
          className="max-w-2xl mx-auto text-center p-6 sm:p-10 lg:p-12 rounded-3xl"
          style={{ background: 'var(--theme-surface-2)', border: '1px solid rgba(0,245,255,0.15)', boxShadow: '0 0 60px rgba(0,245,255,0.05)' }}
        >
          <SectionHeading badge="Newsletter" title="Get Weekly" highlight="Growth Tips" center subtitle="Join 10,000+ marketers receiving our best insights every Tuesday." highlightVariant="green" />
          {sent ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
              <p className="text-green-400 font-space font-semibold">🎉 You're subscribed! Check your inbox.</p>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 min-w-0 px-4 py-3.5 rounded-xl text-sm font-inter text-white placeholder-white/25 outline-none transition-all duration-200"
                style={{ background: 'var(--theme-input)', border: '1px solid var(--theme-border-2)', color: 'var(--theme-t1)' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,245,255,0.5)' }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--theme-border-2)' }}
              />
              <AnimatedButton onClick={() => setSent(true)} variant="green">Subscribe <HiArrowRight size={16} /></AnimatedButton>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const Blog = () => (
  <>
    <PageHero />
    <BlogSection />
    <NewsletterSection />
  </>
)

export default Blog
