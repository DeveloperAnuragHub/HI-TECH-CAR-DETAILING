import { Suspense, lazy } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";

// Lazy load below-fold sections
const Services = lazy(() => import("./components/sections/Services"));
const BeforeAfter = lazy(() => import("./components/sections/BeforeAfter"));
const Gallery = lazy(() => import("./components/sections/Gallery"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const Contact = lazy(() => import("./components/sections/Contact"));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020e18] text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<div className="py-32" />}>
          <Services />
          <BeforeAfter />
          <Gallery />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
