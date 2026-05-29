import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const services = [
  'SEO Optimization', 'Meta Ads', 'Social Media Marketing',
  'Branding & Identity', 'Web Design & Dev', 'Content Marketing',
  'Lead Generation', 'Email Marketing',
]

const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' }

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [status, setStatus] = useState(STATUS.IDLE)
  const [errorMsg, setErrorMsg] = useState('')
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(STATUS.LOADING)
    setErrorMsg('')

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      company: form.company || 'Not provided',
      service: form.service,
      budget: form.budget || 'Not specified',
      message: form.message,
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      setStatus(STATUS.SUCCESS)
    } catch (err) {
      console.error('EmailJS send error:', err)
      setErrorMsg('Something went wrong. Please try again or reach us directly.')
      setStatus(STATUS.ERROR)
    }
  }

  const inputStyle = (name) => ({
    background: 'var(--theme-input)',
    border: focused === name ? '1px solid rgba(0,92,255,0.6)' : '1px solid var(--theme-border-2)',
    boxShadow: focused === name ? '0 0 15px rgba(0,92,255,0.1)' : 'none',
    color: 'var(--theme-t1)',
    outline: 'none',
    transition: 'all 0.25s ease',
  })

  const labelStyle = {
    color: 'var(--theme-t2)',
    fontSize: '0.8rem',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    display: 'block',
  }

  if (status === STATUS.SUCCESS) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(0,200,83,0.15)', border: '2px solid rgba(0,200,83,0.4)', boxShadow: '0 0 40px rgba(0,200,83,0.2)' }}
        >
          <HiCheckCircle size={40} style={{ color: '#00C853' }} />
        </div>
        <h3 className="font-space font-bold text-2xl mb-3" style={{ color: 'var(--theme-t1)' }}>Message Sent!</h3>
        <p className="font-inter max-w-sm" style={{ color: 'var(--theme-t2)' }}>
          Thank you for reaching out. Our team will get back to you within 24 hours with a custom growth strategy.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { name: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
          { name: 'email', label: 'Email Address', placeholder: 'john@company.com', type: 'email' },
          { name: 'company', label: 'Company', placeholder: 'Your Company', type: 'text' },
        ].map(({ name, label, placeholder, type }) => (
          <div key={name}>
            <label style={labelStyle}>{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required={name !== 'company'}
              disabled={status === STATUS.LOADING}
              className="w-full px-4 py-3 rounded-xl text-sm font-inter placeholder-white/30 disabled:opacity-50"
              style={inputStyle(name)}
              onFocus={() => setFocused(name)}
              onBlur={() => setFocused(null)}
            />
          </div>
        ))}

        {/* Service select */}
        <div>
          <label style={labelStyle}>Service Needed</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            disabled={status === STATUS.LOADING}
            className="w-full px-4 py-3 rounded-xl text-sm font-inter appearance-none cursor-pointer disabled:opacity-50"
            style={{ ...inputStyle('service'), color: form.service ? 'var(--theme-t1)' : 'var(--theme-t4)' }}
            onFocus={() => setFocused('service')}
            onBlur={() => setFocused(null)}
          >
            <option value="" disabled style={{ background: '#111' }}>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s} style={{ background: '#111' }}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Budget */}
      <div>
        <label style={labelStyle}>Monthly Budget</label>
        <div className="flex flex-wrap gap-2">
          {['Under $1K', '$1K–$3K', '$3K–$7K', '$7K–$15K', '$15K+'].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setForm({ ...form, budget: b })}
              disabled={status === STATUS.LOADING}
              className="px-4 py-2 rounded-lg text-xs font-space font-semibold transition-all duration-200 disabled:opacity-50"
              style={
                form.budget === b
                  ? { background: 'rgba(0,92,255,0.2)', border: '1px solid rgba(0,92,255,0.6)', color: '#005CFF', boxShadow: '0 0 10px rgba(0,92,255,0.2)' }
                  : { background: 'var(--theme-input)', border: '1px solid var(--theme-border-2)', color: 'var(--theme-t3)' }
              }
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Tell us about your project</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your goals, challenges, and what you're looking to achieve..."
          rows={5}
          required
          disabled={status === STATUS.LOADING}
          className="w-full px-4 py-3 rounded-xl text-sm font-inter placeholder-white/30 resize-none disabled:opacity-50"
          style={inputStyle('message')}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
        />
      </div>

      {/* Error message */}
      <AnimatePresence>
        {status === STATUS.ERROR && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-inter"
            style={{ background: 'rgba(255,59,59,0.1)', border: '1px solid rgba(255,59,59,0.3)', color: '#FF3B3B' }}
          >
            <HiExclamationCircle size={18} className="shrink-0" />
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === STATUS.LOADING}
        whileHover={status !== STATUS.LOADING ? { scale: 1.02, boxShadow: '0 0 40px rgba(0,92,255,0.5)' } : {}}
        whileTap={status !== STATUS.LOADING ? { scale: 0.98 } : {}}
        className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-space font-bold text-base text-white transition-all duration-300 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{
          background: 'linear-gradient(135deg, #005CFF, #0040CC)',
          boxShadow: '0 0 25px rgba(0,92,255,0.35)',
        }}
      >
        {status === STATUS.LOADING ? (
          <>
            <AiOutlineLoading3Quarters size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message <HiArrowRight size={20} />
          </>
        )}
      </motion.button>

      <p className="text-center text-xs font-inter" style={{ color: 'var(--theme-t4)' }}>
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  )
}

export default ContactForm
