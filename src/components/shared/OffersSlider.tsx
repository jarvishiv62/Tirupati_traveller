"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Copy,
  Check,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  buildOfferWALink,
  getUrgencyLabel,
  BADGE_CLASSES,
  CARD_GRADIENTS,
} from "@/lib/offerUtils";
import type { Offer, OfferTag } from "@/data/offers";
import { getOffersForPage } from "@/data/offers";

interface OffersSliderProps {
  tags: OfferTag[];
  context?: {
    origin?: string;
    destination?: string;
    vehicle?: string;
    city?: string;
  };
  className?: string;
}

// ─── Individual Offer Card ────────────────────────────────────────────────────
function OfferCard({
  offer,
  context,
  isActive,
}: {
  offer: Offer;
  context: OffersSliderProps["context"];
  isActive: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const urgency = getUrgencyLabel(offer);
  const badge = BADGE_CLASSES[offer.badgeColor] ?? BADGE_CLASSES.saffron;
  const gradient = CARD_GRADIENTS[offer.badgeColor] ?? CARD_GRADIENTS.saffron;
  const waHref = buildOfferWALink(offer, context);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(offer.couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for browsers without clipboard API
      const ta = document.createElement("textarea");
      ta.value = offer.couponCode;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className={cn(
        "relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px]",
        "rounded-2xl overflow-hidden",
        "transition-all duration-500 select-none",
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-80",
      )}
      aria-label={`Offer: ${offer.title}`}
    >
      {/* Card background — dashed border ticket style */}
      <div className="relative bg-white border-2 border-dashed border-border-warm rounded-2xl overflow-hidden shadow-card-warm">
        {/* Top colored stripe */}
        <div className={`bg-gradient-to-r ${gradient} px-5 pt-4 pb-3`}>
          <div className="flex items-start justify-between gap-2">
            {/* Emoji + title */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span
                className="text-2xl flex-shrink-0"
                role="img"
                aria-hidden="true"
              >
                {offer.emoji}
              </span>
              <div className="min-w-0">
                <p className="text-white font-bold text-sm md:text-base leading-tight truncate">
                  {offer.title}
                </p>
                <p className="text-white/75 text-[11px] leading-tight mt-0.5 line-clamp-1">
                  {offer.tagline}
                </p>
              </div>
            </div>

            {/* Big badge */}
            <div className="flex-shrink-0 bg-white/15 backdrop-blur-sm rounded-xl px-3 py-1.5 text-center border border-white/30">
              <p className="text-white font-black text-base md:text-lg leading-none whitespace-nowrap">
                {offer.badge}
              </p>
            </div>
          </div>
        </div>

        {/* Ticket tear line */}
        <div className="relative flex items-center px-3">
          <div
            className="absolute -left-3 w-6 h-6 bg-surface-alt rounded-full border-2 border-dashed border-border-warm"
            aria-hidden="true"
          />
          <div
            className="flex-1 border-t-2 border-dashed border-border-warm mx-3"
            aria-hidden="true"
          />
          <div
            className="absolute -right-3 w-6 h-6 bg-surface-alt rounded-full border-2 border-dashed border-border-warm"
            aria-hidden="true"
          />
        </div>

        {/* Card body */}
        <div className="px-5 pt-3 pb-4">
          {/* Description */}
          <p className="text-text-secondary text-xs leading-relaxed mb-3 line-clamp-2">
            {offer.description}
          </p>

          {/* Coupon code row */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 flex items-center gap-2 bg-cream border border-dashed border-primary/40 rounded-xl px-3 py-2">
              {/* Scissors icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary flex-shrink-0"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <line x1="20" y1="4" x2="8.12" y2="15.88" />
                <line x1="14.47" y1="14.48" x2="20" y2="20" />
                <line x1="8.12" y1="8.12" x2="12" y2="12" />
              </svg>
              <span className="font-mono font-bold text-primary text-sm tracking-wider flex-1">
                {offer.couponCode}
              </span>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold",
                "transition-all duration-200 active:scale-95 whitespace-nowrap",
                copied
                  ? "bg-success text-white"
                  : "bg-primary text-white hover:bg-primary-dark",
              )}
              aria-label={
                copied ? "Copied!" : `Copy coupon code ${offer.couponCode}`
              }
            >
              {copied ? (
                <>
                  <Check size={12} aria-hidden="true" /> Copied!
                </>
              ) : (
                <>
                  <Copy size={12} aria-hidden="true" /> Copy
                </>
              )}
            </button>
          </div>

          {/* Terms */}
          <p className="text-text-light text-[10px] mb-3 leading-relaxed">
            {offer.termsShort}
          </p>

          {/* Urgency + Claim row */}
          <div className="flex items-center justify-between gap-2">
            {/* Urgency label */}
            {urgency ? (
              <span className="flex items-center gap-1 text-[10px] font-semibold text-red-600">
                <Zap size={10} aria-hidden="true" />
                {urgency}
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[10px] text-text-light">
                <Clock size={10} aria-hidden="true" />
                {offer.validUntil
                  ? `Valid till ${new Date(offer.validUntil).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}`
                  : "No expiry"}
              </span>
            )}

            {/* Claim via WhatsApp */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1DA851] text-white
                         text-[11px] font-semibold px-3 py-1.5 rounded-full
                         transition-colors duration-200 active:scale-95 whitespace-nowrap"
              onClick={handleCopy} // auto-copy code when claiming
              aria-label={`Claim offer ${offer.title} on WhatsApp`}
            >
              <MessageCircle size={12} aria-hidden="true" />
              Claim Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Slider Component ────────────────────────────────────────────────────
export default function OffersSlider({
  tags,
  context,
  className,
}: OffersSliderProps) {
  const offers = getOffersForPage(tags);

  // Don't render if no active offers
  if (offers.length === 0) return null;

  // Duplicate offers for infinite loop illusion
  const looped =
    offers.length < 3
      ? [...offers, ...offers, ...offers]
      : [...offers, ...offers];

  return (
    <OffersSliderInner
      offers={offers}
      looped={looped}
      context={context}
      className={className}
    />
  );
}

function OffersSliderInner({
  offers,
  looped,
  context,
  className,
}: {
  offers: Offer[];
  looped: Offer[];
  context: OffersSliderProps["context"];
  className?: string;
}) {
  const CARD_WIDTH = 392; // card width + gap (380 + 12)
  const AUTO_SPEED = 3800; // ms between auto-slides
  const TRANSITION_MS = 600; // CSS transition duration

  const [idx, setIdx] = useState(0);
  const [isTransitioning, setIsT] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Advance one card forward
  const advance = useCallback(() => {
    if (isTransitioning) return;
    setIsT(true);
    setIdx((prev) => prev + 1);
  }, [isTransitioning]);

  // Go back one card
  const goBack = useCallback(() => {
    if (isTransitioning) return;
    setIsT(true);
    setIdx((prev) => Math.max(0, prev - 1));
  }, [isTransitioning]);

  // Reset to real position silently when we've looped past the original set
  useEffect(() => {
    if (!isTransitioning) return;
    const t = setTimeout(() => {
      setIsT(false);
      // Silent jump: if we've gone past the original offers, jump back
      if (idx >= offers.length) {
        // Disable transition, jump to equivalent position in first set
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setIdx((prev) => prev % offers.length);
        requestAnimationFrame(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`;
          }
        });
      }
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [isTransitioning, idx, offers.length]);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(advance, AUTO_SPEED);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, advance]);

  const translateX = -(idx * CARD_WIDTH);

  return (
    <section
      className={cn("w-full overflow-hidden", className)}
      aria-label="Special offers"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Section header */}
      <div className="container-site mb-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Animated diya icon */}
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-flame-pulse">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 6C11 8 10 9.5 10 11C10 12.5 11 13.5 12 14C13 13.5 14 12.5 14 11C14 9.5 13 8 12 6Z"
                  fill="#FF6B00"
                />
                <path
                  d="M12 6C12 4.5 12.5 3.5 12 2.5"
                  stroke="#FFD600"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="12"
                  cy="18"
                  rx="7"
                  ry="2.5"
                  fill="#C4A882"
                  opacity="0.5"
                />
                <path d="M9 14V17" stroke="#8D7B68" strokeWidth="1.5" />
                <path d="M15 14V17" stroke="#8D7B68" strokeWidth="1.5" />
                <path d="M12 14V17" stroke="#8D7B68" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif font-bold text-secondary text-lg md:text-xl leading-tight">
                Special Offers &amp; Deals
              </h2>
              <p className="text-text-secondary text-xs">
                {offers.length} active offer{offers.length !== 1 ? "s" : ""} —
                use coupon code to claim
              </p>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={goBack}
              disabled={idx === 0}
              className="w-8 h-8 rounded-full border border-border-warm bg-white flex items-center justify-center
                         hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous offer"
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <button
              onClick={advance}
              className="w-8 h-8 rounded-full border border-primary bg-primary text-white flex items-center justify-center
                         hover:bg-primary-dark transition-colors"
              aria-label="Next offer"
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 mt-3">
          {offers.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsT(true);
                setIdx(i);
              }}
              className={cn(
                "transition-all duration-300 rounded-full",
                idx % offers.length === i
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-border hover:bg-primary/40",
              )}
              aria-label={`Go to offer ${i + 1}`}
              aria-current={idx % offers.length === i ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      {/* Slider track */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="overflow-hidden pl-4 md:pl-8">
          <div
            ref={trackRef}
            className="flex gap-3 pb-4"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`,
              willChange: "transform",
            }}
          >
            {looped.map((offer, i) => (
              <OfferCard
                key={`${offer.id}-${i}`}
                offer={offer}
                context={context}
                isActive={i % offers.length === idx % offers.length}
              />
            ))}
          </div>
        </div>
      </div>

      {/* T&C note */}
      <p className="container-site text-[10px] text-text-light mt-1">
        * Copy coupon code and click "Claim Now" to apply via WhatsApp. T&amp;C
        apply per offer.
      </p>
    </section>
  );
}
