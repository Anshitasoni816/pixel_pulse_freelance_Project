import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { HiArrowRight, HiPlay, HiCheckCircle, HiLightningBolt, HiChevronDown } from 'react-icons/hi'
import { FaSearch, FaBullseye, FaHashtag, FaPaintBrush, FaDesktop, FaEnvelope } from 'react-icons/fa'
import AnimatedButton from '../components/AnimatedButton'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import PricingCard from '../components/PricingCard'
import TestimonialSlider from '../components/TestimonialSlider'
import FAQAccordion from '../components/FAQAccordion'
import FloatingParticles from '../components/FloatingParticles'
import { services, stats, testimonials, pricingPlans, faqs, processSteps, marqueeItems, projects } from '../data/index'

// ── Counter hook ──────────────────────────────────────────────────────────────
const useCounter = (target, duration = 2200, start = false) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

const StatItem = ({ stat, start }) => {
  const count = useCounter(stat.value, 2200, start)
  return (
    <div className="flex flex-col items-center text-center">
      <div className="font-orbitron font-black text-3xl sm:text-4xl md:text-5xl leading-none mb-2" style={{ color: stat.color }}>
        {stat.prefix || ''}{count}{stat.suffix}
      </div>
      <div className="text-sm font-inter" style={{ color: 'var(--theme-t2)' }}>{stat.label}</div>
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const HeroSection = () => {
  const floatingIcons = [
    { icon: FaSearch,     color: '#005CFF', x: '8%',  y: '22%', delay: 0   },
    { icon: FaBullseye,   color: '#FF2B2B', x: '89%', y: '16%', delay: 0.5 },
    { icon: FaHashtag,    color: '#00C853', x: '5%',  y: '68%', delay: 1   },
    { icon: FaDesktop,    color: '#9D00FF', x: '87%', y: '64%', delay: 0.8 },
    { icon: FaPaintBrush, color: '#FFD600', x: '14%', y: '84%', delay: 1.5 },
    { icon: FaEnvelope,   color: '#00F5FF', x: '81%', y: '80%', delay: 1.2 },
  ]

  const words = ['Growth.', 'Results.', 'Impact.']
  const wordsLen = words.length
  const [wordIdx, setWordIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setWordIdx((p) => (p + 1) % wordsLen), 2800)
    return () => clearInterval(t)
  }, [wordsLen])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(0,92,255,0.12) 0%, transparent 70%)' }}
      />
      <FloatingParticles count={50} />

      {floatingIcons.map(({ icon: Icon, color, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl"
          style={{ left: x, top: y, background: `${color}18`, border: `1px solid ${color}40` }}
          animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4 + i * 0.4, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={18} style={{ color }} />
        </motion.div>
      ))}

      <div className="container mx-auto relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-space font-semibold tracking-wide sm:tracking-widest uppercase mb-8 mt-8"
          style={{ background: 'rgba(0,92,255,0.1)', border: '1px solid rgba(0,92,255,0.3)', color: '#005CFF' }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ background: '#005CFF', boxShadow: '0 0 8px #005CFF' }}
          />
          Full-Service Digital Marketing Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-space font-black leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
        >
          <span className="block" style={{ color: 'var(--theme-t1)' }}>We Don't Just</span>
          <span className="block" style={{ color: 'var(--theme-t1)' }}>Market — We</span>
          <span className="block">
            <span className="gradient-text">Create </span>
            <motion.span
              key={wordIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="gradient-text-red"
            >
              {words[wordIdx]}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/55 font-inter text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-2"
        >
          Pixel Pulse transforms brands through data-driven strategies, stunning design, and high-impact campaigns that deliver real, measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <Link to="/contact">
            <AnimatedButton size="lg">Get Free Consultation <HiArrowRight size={18} /></AnimatedButton>
          </Link>
          <Link to="/projects">
            <AnimatedButton variant="ghost" size="lg"><HiPlay size={17} /> View Our Work</AnimatedButton>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { label: '500+ Clients', color: '#005CFF' },
            { label: '98% Retention', color: '#00C853' },
            { label: '$10M+ Revenue', color: '#FFD600' },
            { label: '5★ Rating', color: '#FF2B2B' },
          ].map(({ label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-space font-semibold"
              style={{ background: `${color}12`, border: `1px solid ${color}30`, color }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: 'var(--theme-t5)' }}
      >
        <span className="text-xs font-space tracking-widest uppercase">Scroll</span>
        <HiChevronDown size={18} />
      </motion.div>
    </section>
  )
}

