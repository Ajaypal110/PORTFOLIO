/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#3F4F44', // Olive Green
          light: '#4A5C50',
          dark: '#2C3930',
        },
        secondary: {
          DEFAULT: '#FAFAF9', // Warm White
          accent: '#DCD7C9', // Warm Stone
        },
        accent: '#3F4F44',
        dark: {
          1000: '#1A1A1A',
          950: '#1A1A1A',
          900: '#27272A',
          700: '#4A4947',
        },
        light: {
          100: '#FAFAF9',
          200: '#F5F5F4',
          300: '#E7E7E4',
        }
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(63, 79, 68, 0.08)',
        'premium-hover': '0 10px 30px rgba(63, 79, 68, 0.12)',
      },
    },
  },
  plugins: [],
};
