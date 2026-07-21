import React from 'react';

export default function TrustedCompanies() {
  const logos = [
    { name: 'KL Group', src: '/assets/imgi_9_KL.png' },
    { name: '4Door', src: '/assets/imgi_10_4door.png' },
    { name: 'Address Makers', src: '/assets/imgi_11_Address_Makers_Logo.png' },
    { name: 'CREx', src: '/assets/imgi_12_CREx_Satendra_Gupta.png' },
    { name: 'Estate to Estate', src: '/assets/imgi_13_Estate_to_estate.png' },
    { name: 'Juneja', src: '/assets/imgi_14_Juneja.png' },
    { name: 'Mandral Realtors', src: '/assets/imgi_15_Mandral_Realtors.png' },
    { name: 'MB', src: '/assets/imgi_16_MB_logo.png' },
    { name: 'Prop Keys', src: '/assets/imgi_17_prop_keys_logo.png' },
    { name: 'RKS Group', src: '/assets/imgi_18_RKS_logo.png' },
    { name: 'Vinay Empire', src: '/assets/imgi_19_Vinay_Empire_Estate.png' },
    { name: 'Groopgo', src: '/assets/imgi_24_groopgo.png' },
    { name: 'Karma', src: '/assets/imgi_25_karma.png' },
    { name: 'Manraaj Bakers', src: '/assets/imgi_26_manraaj_bakers.png' },
    { name: 'Iconic Media', src: '/assets/imgi_29_iconic_media.png' },
    { name: 'Medoc', src: '/assets/imgi_31_Medoc.png' },
    { name: 'Aerovista', src: '/assets/imgi_7_Aerovista_Logo.png' },
    { name: 'Delta Industries', src: '/assets/imgi_8_delta_industries_log.png' }
  ];

  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section
      className="py-16 overflow-hidden relative w-full"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h5
          className="font-semibold text-xs tracking-widest uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          Trusted by over 50,000+ professionals &amp; enterprise teams
        </h5>
      </div>

      <div className="relative w-full overflow-hidden flex mask-marquee">
        <div className="flex gap-16 py-4 animate-marquee-left whitespace-nowrap min-w-max items-center">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center justify-center h-12 w-28 shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                style={{ filter: 'var(--logo-filter, grayscale(1))' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