// ── Marquee ───────────────────────────────────────────────────────────────────
const MarqueeSection = () => (
  <div
    className="py-5 overflow-hidden"
    style={{ background: 'var(--theme-marquee-bg)', borderTop: '1px solid var(--theme-marquee-border)', borderBottom: '1px solid var(--theme-marquee-border)' }}
  >
    <div className="marquee-inner">
      {[...marqueeItems, ...marqueeItems].map((item, i) => (
        <span key={i} className="inline-flex items-center gap-3 mx-6 text-sm font-space font-semibold text-white/45 uppercase tracking-widest whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#005CFF' }} />
          {item}
        </span>
      ))}
    </div>
  </div>
)

// ── Stats ─────────────────────────────────────────────────────────────────────
const StatsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-14 sm:py-20 lg:py-24 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,92,255,0.04) 0%, transparent 70%)' }} />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl"
              style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}10, transparent 70%)` }} />
              <div className="w-12 h-1 rounded-full mb-6" style={{ background: stat.color, boxShadow: `0 0 12px ${stat.color}` }} />
              <StatItem stat={stat} start={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────
const ServicesSection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
        <SectionHeading
          badge="What We Do"
          title="Services Built For"
          highlight="Real Growth"
          subtitle="Every service engineered to deliver measurable ROI, not just vanity metrics."
        />
        <Link to="/services" className="shrink-0">
          <AnimatedButton variant="outline">All Services <HiArrowRight size={16} /></AnimatedButton>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => <ServiceCard key={service.id} service={service} index={i} />)}
      </div>
    </div>
  </section>
)

// ── Work ──────────────────────────────────────────────────────────────────────
const WorkSection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,43,43,0.03) 0%, transparent 70%)' }} />
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
        <SectionHeading
          badge="Our Work"
          title="Projects That"
          highlight="Move Needles"
          subtitle="A selection of campaigns and digital experiences we're proud of."
        />
        <Link to="/projects" className="shrink-0">
          <AnimatedButton variant="outline">All Projects <HiArrowRight size={16} /></AnimatedButton>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.slice(0, 6).map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ background: `linear-gradient(135deg, ${project.bgColor}20, ${project.bgColor}06)`, border: '1px solid var(--theme-border)', minHeight: 200 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(${project.bgColor}10 1px, transparent 1px), linear-gradient(90deg, ${project.bgColor}10 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
            <div className="relative z-10 p-7 h-full flex flex-col justify-between" style={{ minHeight: 200 }}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-space font-bold px-3 py-1 rounded-full" style={{ background: `${project.bgColor}25`, color: project.bgColor, border: `1px solid ${project.bgColor}40` }}>{project.category}</span>
                <motion.div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <HiArrowRight size={18} style={{ color: project.bgColor }} />
                </motion.div>
              </div>
              <div>
                <h3 className="font-space font-bold text-xl text-white mb-2">{project.title}</h3>
                <p className="text-white/50 text-sm font-inter leading-relaxed mb-4">{project.description}</p>
                <div className="inline-flex items-center gap-2 text-xs font-space font-bold px-3 py-1.5 rounded-lg" style={{ background: `${project.bgColor}15`, color: project.bgColor, border: `1px solid ${project.bgColor}30` }}>✦ {project.result}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ── Process ───────────────────────────────────────────────────────────────────
const ProcessSection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(157,0,255,0.04) 0%, transparent 70%)' }} />
    <div className="container mx-auto">
      <div className="text-center mb-10 sm:mb-14 lg:mb-16">
        <SectionHeading badge="How We Work" title="Our Proven" highlight="5-Step Process" center subtitle="A battle-tested framework that transforms ideas into measurable growth." />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl"
            style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-orbitron font-black text-xl mb-5"
              style={{ background: `${step.color}18`, border: `2px solid ${step.color}40`, color: step.color, boxShadow: `0 0 20px ${step.color}20` }}
            >
              {step.number}
            </div>
            <h3 className="font-space font-bold text-base text-white mb-2">{step.title}</h3>
            <p className="text-white/45 text-xs font-inter leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ── Testimonials ──────────────────────────────────────────────────────────────
const TestimonialsSection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 60%, rgba(0,92,255,0.05) 0%, transparent 70%)' }} />
    <div className="container mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <SectionHeading badge="Client Love" title="Real Results, Real" highlight="Testimonials" center subtitle="Hear directly from the brands we've helped scale to new heights." />
      </div>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  </section>
)

// ── Pricing Preview ───────────────────────────────────────────────────────────
const PricingPreviewSection = () => {
  const [yearly, setYearly] = useState(false)
  return (
    <section className="py-14 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <SectionHeading badge="Investment" title="Transparent" highlight="Pricing" center subtitle="No hidden fees. No long-term lock-ins. Pure value." />
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-sm font-space font-medium text-white/55">Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-12 h-6 rounded-full transition-all duration-300 cursor-pointer"
              style={{ background: yearly ? '#005CFF' : 'var(--theme-border-3)' }}
            >
              <motion.div
                animate={{ x: yearly ? 24 : 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute top-1 w-4 h-4 bg-white rounded-full"
              />
            </button>
            <span className="text-sm font-space font-medium text-white/55">
              Yearly <span className="text-xs px-2 py-0.5 rounded-full font-bold ml-1" style={{ background: 'rgba(0,200,83,0.15)', color: '#00C853' }}>-20%</span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start">
          {pricingPlans.map((plan, i) => <PricingCard key={plan.id} plan={plan} yearly={yearly} index={i} />)}
        </div>
      </div>
    </section>
  )
}

// ── FAQ Preview ───────────────────────────────────────────────────────────────
const FAQPreviewSection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4">
          <SectionHeading badge="FAQs" title="Frequently" highlight="Asked" subtitle="Everything you need to know about working with Pixel Pulse." />
          <div className="mt-8">
            <Link to="/faqs"><AnimatedButton variant="outline">View All FAQs <HiArrowRight size={16} /></AnimatedButton></Link>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FAQAccordion faqs={faqs.slice(0, 5)} />
        </div>
      </div>
    </div>
  </section>
)

// ── CTA ───────────────────────────────────────────────────────────────────────
const CTASection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
    <FloatingParticles count={30} />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,92,255,0.1) 0%, transparent 70%)' }} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span
          className="inline-flex items-center gap-1.5 px-3 sm:px-5 py-2 rounded-full text-xs font-space font-semibold tracking-wide sm:tracking-widest uppercase mb-6 sm:mb-8"
          style={{ background: 'rgba(0,92,255,0.1)', border: '1px solid rgba(0,92,255,0.3)', color: '#005CFF' }}
        >
          <HiLightningBolt size={14} /> Ready To Grow?
        </span>
        <h2 className="font-space font-black mb-6 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: 'var(--theme-t1)' }}>
          Let's Build Something<br /><span className="gradient-text">Extraordinary Together</span>
        </h2>
        <p className="text-white/55 text-base sm:text-lg font-inter max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Book a free 30-minute strategy call with our experts and walk away with a custom growth plan — no commitment required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link to="/contact"><AnimatedButton size="lg">Book Free Strategy Call <HiArrowRight size={20} /></AnimatedButton></Link>
          <Link to="/pricing"><AnimatedButton variant="ghost" size="lg">View Pricing Plans</AnimatedButton></Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
          {['No contracts', 'Cancel anytime', '30-day money-back'].map((text) => (
            <div key={text} className="flex items-center gap-2 text-sm text-white/50 font-inter">
              <HiCheckCircle size={16} style={{ color: '#00C853' }} /> {text}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// ── Page ──────────────────────────────────────────────────────────────────────
const Home = () => (
  <>
    <HeroSection />
    <MarqueeSection />
    <StatsSection />
    <ServicesSection />
    <WorkSection />
    <ProcessSection />
    <TestimonialsSection />
    <PricingPreviewSection />
    <FAQPreviewSection />
    <CTASection />
  </>
)

export default Home
