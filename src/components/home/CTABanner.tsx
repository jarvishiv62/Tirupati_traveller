import Image from 'next/image';
import { Phone } from 'lucide-react';
import { buildWALink } from '@/lib/utils';

export default function CTABanner() {
  const waLink = buildWALink(
    'Hi, I want to plan a pilgrimage trip with Tirupati Travel. Please help me.',
  );

  return (
    <section className="relative overflow-hidden gradient-sacred py-16 md:py-20">
      {/* Mandala watermark */}
      <div
        className="mandala-watermark absolute right-8 top-1/2 -translate-y-1/2 w-80 h-80 text-white"
        style={{ opacity: 0.08 }}
        aria-hidden="true"
      >
        <Image
          src="/svg/corner-mandala.svg"
          alt=""
          fill
          className="object-contain animate-mandala-slow"
        />
      </div>

      <div className="container-site relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-gold/80 text-sm font-medium tracking-widest uppercase mb-3">
            Start Your Journey
          </p>

          {/* Heading */}
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            Plan Your Pilgrimage Today
          </h2>

          <p className="text-white/75 text-base md:text-lg mb-8 leading-relaxed">
            Speak with our travel experts. We handle everything — comfortable AC cabs,
            hotel bookings, darshan guides, and 24/7 support throughout your sacred journey.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/varanasi/varanasi-tour-packages"
              className="btn-gold text-base px-8 py-3.5 text-center"
            >
              View All Packages
            </a>
            <a
              href="tel:8726124680"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-secondary transition-colors duration-200 rounded-full px-8 py-3.5 font-medium text-base"
            >
              <Phone size={18} />
              Call Now: 87261 24680
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}