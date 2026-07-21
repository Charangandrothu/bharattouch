import React, { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import Features from './components/Features';
import InteractiveCardDemo from './components/InteractiveCardDemo';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function AppInner() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Features />
        <InteractiveCardDemo />
        <HowItWorks />
        <Benefits />
        <ProductShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <AppInner />
    </ThemeProvider>
  );
}
