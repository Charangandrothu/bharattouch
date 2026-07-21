import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Landmark, LineChart, Check } from 'lucide-react';

export default function Benefits() {
  const benefitCards = [
    {
      title: 'Eco-Friendly & Sustainable',
      description: 'Align your networking with global sustainability goals. Stop wasting paper, ink, and transport emissions. A single Bharat Touch NFC card lasts a lifetime, preventing hundreds of paper cards from ending up in landfills.',
      icon: <Leaf className="w-5 h-5 text-emerald-500" />,
      iconBg: 'rgba(16,185,129,0.1)',
      iconBorder: 'rgba(16,185,129,0.25)',
      tag: 'Go Green',
      points: ['Replaces 1,000+ paper cards', 'FSC-compliant material options', 'Zero carbon printing waste', 'Eco-friendly PVC and metals'],
    },
    {
      title: 'Zero Reprinting Costs',
      description: 'Stop paying yearly design and print setup fees. Changed your phone number, logo, or job title? Simply edit your online account details in seconds. The physical card remains fully operational—updating instantly in real-time.',
      icon: <Landmark className="w-5 h-5" style={{ color: 'var(--accent)' }} />,
      iconBg: 'rgba(14,165,164,0.1)',
      iconBorder: 'rgba(14,165,164,0.25)',
      tag: 'Cost-Effective',
      points: ['Instant digital updates', 'No setup fees or lead times', 'One-off physical card fee', 'Saves up to 80% networking spend'],
    },
    {
      title: 'Advanced Leads Engine',
      description: 'Traditional business cards are lost within hours. Our digital profile dashboard captures incoming client contacts, categorizes them, logs timelines, and permits direct exports into Excel, CSV, or CRM databases.',
      icon: <LineChart className="w-5 h-5 text-amber-500" />,
      iconBg: 'rgba(245,158,11,0.1)',
      iconBorder: 'rgba(245,158,11,0.25)',
      tag: 'Maximize ROI',
      points: ['Capture client details back', 'Log geo-location coordinates', 'Segment leads by events', 'Sync with Salesforce & HubSpot'],
    }
  ];

  return (
    <section
      className="py-24"
      style={{
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left">
            <h5
              className="font-bold text-xs tracking-widest uppercase mb-3"
              style={{ color: 'var(--accent)' }}
            >
              Why Upgrade Your Network
            </h5>
            <h2
              className="font-black text-3xl sm:text-4xl leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              A Sustainable Solution with High Commercial Return.
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-sm sm:text-base max-w-md" style={{ color: 'var(--text-secondary)' }}>
              Upgrade from disposable paper cards to a premium, evergreen corporate identity solution.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: card.iconBg,
                      border: `1px solid ${card.iconBorder}`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full font-semibold text-[10px] uppercase tracking-wider"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                <h3
                  className="font-black text-xl mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-xs sm:text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {card.description}
                </p>
              </div>

              {/* Point checklist */}
              <div
                className="pt-6 mt-auto"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <ul className="flex flex-col gap-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <div
                        className="p-0.5 rounded-full shrink-0"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <Check className="w-3 h-3" style={{ color: 'var(--text-muted)' }} />
                      </div>
                      <span
                        className="text-xs font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
