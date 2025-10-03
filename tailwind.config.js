/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '1320px', // Override default 7xl (was 1280px)
      },
      colors: {
        primary: '#0059b8ff',
        'primary-dark': '#0056b3',
        secondary: '#FFC0CB',
        'secondary-light': '#FFE4E9',
        neutral: {
          white: '#FFFFFF',
          'light-gray': '#F7F7F7',
          'dark-gray': '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif']
      },
      fontSize: {
        'hero-h1': '3rem',
        'hero-h2': '2.25rem',
        'hero-h3': '1.75rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}