// src/components/shared/RouteIllustration.tsx
// ─────────────────────────────────────────────
// Generic route illustration — replaces per-route SVG files.
// Renders an animated SVG path between origin and destination with
// distance + duration badges overlaid.
// Server Component — no state needed.

interface RouteIllustrationProps {
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  className?: string;
}

export default function RouteIllustration({
  origin,
  destination,
  distance,
  duration,
  className = "",
}: RouteIllustrationProps) {
  return (
    <div className={`relative w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label={`Route from ${origin} to ${destination}, ${distance}, ${duration}`}
      >
        <defs>
          {/* Animated dash for the route line */}
          <marker
            id="arrowHead"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#FF6B00" opacity="0.8" />
          </marker>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A237E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFD600" stopOpacity="0.8" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background subtle grid */}
        <rect width="600" height="120" fill="transparent" />
        <line
          x1="0"
          y1="60"
          x2="600"
          y2="60"
          stroke="#E8DDD0"
          strokeWidth="0.5"
          strokeDasharray="4 8"
        />

        {/* Origin city marker */}
        {/* Temple shikhar icon left */}
        <g transform="translate(30, 25)">
          <path d="M15,50 L20,5 L25,50 Z" fill="#1A237E" opacity="0.25" />
          <rect
            x="10"
            y="50"
            width="30"
            height="35"
            rx="2"
            fill="#1A237E"
            opacity="0.15"
          />
          <ellipse
            cx="25"
            cy="4"
            rx="4"
            ry="2.5"
            fill="#FF6B00"
            opacity="0.5"
          />
          <circle
            cx="25"
            cy="60"
            r="14"
            fill="#FF6B00"
            opacity="0.12"
            stroke="#FF6B00"
            strokeWidth="1.5"
          />
          <circle cx="25" cy="60" r="8" fill="#FF6B00" />
          <text
            x="25"
            y="64"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="bold"
          >
            A
          </text>
        </g>

        {/* Route path — flowing curve */}
        <path
          d="M 70 60 C 150 20, 250 95, 350 45 C 430 10, 500 75, 530 60"
          stroke="url(#routeGrad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          markerEnd="url(#arrowHead)"
          filter="url(#glow)"
          opacity="0.85"
        />

        {/* Dashed shadow line */}
        <path
          d="M 70 60 C 150 20, 250 95, 350 45 C 430 10, 500 75, 530 60"
          stroke="#FFD600"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 6"
          opacity="0.3"
          strokeLinecap="round"
        />

        {/* Mid-route distance badge */}
        <g transform="translate(290, 30)">
          <rect
            x="-28"
            y="-11"
            width="56"
            height="22"
            rx="11"
            fill="white"
            stroke="#FF6B00"
            strokeWidth="1.5"
            opacity="0.95"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#FF6B00"
            fontSize="9"
            fontWeight="700"
          >
            {distance}
          </text>
        </g>

        {/* Mid-route duration badge */}
        <g transform="translate(290, 72)">
          <rect
            x="-24"
            y="-10"
            width="48"
            height="20"
            rx="10"
            fill="white"
            stroke="#1A237E"
            strokeWidth="1.5"
            opacity="0.95"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#1A237E"
            fontSize="8"
            fontWeight="600"
          >
            {duration}
          </text>
        </g>

        {/* Small milestone dots */}
        <circle cx="170" cy="35" r="3" fill="#FFD600" opacity="0.6" />
        <circle cx="310" cy="55" r="3" fill="#FF6B00" opacity="0.6" />
        <circle cx="430" cy="25" r="3" fill="#FFD600" opacity="0.6" />

        {/* Destination marker */}
        <g transform="translate(545, 25)">
          <path d="M15,50 L20,5 L25,50 Z" fill="#FFD600" opacity="0.25" />
          <rect
            x="10"
            y="50"
            width="30"
            height="35"
            rx="2"
            fill="#FFD600"
            opacity="0.15"
          />
          <ellipse
            cx="25"
            cy="4"
            rx="4"
            ry="2.5"
            fill="#1A237E"
            opacity="0.5"
          />
          <circle
            cx="25"
            cy="60"
            r="14"
            fill="#FFD600"
            opacity="0.15"
            stroke="#FFD600"
            strokeWidth="1.5"
          />
          <circle cx="25" cy="60" r="8" fill="#1A237E" />
          <text
            x="25"
            y="64"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="bold"
          >
            B
          </text>
        </g>

        {/* Origin label */}
        <text
          x="55"
          y="100"
          textAnchor="middle"
          fill="#1A237E"
          fontSize="9"
          fontWeight="600"
          fontFamily="Georgia, serif"
        >
          {origin.length > 10 ? origin.slice(0, 10) + "…" : origin}
        </text>

        {/* Destination label */}
        <text
          x="555"
          y="100"
          textAnchor="middle"
          fill="#1A237E"
          fontSize="9"
          fontWeight="600"
          fontFamily="Georgia, serif"
        >
          {destination.length > 10
            ? destination.slice(0, 10) + "…"
            : destination}
        </text>

        {/* Sacred lotus ornament at mid-bottom */}
        <g transform="translate(295, 108)" opacity="0.4">
          <path d="M5,5 Q3,2 3,0 Q5,-1 5,5 Z" fill="#FF6B00" />
          <path d="M5,5 Q7,2 7,0 Q5,-1 5,5 Z" fill="#FF6B00" />
          <circle cx="5" cy="0" r="1" fill="#FFD600" />
        </g>
      </svg>
    </div>
  );
}
