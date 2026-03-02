import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { stagger, fadeUp, scaleIn, viewportConfig } from '../../utils/animations'

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', span: 'md:col-span-2', label: 'Ferrari Roma Detail' },
  { id: 2, src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', span: '', label: 'Porsche 911 Polish' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', span: '', label: 'BMW M3 Ceramic Coat' },
  { id: 4, src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', span: '', label: 'Mercedes AMG Interior' },
  { id: 5, src: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80', span: 'md:col-span-2', label: 'Lamborghini Urus PPF' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-brand-gold" />
              <span className="font-heading text-brand-gold text-sm tracking-[0.4em] uppercase font-light">Our Work</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none text-white">
              GALLERY
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="font-body text-white/40 max-w-sm leading-relaxed">
            A showcase of our finest work — each vehicle treated as if it were our own.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              className={`${item.span} group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]`}
              onClick={() => setLightbox(item)}
              whileHover={{ scale: 1.01 }}
            >
              <motion.img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020e18]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ZoomIn size={28} className="text-white" />
                <span className="font-heading text-white text-sm tracking-widest uppercase">{item.label}</span>
              </motion.div>
              {/* Gold border flash */}
              <motion.div
                className="absolute inset-0 rounded-xl border border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#020e18]/95 backdrop-blur-xl p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.label} className="w-full h-auto max-h-[80vh] object-contain" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span className="font-display text-2xl text-white">{lightbox.label}</span>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
