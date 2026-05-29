import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiLightningBolt, HiCheckCircle } from 'react-icons/hi'
import AnimatedButton from '../components/AnimatedButton'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import TestimonialSlider from '../components/TestimonialSlider'
import FloatingParticles from '../components/FloatingParticles'
import { services, testimonials, processSteps } from '../data/index'

const whyUs = [
  { label: '500+ Brands Grown', color: '#005CFF' },
  { label: 'Avg. 8x ROAS', color: '#00C853' },
  { label: 'Certified Partners', color: '#FFD600' },
  { label: '24/7 Support', color: '#FF2B2B' },
]

const PageHero = () => (
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(255,43,43,0.08) 0%, transparent 70%)' }} />
    <FloatingParticles count={25} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-6" style={{ background: 'rgba(255,43,43,0.1)', border: '1px solid rgba(255,43,43,0.3)', color: '#FF2B2B' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#FF2B2B', boxShadow: '0 0 6px #FF2B2B' }} /> Full-Service Marketing
        </span>
        <h1 className="font-space font-black mb-5 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--theme-t1)' }}>
          Services That <span className="gradient-text-red">Deliver Results</span>
        </h1>
        <p className="text-white/55 font-inter text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          Eight battle-tested services, one goal: making your brand the undisputed leader in your market.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {whyUs.map(({ label, color }) => (
            <span key={label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-space font-semibold" style={{ background: `${color}12`, border: `1px solid ${color}30`, color }}>
              <HiCheckCircle size={14} /> {label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

const ServicesGrid = () => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <div className="container mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <SectionHeading badge="What We Offer" title="Every Service You Need to" highlight="Dominate Online" center subtitle="We handle the full marketing stack — from strategy to execution to scaling." />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => <ServiceCard key={service.id} service={service} index={i} />)}
      </div>
    </div>
  </section>
)

const ProcessSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,92,255,0.04) 0%, transparent 70%)' }} />
    <div className="container mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <SectionHeading badge="Our Approach" title="How We Execute" highlight="Every Service" center />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {processSteps.map((step, i) => (
          <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl"
            style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center font-orbitron font-black text-lg mb-4" style={{ background: `${step.color}18`, border: `2px solid ${step.color}40`, color: step.color }}>
              {step.number}
            </div>
            <h3 className="font-space font-bold text-sm text-white mb-2">{step.title}</h3>
            <p className="text-white/40 text-xs font-inter leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const TestimonialsSection = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="container mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <SectionHeading badge="Client Results" title="What Our Clients" highlight="Say About Us" center />
      </div>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  </section>
)

const CTASection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
    <FloatingParticles count={20} />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,43,43,0.06) 0%, transparent 70%)' }} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-7" style={{ background: 'rgba(255,43,43,0.1)', border: '1px solid rgba(255,43,43,0.3)', color: '#FF2B2B' }}>
          <HiLightningBolt size={13} /> Get Started Today
        </span>
        <h2 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Which Service Does<br /><span className="gradient-text-red">Your Brand Need?</span>
        </h2>
        <p className="text-white/55 font-inter text-lg max-w-xl mx-auto mb-10">
          Book a free strategy call and we'll tell you exactly which services will move the needle for your specific business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact"><AnimatedButton size="lg" variant="red">Get Free Strategy Call <HiArrowRight size={18} /></AnimatedButton></Link>
          <Link to="/pricing"><AnimatedButton variant="ghost" size="lg">View Pricing</AnimatedButton></Link>
        </div>
      </motion.div>
    </div>
  </section>
)

const Services = () => (
  <>
    <PageHero />
    <ServicesGrid />
    <ProcessSection />
    <TestimonialsSection />
    <CTASection />
  </>
)

export default Services
