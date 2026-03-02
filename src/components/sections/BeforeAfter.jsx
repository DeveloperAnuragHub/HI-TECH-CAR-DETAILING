import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { stagger, fadeUp, slideLeft, slideRight, viewportConfig } from '../../utils/animations'

function ComparisonSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const handleMouseDown = (e) => { isDragging.current = true }
  const handleMouseMove = (e) => { if (isDragging.current) updatePosition(e.clientX) }
  const handleMouseUp = () => { isDragging.current = false }
  const handleTouchMove = (e) => updatePosition(e.touches[0].clientX)

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[560px] rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* AFTER (base layer) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80')` }}
      />
      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-brand-gold text-[#020e18] font-heading text-xs font-bold tracking-widest uppercase rounded">
        AFTER
      </div>

      {/* BEFORE (clip layer) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80')`,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      />
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/20 backdrop-blur-sm text-white font-heading text-xs font-bold tracking-widest uppercase rounded">
        BEFORE
      </div>

      {/* Divider */}
      <motion.div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-20"
        style={{ left: `${position}%` }}
      >
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={() => {}}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg cursor-col-resize"
        >
          <span className="text-[#020e18] font-bold text-xs select-none">⟺</span>
        </div>
      </motion.div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-brand-dark/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-brand-gold" />
              <span className="font-heading text-brand-gold text-sm tracking-[0.4em] uppercase font-light">
                Transformation
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(3rem,5vw,5rem)] leading-none text-white mb-6"
            >
              SEE THE
              <br />
              <span className="shimmer-text">DIFFERENCE</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-white/45 leading-relaxed mb-8">
              Every car that leaves our shop is a testament to what true dedication looks like. Drag the slider to see the incredible transformation our team delivers.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3">
              {['Swirl & scratch elimination', 'Deep gloss restoration', 'Hydrophobic protection applied', 'Interior sanitized & conditioned'].map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-white/60 font-body text-sm">
                  <span className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold text-xs">✓</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Slider */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <ComparisonSlider />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
