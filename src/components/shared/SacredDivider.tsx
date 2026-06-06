// src/components/shared/SacredDivider.tsx
// Decorative section dividers — Server Component
// variant: 'lotus' | 'wave' | 'mandala' | 'gold-line'
// Placement rules:
//   lotus   → after hero, before first content section
//   wave    → between mid-page content sections
//   mandala → before CTA sections, above footer
//   gold-line → inside cards or minimal inline use

type DividerVariant = "lotus" | "wave" | "mandala" | "gold-line";
type DividerSize = "sm" | "md" | "lg";

interface SacredDividerProps {
  variant?: DividerVariant;
  size?: DividerSize;
  className?: string;
  /** bg color of the section ABOVE this divider */
  fromColor?: string;
  /** bg color of the section BELOW this divider */
  toColor?: string;
}

const HEIGHTS: Record<DividerSize, string> = {
  sm: "h-8",
  md: "h-12",
  lg: "h-16",
};

export default function SacredDivider({
  variant = "wave",
  size = "md",
  className = "",
  fromColor = "#FDF8F0",
  toColor = "#FFFFFF",
}: SacredDividerProps) {
  if (variant === "gold-line") {
    return (
      <div className={`flex items-center justify-center py-4 ${className}`}>
        <div className="divider-gold" />
      </div>
    );
  }

  if (variant === "lotus") {
    return (
      <div
        className={`relative overflow-hidden ${HEIGHTS[size]} ${className}`}
        aria-hidden="true"
      >
        {/* Wave shape */}
        <svg
          viewBox="0 0 1440 48"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0,0 C240,48 480,48 720,24 C960,0 1200,0 1440,24 L1440,48 L0,48 Z"
            fill={toColor}
          />
        </svg>
        {/* Lotus icon centered */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary z-10"
          style={{ fontSize: "20px", opacity: 0.5 }}
        >
          ❀
        </div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div
        className={`relative overflow-hidden ${HEIGHTS[size]} ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 48"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0,24 C180,0 360,48 540,24 C720,0 900,48 1080,24 C1260,0 1380,36 1440,24 L1440,48 L0,48 Z"
            fill={toColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === "mandala") {
    return (
      <div
        className={`relative overflow-hidden ${HEIGHTS[size]} ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 64"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,20 1440,32 L1440,64 L0,64 Z"
            fill={toColor}
          />
        </svg>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary z-10 animate-mandala-slow"
          style={{ fontSize: "24px", opacity: 0.3 }}
        >
          ☸
        </div>
      </div>
    );
  }

  return null;
}