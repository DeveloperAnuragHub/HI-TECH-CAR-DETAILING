import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020e18] text-white">
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl text-white mb-2">
              Hi Tech Detailing
            </div>
            <div className="text-sm text-white/60 mb-4">
              Precision care. Modern protection. Shine that lasts.
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span>Designed for automotive enthusiasts •</span>
              <span>Est. 2024</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs text-brand-gold tracking-widest uppercase mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="text-white/70 hover:text-white transition"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs text-brand-gold tracking-widest uppercase mb-3">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <Phone size={16} className="text-brand-gold" />
                </div>
                <div className="text-[#E5E5E5]">
                  <div className="text-xs tracking-widest uppercase font-heading text-white/60">
                    Call
                  </div>
                  <div className="font-body"> (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <Mail size={16} className="text-brand-gold" />
                </div>
                <div className="text-[#E5E5E5]">
                  <div className="text-xs tracking-widest uppercase font-heading text-white/60">
                    Email
                  </div>
                  <div className="font-body">hello@hitechdetail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <MapPin size={16} className="text-brand-gold" />
                </div>
                <div className="text-[#E5E5E5]">
                  <div className="text-xs tracking-widest uppercase font-heading text-white/60">
                    Location
                  </div>
                  <div className="font-body">
                    1234 Detail Lane, Auto City, CA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours + Social */}
          <div>
            <h4 className="font-heading text-xs text-brand-gold tracking-widest uppercase mb-3">
              Hours & Social
            </h4>
            <div className="text-sm text-white/70 mb-4">
              Mon - Fri: 8am — 6pm
              <br />
              Sat: 9am — 4pm
              <br />
              Sun: Closed
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3.2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M15 8h2.5V4.5H15V3.2c0-.9.3-1.2 1.2-1.2H18V0h-3.1C12.1 0 11 1 11 3.6V4.5H9v3H11v7h3v-7z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center hover:bg-white/10 transition"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M22 5.9c-.6.3-1.3.5-2 .6.7-.4 1.2-1 1.4-1.7-.7.4-1.5.7-2.3.9-.6-.7-1.6-1.1-2.6-1.1-2 0-3.6 1.7-3.6 3.8 0 .3 0 .5.1.7-3 .0-5.6-1.7-7.3-4.1-.3.6-.5 1.3-.5 2 0 1.3.7 2.5 1.8 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.2 3.3 2.8 3.6-.5.2-1 .2-1.6.2-.4 0-.8 0-1.2-.1.8 2.6 3.2 4.4 6 4.4-2.2 1.7-5 2.7-8 2.7-.5 0-1 0-1.5-.1 2.9 1.8 6.3 2.8 10 2.8 12 0 18.5-10 18.5-18.6v-.8c1.2-.9 2-1.9 2.7-3.2z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/6 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Hi Tech Detailing — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
