/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0A0A0A', // Pure black
          800: '#111111', // Card background
          700: '#161616', // Surface variants
          600: '#1F1F1F', // Thin border / horizontal rules
        },
        accent: {
          purple: '#7C3AED',
          cyan: '#06B6D4',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'marquee': 'marquee 30s linear infinite',
        'orb-purple': 'orbPurple 20s ease-in-out infinite alternate',
        'orb-cyan': 'orbCyan 20s ease-in-out infinite alternate-reverse',
        'flow-dots': 'flowDots 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbPurple: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.15' },
          '50%': { transform: 'translate(100px, 50px) scale(1.1)', opacity: '0.2' },
          '100%': { transform: 'translate(-50px, -50px) scale(0.9)', opacity: '0.15' },
        },
        orbCyan: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.15' },
          '50%': { transform: 'translate(-100px, -50px) scale(1.1)', opacity: '0.2' },
          '100%': { transform: 'translate(50px, 100px) scale(0.9)', opacity: '0.15' },
        },
        flowDots: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
