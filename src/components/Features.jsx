import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, BarChart3, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: 'AI-Powered Business Card Scanner',
      subtitle: 'DIGITIZE PAPER INSTANTLY',
      description: 'Receive paper business cards? Use our integrated AI scanner to snap a photo. The AI extracts names, roles, emails, and phone numbers in seconds, automatically adding them as organized digital leads in your portal.',
      points: [
        'High-precision OCR reading',
        'Automatic field mapping',
        'Syncs with Google Contacts and Apple Address Books',
        'Direct CSV lead exports'
      ],
      icon: <Brain className="w-6 h-6" style={{ color: 'var(--accent)' }} />,
      image: '/assets/imgi_69_BharatTouch_AI_Powered.png',
      badge: 'Smart OCR AI',
      layout: 'left'
    },
    {
      title: 'Seamless NFC Tap & QR Contact Sharing',
      subtitle: 'CONTACTLESS NETWORKING',
      description: 'Exchange your credentials in under two seconds. Recipient touches your PVC or Metal card, or scans your QR code. Your custom digital microsite opens instantly in their native mobile browser—no app download required.',
      points: [
        'Works on all modern iPhone & Android phones',
        'Offline capability with permanent QR code',
        'Custom redirect link parameters',
        'Requires zero recipient installation'
      ],
      icon: <Cpu className="w-6 h-6" style={{ color: 'var(--accent)' }} />,
      image: '/assets/imgi_47_nfc-image.png',
      badge: 'NFC Tech',
      layout: 'right'
    },
    {
      title: 'Live Analytical Tracking & Contact Metrics',
      subtitle: 'OPTIMIZE NETWORKING ROI',
      description: 'Understand exactly how your interactions perform. Monitor card taps, link visits, and file downloads in real-time. Gain actionable intelligence on which events, meetings, or representatives generate the highest engagement.',
      points: [
        'Real-time link click mapping',
        'Geographical tap location tracking',
        'Employee engagement leaderboard charts',
        'Custom tracking pixel support'
      ],
      icon: <BarChart3 className="w-6 h-6" style={{ color: 'var(--accent)' }} />,
      image: '/assets/imgi_36_newtwork-img.png',
      badge: 'Insights Hub',
      layout: 'left'
    },
    {
      title: 'Enterprise Security & Managed Fleet Control',
      subtitle: 'SECURED COMPANY BRANDING',
      description: "Control your team's public-facing brand from a single administrator dashboard. Provision hundreds of card templates, restrict contact layouts to corporate guidelines, and secure data under SSL encryptions.",
      points: [
        'Centralized dashboard directory control',
        'Standardized corporate profile templates',
        'Secure 256-bit SSL hosting',
        'Instant offboarding & lock access commands'
      ],
      icon: <ShieldCheck className="w-6 h-6" style={{ color: 'var(--accent)' }} />,
      image: '/assets/imgi_32_safari-img.png',
      badge: 'Enterprise Grade',
      layout: 'right'
    }
  ];

  return (
    <section
      id="features"
      className="py-24 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h5
            className="font-bold text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Powerful Platform Features
          </h5>
          <h2
            className="font-black text-3xl sm:text-4xl leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Not Just a Card. <br />
            An Advanced Networking Operating System.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Explore features built for modern business professionals, corporate directories, and marketing networks.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="flex flex-col gap-28">
          {featuresList.map((feat) => {
            const isLeft = feat.layout === 'left';

            return (
              <div
                key={feat.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Container */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                  className={`lg:col-span-6 relative rounded-3xl overflow-hidden p-8 flex justify-center items-center h-[340px] sm:h-[420px] ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, var(--bg-card) 0%, transparent 60%)',
                    }}
                  />
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="max-h-full max-w-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-500 relative z-10"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <div
                    className="absolute top-4 left-4 px-3.5 py-1 rounded-full shadow-sm z-10"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      {feat.badge}
                    </span>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`lg:col-span-6 flex flex-col items-start ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div
                    className="p-2 rounded-xl mb-4"
                    style={{
                      background: 'rgba(14,165,164,0.1)',
                      border: '1px solid rgba(14,165,164,0.2)',
                    }}
                  >
                    {feat.icon}
                  </div>

                  <h4
                    className="font-semibold text-xs tracking-wider uppercase mb-2"
                    style={{ color: 'var(--accent)' }}
                  >
                    {feat.subtitle}
                  </h4>

                  <h3
                    className="font-black text-2xl sm:text-3xl leading-snug mb-5"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {feat.title}
                  </h3>

                  <p
                    className="text-sm sm:text-base leading-relaxed mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {feat.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                    {feat.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <div
                          className="p-0.5 rounded-full mt-0.5"
                          style={{
                            background: 'rgba(16,185,129,0.1)',
                            border: '1px solid rgba(16,185,129,0.3)',
                          }}
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <span
                          className="text-xs sm:text-sm leading-tight"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 font-semibold text-sm group focus-ring p-1 rounded"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--accent)' }} />
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
