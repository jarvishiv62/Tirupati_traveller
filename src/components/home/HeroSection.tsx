'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Phone } from 'lucide-react';
import { buildWALink } from '@/lib/utils';

const ROTATING_WORDS = ['Memorable', 'Peaceful', 'Spiritual'];
const ROTATE_INTERVAL = 2500;

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 300);
    }, ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const waLink = buildWALink(
    'Hi, I want to book a pilgrimage tour or cab with Tirupati Travel. Please share details.',
  );

  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/varanasi-tour-package.jpg"
        alt="Varanasi Ghats at sunrise — Tirupati Travel"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — navy to saffron, dark at bottom */}
      <div className="gradient-hero absolute inset-0 z-10" />

      {/* Mandala watermark — top right */}
      <div
        className="mandala-watermark absolute top-0 right-0 w-96 h-96 z-10 text-white"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      >
        <Image
          src="/svg/corner-mandala.svg"
          alt=""
          fill
          className="object-contain animate-mandala-slow"
        />
      </div>

      {/* Ghat skyline — bottom bookend */}
      <div className="ghat-skyline-wrap z-10 text-white/35" aria-hidden="true">
        <Image
          src="/svg/ghats/ghat-skyline.svg"
          alt=""
          width={1440}
          height={120}
          className="w-full h-auto"
        />
      </div>

      {/* Hero content */}
      <div className="container-site relative z-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
            Varanasi &bull; Ayodhya &bull; Prayagraj &bull; Gaya
          </p>

          {/* H1 */}
          <h1 className="page-heading mb-6 leading-tight">
            Varanasi&apos;s Most Trusted{' '}
            <br className="hidden sm:block" />
            <span
              className={`text-gold transition-opacity duration-300 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>{' '}
            Travel
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            Book outstation taxi, pilgrimage tours, airport transfers and sightseeing
            cabs — trusted by 50,000+ pilgrims across India.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/varanasi/varanasi-tour-packages"
              className="btn-primary text-base px-8 py-3.5 text-center"
            >
              View Tour Packages
            </Link>
            <a
              href="tel:8726124680"
              className="btn-outline text-base px-8 py-3.5 text-center flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-primary"
            >
              <Phone size={18} />
              Call: 87261 24680
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50K+', label: 'Happy Pilgrims' },
              { value: '24/7', label: 'Service Available' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-gold font-bold text-2xl font-serif">{value}</div>
                <div className="text-white/70 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="text-white/60" />
      </div>
    </section>
  );
}