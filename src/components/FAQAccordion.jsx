import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'

const FAQAccordion = ({ faqs }) => {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = openId === faq.id
        return (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10px' }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: isOpen ? 'rgba(0,92,255,0.06)' : 'var(--theme-surface)',
              backdropFilter: 'blur(20px)',
              border: isOpen
                ? '1px solid rgba(0,92,255,0.3)'
                : '1px solid var(--theme-border)',
              boxShadow: isOpen ? '0 0 30px rgba(0,92,255,0.08)' : 'none',
            }}
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
            >
              <span
                className="font-space font-semibold text-base leading-snug transition-colors duration-200"
                style={{ color: 'var(--theme-t1)' }}
              >
                {faq.question}
              </span>
              <span
                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: isOpen ? 'rgba(0,92,255,0.2)' : 'var(--theme-surface-2)',
                  border: isOpen ? '1px solid rgba(0,92,255,0.4)' : '1px solid var(--theme-border-2)',
                  color: isOpen ? '#005CFF' : 'var(--theme-t3)',
                }}
              >
                {isOpen ? <HiMinus size={16} /> : <HiPlus size={16} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="px-6 pb-6 text-sm font-inter leading-relaxed" style={{ color: 'var(--theme-t2)' }}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

export default FAQAccordion
