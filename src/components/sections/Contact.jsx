import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import {
  stagger,
  fadeUp,
  slideLeft,
  slideRight,
  viewportConfig,
} from "../../utils/animations";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center filter blur-20 opacity-75"
          style={{
            backgroundImage: `url('https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/10/bmw-x6-vantablack-1.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020e18]/98 via-[#013C58]/90 to-[#020e18]/95" />
      </motion.div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-12 bg-brand-gold" />
              <span className="font-heading text-brand-gold text-sm tracking-[0.4em] uppercase font-light">
                Get in Touch
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(3rem,5vw,5rem)] leading-none text-white mb-6"
            >
              BOOK YOUR
              <br />
              <span className="shimmer-text">DETAIL TODAY</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-white/45 leading-relaxed mb-10"
            >
              Ready to experience the Hi Tech difference? Reach out and we'll
              craft the perfect package for your vehicle.
            </motion.p>

            <motion.div variants={stagger} className="space-y-5">
              {[
                { Icon: Phone, label: "Call Us", value: "(555) 123-4567" },
                { Icon: Mail, label: "Email", value: "hello@hitechdetail.com" },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "1234 Detail Lane, Auto City, CA",
                },
              ].map(({ Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-heading text-xs text-[#E5E5E5] tracking-widest uppercase">
                      {label}
                    </div>
                    <div className="font-body text-sm text-[#E5E5E5]">
                      {value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white/[0.06] border border-white/20 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="font-display text-3xl text-white mb-8">
              REQUEST A QUOTE
            </h3>
            <div className="space-y-5">
              {[
                { label: "Your Name", type: "text", placeholder: "John Smith" },
                {
                  label: "Email Address",
                  type: "email",
                  placeholder: "john@email.com",
                },
                {
                  label: "Vehicle",
                  type: "text",
                  placeholder: "2023 Porsche 911",
                },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="font-heading text-xs text-white/40 tracking-widest uppercase mb-2 block">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full bg-white/[0.06] border border-white/20 rounded-lg px-4 py-3 text-white/90 font-body text-sm placeholder-white/40 outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition duration-200"
                  />
                </div>
              ))}

              <div>
                <label className="font-heading text-xs text-white/40 tracking-widest uppercase mb-2 block">
                  Service Needed
                </label>
                <select className="w-full bg-white/[0.06] border border-white/20 rounded-lg px-4 py-3 text-white/90 font-body text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition duration-200">
                  <option>Full Detail</option>
                  <option>Paint Correction</option>
                  <option>Ceramic Coating</option>
                  <option>Express Detail</option>
                  <option>Interior Restoration</option>
                </select>
              </div>

              <div>
                <label className="font-heading text-xs text-white/40 tracking-widest uppercase mb-2 block">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your vehicle and specific concerns..."
                  className="w-full bg-white/[0.06] border border-white/20 rounded-lg px-4 py-3 text-white/90 font-body text-sm placeholder-white/40 outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition duration-200 resize-y"
                />
              </div>

              <motion.button
                className="btn-liquid w-full flex items-center justify-center gap-3 py-4 bg-brand-gold text-[#020e18] font-heading font-bold text-sm tracking-widest uppercase rounded-lg group focus:outline-none focus:ring-4 focus:ring-brand-gold/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Request
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
