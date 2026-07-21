import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BarChart, Globe, Check } from 'lucide-react';

export default function ProductShowcase() {
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);
  const springConfig = { damping: 30, stiffness: 150 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <section
      id="showcase"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 overflow-hidden relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Soft radial accent */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,164,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h5
            className="font-bold text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Product Showcase
          </h5>
          <h2
            className="font-black text-3xl sm:text-4xl leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Dynamic Digital Identity Profiles.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Say goodbye to static contact files. Showcase your work, portfolios, booking links, and download channels via responsive mobile microsites.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text */}
          <div className="lg:col-span-4 flex flex-col items-start text-left z-10">
            <h3
              className="font-black text-2xl mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Interactive Portfolios &amp; Social Integration
            </h3>
            <p
              className="text-sm sm:text-base mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Your digital card redirects clients to a custom, beautifully formatted mobile microsite. Update your contact cards, link social channels, upload PDFs, and gather analytical updates instantly.
            </p>

            <div className="flex flex-col gap-3.5 mb-8 w-full">
              {[
                'Custom themes & color accents',
                'Downloadable corporate PDFs & vCard files',
                'Embedded video & photo portfolios',
                'Secure SSL certificates on custom domains'
              ].map((pt) => (
                <div key={pt} className="flex items-center gap-3">
                  <div
                    className="p-0.5 rounded-full"
                    style={{
                      background: 'rgba(14,165,164,0.1)',
                      border: '1px solid rgba(14,165,164,0.2)',
                    }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                  </div>
                  <span
                    className="text-xs sm:text-sm font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 focus-ring cursor-pointer btn-primary"
            >
              Get Your Digital Profile
            </a>
          </div>

          {/* Right 3D Mockup */}
          <div className="lg:col-span-8 flex justify-center items-center relative">
            <motion.div
              style={{
                rotateX: smoothRotateX,
                rotateY: smoothRotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[620px] h-[340px] sm:h-[450px] flex items-center justify-center"
            >

              {/* Back: Dashboard */}
              <div
                className="absolute w-[80%] aspect-[1.6/1] rounded-2xl overflow-hidden z-10 left-4 top-4"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-xl)',
                  transform: 'translateZ(10px) rotate(-2deg)',
                }}
              >
                {/* Browser bar */}
                <div
                  className="px-4 py-2 border-b flex items-center gap-1.5 select-none"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--border)' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--border)' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--border)' }} />
                  <div
                    className="ml-4 flex items-center rounded-md px-2.5 py-0.5 text-[9px] font-medium w-40 gap-1.5"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <Globe className="w-2.5 h-2.5" style={{ color: 'var(--text-muted)' }} />
                    <span>bharattouch.com/dashboard</span>
                  </div>
                </div>
                {/* Dashboard content */}
                <div
                  className="w-full h-full p-4 flex items-center justify-center"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <img
                    src="/assets/imgi_32_safari-img.png"
                    alt="Dashboard UI"
                    className="max-h-full max-w-full object-contain drop-shadow-sm"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Front: Phone profile */}
              <div
                className="absolute w-[210px] h-[400px] rounded-[36px] p-2 z-20 right-6 bottom-4"
                style={{
                  background: '#0F172A',
                  border: '5px solid #1e293b',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                  transform: 'translateZ(60px) rotate(2deg)',
                }}
              >
                {/* Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full z-30" style={{ background: '#0F172A' }} />

                {/* Screen */}
                <div
                  className="w-full h-full rounded-[28px] overflow-hidden p-2 flex flex-col relative select-none"
                  style={{ background: '#F8FAFC' }}
                >
                  {/* Banner */}
                  <div
                    className="h-16 relative flex items-end justify-center rounded-t-2xl"
                    style={{ background: 'linear-gradient(135deg, #0EA5A4 0%, #0B8483 100%)' }}
                  >
                    <div className="absolute -bottom-6 w-12 h-12 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                      <img src="/assets/imgi_57_gagandeep.png" alt="Avatar" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="mt-8 text-center flex-1">
                    <h5 className="font-black text-xs" style={{ color: '#0F172A' }}>Gagandeep Singh</h5>
                    <p className="text-[9px] mt-0.5" style={{ color: '#475569' }}>Commercial Real Estate Manager</p>

                    {/* Analytics card */}
                    <div className="mt-4 p-2 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-between text-left">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[8px] uppercase tracking-wider font-semibold" style={{ color: '#94A3B8' }}>Total Profile Views</span>
                        <span className="text-xs font-black" style={{ color: '#0F172A' }}>1,482 scans</span>
                      </div>
                      <div className="p-1 rounded-lg" style={{ background: 'rgba(14,165,164,0.1)' }}>
                        <BarChart className="w-3.5 h-3.5" style={{ color: '#0EA5A4' }} />
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-3 flex flex-col gap-1 text-[9px] font-semibold">
                      <div className="py-1.5 px-2.5 rounded-lg flex items-center justify-between shadow-sm" style={{ background: '#0EA5A4', color: '#fff' }}>
                        <span>Save Contact VCF</span>
                        <Check className="w-3 h-3" />
                      </div>
                      <div className="py-1.5 px-2.5 bg-white border border-slate-100 rounded-lg flex items-center justify-between shadow-sm" style={{ color: '#334155' }}>
                        <span>Visit Business Site</span>
                        <Globe className="w-3 h-3" style={{ color: '#94A3B8' }} />
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="py-1.5 bg-white border-t border-slate-100 flex items-center justify-center gap-1 text-[8px] font-medium" style={{ color: '#94A3B8' }}>
                    <span>SSL SECURED</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
