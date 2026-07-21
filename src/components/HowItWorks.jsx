import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CreditCard, UserCheck, Smartphone, Users } from 'lucide-react';

export default function HowItWorks() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 15,
    restDelta: 0.001
  });

  const steps = [
    {
      num: '01',
      title: 'Select & Customize Your Card',
      description: 'Choose between Matte PVC, Laser-Engraved Metal, or a Hybrid combo. Enter your name, roles, and brand logo. We print and ship your custom smart card immediately with free delivery.',
      icon: <CreditCard className="w-6 h-6 text-white" />,
      image: '/assets/imgi_40_process-img1.png'
    },
    {
      num: '02',
      title: 'Build Your Smart Profile',
      description: 'While your card is shipping, access your portal to configure your digital profile microsite. Add contact files, social profiles, brochures, portfolios, and company videos in under five minutes.',
      icon: <UserCheck className="w-6 h-6 text-white" />,
      image: '/assets/imgi_41_process-img2.png'
    },
    {
      num: '03',
      title: 'Tap or Scan to Exchange Info',
      description: 'Meet someone new? Tap your physical card against their phone or display your customized QR code. Your professional micro-portfolio opens instantly in their native mobile browser.',
      icon: <Smartphone className="w-6 h-6 text-white" />,
      image: '/assets/imgi_42_process-img3.png'
    },
    {
      num: '04',
      title: 'Capture Leads & Sync CRM',
      description: 'Recipients can save your VCF card instantly and send their contact files back to you directly through your digital profile. Use our dashboard to manage, label, and export leads to your CRM.',
      icon: <Users className="w-6 h-6 text-white" />,
      image: '/assets/imgi_43_process-img4.png'
    }
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h5
            className="font-bold text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Simple Workflow
          </h5>
          <h2
            className="font-black text-3xl sm:text-4xl leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            How Bharat Touch Works.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Four simple steps to transform your network from paper cards to digital lead conversions.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">

          {/* Track line */}
          <div
            className="absolute left-[30px] sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5"
            style={{ background: 'var(--border)' }}
          />
          {/* Animated fill line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[30px] sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 origin-top"
            aria-hidden
            css={{ background: 'var(--accent)' }}
          >
            <div className="w-full h-full" style={{ background: 'var(--accent)' }} />
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col gap-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.num}
                  className="relative flex flex-col sm:flex-row items-start justify-between w-full"
                >
                  {/* Node */}
                  <div
                    className="absolute left-[30px] sm:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center w-10 h-10 rounded-full shadow-md"
                    style={{
                      background: 'var(--accent)',
                      border: '4px solid var(--bg-primary)',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Card Side */}
                  <div className={`w-full sm:w-[44%] pl-16 sm:pl-0 ${isEven ? 'sm:text-right' : 'sm:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.6, type: 'spring', stiffness: 90, damping: 14 }}
                      className="p-6 rounded-2xl relative group transition-all duration-300"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <span
                        className={`absolute top-4 font-black text-4xl pointer-events-none transition-colors duration-300 ${isEven ? 'left-4' : 'right-4'}`}
                        style={{ color: 'var(--border)', opacity: 0.8 }}
                      >
                        {step.num}
                      </span>
                      <h4
                        className="font-bold text-base mb-2 relative z-10"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-xs sm:text-sm leading-relaxed relative z-10"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block w-[8%]" />

                  {/* Image Side */}
                  <div className={`w-full sm:w-[44%] pl-16 sm:pl-0 mt-6 sm:mt-0 flex justify-start ${isEven ? 'sm:order-2 justify-start' : 'justify-end'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="rounded-2xl overflow-hidden p-4 flex items-center justify-center h-[180px] w-full max-w-[280px]"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="max-h-full max-w-full object-contain drop-shadow-sm"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
