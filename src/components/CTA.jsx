import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section
      className="py-20 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Dark high-contrast box — stays dark in both modes (intentional brand block) */}
        <div
          className="relative rounded-[32px] overflow-hidden px-8 py-16 sm:p-20 text-center"
          style={{
            background: 'linear-gradient(135deg, #0B0F19 0%, #111827 100%)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
          }}
        >
          {/* Glow flares */}
          <div
            className="absolute w-[300px] h-[300px] rounded-full top-[-50%] left-[-20%] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(14,165,164,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }}
          />
          <div
            className="absolute w-[300px] h-[300px] rounded-full bottom-[-50%] right-[-20%] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
              backgroundSize: '3rem 3rem',
              opacity: 0.07,
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

            <div
              className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full font-semibold text-[10px] tracking-wider uppercase mb-6"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'var(--accent)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Go digital. Go Green.</span>
            </div>

            <h2
              className="font-black text-3xl sm:text-5xl leading-[1.12] mb-6"
              style={{ color: '#F8FAFC' }}
            >
              Ready to Upgrade <br className="hidden sm:inline" />
              Your Networking Experience?
            </h2>

            <p
              className="text-sm sm:text-base max-w-lg mb-8 leading-relaxed"
              style={{ color: '#94A3B8' }}
            >
              Order your custom PVC or engraved metal card today. Setup your digital profile in minutes. Free shipping nationwide across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 gap-1.5 focus-ring cursor-pointer hover:-translate-y-0.5"
                style={{
                  background: 'var(--accent)',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(14,165,164,0.3)',
                }}
              >
                Order My Smart Card
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#customizer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 focus-ring cursor-pointer hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: '#F8FAFC',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                Try Live Card Editor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
