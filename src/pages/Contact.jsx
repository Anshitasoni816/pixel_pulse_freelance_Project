import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi'
import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import FloatingParticles from '../components/FloatingParticles'

const contactCards = [
  { icon: HiMail, label: 'Email Us', value: 'hello@pixelpulse.io', sub: 'We reply within 24h', color: '#005CFF' },
  { icon: HiPhone, label: 'Call Us', value: '+1 (800) 555-PIXEL', sub: 'Mon–Fri, 9am–6pm ET', color: '#00C853' },
  { icon: HiLocationMarker, label: 'Visit Us', value: '123 Marketing Ave', sub: 'New York, NY 10001', color: '#FFD600' },
  { icon: HiClock, label: 'Business Hours', value: 'Mon–Fri: 9am–6pm', sub: 'Weekend: By appointment', color: '#FF2B2B' },
]

const socialLinks = [
  { icon: FaTwitter, label: 'Twitter / X', url: '#', color: '#005CFF' },
  { icon: FaInstagram, label: 'Instagram', url: '#', color: '#FF2B2B' },
  { icon: FaLinkedinIn, label: 'LinkedIn', url: '#', color: '#005CFF' },
  { icon: FaWhatsapp, label: 'WhatsApp', url: '#', color: '#00C853' },
]

const PageHero = () => (
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,92,255,0.1) 0%, transparent 70%)' }} />
    <FloatingParticles count={20} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-6" style={{ background: 'rgba(0,92,255,0.1)', border: '1px solid rgba(0,92,255,0.3)', color: '#005CFF' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#005CFF', boxShadow: '0 0 6px #005CFF' }} /> Let's Connect
        </span>
        <h1 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
          Start Your <span className="gradient-text">Growth Journey</span>
        </h1>
        <p className="text-white/55 font-inter text-xl max-w-2xl mx-auto leading-relaxed">
          Tell us about your goals and we'll craft a custom strategy to help you dominate your market.
        </p>
      </motion.div>
    </div>
  </section>
)

const ContactSection = () => (
  <section className="py-10 sm:py-16 relative">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Contact cards + info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <SectionHeading badge="Get In Touch" title="We'd Love to" highlight="Hear From You" subtitle="Whether you're ready to start or just exploring, reach out and let's talk growth." />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-2">
            {contactCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div key={card.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 group cursor-pointer"
                  style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${card.color}40`; e.currentTarget.style.boxShadow = `0 0 20px ${card.color}10` }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--theme-border)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300" style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}>
                    <Icon size={18} style={{ color: card.color }} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-space font-semibold uppercase tracking-wide mb-0.5">{card.label}</p>
                    <p className="text-white font-space font-semibold text-sm">{card.value}</p>
                    <p className="text-white/40 text-xs font-inter mt-0.5">{card.sub}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Social */}
          <div className="p-6 rounded-2xl" style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}>
            <p className="text-white/50 text-sm font-space font-semibold uppercase tracking-widest mb-4">Follow Us</p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, label, url, color }) => (
                <motion.a key={label} href={url} whileHover={{ scale: 1.12, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-space font-semibold transition-all duration-200"
                  style={{ background: `${color}10`, border: `1px solid ${color}30`, color }}
                >
                  <Icon size={14} /> {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/18005557493"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,200,83,0.3)' }}
            className="flex items-center justify-center gap-3 py-4 rounded-2xl font-space font-bold text-white transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #00C853, #009A3C)', boxShadow: '0 0 20px rgba(0,200,83,0.2)' }}
          >
            <FaWhatsapp size={22} />
            Chat on WhatsApp — Quick Response
          </motion.a>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="p-5 sm:p-8 rounded-2xl" style={{ background: 'var(--theme-surface-2)', backdropFilter: 'blur(20px)', border: '1px solid var(--theme-border)' }}>
            <h3 className="font-space font-bold text-xl mb-2" style={{ color: 'var(--theme-t1)' }}>Send Us a Message</h3>
            <p className="text-sm font-inter mb-8" style={{ color: 'var(--theme-t2)' }}>Fill in the details below and we'll get back to you within 24 hours with a tailored response.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const MapSection = () => (
  <section className="py-10 sm:py-16 relative">
    <div className="container mx-auto">
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{ height: 320, background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
      >
        {/* Decorative map placeholder */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,92,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,92,255,0.06) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,92,255,0.15)', border: '2px solid rgba(0,92,255,0.4)', boxShadow: '0 0 30px rgba(0,92,255,0.2)' }}
          >
            <HiLocationMarker size={28} style={{ color: '#005CFF' }} />
          </div>
          <div className="text-center">
            <p className="font-space font-bold text-white">Pixel Pulse HQ</p>
            <p className="text-white/45 text-sm font-inter">123 Marketing Ave, New York, NY 10001</p>
          </div>
          {/* Pulse rings */}
          {[1, 2, 3].map((r) => (
            <motion.div
              key={r}
              className="absolute rounded-full border"
              style={{ width: r * 80, height: r * 80, borderColor: `rgba(0,92,255,${0.3 / r})` }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, delay: r * 0.4, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <>
    <PageHero />
    <ContactSection />
    <MapSection />
  </>
)

export default Contact
