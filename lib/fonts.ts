import { Cormorant_Garamond, Inter } from 'next/font/google'

/**
 * Serif display face — headings, statements, quotes.
 * Sans face — body, navigation, specifications.
 * Exposed as CSS variables and consumed by Tailwind's fontFamily tokens.
 */
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
  variable: '--font-inter',
})
