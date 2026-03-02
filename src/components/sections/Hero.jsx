import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { stagger, fadeUp, letterReveal } from '../../utils/animations'

const words = ['PRECISION', 'PASSION', 'PERFECTION']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Parallax BG */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-[120%] -mt-[10%] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&q=80')`,
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020e18]/95 via-[#020e18]/70 to-[#013C58]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020e18] via-transparent to-transparent" />
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/30 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-brand-gold" />
            <span className="font-heading text-brand-gold text-sm tracking-[0.4em] uppercase font-light">
              Premium Auto Care
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-display text-[clamp(4rem,12vw,11rem)] leading-none text-white"
              style={{ perspective: '1000px' }}
            >
              {'HI TECH'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterReveal}
                  className="inline-block"
                  style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.div
              variants={fadeUp}
              className="font-display text-[clamp(2rem,6vw,5rem)] leading-none shimmer-text"
            >
              CAR DETAILING
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body text-white/50 text-lg max-w-lg leading-relaxed mb-10 font-light"
          >
            Where automotive artistry meets obsessive precision. We restore, protect, and elevate your vehicle to showroom perfection.
          </motion.p>

          {/* Stat chips */}
          <motion.div variants={stagger} className="flex flex-wrap gap-6 mb-12">
            {[['500+', 'Cars Detailed'], ['10+', 'Years Experience'], ['100%', 'Satisfaction']].map(([num, label]) => (
              <motion.div key={label} variants={fadeUp} className="flex flex-col">
                <span className="font-display text-3xl text-brand-gold">{num}</span>
                <span className="font-heading text-white/40 text-xs tracking-widest uppercase">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="btn-liquid group relative flex items-center gap-3 px-8 py-4 bg-brand-gold text-[#020e18] font-heading font-bold text-sm tracking-widest uppercase rounded overflow-hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              animate={{ boxShadow: ['0 0 0px #F5A201', '0 0 30px #F5A20166', '0 0 0px #F5A201'] }}
              transition={{ boxShadow: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' } }}
            >
              Book a Detail
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#services"
              className="btn-liquid flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-heading font-semibold text-sm tracking-widest uppercase rounded"
              whileHover={{ scale: 1.04, borderColor: 'rgba(168,232,249,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              View Services
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-6 flex flex-col items-center gap-2"
        >
          <span className="font-heading text-xs tracking-[0.3em] text-white/30 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-brand-gold" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
