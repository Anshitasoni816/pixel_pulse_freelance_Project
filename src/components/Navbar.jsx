import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi2'
import { FaSun, FaMoon } from 'react-icons/fa'
import { navLinks } from '../data/index'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navBg = scrolled
    ? isDark
      ? 'rgba(0,0,0,0.88)'
      : 'rgba(238,241,255,0.94)'
    : 'transparent'

  const borderBottom = scrolled
    ? `1px solid var(--theme-border)`
    : 'none'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? '8px 0' : '12px 0',
        background: navBg,
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom,
      }}
    >
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <motion.img
            src="/pixel_pulse_logo1.png"
            alt="Pixsel Pulse"
            className="w-auto object-contain"
            style={{
              height: scrolled ? '48px' : 'clamp(60px, 8vw, 84px)',
              transition: 'height 0.4s ease, filter 0.3s ease',
              filter: isDark
                ? 'drop-shadow(0 0 10px rgba(0,92,255,0.35))'
                : 'drop-shadow(0 0 8px rgba(0,92,255,0.25)) brightness(0.92)',
            }}
            whileHover={{ filter: isDark ? 'drop-shadow(0 0 18px rgba(0,92,255,0.65))' : 'drop-shadow(0 0 16px rgba(0,92,255,0.45)) brightness(0.88)' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-sm font-space font-medium transition-all duration-200 rounded-lg group"
                style={{ color: isActive ? '#005CFF' : 'var(--theme-t2)' }}
              >
                <span className="relative z-10 group-hover:text-[#005CFF] transition-colors duration-200"
                  style={{ color: isActive ? '#005CFF' : 'var(--theme-t2)' }}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(0,92,255,0.1)', border: '1px solid rgba(0,92,255,0.2)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            className="relative w-[52px] h-7 rounded-full flex items-center cursor-pointer transition-all duration-400"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, #1a1a2e, #16213e)'
                : 'linear-gradient(135deg, #FFD600, #FF6B00)',
              border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,107,0,0.3)',
              boxShadow: isDark ? '0 0 12px rgba(0,92,255,0.2)' : '0 0 12px rgba(255,214,0,0.4)',
              padding: '3px',
            }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {/* Track icons */}
            <FaMoon size={10} className="absolute left-1.5" style={{ color: isDark ? '#9D00FF' : 'transparent', transition: 'color 0.3s' }} />
            <FaSun  size={10} className="absolute right-1.5" style={{ color: isDark ? 'transparent' : '#fff', transition: 'color 0.3s' }} />
            {/* Thumb */}
            <motion.div
              animate={{ x: isDark ? 0 : 24 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="w-5 h-5 rounded-full flex items-center justify-center shadow-md"
              style={{ background: '#fff', flexShrink: 0 }}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span key="m" initial={{ rotate: -40, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 40, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <FaMoon size={10} style={{ color: '#005CFF' }} />
                  </motion.span>
                ) : (
                  <motion.span key="s" initial={{ rotate: 40, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -40, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <FaSun size={10} style={{ color: '#FF6B00' }} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-space font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #005CFF, #0040CC)',
              boxShadow: '0 0 20px rgba(0,92,255,0.35)',
              color: '#fff',
            }}
          >
            Get Started <HiArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)',
              border: `1px solid var(--theme-border-2)`,
            }}
          >
            {isDark
              ? <FaMoon size={15} style={{ color: '#FFD600' }} />
              : <FaSun  size={15} style={{ color: '#FF6B00' }} />
            }
          </motion.button>

          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: 'var(--theme-t1)', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
            style={{
              background: isDark ? 'rgba(0,0,0,0.97)' : 'rgba(238,241,255,0.97)',
              backdropFilter: 'blur(20px)',
              borderTop: `1px solid var(--theme-border)`,
            }}
          >
            <nav className="container mx-auto py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center justify-between px-4 py-3 rounded-xl font-space font-medium text-base transition-all duration-200"
                      style={{
                        color: isActive ? '#005CFF' : 'var(--theme-t2)',
                        background: isActive ? 'rgba(0,92,255,0.1)' : 'transparent',
                        border: isActive ? '1px solid rgba(0,92,255,0.2)' : '1px solid transparent',
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <span className="w-2 h-2 rounded-full" style={{ background: '#005CFF', boxShadow: '0 0 8px #005CFF' }} />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="pt-4 border-t mt-2" style={{ borderColor: 'var(--theme-border)' }}>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-space font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, #005CFF, #0040CC)',
                    boxShadow: '0 0 20px rgba(0,92,255,0.35)',
                    color: '#fff',
                  }}
                >
                  Get Started <HiArrowRight size={16} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
