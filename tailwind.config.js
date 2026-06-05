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
        primary:   { DEFAULT: '#FF6B00', dark: '#E65100', light: '#FFF3E0' },
        secondary: { DEFAULT: '#1A237E', light: '#3949AB' },
        accent:    { DEFAULT: '#FFD600', dark: '#F9A825', light: '#FFFDE7' },
        cream: { DEFAULT: '#FDF8F0', dark: '#F5EDD8', warm: '#FAF0E0' },
        saffron: { DEFAULT: '#FF6B00', pale: '#FFF3E0' },
        gold:    { DEFAULT: '#FFD600', deep: '#C49A00', pale: '#FFFDE7' },
        sandstone: '#C4A882',
        temple: { stone: '#8D7B68', dark: '#4A3728' },
        surface:   { DEFAULT: '#FFFFFF', alt: '#F8F9FA', cream: '#FDF8F0' },
        text: {
          primary:   '#212121',
          secondary: '#616161',
          light:     '#9E9E9E',
          cream:     '#5C4A32',
        },
        success: '#2E7D32',
        border: '#E0E0E0',
        'border-warm': '#E8DDD0',
      },

      fontFamily: {
        sans:  ['var(--font-poppins)', 'Inter', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },

      boxShadow: {
        card:        '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover':'0 12px 40px rgba(0,0,0,0.14)',
        'card-warm': '0 4px 20px rgba(196,168,130,0.20)',
        temple:      '0 8px 32px rgba(255,107,0,0.15), 0 2px 8px rgba(0,0,0,0.08)',
        gold:        '0 4px 20px rgba(255,214,0,0.30)',
        float:       '0 4px 16px rgba(255,107,0,0.35)',
        'navbar-scroll': '0 4px 24px rgba(255,107,0,0.12)',
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
        /* existing */
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
        /* new */
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
          '0%, 100%': { boxShadow: '0 4px 16px rgba(255,107,0,0.35)' },
          '50%':      { boxShadow: '0 4px 32px rgba(255,107,0,0.65), 0 0 0 6px rgba(255,107,0,0.12)' },
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
        'gradient-hero':   'linear-gradient(135deg, rgba(26,35,126,0.85) 0%, rgba(255,107,0,0.65) 100%)',
        'gradient-sacred': 'linear-gradient(135deg, #1A237E 0%, #E65100 100%)',
        'gradient-gold':   'linear-gradient(90deg, #F9A825, #FFD600, #F9A825)',
      },
    },
  },
  plugins: [],
};