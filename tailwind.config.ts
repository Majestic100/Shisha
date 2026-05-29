import type { Config } from 'tailwindcss'

/**
 * Smoke Connoisseur design tokens.
 * Off-black, warm ivory, antique brass, graphite. Restraint over decoration.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          raised: '#121212',
        },
        ivory: {
          DEFAULT: '#F5F1EA',
          muted: 'rgba(245, 241, 234, 0.64)',
          faint: 'rgba(245, 241, 234, 0.40)',
        },
        brass: {
          DEFAULT: '#B08D57',
          light: '#C9A876',
        },
        graphite: {
          DEFAULT: '#3A3A3A',
        },
        hairline: 'rgba(245, 241, 234, 0.12)',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        h1: ['clamp(2.5rem, 5.5vw, 4.75rem)', { lineHeight: '1.04', letterSpacing: '-0.015em' }],
        h2: ['clamp(2rem, 3.6vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.5rem, 2.4vw, 2.125rem)', { lineHeight: '1.15', letterSpacing: '-0.005em' }],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.28em' }],
      },
      letterSpacing: {
        eyebrow: '0.28em',
        wide: '0.04em',
      },
      maxWidth: {
        content: '90rem',
        prose: '46rem',
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 11rem)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-cue': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scroll-cue': 'scroll-cue 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
