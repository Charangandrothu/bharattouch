import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Gagandeep Singh',
      role: 'Founder & CEO, Aerovista Group',
      feedback: 'Bharat Touch completely transformed how our real estate consultants interact in meetings. Clients are always impressed when we tap our metal cards. It shows we are modern and forward-thinking.',
      avatar: '/assets/imgi_57_gagandeep.png',
      rating: 5
    },
    {
      name: 'Deepika Sharma',
      role: 'Marketing Director, Medoc India',
      feedback: 'The AI card scanner is a life-saver at conferences. I simply scan the paper visiting cards I receive, and the dashboard extracts all contact details. It saves me hours of manual data entry.',
      avatar: '/assets/imgi_59_deepika.png',
      rating: 5
    },
    {
      name: 'Manminder Singh',
      role: 'HR Lead, Vinay Empire Estate',
      feedback: 'Setting up corporate directory pages for our 150+ employee fleet was incredibly straightforward. The administrative dashboard allows us to freeze profiles and maintain brand guidelines seamlessly.',
      avatar: '/assets/imgi_58_manminder.png',
      rating: 5
    },
    {
      name: 'Manjot Kaur',
      role: 'Partner, Landmark Realtors',
      feedback: "Outstanding material quality. The custom black laser-engraved metal card feels premium and substantial in hand. Recipient doesn't need any app to save our contact—it just works.",
      avatar: '/assets/imgi_53_manjot.png',
      rating: 5
    },
    {
      name: 'Satendra Gupta',
      role: 'Head of Growth, CREx',
      feedback: 'We tracked over 2,500 connections in our first month. The real-time click and tap analytics give us immediate metrics on our representative interactions. Best networking investment we made.',
      avatar: '/assets/imgi_52_testimonial-pic.jpg',
      rating: 5
    },
    {
      name: 'Harshimar Gill',
      role: 'Operations Lead, Delta Ind',
      feedback: 'Perfect customer support. They assisted in vectorizing our company logo for laser engraving and delivered the metal cards across three office branches in India within four days.',
      avatar: '/assets/imgi_56_testimonials-3.jpg',
      rating: 5
    }
  ];

  const marqueeRow1 = [...reviews, ...reviews];
  const marqueeRow2 = [...[...reviews].reverse(), ...[...reviews].reverse()];

  const TestimonialCard = ({ rev, rowKey }) => (
    <div
      className="w-[300px] sm:w-[360px] p-6 rounded-2xl flex flex-col justify-between whitespace-normal select-none shrink-0 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div>
        <div className="flex items-center gap-1 mb-4 text-amber-400">
          {[...Array(rev.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        <p
          className="text-xs sm:text-sm leading-relaxed mb-6 italic"
          style={{ color: 'var(--text-secondary)' }}
        >
          "{rev.feedback}"
        </p>
      </div>

      <div
        className="flex items-center gap-3 pt-4 mt-auto"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div
          className="w-10 h-10 rounded-full overflow-hidden shrink-0"
          style={{ border: '1px solid var(--border)' }}
        >
          <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col text-left">
          <h4
            className="font-bold text-xs sm:text-sm leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {rev.name}
          </h4>
          <span
            className="text-[10px] mt-0.5"
            style={{ color: 'var(--text-muted)' }}
          >
            {rev.role}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-24 overflow-hidden relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h5
          className="font-bold text-xs tracking-widest uppercase mb-3"
          style={{ color: 'var(--accent)' }}
        >
          Client Feedback
        </h5>
        <h2
          className="font-black text-3xl sm:text-4xl leading-tight mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          Trusted by Industry Leaders.
        </h2>
        <p
          className="text-base max-w-xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          Here is what leading realtors, enterprise administrators, and networking professionals say about upgrading to Bharat Touch.
        </p>
      </div>

      {/* Row 1 — scroll left */}
      <div className="relative flex w-full overflow-hidden mask-marquee mb-6">
        <div className="flex gap-6 py-4 animate-marquee-left whitespace-nowrap min-w-max">
          {marqueeRow1.map((rev, idx) => (
            <TestimonialCard key={`r1-${idx}`} rev={rev} />
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="relative flex w-full overflow-hidden mask-marquee">
        <div className="flex gap-6 py-4 animate-marquee-right whitespace-nowrap min-w-max">
          {marqueeRow2.map((rev, idx) => (
            <TestimonialCard key={`r2-${idx}`} rev={rev} />
          ))}
        </div>
      </div>

    </section>
  );
}
