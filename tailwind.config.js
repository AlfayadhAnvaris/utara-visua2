/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D31A21',
          'red-dark': '#B00E1F',
          blue: '#1228CC',
          'blue-bright': '#2840FF',
          black: '#0D0D0D',
          'black-off': '#1A1A1A',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Anton"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 22s linear infinite',
        'ticker-reverse': 'ticker-reverse 28s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        'spin-slow-rev': 'spin-rev 12s linear infinite',
        'shake': 'shake 0.4s ease-in-out',
        'blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        'spin-rev': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px) rotate(-1deg)' },
          '75%': { transform: 'translateX(4px) rotate(1deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
