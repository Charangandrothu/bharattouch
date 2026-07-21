import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Linkedin', url: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: 'Instagram', url: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Facebook', url: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'Youtube', url: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      )
    }
  ];

  return (
    <footer
      className="pt-20 pb-8 text-left relative overflow-hidden"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
      }}
    >

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative z-10">

        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col items-start gap-5">
          <a href="#home" className="flex items-center gap-2 group focus-ring rounded-lg">
            <img
              src="/assets/imgi_1_logo.svg"
              alt="Bharat Touch Logo"
              className="h-8 w-auto"
            />
          </a>

          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            #1 Smart AI-Powered NFC Digital Business Card platform in India. Upgrade your physical networking, capture leads with OCR intelligence, and grow your relations efficiently.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 focus-ring"
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Store Badges */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="hover:scale-[1.03] transition-transform duration-300 focus-ring rounded-lg">
              <img src="/assets/imgi_71_Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-9 w-auto" />
            </a>
            <a href="#" className="hover:scale-[1.03] transition-transform duration-300 focus-ring rounded-lg">
              <img src="/assets/imgi_72_download-on-the-app-store.svg" alt="Download on the App Store" className="h-9 w-auto" />
            </a>
          </div>
        </div>

        {/* Nav Links Column */}
        <div className="md:col-span-2 flex flex-col items-start gap-4">
          <h4
            className="font-bold text-xs tracking-widest uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            Product
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
            {[
              ['#features', 'Platform Features'],
              ['#customizer', 'Card Customizer'],
              ['#how-it-works', 'How It Works'],
              ['#pricing', 'Pricing Packages'],
              ['#faq', 'FAQ Directory'],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="transition-colors duration-200 hover:opacity-80"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-3 flex flex-col items-start gap-4">
          <h4
            className="font-bold text-xs tracking-widest uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            Get in Touch
          </h4>

          <div className="flex flex-col gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
              <span className="leading-tight">
                Divinity Towers, Plot 1682,<br />
                Sector 82, Mohali, Punjab,<br />
                IN - 140306
              </span>
            </div>

            <div
              className="flex items-center gap-2.5 pt-3"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
              <span>+91 99881 33263</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
              <div className="flex flex-col">
                <a href="mailto:info@bharattouch.com" className="hover:opacity-80 transition-opacity">
                  info@bharattouch.com
                </a>
                <a href="mailto:sales@bharattouch.com" className="hover:opacity-80 transition-opacity text-[11px] mt-0.5">
                  sales@bharattouch.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-3 flex flex-col items-start gap-4">
          <h4
            className="font-bold text-xs tracking-widest uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            Newsletter
          </h4>

          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Subscribe to our newsletter to receive the latest updates, design releases, and tips on modern networking strategies.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full flex items-center rounded-xl p-1 transition-all duration-300"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <input
              type="email"
              placeholder="name@email.com"
              className="flex-1 bg-transparent px-3 py-2 text-xs focus:outline-none border-none"
              style={{
                color: 'var(--text-primary)',
              }}
              required
            />
            <button
              type="submit"
              className="p-2 rounded-lg transition-colors duration-200 shrink-0"
              style={{ background: 'var(--accent)', color: '#FFFFFF' }}
              aria-label="Subscribe"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p
          className="text-xs text-center sm:text-left"
          style={{ color: 'var(--text-muted)' }}
        >
          &copy; {new Date().getFullYear()} Bharat Touch Enterprises. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xs" style={{ color: 'var(--text-muted)' }}>
          <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Terms &amp; Conditions</a>

          <button
            onClick={handleScrollToTop}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 focus-ring"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

    </footer>
  );
}
