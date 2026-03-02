# 🚗 Hi Tech Car Detailing — Premium Website

A cinematic, luxury automotive website built with React + Vite + Framer Motion.

---

## 📁 Project Structure

```
hi-tech-detailing/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── utils/
    │   └── animations.js          # Reusable Framer Motion variants
    ├── hooks/
    │   └── useParallax.js         # Scroll parallax hook
    └── components/
        ├── layout/
        │   ├── Navbar.jsx          # Sticky nav + mobile slide menu
        │   └── Footer.jsx
        └── sections/
            ├── Hero.jsx            # Parallax + letter reveal animation
            ├── Services.jsx        # 3D tilt + glow service cards
            ├── BeforeAfter.jsx     # Interactive drag comparison slider
            ├── Gallery.jsx         # Zoom grid + lightbox
            ├── Testimonials.jsx    # Review cards
            └── Contact.jsx         # Parallax + quote form
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
cd hi-tech-detailing
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

### 3. Build for production
```bash
npm run build
npm run preview
```

---

## 🎨 Design System

### Colors
| Name     | Hex       |
|----------|-----------|
| Sky Blue | `#A8E8F9` |
| Primary  | `#00537A` |
| Dark     | `#013C58` |
| Gold     | `#F5A201` |
| Amber    | `#FFBA42` |
| Yellow   | `#FFD35B` |

### Typography
- **Display** — Bebas Neue (headlines)
- **Heading** — Barlow Condensed (labels, nav)
- **Body** — DM Sans (body text)

---

## ✨ Animation Features

| Section       | Effect                                          |
|---------------|-------------------------------------------------|
| Hero          | Parallax BG, letter-by-letter reveal, pulsing CTA glow |
| Navbar        | Slide-down entrance, animated underlines, mobile slide |
| Services      | 3D tilt on mouse move, icon glow on hover      |
| Before/After  | Drag-to-reveal comparison slider               |
| Gallery       | Zoom on hover, lightbox open/close animation   |
| All Sections  | Fade-up + stagger on scroll into view          |
| Buttons       | Liquid radial hover effect + scale             |

---

## ⚡ Performance

- Lazy loading for all below-fold sections via `React.lazy`
- `<Suspense>` fallbacks
- `will-change: transform` on animated elements
- Framer Motion `viewport.once: true` to prevent re-animation
- All images lazy-loaded via native `loading="lazy"`

---

## 🔧 Customization

- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Brand name**: Update text in `Navbar.jsx` and `Footer.jsx`
- **Services**: Edit the `services` array in `Services.jsx`
- **Gallery images**: Swap Unsplash URLs in `Gallery.jsx`
- **Contact info**: Update `Contact.jsx` contact details
- **Animation timing**: Tweak variants in `src/utils/animations.js`
