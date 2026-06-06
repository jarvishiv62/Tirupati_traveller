"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { buildWALink } from "@/lib/utils";

const ROTATING_WORDS = ["Memorable", "Peaceful", "Spiritual"];
const ROTATE_INTERVAL = 2500;

/* ── Particle type ─────────────────────────────────── */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    speedY: Math.random() * 0.4 + 0.15,
    speedX: (Math.random() - 0.5) * 0.2,
    opacity: Math.random() * 0.6 + 0.2,
    delay: Math.random() * 6,
  }));
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [particles] = useState<Particle[]>(() => generateParticles(28));
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  /* ── Rotating word ─────────────────────────────────── */
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 350);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  /* ── Scroll state for parallax hint ───────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Canvas particle animation ─────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: {
      x: number;
      y: number;
      vy: number;
      vx: number;
      r: number;
      o: number;
    }[] = Array.from({ length: 28 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vy: -(Math.random() * 0.5 + 0.2),
      vx: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 3 + 1.5,
      o: Math.random() * 0.55 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 214, 0, ${d.o})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255, 140, 0, 0.7)";
        ctx.fill();
        ctx.shadowBlur = 0;

        d.y += d.vy;
        d.x += d.vx;
        d.o -= 0.0012;

        if (d.y < -10 || d.o <= 0) {
          d.x = Math.random() * canvas.width;
          d.y = canvas.height + 10;
          d.o = Math.random() * 0.55 + 0.2;
          d.vy = -(Math.random() * 0.5 + 0.2);
          d.vx = (Math.random() - 0.5) * 0.25;
          d.r = Math.random() * 3 + 1.5;
        }
      });
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const waLink = buildWALink(
    `Hi Tirupati Travel,

I would like a fare estimate.

Pickup Location:
Travel Date:
Number of Passengers:

Please share available options.`
  );

  return (
    <section className="hero-section relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden">
      {/* ── Background image ───────────────────────────── */}
      <Image
        src="/assets/images/ghat-varanasi.jpg"
        alt="Varanasi Ghats at sunrise — Tirupati Travel"
        fill
        priority
        className="object-cover object-center hero-bg-image"
        sizes="100vw"
      />

      {/* ── Diya ember particles (canvas) ──────────────── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Mandala watermark — pulsing ─────────────────── */}
      <div
        className="mandala-watermark absolute top-0 right-0 w-[420px] h-[420px] z-10 text-white"
        aria-hidden="true"
      >
        <Image
          src="/svg/ghats/corner-mandala.svg"
          alt=""
          fill
          className="object-contain animate-mandala-pulse"
        />
      </div>

      {/* ── Decorative om symbol ────────────────────────── */}
      <div
        className="om-decor absolute bottom-24 right-8 z-10 text-gold/10 font-serif select-none pointer-events-none"
        aria-hidden="true"
      >
        ॐ
      </div>

      {/* ── Hero content ───────────────────────────────── */}
      <div className="container-site relative z-20 w-full flex justify-center px-4">
        <div className="max-w-3xl w-full text-center flex flex-col items-center p-6 sm:p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hero-eyebrow-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <p className="text-red-600 font-medium tracking-widest uppercase text-xs">
              Varanasi &bull; Ayodhya &bull; Prayagraj &bull; Gaya
            </p>
          </div>

          {/* H1 */}
          <h1 className="page-heading mb-5 leading-tight hero-h1">
            Varanasi&apos;s Most Trusted <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span
                className={`hero-rotating-word text-[#DE9619] transition-all duration-350 ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-3"
                  }`}
              >
                {ROTATING_WORDS[wordIndex]}
              </span>
              {/* Underline accent */}
              <span className="hero-word-underline" aria-hidden="true" />
            </span>{" "}
            Travel
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed hero-subtext">
            Book outstation taxi, pilgrimage tours, airport transfers and
            sightseeing cabs — trusted by 50,000+ pilgrims across India.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full hero-ctas">
            <Link
              href="/varanasi/varanasi-tour-packages"
              className="btn-primary text-base px-8 py-3.5 text-center hero-btn-glow w-full sm:w-auto"
            >
              View Tour Packages
            </Link>
            <a
              href="tel:8726124680"
              className="btn-outline text-base px-8 py-3.5 text-center flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
            >
              <Phone size={18} />
              Call: 87261 24680
            </a>
          </div>

          {/* Trust badges — glassmorphism */}
          <div className="flex flex-wrap gap-3 justify-center mt-8 w-full">
            {[
              { value: "10+", label: "Years Experience", icon: "🏆" },
              { value: "50K+", label: "Happy Pilgrims", icon: "🙏" },
              { value: "24/7", label: "Service Available", icon: "⏰" },
            ].map(({ value, label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl shadow-sm hover:bg-white/10 transition-all duration-300 flex-1 min-w-[140px] max-w-[200px]"
              >
                <span className="text-lg leading-none" aria-hidden="true">
                  {icon}
                </span>
                <div className="text-left">
                  <div className="text-gold font-bold text-base sm:text-lg font-serif leading-none">
                    {value}
                  </div>
                  <div className="text-white/70 text-[10px] sm:text-xs mt-1 font-medium">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"
          }`}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="scroll-indicator-wrap">
          <ChevronDown size={20} className="text-white/60 relative z-10" />
          <span className="scroll-ripple" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}