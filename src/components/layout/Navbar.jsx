import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = ['Services', 'Gallery', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#020e18]/90 backdrop-blur-xl border-b border-white/5 py-3'
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex flex-col leading-none"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-display text-2xl tracking-widest text-white">HI TECH</span>
            <span className="font-heading text-xs tracking-[0.4em] text-brand-gold font-light uppercase">
              Car Detailing
            </span>
          </motion.div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <NavLink label={link} />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="hidden md:flex btn-liquid items-center gap-2 px-5 py-2.5 border border-brand-gold/60 text-brand-gold font-heading font-semibold text-sm tracking-widest uppercase rounded"
            whileHover={{ scale: 1.04, borderColor: '#F5A201' }}
            whileTap={{ scale: 0.97 }}
          >
            Book Now
          </motion.a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-[#020e18] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
                className="font-display text-4xl tracking-widest text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 px-8 py-3 bg-brand-gold text-[#020e18] font-heading font-bold text-lg tracking-widest uppercase rounded"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ label }) {
  return (
    <a
      href={`#${label.toLowerCase()}`}
      className="relative group font-heading text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300"
    >
      {label}
      <motion.span
        className="absolute -bottom-1 left-0 h-px bg-brand-gold"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </a>
  )
}
