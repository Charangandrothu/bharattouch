import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import { useTheme } from 'next-themes';
import { ArrowRight, Layers, Sparkles, Smartphone, Globe, QrCode, Check, BarChart3 } from 'lucide-react';

/* ─── ANIMATED COUNTER ──────────────────────────────── */
function AnimatedCounter({ to, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2200;
    const step = 16;
    const increment = (to / duration) * step;
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [isInView, to]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── AVATAR ROW ─────────────────────────────────────── */
const avatarImages = [
  '/assets/imgi_57_gagandeep.png',
  '/assets/imgi_59_deepika.png',
  '/assets/imgi_58_manminder.png',
  '/assets/imgi_52_testimonial-pic.jpg',
];

/* ─── FLOATING NFC CARD ─────────────────────────────── */
function FloatingCard({
  style, className = '', children, delay = 0, floatDuration = 6,
  rotateBase = 0, cardClass = 'nfc-card-dark',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 80, damping: 14 }}
      style={style}
      className={`absolute nfc-card ${cardClass} ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -10, 0, -6, 0],
          rotate: [rotateBase, rotateBase + 1, rotateBase, rotateBase - 0.5, rotateBase],
        }}
        transition={{
          duration: floatDuration,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ─── MAIN HERO ──────────────────────────────────────── */
export default function Hero() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const heroRef = useRef(null);
  const sceneRef = useRef(null);

  /* ── Scroll-based phone + card transforms ── */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const phoneRotateX = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const phoneRotateY = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.88]);

  const card1X = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const card1Rotate = useTransform(scrollYProgress, [0, 1], [-8, -28]);

  const card2X = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const card2Rotate = useTransform(scrollYProgress, [0, 1], [10, 30]);

  const card3X = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], [-16, -5]);

  const card4X = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const card4Y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const card4Rotate = useTransform(scrollYProgress, [0, 1], [14, 26]);

  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgCircle2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  /* ── Mouse parallax for right scene ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMX = useSpring(mouseX, { damping: 25, stiffness: 140 });
  const smoothMY = useSpring(mouseY, { damping: 25, stiffness: 140 });
  const sceneRotateX = useTransform(smoothMY, [-300, 300], [6, -6]);
  const sceneRotateY = useTransform(smoothMX, [-500, 500], [-6, 6]);

  const onMouseMove = (e) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };
  const onMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  /* ── Text stagger variants ── */
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
    show: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 80, damping: 16 },
    },
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '120px', paddingBottom: '80px' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >

      {/* ── Background Layer ── */}
      <div className="hero-mesh-bg" />
      <div className="hero-grid-pattern" />
      <div className="noise-overlay" />

      {/* Parallax bg circles */}
      <motion.div
        style={{ y: bgCircle1Y }}
        className="absolute top-[-180px] right-[-120px] w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(14,165,164,0.12) 0%, transparent 65%)'
              : 'radial-gradient(circle, rgba(14,165,164,0.07) 0%, transparent 65%)',
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: bgCircle2Y }}
        className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)'
              : 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)',
          }}
        />
      </motion.div>

      {/* ── Content Grid ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        {/* ════════════════════════════
            LEFT COLUMN — TEXT & CTAs
        ════════════════════════════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-7"
              style={{
                background: isDark
                  ? 'rgba(14,165,164,0.12)'
                  : 'rgba(14,165,164,0.08)',
                border: `1px solid ${isDark ? 'rgba(14,165,164,0.25)' : 'rgba(14,165,164,0.2)'}`,
                color: 'var(--accent)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered NFC Networking
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-black leading-[1.06] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              color: 'var(--text-primary)',
            }}
          >
            Networking That
            <br />
            <span className="text-gradient-light">Works With</span>
            <br />
            a Single Touch.
          </motion.h1>

          {/* Supporting paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed mb-8 max-w-[480px]"
            style={{ color: 'var(--text-secondary)' }}
          >
            Replace disposable paper cards with a smart NFC digital identity.
            Share contacts instantly, capture leads with AI, and track every
            interaction—no app required for recipients.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold btn-primary focus-ring"
            >
              Get My Smart Card
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#customizer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold btn-secondary focus-ring"
              style={{ color: 'var(--text-primary)' }}
            >
              <Layers className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
              Design Custom Card
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-full pt-8"
            style={{ borderTop: `1px solid var(--border)` }}
          >
            {/* Avatar row + trust text */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {avatarImages.map((src, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full overflow-hidden border-2 -ml-2 first:ml-0"
                    style={{
                      borderColor: isDark ? '#0B0F19' : '#FFFFFF',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Trusted by 10,000+ Professionals
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <span className="text-xs ml-1" style={{ color: 'var(--text-muted)' }}>4.9/5</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: 500, suffix: 'K+', label: 'Connections' },
                { value: 50, suffix: 'K+', label: 'Cards Active' },
                { value: 200, suffix: '+', label: 'Enterprise' },
              ].map(({ value, suffix, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    <AnimatedCounter to={value} suffix={suffix} />
                  </span>
                  <span className="text-xs mt-0.5 font-medium" style={{ color: 'var(--text-muted)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ════════════════════════════
            RIGHT COLUMN — 3D SCENE
        ════════════════════════════ */}
        <div className="relative flex justify-center items-center h-[560px] lg:h-[640px]" style={{ perspective: '1200px' }}>

          {/* Scene wrapper — mouse parallax */}
          <motion.div
            ref={sceneRef}
            style={{
              rotateX: sceneRotateX,
              rotateY: sceneRotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full h-full flex justify-center items-center"
          >

            {/* ── Scroll-animated Phone Wrapper ── */}
            <motion.div
              style={{
                rotateX: phoneRotateX,
                rotateY: phoneRotateY,
                y: phoneY,
                scale: phoneScale,
                transformStyle: 'preserve-3d',
                z: 0,
              }}
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 60, damping: 14 }}
              className="relative z-20"
            >
              {/* Phone Frame */}
              <div className="phone-frame relative w-[248px] h-[504px] p-2.5">
                {/* Dynamic Island */}
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full z-30"
                  style={{ background: '#000' }}
                />

                {/* Screen */}
                <div
                  className="w-full h-full rounded-[34px] overflow-hidden flex flex-col select-none"
                  style={{ background: isDark ? '#0D1117' : '#F8FAFC' }}
                >
                  {/* Status bar */}
                  <div
                    className="h-12 flex items-end px-5 pb-2 shrink-0"
                    style={{ background: isDark ? '#0D1117' : '#F8FAFC' }}
                  />

                  {/* Profile banner */}
                  <div className="relative flex flex-col items-center pb-3 shrink-0">
                    <div
                      className="w-full h-20"
                      style={{ background: 'linear-gradient(135deg, #0EA5A4 0%, #0B8483 100%)' }}
                    />
                    <div
                      className="w-16 h-16 rounded-full border-[3px] -mt-8 overflow-hidden shadow-lg"
                      style={{ borderColor: isDark ? '#0D1117' : '#F8FAFC' }}
                    >
                      <img
                        src="/assets/imgi_57_gagandeep.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4
                      className="text-xs font-bold mt-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Gagandeep Singh
                    </h4>
                    <p className="text-[9px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      CEO • Aerovista Group
                    </p>

                    {/* Tag row */}
                    <div className="flex gap-1 mt-2">
                      <span
                        className="px-2 py-0.5 text-[8px] font-bold rounded-full"
                        style={{ background: 'rgba(14,165,164,0.12)', color: '#0EA5A4' }}
                      >
                        Real Estate
                      </span>
                      <span
                        className="px-2 py-0.5 text-[8px] font-bold rounded-full"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.06)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        New Delhi
                      </span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="px-3 grid grid-cols-2 gap-2 mb-3">
                    {[
                      { icon: <Smartphone className="w-3.5 h-3.5" style={{ color: '#0EA5A4' }} />, label: 'Call' },
                      { icon: <QrCode className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} />, label: 'Save' },
                    ].map(({ icon, label }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center gap-1 py-2.5 rounded-xl text-[9px] font-semibold"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
                          border: `1px solid var(--border)`,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {icon}
                        {label}
                      </div>
                    ))}
                  </div>

                  {/* Link rows */}
                  <div className="px-3 flex flex-col gap-1.5">
                    {[
                      { label: 'Visit Website', icon: <Globe className="w-3 h-3" /> },
                      { label: 'Portfolio', icon: <BarChart3 className="w-3 h-3" /> },
                      { label: 'LinkedIn', icon: <Check className="w-3 h-3" /> },
                    ].map(({ label, icon }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-[9px] font-semibold"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
                          border: `1px solid var(--border)`,
                          color: 'var(--text-primary)',
                        }}
                      >
                        <span>{label}</span>
                        <span style={{ color: 'var(--text-muted)' }}>{icon}</span>
                      </div>
                    ))}
                  </div>

                  {/* Analytics mini card */}
                  <div
                    className="mx-3 mt-3 px-3 py-2 rounded-xl flex items-center justify-between"
                    style={{
                      background: isDark ? 'rgba(14,165,164,0.08)' : 'rgba(14,165,164,0.06)',
                      border: '1px solid rgba(14,165,164,0.2)',
                    }}
                  >
                    <div>
                      <p className="text-[8px] font-semibold" style={{ color: 'var(--text-muted)' }}>
                        PROFILE VIEWS
                      </p>
                      <p className="text-xs font-black" style={{ color: 'var(--text-primary)' }}>
                        1,482 taps
                      </p>
                    </div>
                    <BarChart3 className="w-5 h-5" style={{ color: '#0EA5A4' }} />
                  </div>

                  {/* Bottom secure bar */}
                  <div
                    className="mt-auto py-2 flex items-center justify-center gap-1"
                    style={{ borderTop: `1px solid var(--border)` }}
                  >
                    <img
                      src="/assets/imgi_70_BharatTouch_SSL_Secured.png"
                      alt="SSL"
                      className="h-4 w-auto opacity-60"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Phone reflection sheen */}
                <div
                  className="absolute inset-0 rounded-[44px] pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)',
                  }}
                />
              </div>
            </motion.div>

            {/* ══════════════════════════
                FLOATING NFC CARDS
            ══════════════════════════ */}

            {/* Card 1: Teal card — top-left */}
            <motion.div
              style={{ x: card1X, y: card1Y, rotate: card1Rotate, z: 30 }}
              className="absolute"
              initial={{ opacity: 0, x: -60, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 70, damping: 14 }}
            >
              <motion.div
                animate={{
                  y: [0, -12, 0, -7, 0],
                  rotate: [-8, -7, -8, -8.5, -8],
                }}
                transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
                className="nfc-card nfc-card-teal"
                style={{ width: 180, height: 108, top: -200, left: -230, position: 'absolute', padding: '14px 16px' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <img
                    src="/assets/imgi_1_logo.svg"
                    alt="logo"
                    className="h-5 w-auto brightness-0 invert"
                    loading="lazy"
                  />
                  <div className="w-6 h-6 rounded border border-white/30 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                      <path d="M12 2a10 10 0 0 1 10 10M12 6a6 6 0 0 1 6 6M12 10a2 2 0 0 1 2 2"/><circle cx="12" cy="12" r="1"/>
                    </svg>
                  </div>
                </div>
                <p className="text-white font-black text-sm tracking-wide truncate">NAVJOT SINGH</p>
                <p className="text-white/70 text-[9px] font-semibold tracking-wider mt-0.5">FOUNDER & CEO</p>
                <p className="text-white/50 text-[8px] tracking-widest mt-0.5">BHARAT TOUCH</p>
              </motion.div>
            </motion.div>

            {/* Card 2: Dark card — top-right */}
            <motion.div
              style={{ x: card2X, y: card2Y, rotate: card2Rotate, z: 25 }}
              className="absolute"
              initial={{ opacity: 0, x: 60, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.0, type: 'spring', stiffness: 70, damping: 14 }}
            >
              <motion.div
                animate={{
                  y: [0, -8, 0, -14, 0],
                  rotate: [10, 11, 10, 9.5, 10],
                }}
                transition={{ duration: 6.5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
                className="nfc-card nfc-card-dark"
                style={{ width: 164, height: 100, top: -190, right: -210, position: 'absolute', padding: '12px 14px' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-white/90 font-black text-xs tracking-wide">DEEPIKA SHARMA</p>
                    <p className="text-white/50 text-[8px] tracking-wider mt-0.5">DIRECTOR • MEDOC</p>
                  </div>
                  <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 stroke-white/60" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                      <path d="M12 2a10 10 0 0 1 10 10M12 6a6 6 0 0 1 6 6M12 10a2 2 0 0 1 2 2"/><circle cx="12" cy="12" r="1"/>
                    </svg>
                  </div>
                </div>
                <div
                  className="h-px w-full my-2"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                />
                {/* QR block */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <div className="w-16 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                    <div className="w-10 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
                  </div>
                  <div className="w-8 h-8 bg-white rounded-lg p-1 flex items-center justify-center">
                    <img src="/assets/imgi_33_touch-scan.png" alt="QR" className="w-full h-full object-contain" loading="lazy" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 3: Gold Metal card — bottom-left */}
            <motion.div
              style={{ x: card3X, y: card3Y, rotate: card3Rotate, z: 20 }}
              className="absolute"
              initial={{ opacity: 0, x: -50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 70, damping: 14 }}
            >
              <motion.div
                animate={{
                  y: [0, -9, 0, -5, 0],
                  rotate: [-16, -15, -16, -16.5, -16],
                }}
                transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
                className="nfc-card nfc-card-gold"
                style={{ width: 158, height: 96, bottom: -180, left: -220, position: 'absolute', padding: '12px 14px' }}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-white font-black text-[10px] tracking-widest">METAL CARD</p>
                  <div className="w-8 h-5 rounded"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))' }}
                  />
                </div>
                {/* Chip simulation */}
                <div
                  className="w-9 h-6 rounded-md mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #FEF08A 0%, #EAB308 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
                  }}
                />
                <div className="flex gap-0.5 mt-1">
                  {[24, 18, 22, 16].map((w, i) => (
                    <div key={i} className="h-0.5 rounded-full" style={{ width: w, background: 'rgba(255,255,255,0.3)' }} />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Card 4: White PVC card — bottom-right */}
            <motion.div
              style={{ x: card4X, y: card4Y, rotate: card4Rotate, z: 15 }}
              className="absolute"
              initial={{ opacity: 0, x: 50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.4, type: 'spring', stiffness: 70, damping: 14 }}
            >
              <motion.div
                animate={{
                  y: [0, -11, 0, -8, 0],
                  rotate: [14, 15, 14, 13.5, 14],
                }}
                transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity, delay: 1.5 }}
                className="nfc-card nfc-card-white"
                style={{ width: 160, height: 98, bottom: -170, right: -200, position: 'absolute', padding: '12px 14px' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <img
                    src="/assets/imgi_1_logo.svg"
                    alt="logo"
                    className="h-4 w-auto"
                    loading="lazy"
                  />
                  <span
                    className="text-[7px] font-bold tracking-widest px-1.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(14,165,164,0.1)', color: '#0EA5A4' }}
                  >
                    PVC CARD
                  </span>
                </div>
                <p className="text-xs font-black tracking-wide" style={{ color: '#0F172A' }}>MANMINDER SINGH</p>
                <p className="text-[8px] font-semibold mt-0.5" style={{ color: '#475569' }}>HR DIRECTOR</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-0.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#0F172A' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#475569' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#0EA5A4' }} />
                  </div>
                  <div className="w-7 h-7 bg-slate-50 rounded-lg p-0.5 border border-slate-100">
                    <img src="/assets/imgi_33_touch-scan.png" alt="QR" className="w-full h-full object-contain" loading="lazy" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* QR scan badge — floats center-right */}
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 0.3 }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute z-30 rounded-2xl p-3 flex flex-col items-center gap-2"
              style={{
                right: -55,
                top: -30,
                width: 96,
                background: isDark ? 'rgba(17,24,39,0.9)' : 'rgba(255,255,255,0.9)',
                border: `1px solid var(--border)`,
                backdropFilter: 'blur(16px)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div
                className="relative w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center"
                style={{ background: isDark ? 'rgba(255,255,255,0.05)' : '#F8FAFC' }}
              >
                <img src="/assets/imgi_33_touch-scan.png" alt="QR" className="w-full h-full object-contain p-1" loading="lazy" />
                {/* Laser line */}
                <div
                  className="laser-sweep absolute left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, transparent, #0EA5A4, transparent)', opacity: 0.8 }}
                />
              </div>
              <span
                className="text-[8px] font-bold tracking-widest uppercase text-center"
                style={{ color: 'var(--text-muted)' }}
              >
                Scan Profile
              </span>
            </motion.div>

            {/* Live Notification badge — floats left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, type: 'spring' }}
              className="absolute z-30 rounded-2xl px-3 py-2 flex items-center gap-2"
              style={{
                left: -60,
                top: 40,
                background: isDark ? 'rgba(17,24,39,0.9)' : 'rgba(255,255,255,0.9)',
                border: `1px solid var(--border)`,
                backdropFilter: 'blur(16px)',
                boxShadow: 'var(--shadow-md)',
                width: 158,
              }}
            >
              <div
                className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center"
                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <p className="text-[9px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                  New Connection
                </p>
                <p className="text-[8px]" style={{ color: 'var(--text-muted)' }}>
                  +1 tap detected
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
        {/* End right column */}

      </div>
      {/* End grid */}

      {/* Bottom fade gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to bottom, transparent, var(--bg-primary))`,
        }}
      />

    </section>
  );
}
