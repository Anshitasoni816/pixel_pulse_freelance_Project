import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheckCircle, HiXCircle, HiArrowRight, HiSparkles } from 'react-icons/hi'
import { HiStar } from 'react-icons/hi2'

const PricingCard = ({ plan, yearly, index }) => {
  const [hovered, setHovered] = useState(false)
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-500 ${plan.popular ? 'md:scale-[1.03]' : ''}`}
      style={{
        background: plan.popular
          ? `linear-gradient(145deg, rgba(157,0,255,0.12), rgba(0,92,255,0.08))`
          : 'var(--theme-surface-2)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: plan.popular
          ? `1px solid ${plan.color}60`
          : hovered
          ? `1px solid ${plan.color}40`
          : '1px solid var(--theme-border)',
        boxShadow: plan.popular
          ? `0 0 60px ${plan.color}20`
          : hovered
          ? `0 0 40px ${plan.color}15`
          : 'none',
      }}
    >
      {plan.popular && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-space font-bold"
          style={{
            background: `linear-gradient(135deg, ${plan.color}, #005CFF)`,
            boxShadow: `0 0 20px ${plan.color}50`,
            color: '#fff',
          }}
        >
          <HiStar size={12} />
          Most Popular
        </div>
      )}

      {/* Background glow blob */}
      {plan.popular && (
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${plan.color}20, transparent 70%)` }}
        />
      )}

      <div className="mb-6">
        <span
          className="inline-block text-xs font-space font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
          style={{
            background: `${plan.color}15`,
            color: plan.color,
            border: `1px solid ${plan.color}30`,
          }}
        >
          {plan.name}
        </span>
        <div className="flex items-end gap-1 mb-3">
          <span className="text-lg font-inter" style={{ color: 'var(--theme-t4)' }}>$</span>
          <span className="font-orbitron font-bold text-5xl leading-none" style={{ color: 'var(--theme-t1)' }}>{price.toLocaleString()}</span>
          <span className="text-sm font-inter mb-2" style={{ color: 'var(--theme-t4)' }}>/mo</span>
        </div>
        {yearly && (
          <p className="text-xs font-inter" style={{ color: '#00C853' }}>
            Save ${((plan.monthlyPrice - plan.yearlyPrice) * 12).toLocaleString()}/yr
          </p>
        )}
        <p className="text-sm font-inter mt-3 leading-relaxed" style={{ color: 'var(--theme-t2)' }}>{plan.description}</p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm font-inter" style={{ color: 'var(--theme-t2)' }}>
            <HiCheckCircle size={18} style={{ color: plan.color, flexShrink: 0, marginTop: 1 }} />
            {f}
          </li>
        ))}
        {plan.notIncluded?.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm font-inter line-through" style={{ color: 'var(--theme-t5)' }}>
            <HiXCircle size={18} style={{ color: 'var(--theme-t5)', flexShrink: 0, marginTop: 1 }} />
            {f}
          </li>
        ))}
      </ul>

      <Link to="/contact">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-space font-semibold text-sm cursor-pointer transition-all duration-300"
          style={
            plan.popular
              ? {
                  background: `linear-gradient(135deg, ${plan.color}, #005CFF)`,
                  boxShadow: `0 0 25px ${plan.color}40`,
                  color: '#fff',
                }
              : {
                  background: 'var(--theme-surface)',
                  border: `1px solid ${plan.color}40`,
                  color: 'var(--theme-t1)',
                  boxShadow: hovered ? `0 0 15px ${plan.color}20` : 'none',
                }
          }
        >
          Get Started <HiArrowRight size={16} />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default PricingCard
