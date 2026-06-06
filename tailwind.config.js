/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Primary — Gold ───────────────────────────── */
        primary: {
          DEFAULT: '#DE9619',
          dark:    '#B87A10',
          light:   '#FDF3E0',
          pale:    '#FEF9F0',
          deep:    '#8A5C0C',
        },
        /* ── Secondary — Black / Charcoal ─────────────── */
        secondary: {
          DEFAULT: '#1A1A1A',
          light:   '#2C2C2C',
          mid:     '#4A4A4A',
        },
        /* ── Accent — Light Gold ──────────────────────── */
        accent: {
          DEFAULT: '#F0B84A',
          dark:    '#DE9619',
          light:   '#FDF3E0',
        },
        /* ── Gold alias (used across shimmer / dividers) ─ */
        gold: {
          DEFAULT: '#DE9619',
          light:   '#F0B84A',
          pale:    '#FDF3E0',
          deep:    '#8A5C0C',
        },
        /* ── Neutral whites / off-whites ──────────────── */
        cream: {
          DEFAULT: '#FAFAFA',
          dark:    '#F0F0F0',
          warm:    '#F5F5F5',
        },
        /* ── Grays (replaces sandstone / temple tones) ── */
        sandstone: '#9A9A9A',
        temple: {
          stone: '#6B6B6B',
          dark:  '#2C2C2C',
        },
        /* ── Surfaces ─────────────────────────────────── */
        surface: {
          DEFAULT: '#FFFFFF',
          alt:     '#FAFAFA',
          cream:   '#F5F5F5',
        },
        /* ── Text ─────────────────────────────────────── */
        text: {
          primary:   '#0A0A0A',
          secondary: '#4A4A4A',
          light:     '#9A9A9A',
          cream:     '#2C2C2C',
        },
        /* ── Utility ──────────────────────────────────── */
        success:       '#2E7D32',
        border:        '#E0E0E0',
        'border-warm': '#D4D4D4',
      },

      fontFamily: {
        sans:  ['var(--font-poppins)', 'Inter', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },

      boxShadow: {
        card:              '0 4px 20px rgba(0,0,0,0.07)',
        'card-hover':      '0 12px 40px rgba(0,0,0,0.13)',
        'card-warm':       '0 4px 20px rgba(0,0,0,0.06)',
        temple:            '0 8px 32px rgba(222,150,25,0.18), 0 2px 8px rgba(0,0,0,0.08)',
        gold:              '0 4px 20px rgba(222,150,25,0.35)',
        float:             '0 4px 16px rgba(222,150,25,0.40)',
        'navbar-scroll':   '0 4px 24px rgba(0,0,0,0.12)',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      animation: {
        /* existing */
        'mandala-slow':   'spin 40s linear infinite',
        'flame-pulse':    'flamePulse 2.5s ease-in-out infinite',
        'gold-shimmer':   'goldShimmer 3s linear infinite',
        'fade-in-up':     'fadeInUp 0.5s ease-out forwards',
        /* new */
        'mandala-pulse':  'mandalaPulse 12s ease-in-out infinite',
        'car-drive':      'carDrive 12s linear infinite',
        'car-drive-slow': 'carDriveSlow 18s linear infinite',
        'road-scroll':    'roadScroll 2s linear infinite',
        'topbar-shimmer': 'topbarShimmer 6s linear infinite',
        'om-pulse':       'omPulse 8s ease-in-out infinite',
        'btn-pulse':      'btnPulse 3s ease-in-out infinite',
        'ripple-expand':  'rippleExpand 2s ease-out infinite',
        'bounce-sm':      'bounceSm 0.6s ease-in-out',
      },

      keyframes: {
        flamePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%':      { transform: 'scale(1.12)', opacity: '0.85' },
        },
        goldShimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        mandalaPulse: {
          '0%, 100%': { opacity: '0.06', transform: 'rotate(0deg) scale(1)' },
          '50%':      { opacity: '0.09', transform: 'rotate(180deg) scale(1.04)' },
        },
        carDrive: {
          '0%':   { left: '-60px' },
          '100%': { left: 'calc(100% + 60px)' },
        },
        carDriveSlow: {
          '0%':   { left: '-80px' },
          '100%': { left: 'calc(100% + 80px)' },
        },
        roadScroll: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-64px 0' },
        },
        topbarShimmer: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        omPulse: {
          '0%, 100%': { opacity: '0.03', transform: 'translateY(-50%) scale(1)' },
          '50%':      { opacity: '0.055', transform: 'translateY(-50%) scale(1.05)' },
        },
        btnPulse: {
          '0%, 100%': { boxShadow: '0 4px 16px rgba(222,150,25,0.35)' },
          '50%':      { boxShadow: '0 4px 32px rgba(222,150,25,0.65), 0 0 0 6px rgba(222,150,25,0.12)' },
        },
        rippleExpand: {
          '0%':   { transform: 'scale(0.7)', opacity: '0.8' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        bounceSm: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-4px)' },
        },
      },

      backgroundImage: {
        'gradient-hero':   'linear-gradient(135deg, rgba(26,26,26,0.88) 0%, rgba(222,150,25,0.60) 100%)',
        'gradient-sacred': 'linear-gradient(135deg, #1A1A1A 0%, #B87A10 100%)',
        'gradient-gold':   'linear-gradient(90deg, #B87A10, #DE9619, #F0B84A, #DE9619, #B87A10)',
      },
    },
  },
  plugins: [],
};