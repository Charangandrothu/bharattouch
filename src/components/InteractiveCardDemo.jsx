import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Smartphone, Check, Sparkles, CreditCard } from 'lucide-react';

export default function InteractiveCardDemo() {
  const [name, setName] = useState('NAVJOT SINGH');
  const [title, setTitle] = useState('FOUNDER & CEO');
  const [company, setCompany] = useState('BHARAT TOUCH');
  const [material, setMaterial] = useState('metal');

  const pvcColors = [
    { name: 'Matte Black', value: '#1E293B', text: '#FFFFFF', accent: '#0EA5A4' },
    { name: 'Pure White', value: '#FFFFFF', text: '#0F172A', accent: '#0EA5A4' },
    { name: 'Classic Teal', value: '#0EA5A4', text: '#FFFFFF', accent: '#FFFFFF' }
  ];

  const metalColors = [
    { name: 'Stealth Black', value: '#0F172A', text: '#E2E8F0', accent: '#F59E0B' },
    { name: 'Elite Gold', value: '#B45309', text: '#FFFFFF', accent: '#FEF08A' },
    { name: 'Brushed Silver', value: '#64748B', text: '#F1F5F9', accent: '#0EA5A4' }
  ];

  const [colorIndex, setColorIndex] = useState(0);
  const activeColor = material === 'pvc' ? pvcColors[colorIndex] : metalColors[colorIndex];

  // 3D Tilt
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const springConfig = { damping: 20, stiffness: 120 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  /* Input class helper */
  const inputStyle = {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    borderRadius: '12px',
    padding: '10px 16px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
  };

  const materialBtnStyle = (active) => ({
    padding: '12px 16px',
    borderRadius: '12px',
    fontWeight: 700,
    fontSize: '14px',
    border: active ? '1px solid var(--accent)' : '1px solid var(--border)',
    background: active ? 'rgba(14,165,164,0.08)' : 'var(--bg-secondary)',
    color: active ? 'var(--accent)' : 'var(--text-secondary)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  return (
    <section
      id="customizer"
      className="py-24"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5
            className="font-bold text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Real-time Visual Customizer
          </h5>
          <h2
            className="font-black text-3xl sm:text-4xl leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Design Your Smart Identity.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Craft your card live. Select your materials, customize layout texts, and experience how your physical networking tool will feel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Form */}
          <div
            className="lg:col-span-6 p-8 rounded-3xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3
              className="font-bold text-lg mb-6 flex items-center gap-2"
              style={{ color: 'var(--text-primary)' }}
            >
              <Sparkles className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              Configure Card Settings
            </h3>

            {/* Material Selector */}
            <div className="mb-6">
              <label
                className="block font-semibold text-xs tracking-wider uppercase mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                Card Material
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setMaterial('pvc'); setColorIndex(0); }}
                  style={materialBtnStyle(material === 'pvc')}
                >
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4" /> Premium PVC
                  </span>
                  <span>₹1,999</span>
                </button>
                <button
                  onClick={() => { setMaterial('metal'); setColorIndex(0); }}
                  style={materialBtnStyle(material === 'metal')}
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Engraved Metal
                  </span>
                  <span>₹3,499</span>
                </button>
              </div>
            </div>

            {/* Text Inputs */}
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <label className="block font-semibold text-xs tracking-wider uppercase mb-1.5" style={{ color: 'var(--text-muted)' }}>
                  Cardholder Name
                </label>
                <input
                  type="text" maxLength={24}
                  value={name}
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                  style={inputStyle}
                  placeholder="NAVJOT SINGH"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-xs tracking-wider uppercase mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    Job Title / Role
                  </label>
                  <input
                    type="text" maxLength={20}
                    value={title}
                    onChange={(e) => setTitle(e.target.value.toUpperCase())}
                    style={inputStyle}
                    placeholder="FOUNDER & CEO"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-xs tracking-wider uppercase mb-1.5" style={{ color: 'var(--text-muted)' }}>
                    Company Name
                  </label>
                  <input
                    type="text" maxLength={20}
                    value={company}
                    onChange={(e) => setCompany(e.target.value.toUpperCase())}
                    style={inputStyle}
                    placeholder="BHARAT TOUCH"
                  />
                </div>
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-8">
              <label className="block font-semibold text-xs tracking-wider uppercase mb-2" style={{ color: 'var(--text-muted)' }}>
                Card Color & Finish
              </label>
              <div className="flex items-center gap-3">
                {(material === 'pvc' ? pvcColors : metalColors).map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setColorIndex(idx)}
                    className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300"
                    style={{
                      backgroundColor: color.value === '#FFFFFF' ? '#F8FAFC' : color.value,
                      borderColor: colorIndex === idx ? 'var(--accent)' : 'transparent',
                      transform: colorIndex === idx ? 'scale(1.1)' : 'scale(1)',
                    }}
                    title={color.name}
                  >
                    {colorIndex === idx && (
                      <Check className={`w-4 h-4 ${color.value === '#FFFFFF' ? 'text-accent' : 'text-white'}`} />
                    )}
                  </button>
                ))}
                <span className="text-xs font-medium ml-2" style={{ color: 'var(--text-muted)' }}>
                  {activeColor.name}
                </span>
              </div>
            </div>

            {/* Summary Box */}
            <div
              className="p-4 rounded-2xl flex flex-col gap-3"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Total Custom Package Cost:
                </span>
                <span className="font-black text-lg" style={{ color: 'var(--text-primary)' }}>
                  {material === 'pvc' ? '₹1,999' : '₹3,499'}
                </span>
              </div>
              <div
                className="flex flex-col gap-1.5 pt-3"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {[
                  'Free Shipping Pan-India',
                  'Includes 1 Year Pro digital hosting profile',
                  'Integrated QR back-up print',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#pricing"
                className="w-full text-center py-3 rounded-xl mt-2 font-semibold text-sm transition-all duration-300 focus-ring btn-primary"
              >
                Proceed with this card design
              </a>
            </div>
          </div>

          {/* Right: 3D Card Mockup */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div
              className="w-full max-w-[420px] aspect-[1.586/1] cursor-grab active:cursor-grabbing select-none"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                ref={cardRef}
                style={{
                  rotateX: smoothRotateX,
                  rotateY: smoothRotateY,
                  transformStyle: 'preserve-3d',
                  backgroundColor: activeColor.value,
                  color: activeColor.text,
                  borderColor: material === 'metal' ? activeColor.accent + '60' : 'rgba(226,232,240,0.25)',
                  boxShadow: material === 'metal'
                    ? '0 25px 60px -15px rgba(0,0,0,0.4), inset 0 0 40px rgba(0,0,0,0.15)'
                    : '0 20px 50px -12px rgba(15,23,42,0.15)',
                }}
                className="relative w-full h-full rounded-[22px] p-8 flex flex-col justify-between border shadow-2xl overflow-hidden"
              >
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                {/* Metal dot texture */}
                {material === 'metal' && (
                  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                )}

                {/* Top Bar */}
                <div className="flex items-start justify-between w-full relative z-10">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/imgi_1_logo.svg"
                      alt="Logo"
                      className="h-7 w-auto"
                      style={{ filter: activeColor.value === '#FFFFFF' ? 'none' : 'brightness(0) invert(1)' }}
                    />
                    <span className="font-bold text-base tracking-tight" style={{ color: activeColor.text }}>
                      BharatTouch
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center border border-current opacity-60"
                      style={{ color: activeColor.text }}
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5">
                        <path d="M12 2a10 10 0 0 1 10 10" />
                        <path d="M12 6a6 6 0 0 1 6 6" />
                        <path d="M12 10a2 2 0 0 1 2 2" />
                        <circle cx="12" cy="12" r="1" />
                      </svg>
                    </div>
                    <span className="text-[6px] tracking-widest font-bold opacity-60">NFC TOUCH</span>
                  </div>
                </div>

                {/* Metal watermark */}
                {material === 'metal' && (
                  <div className="absolute left-[38%] top-[40%] -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-20 blur-[0.5px]">
                    <img src="/assets/imgi_1_logo.svg" alt="" className="w-20 h-20 filter brightness-0 invert" />
                  </div>
                )}

                {/* Bottom Bar */}
                <div className="flex items-end justify-between w-full relative z-10">
                  <div className="flex flex-col items-start gap-1 max-w-[70%]">
                    <h4 className="font-black text-lg tracking-wider truncate w-full" style={{ color: activeColor.text }}>
                      {name || 'YOUR NAME'}
                    </h4>
                    <div className="flex flex-col gap-0.5 opacity-75">
                      <p className="text-[10px] font-bold tracking-wider" style={{ color: activeColor.text }}>
                        {title || 'JOB TITLE'}
                      </p>
                      <p className="text-[8px] font-medium tracking-wide" style={{ color: activeColor.accent }}>
                        {company || 'COMPANY NAME'}
                      </p>
                    </div>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center w-14 h-14 shrink-0">
                    <img src="/assets/imgi_33_touch-scan.png" alt="QR code" className="w-full h-full object-contain" />
                  </div>
                </div>
              </motion.div>
            </div>

            <p
              className="text-[11px] mt-6 flex items-center gap-1.5"
              style={{ color: 'var(--text-muted)' }}
            >
              <Smartphone className="w-4 h-4" style={{ color: 'var(--accent)' }} />
              Hover to tilt card. Tap triggers NFC signals on supported viewports.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
