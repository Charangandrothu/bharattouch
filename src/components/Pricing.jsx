import React from 'react';
import { Check, Info, Sparkles, CreditCard, Layers } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Custom PVC Smart Card',
      price: '1,999',
      description: 'Ideal for professionals starting with digital networking.',
      icon: <CreditCard className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />,
      features: [
        'Custom high-quality color printing',
        'NFC tap-to-share enabled',
        'Permanent QR backup code print',
        '1 Year complimentary Pro Profile hosting',
        'AI Visiting Card Scanner (100 scans/mo)',
        'Basic link & click analytics tracker'
      ],
      cta: 'Get Started',
      popular: false,
      tag: 'Best Entry'
    },
    {
      name: 'Engraved Matte Metal Card',
      price: '3,499',
      description: 'Our signature laser-engraved metal card. Built to impress.',
      icon: <Sparkles className="w-5 h-5" style={{ color: 'var(--accent)' }} />,
      features: [
        'Heavy-gauge matte stainless steel',
        'Precision laser-etched branding',
        'NFC tap-to-share enabled',
        'Permanent QR backup code print',
        '1 Year complimentary Pro Profile hosting',
        'AI Visiting Card Scanner (Unlimited)',
        'Advanced geographical click analytics',
        'Priority design setup support'
      ],
      cta: 'Design Card Now',
      popular: true,
      tag: 'Most Popular'
    },
    {
      name: 'Elite Corporate Combo',
      price: '4,499',
      description: 'Double the impact with both PVC and Metal cards.',
      icon: <Layers className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />,
      features: [
        '1x Engraved Metal Card',
        '1x Custom PVC Smart Card',
        'NFC & QR dual scanning',
        '1 Year complimentary Pro Profile hosting',
        'AI Visiting Card Scanner (Unlimited)',
        'Enterprise dashboard directory admin access',
        'Employee profile lockdown templates',
        'CSV/Excel CRM leads sync engine'
      ],
      cta: 'Get Started',
      popular: false,
      tag: 'Best Value'
    }
  ];

  return (
    <section
      id="pricing"
      className="py-24"
      style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5
            className="font-bold text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Transparent Pricing
          </h5>
          <h2
            className="font-black text-3xl sm:text-4xl leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Invest in Connections, Not Paper.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Simple one-off card fees. No hidden fees. Includes one year of premium profile hosting.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier) => {
            if (tier.popular) {
              return (
                <div
                  key={tier.name}
                  className="relative p-[1.5px] rounded-[24px] overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
                  style={{ boxShadow: 'var(--shadow-xl)' }}
                >
                  {/* Animated border */}
                  <div
                    className="absolute inset-[-200%] pointer-events-none border-spin"
                    style={{
                      background: 'conic-gradient(from 0deg, #0EA5A4 0%, rgba(14,165,164,0.15) 25%, #0EA5A4 50%, rgba(14,165,164,0.15) 75%, #0EA5A4 100%)',
                    }}
                  />

                  {/* Card body */}
                  <div
                    className="relative z-10 rounded-[23.5px] p-8 flex-1 flex flex-col justify-between"
                    style={{ background: 'var(--bg-card)' }}
                  >
                    <div>
                      {/* Header row */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="p-2 rounded-xl"
                          style={{
                            background: 'rgba(14,165,164,0.1)',
                            border: '1px solid rgba(14,165,164,0.2)',
                          }}
                        >
                          {tier.icon}
                        </div>
                        <span className="px-3 py-1 rounded-full bg-accent text-white font-bold text-[9px] uppercase tracking-widest">
                          {tier.tag}
                        </span>
                      </div>

                      <h3
                        className="font-black text-xl mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {tier.name}
                      </h3>
                      <p className="text-xs mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {tier.description}
                      </p>

                      {/* Price */}
                      <div
                        className="flex items-baseline gap-1 mb-6 pb-6"
                        style={{ borderBottom: '1px solid var(--border)' }}
                      >
                        <span className="text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
                          ₹{tier.price}
                        </span>
                        <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                          / one-off fee
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="flex flex-col gap-3.5 mb-8">
                        {tier.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5">
                            <div
                              className="p-0.5 rounded-full mt-0.5"
                              style={{
                                background: 'rgba(14,165,164,0.1)',
                                border: '1px solid rgba(14,165,164,0.2)',
                              }}
                            >
                              <Check className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                            </div>
                            <span className="text-xs sm:text-sm leading-tight" style={{ color: 'var(--text-secondary)' }}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#customizer"
                      className="w-full text-center py-3 rounded-xl font-bold text-sm transition-all duration-300 focus-ring cursor-pointer"
                      style={{
                        background: 'var(--accent)',
                        color: '#FFFFFF',
                        boxShadow: '0 4px 16px rgba(14,165,164,0.25)',
                      }}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={tier.name}
                className="p-8 rounded-3xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="p-2 rounded-xl"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {tier.icon}
                    </div>
                    <span
                      className="px-3 py-1 rounded-full font-semibold text-[9px] uppercase tracking-wider"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tier.tag}
                    </span>
                  </div>

                  <h3
                    className="font-black text-xl mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-xs mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div
                    className="flex items-baseline gap-1 mb-6 pb-6"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <span className="text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
                      ₹{tier.price}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      / one-off fee
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <div
                          className="p-0.5 rounded-full mt-0.5"
                          style={{
                            background: 'rgba(16,185,129,0.1)',
                            border: '1px solid rgba(16,185,129,0.3)',
                          }}
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <span className="text-xs sm:text-sm leading-tight" style={{ color: 'var(--text-secondary)' }}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#customizer"
                  className="w-full text-center py-3 rounded-xl font-bold text-sm transition-all duration-300 focus-ring cursor-pointer btn-primary"
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div
          className="max-w-xl mx-auto mt-12 p-4 rounded-2xl flex items-start gap-3"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <Info className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
          <p className="text-xs text-left leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            All card purchases include <strong>1 Year of Pro Profile digital hosting</strong> (domain, hosting, analytics, dashboard). Thereafter, renewal is just <strong>₹499/year</strong>. Renew completely <strong>for free</strong> by referring users with your referral code.
          </p>
        </div>

      </div>
    </section>
  );
}
