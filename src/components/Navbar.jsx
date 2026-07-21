import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Menu, X, ArrowRight, Sun, Moon, Monitor } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'showcase', label: 'Showcase', href: '#showcase' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
  ];

  // Magnetic CTA
  const ctaRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springConfig = { damping: 12, stiffness: 120 };
  const ctaX = useSpring(mx, springConfig);
  const ctaY = useSpring(my, springConfig);

  const onCtaMouseMove = (e) => {
    if (!ctaRef.current) return;
    const r = ctaRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) * 0.3);
    my.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onCtaMouseLeave = () => { mx.set(0); my.set(0); };

  const isDark = mounted && resolvedTheme === 'dark';

  const cycleTheme = () => {
    if (resolvedTheme === 'light') setTheme('dark');
    else if (resolvedTheme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const ThemeIcon = () => {
    if (!mounted) return <Monitor className="w-4 h-4" />;
    if (theme === 'system') return <Monitor className="w-4 h-4" />;
    if (resolvedTheme === 'dark') return <Moon className="w-4 h-4" />;
    return <Sun className="w-4 h-4" />;
  };

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <motion.nav
          animate={{
            paddingTop: scrolled ? '8px' : '14px',
            paddingBottom: scrolled ? '8px' : '14px',
            width: scrolled ? '82%' : '90%',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          className="pointer-events-auto mt-4 rounded-full border px-6 lg:px-8 flex items-center justify-between"
          style={{
            background: isDark
              ? 'rgba(11,15,25,0.85)'
              : 'rgba(255,255,255,0.88)',
            borderColor: isDark
              ? 'rgba(255,255,255,0.09)'
              : 'rgba(226,232,240,0.9)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: isDark
              ? '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
              : '0 4px 24px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 shrink-0 focus-ring rounded-lg"
            onClick={() => setActiveLink('home')}
          >
            <img
              src="/assets/imgi_1_logo.svg"
              alt="Bharat Touch"
              className="h-7 w-auto"
              style={{ filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus-ring"
                style={{
                  color: activeLink === link.id
                    ? 'var(--text-primary)'
                    : 'var(--text-secondary)',
                }}
              >
                {link.label}
                {activeLink === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: isDark
                        ? 'rgba(255,255,255,0.07)'
                        : 'rgba(15,23,42,0.06)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 focus-ring"
              style={{
                color: 'var(--text-secondary)',
                background: isDark
                  ? 'rgba(255,255,255,0.06)'
                  : 'rgba(15,23,42,0.04)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)'}`,
              }}
              aria-label="Toggle theme"
            >
              {mounted && <ThemeIcon />}
            </button>

            {/* Magnetic CTA */}
            <motion.a
              ref={ctaRef}
              href="#pricing"
              style={{ x: ctaX, y: ctaY }}
              onMouseMove={onCtaMouseMove}
              onMouseLeave={onCtaMouseLeave}
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer focus-ring btn-primary"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full focus-ring"
              style={{
                color: 'var(--text-primary)',
                background: isDark
                  ? 'rgba(255,255,255,0.06)'
                  : 'rgba(15,23,42,0.04)',
                border: `1px solid var(--border)`,
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-24 left-0 right-0 z-40 mx-auto px-4"
            style={{ maxWidth: '90%', left: '5%' }}
          >
            <div
              className="rounded-3xl p-6 flex flex-col gap-2"
              style={{
                background: isDark ? 'rgba(11,15,25,0.95)' : 'rgba(255,255,255,0.95)',
                border: `1px solid var(--border)`,
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => { setActiveLink(link.id); setMobileOpen(false); }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 rounded-2xl text-base font-semibold"
                  style={{
                    color: 'var(--text-primary)',
                    background: activeLink === link.id
                      ? (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.04)')
                      : 'transparent',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 py-3.5 rounded-2xl text-sm font-semibold btn-primary"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
