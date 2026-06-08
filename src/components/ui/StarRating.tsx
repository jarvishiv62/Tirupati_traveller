// src/components/ui/StarRating.tsx
// Star rating display component.
// Server Component — no 'use client' needed.

import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number; // 0–5 (supports .5 increments)
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean; // show numeric rating e.g. "4.8"
  showCount?: boolean; // show review count e.g. "(124 reviews)"
  count?: number;
  className?: string;
}

const sizeMap = {
  sm: "w-3.5 h-3.5",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export default function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  showValue = false,
  showCount = false,
  count,
  className,
}: StarRatingProps) {
  const clampedRating = Math.min(Math.max(rating, 0), maxStars);

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, i) => {
          const filled = i < Math.floor(clampedRating);
          const half = !filled && i < clampedRating;

          return (
            <svg
              key={i}
              className={cn(sizeMap[size], "flex-shrink-0")}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Full or half fill */}
              {half ? (
                <>
                  {/* Half-star: left half filled, right half empty */}
                  <defs>
                    <linearGradient
                      id={`half-${i}`}
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="0"
                    >
                      <stop offset="50%" stopColor="#FFD600" />
                      <stop offset="50%" stopColor="#E0E0E0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    fill={`url(#half-${i})`}
                  />
                </>
              ) : (
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill={filled ? "#FFD600" : "#E0E0E0"}
                />
              )}
            </svg>
          );
        })}
      </div>

      {/* Numeric value */}
      {showValue && (
        <span className="font-bold text-text-primary text-sm">
          {clampedRating.toFixed(1)}
        </span>
      )}

      {/* Review count */}
      {showCount && count !== undefined && (
        <span className="text-text-light text-xs">
          ({count.toLocaleString("en-IN")} reviews)
        </span>
      )}
    </div>
  );
}
