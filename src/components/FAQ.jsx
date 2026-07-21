import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: 'Do I or the recipient need an app to view the card profile?',
      a: 'No, neither of you need an app. When you tap the NFC card against a phone (or they scan the QR code), your professional digital profile opens instantly in their native mobile web browser. Saving contact details is a single-click action.'
    },
    {
      q: 'How do I update my contact information when it changes?',
      a: 'You can log into your secure online dashboard at any time to edit your contact details, social links, brochures, and bio. The modifications reflect instantly on your physical card in real-time. You never have to order a reprint.'
    },
    {
      q: 'Which smartphones are compatible with Bharat Touch cards?',
      a: 'All modern iPhones (model XR and newer) and over 95% of modern Android devices have built-in NFC reader chips. For older smartphones that do not support NFC, we print a permanent high-definition QR code on the back of your card as an automatic backup.'
    },
    {
      q: 'Is my data secure and private?',
      a: 'Yes, data privacy is our highest priority. All profile links, certificates, and lead vaults are encrypted and hosted on secure, 256-bit SSL secured cloud servers. Furthermore, if you ever lose your physical card, you can lock or deactivate it immediately from your administrative panel.'
    },
    {
      q: 'Do you offer bulk discounts or custom branding for corporate teams?',
      a: 'Absolutely! We offer custom design layouts, corporate logo embossing, centralized directory administration control, and CRM synchronization for teams of 10 or more. Please contact our corporate sales team at sales@bharattouch.com to request custom mockups.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5
            className="font-bold text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Questions & Answers
          </h5>
          <h2
            className="font-black text-3xl sm:text-4xl leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Frequently Asked Questions.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Everything you need to know about setting up your smart NFC card.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl transition-all duration-300"
                style={{
                  border: isOpen
                    ? '1px solid rgba(14,165,164,0.4)'
                    : '1px solid var(--border)',
                  background: isOpen
                    ? 'rgba(14,165,164,0.03)'
                    : 'var(--bg-card)',
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-ring rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-bold text-sm sm:text-base pr-4 flex items-center gap-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <HelpCircle
                      className="w-4 h-4 shrink-0 transition-colors duration-300"
                      style={{ color: isOpen ? 'var(--accent)' : 'var(--text-muted)' }}
                    />
                    {faq.q}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    ) : (
                      <Plus className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed"
                        style={{
                          borderTop: '1px solid var(--border)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
