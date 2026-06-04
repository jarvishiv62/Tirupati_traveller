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
        primary: { DEFAULT: '#FF6B00', dark: '#E65100', light: '#FFF3E0' },
        secondary: { DEFAULT: '#1A237E', light: '#3949AB' },
        accent: { DEFAULT: '#FFD600', dark: '#F9A825', light: '#FFFDE7' },

        cream: {
          DEFAULT: '#FDF8F0',
          dark: '#F5EDD8',
          warm: '#FAF0E0',
        },
        saffron: { DEFAULT: '#FF6B00', pale: '#FFF3E0' },
        gold: { DEFAULT: '#FFD600', deep: '#C49A00', pale: '#FFFDE7' },
        sandstone: '#C4A882',
        temple: {
          stone: '#8D7B68',
          dark: '#4A3728',
        },

        surface: { DEFAULT: '#FFFFFF', alt: '#F8F9FA', cream: '#FDF8F0' },

        text: {
          primary: '#212121',
          secondary: '#616161',
          light: '#9E9E9E',
          cream: '#5C4A32',
        },

        success: '#2E7D32',
        border: '#E0E0E0',
        'border-warm': '#E8DDD0',
      },

      fontFamily: {
        sans: ['var(--font-poppins)', 'Inter', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },

      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14)',
        'card-warm': '0 4px 20px rgba(196,168,130,0.20)',
        temple: '0 8px 32px rgba(255,107,0,0.15), 0 2px 8px rgba(0,0,0,0.08)',
        gold: '0 4px 20px rgba(255,214,0,0.30)',
        float: '0 4px 16px rgba(255,107,0,0.35)',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      animation: {
        'mandala-slow': 'spin 40s linear infinite',
        'flame-pulse': 'flamePulse 2.5s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },

      keyframes: {
        flamePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.12)', opacity: '0.85' },
        },
        goldShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, rgba(26,35,126,0.85) 0%, rgba(255,107,0,0.65) 100%)',
        'gradient-sacred': 'linear-gradient(135deg, #1A237E 0%, #E65100 100%)',
        'gradient-gold': 'linear-gradient(90deg, #F9A825, #FFD600, #F9A825)',
      },
    },
  },
  plugins: [],
};