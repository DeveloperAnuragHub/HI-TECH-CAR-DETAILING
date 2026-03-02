import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { stagger, fadeUp, scaleIn, viewportConfig } from '../../utils/animations'

const testimonials = [
  {
    name: 'Marcus D.',
    vehicle: 'Porsche 911 GT3',
    text: "I've had my car detailed by a dozen shops across the country. Hi Tech is on a completely different level. The paint correction alone was worth twice the price.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=3',
  },
  {
    name: 'Sarah K.',
    vehicle: 'Mercedes-AMG GLE',
    text: "The ceramic coating they applied looks absolutely incredible six months later. Water still beads off like day one. Exceptional work and professionalism.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=49',
  },
  {
    name: 'James L.',
    vehicle: 'BMW M5 Competition',
    text: "They treated my car like it was a piece of art. Every panel, every corner was done with care. The interior restoration brought it back to factory-new.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-brand-gold" />
            <span className="font-heading text-brand-gold text-sm tracking-[0.4em] uppercase font-light">Reviews</span>
            <span className="h-px w-12 bg-brand-gold" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none text-white">
            CLIENT STORIES
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              className="relative group p-8 bg-white/[0.03] border border-white/8 rounded-2xl hover:border-white/15 transition-all duration-500"
              whileHover={{ y: -6 }}
            >
              {/* Quote mark */}
              <div className="font-display text-8xl text-brand-gold/10 leading-none absolute top-4 right-6 select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(t.rating).fill(0).map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <p className="font-body text-white/60 leading-relaxed text-sm mb-8 relative z-10">"{t.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-gold/30"
                  loading="lazy"
                />
                <div>
                  <div className="font-heading font-semibold text-white text-sm">{t.name}</div>
                  <div className="font-body text-white/35 text-xs">{t.vehicle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
