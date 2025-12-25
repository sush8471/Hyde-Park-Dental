/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0FA4AF',
          dark: '#0D8A94',
          light: '#33B8C2',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FF6B6B',
          dark: '#E85555',
          light: '#FF8A8A',
          foreground: '#FFFFFF',
        },
        background: '#FAFBFC',
        foreground: '#1A202C',
        surface: '#FFFFFF',
        muted: {
          DEFAULT: '#F7FAFC',
          foreground: '#718096',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A202C',
        },
        border: '#E2E8F0',
        input: '#E2E8F0',
        ring: '#0FA4AF',
        text: {
          primary: '#1A202C',
          secondary: '#4A5568',
          muted: '#718096',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
