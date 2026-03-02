import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Shield, Droplets, Zap, Star, Car } from "lucide-react";
import {
  stagger,
  fadeUp,
  scaleIn,
  viewportConfig,
} from "../../utils/animations";

const services = [
  {
    icon: Sparkles,
    title: "Full Detail",
    tagline: "Complete Transformation",
    desc: "Inside and out — a comprehensive detail that leaves your vehicle utterly spotless.",
    price: "From $299",
    accent: "#F5A201",
  },
  {
    icon: Shield,
    title: "Paint Protection",
    tagline: "Ceramic & PPF",
    desc: "Nano-ceramic coatings that bond to your paint, repelling contaminants for years.",
    price: "From $499",
    accent: "#A8E8F9",
    featured: true,
  },
  {
    icon: Droplets,
    title: "Paint Correction",
    tagline: "Swirl-Free Finish",
    desc: "Multi-stage machine polishing to eliminate swirls, scratches, and oxidation.",
    price: "From $399",
    accent: "#FFBA42",
  },
  {
    icon: Zap,
    title: "Express Detail",
    tagline: "Quick & Brilliant",
    desc: "High-quality express service when time is short but standards arent.",
    price: "From $99",
    accent: "#FFD35B",
  },
  {
    icon: Star,
    title: "Interior Restoration",
    tagline: "Showroom Inside",
    desc: "Steam cleaning, leather treatment, and deep odor elimination.",
    price: "From $199",
    accent: "#A8E8F9",
  },
  {
    icon: Car,
    title: "Fleet Services",
    tagline: "Volume Pricing",
    desc: "Tailored packages for businesses requiring consistent fleet presentation.",
    price: "Custom Quote",
    accent: "#F5A201",
  },
];

function ServiceCard({ service, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [12, -12]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-12, 12]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const Icon = service.icon;

  return (
    <motion.div
      variants={scaleIn}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ z: 30 }}
        className={`group relative h-full p-8 rounded-2xl border cursor-default transition-all duration-300 ${
          service.featured
            ? "bg-gradient-to-br from-brand-primary/40 to-brand-dark/80 border-sky-light/30"
            : "bg-white/[0.03] border-white/10 hover:border-white/20"
        }`}
      >
        {service.featured && (
          <div className="absolute -top-3 left-8 px-3 py-1 bg-brand-gold text-[#020e18] font-heading text-xs font-bold tracking-widest uppercase rounded-full">
            Most Popular
          </div>
        )}

        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `0 0 60px ${service.accent}20, inset 0 0 60px ${service.accent}05`,
          }}
        />

        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden"
          style={{
            background: `${service.accent}15`,
            border: `1px solid ${service.accent}30`,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle, ${service.accent}30, transparent)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <Icon
            size={24}
            style={{ color: service.accent }}
            className="relative z-10"
          />
        </motion.div>

        <p
          className="font-heading text-xs tracking-[0.3em] uppercase mb-2"
          style={{ color: service.accent }}
        >
          {service.tagline}
        </p>
        <h3 className="font-display text-3xl text-white mb-3">
          {service.title}
        </h3>
        <p className="font-body text-white/45 text-sm leading-relaxed mb-6">
          {service.desc}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-heading text-lg font-semibold text-white">
            {service.price}
          </span>
          <motion.button
            className="px-4 py-1.5 border border-white/10 text-white/50 font-heading text-xs tracking-widest uppercase rounded hover:border-white/30 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-20 max-w-xl"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-12 bg-brand-gold" />
            <span className="font-heading text-brand-gold text-sm tracking-[0.4em] uppercase font-light">
              What We Offer
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none text-white mb-4"
          >
            OUR SERVICES
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-white/40 leading-relaxed"
          >
            From a quick refresh to a full concours-level restoration — every
            service is performed with the same relentless attention to detail.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
