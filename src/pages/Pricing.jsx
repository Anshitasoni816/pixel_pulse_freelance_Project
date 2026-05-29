import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiLightningBolt, HiCheckCircle } from 'react-icons/hi'
import AnimatedButton from '../components/AnimatedButton'
import SectionHeading from '../components/SectionHeading'
import PricingCard from '../components/PricingCard'
import FAQAccordion from '../components/FAQAccordion'
import FloatingParticles from '../components/FloatingParticles'
import { pricingPlans, faqs } from '../data/index'

const comparisonFeatures = [
  { feature: 'SEO Optimization', starter: true, growth: true, enterprise: true },
  { feature: 'Social Media Management', starter: '2 platforms', growth: '4 platforms', enterprise: 'All platforms' },
  { feature: 'Meta Ads Management', starter: false, growth: true, enterprise: true },
  { feature: 'Google Ads', starter: false, growth: true, enterprise: true },
  { feature: 'Content Creation', starter: '8/mo', growth: '20/mo', enterprise: 'Unlimited' },
  { feature: 'Email Marketing', starter: false, growth: true, enterprise: true },
  { feature: 'Branding Package', starter: false, growth: 'Consultation', enterprise: 'Full Package' },
  { feature: 'Web Design/Dev', starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated Account Manager', starter: false, growth: true, enterprise: true },
  { feature: 'Priority Support', starter: false, growth: true, enterprise: '24/7' },
  { feature: 'Analytics Dashboard', starter: 'Basic', growth: 'Advanced', enterprise: 'Real-Time' },
  { feature: 'Monthly Reports', starter: true, growth: 'Weekly', enterprise: 'Daily' },
]

const renderCell = (val, color = '#005CFF') => {
  if (val === true) return <HiCheckCircle size={20} style={{ color }} />
  if (val === false) return <span style={{ color: 'var(--theme-t5)' }}>—</span>
  return <span className="text-xs font-space font-semibold" style={{ color }}>{val}</span>
}

const PageHero = () => (
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(157,0,255,0.1) 0%, transparent 70%)' }} />
    <FloatingParticles count={25} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-6" style={{ background: 'rgba(157,0,255,0.1)', border: '1px solid rgba(157,0,255,0.3)', color: '#9D00FF' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#9D00FF', boxShadow: '0 0 6px #9D00FF' }} /> Simple Pricing
        </span>
        <h1 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
          Invest in <span className="gradient-text">Guaranteed Growth</span>
        </h1>
        <p className="text-white/55 font-inter text-xl max-w-2xl mx-auto leading-relaxed">
          Transparent pricing, zero surprises. Choose the plan that matches your ambitions.
        </p>
      </motion.div>
    </div>
  </section>
)

const PlansSection = () => {
  const [yearly, setYearly] = useState(false)
  return (
    <section className="py-12 sm:py-16 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 mb-10 sm:mb-14">
          <span className="text-sm font-space font-medium text-white/60">Monthly</span>
          <button onClick={() => setYearly(!yearly)} className="relative w-14 h-7 rounded-full transition-all duration-300 cursor-pointer" style={{ background: yearly ? '#9D00FF' : 'var(--theme-border-3)' }}>
            <motion.div animate={{ x: yearly ? 30 : 2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="absolute top-1.5 w-4 h-4 bg-white rounded-full" />
          </button>
          <span className="text-sm font-space font-medium text-white/60">
            Yearly <span className="text-xs px-2 py-0.5 rounded-full font-bold ml-1" style={{ background: 'rgba(0,200,83,0.15)', color: '#00C853' }}>Save 20%</span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan, i) => <PricingCard key={plan.id} plan={plan} yearly={yearly} index={i} />)}
        </div>
        <div className="text-center mt-10">
          <p className="text-white/35 text-sm font-inter">
            All plans include a 30-day money-back guarantee · No long-term contracts · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

const ComparisonTable = () => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <SectionHeading badge="Compare Plans" title="Full Feature" highlight="Comparison" center />
      </div>
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 rounded-2xl" style={{ border: '1px solid var(--theme-border)' }}>
        <table className="w-full min-w-140">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--theme-border)' }}>
              <th className="text-left py-4 px-4 sm:px-6 text-sm font-space font-medium" style={{ color: 'var(--theme-t3)' }}>Feature</th>
              {pricingPlans.map((p) => (
                <th key={p.id} className="py-4 px-4 sm:px-6 text-center font-space font-bold text-sm sm:text-base" style={{ color: p.color }}>{p.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((row, i) => (
              <tr key={row.feature} className="border-t transition-colors duration-150" style={{ borderColor: 'var(--theme-border)' }}>
                <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-inter" style={{ color: 'var(--theme-t2)' }}>{row.feature}</td>
                {[row.starter, row.growth, row.enterprise].map((val, j) => (
                  <td key={j} className="py-3 sm:py-4 px-4 sm:px-6 text-center">
                    {renderCell(val, pricingPlans[j].color)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

const FAQSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-14">
        <SectionHeading badge="Questions" title="Pricing" highlight="FAQs" center subtitle="Everything you need to know before making your investment." />
      </div>
      <FAQAccordion faqs={faqs.filter(f => f.category === 'Pricing')} />
    </div>
  </section>
)

const CTASection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
    <FloatingParticles count={20} />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(157,0,255,0.07) 0%, transparent 70%)' }} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Not Sure Which Plan?<br /><span className="gradient-text">Let's Talk.</span>
        </h2>
        <p className="text-white/55 font-inter text-lg max-w-xl mx-auto mb-10">
          Book a free 30-minute call and we'll recommend the exact plan that will deliver the best ROI for your specific goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact"><AnimatedButton size="lg">Book Free Strategy Call <HiArrowRight size={18} /></AnimatedButton></Link>
          <div className="flex items-center gap-2 text-sm text-white/40 font-inter">
            <HiCheckCircle size={16} style={{ color: '#00C853' }} /> No commitment required
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

const Pricing = () => (
  <>
    <PageHero />
    <PlansSection />
    <ComparisonTable />
    <FAQSection />
    <CTASection />
  </>
)

export default Pricing
