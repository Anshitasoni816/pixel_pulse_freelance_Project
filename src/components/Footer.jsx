import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF } from 'react-icons/fa'
import { HiArrowRight, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about' },
    { label: 'Case Studies', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Careers', path: '/contact' },
  ],
  Services: [
    { label: 'SEO Optimization', path: '/services' },
    { label: 'Meta Ads', path: '/services' },
    { label: 'Social Media', path: '/services' },
    { label: 'Web Design', path: '/services' },
    { label: 'Branding', path: '/services' },
  ],
  Resources: [
    { label: 'Pricing', path: '/pricing' },
    { label: 'Projects', path: '/projects' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact', path: '/contact' },
  ],
}

const socials = [
  { icon: FaTwitter, url: '#', color: '#005CFF', label: 'Twitter' },
  { icon: FaInstagram, url: '#', color: '#FF2B2B', label: 'Instagram' },
  { icon: FaLinkedinIn, url: '#', color: '#005CFF', label: 'LinkedIn' },
  { icon: FaYoutube, url: '#', color: '#FF2B2B', label: 'YouTube' },
  { icon: FaFacebookF, url: '#', color: '#005CFF', label: 'Facebook' },
]

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden pt-20 pb-8"
      style={{
        background: 'linear-gradient(180deg, var(--theme-footer-1) 0%, var(--theme-footer-2) 100%)',
        borderTop: '1px solid var(--theme-footer-border)',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,92,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-12 items-start" style={{ borderBottom: '1px solid var(--theme-footer-border)' }}>

          {/* Brand col — logo + tagline + newsletter */}
          <div className="col-span-2 lg:col-span-3">
            <Link to="/" className="inline-flex items-center mb-4">
              <img
                src="/pixel_pulse_logo1.png"
                alt="Pixsel Pulse"
                style={{
                  height: 'clamp(56px, 7vw, 72px)',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 12px rgba(0,92,255,0.3))',
                }}
              />
            </Link>
            <p className="text-sm leading-relaxed font-inter mb-6" style={{ color: 'var(--theme-t2)' }}>
              Elevate · Engage · Grow — premium digital marketing that pulses with energy and delivers measurable growth.
            </p>

            {/* Newsletter */}
            <h4 className="font-space font-semibold text-sm mb-2 tracking-wider uppercase" style={{ color: 'var(--theme-t1)' }}>
              Newsletter
            </h4>
            <p className="text-sm font-inter mb-4" style={{ color: 'var(--theme-t2)' }}>
              Get weekly growth insights and marketing strategies delivered to your inbox.
            </p>
            <div className="flex gap-2 min-w-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 px-3 py-3 rounded-lg text-sm font-inter placeholder-white/30 outline-none transition-colors duration-200"
                style={{
                  background: 'var(--theme-input)',
                  border: '1px solid var(--theme-border-2)',
                  color: 'var(--theme-t1)',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(0,92,255,0.5)' }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--theme-border-2)' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #005CFF, #0040CC)',
                  boxShadow: '0 0 15px rgba(0,92,255,0.3)',
                }}
              >
                <HiArrowRight size={18} style={{ color: '#fff' }} />
              </motion.button>
            </div>
            <p className="text-xs font-inter mt-3" style={{ color: 'var(--theme-t4)' }}>
              No spam ever. Unsubscribe anytime.
            </p>
          </div>

          {/* Resources col — first links column */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-space font-semibold text-sm mb-5 tracking-wider uppercase" style={{ color: 'var(--theme-t1)' }}>
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.Resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm font-inter transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                    style={{ color: 'var(--theme-t2)' }}
                  >
                    <span className="group-hover:text-neon-blue transition-colors duration-200" style={{ color: 'inherit' }}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Services link cols — right of Resources */}
          {['Company', 'Services'].map((group) => (
            <div key={group} className="col-span-1 lg:col-span-2">
              <h4 className="font-space font-semibold text-sm mb-5 tracking-wider uppercase" style={{ color: 'var(--theme-t1)' }}>
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks[group].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm font-inter transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                      style={{ color: 'var(--theme-t2)' }}
                    >
                      <span className="group-hover:text-neon-blue transition-colors duration-200" style={{ color: 'inherit' }}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Right col — Contact Info, Social Icons, Newsletter, Trust badges */}
          <div className="col-span-2 lg:col-span-3">
            {/* Contact Info */}
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: HiMail, text: 'hello@pixelpulse.io' },
                { icon: HiPhone, text: '+1 (800) 555-PIXEL' },
                { icon: HiLocationMarker, text: 'New York, NY 10001' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm font-inter" style={{ color: 'var(--theme-t2)' }}>
                  <Icon size={16} style={{ color: '#005CFF' }} />
                  {text}
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              {socials.map(({ icon: Icon, url, color, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'var(--theme-input)',
                    border: '1px solid var(--theme-border-2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px ${color}60`
                    e.currentTarget.style.borderColor = `${color}60`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = 'var(--theme-border-2)'
                  }}
                >
                  <Icon size={15} style={{ color: 'var(--theme-t3)' }} />
                </motion.a>
              ))}
            </div>

            {/* Trust badges */}
            {/* <div className="flex flex-wrap items-center gap-3">
              {['Google Partner', 'Meta Partner', 'HubSpot Partner'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-space font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: 'var(--theme-input)',
                    border: '1px solid var(--theme-border-2)',
                    color: 'var(--theme-t3)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-sm font-inter text-center sm:text-left" style={{ color: 'var(--theme-t4)' }}>
            © {new Date().getFullYear()} Pixsel Pulse. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                to="#"
                className="text-xs font-inter transition-colors duration-200 whitespace-nowrap"
                style={{ color: 'var(--theme-t4)' }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
