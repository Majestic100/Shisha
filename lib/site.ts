/**
 * Single source of truth for brand-level constants: name, voice, navigation,
 * contact details and social links. Swap these when wiring a CMS or CRM.
 */
export const site = {
  name: 'Smoke Connoisseur',
  shortName: 'Smoke Connoisseur',
  tagline: 'Engineered for Legacy',
  // Used for metadataBase / canonical URLs. Override via NEXT_PUBLIC_SITE_URL is
  // intentionally avoided — this is a public constant, not a secret.
  url: 'https://www.smokeconnoisseur.co.uk',
  description:
    'The first hookah engineered in England. Machined by the engineers behind Aston Martin, Rolls-Royce and McLaren, and warranted for a lifetime.',
  locale: 'en_GB',
  contact: {
    email: 'enquiries@smokeconnoisseur.co.uk',
    phone: '+44 (0)1926 000000',
    address: {
      line1: 'The Engineering Works',
      line2: 'Warwickshire',
      country: 'United Kingdom',
    },
  },
  social: {
    instagram: 'https://instagram.com/smokeconnoisseur',
    instagramHandle: '@smokeconnoisseur',
  },
} as const

export type NavItem = {
  label: string
  href: string
}

export const primaryNav: NavItem[] = [
  { label: 'Collection', href: '/collection' },
  { label: 'Heritage', href: '/heritage' },
  { label: 'Craftsmanship', href: '/craftsmanship' },
  { label: 'Warranty', href: '/warranty' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'The Instruments',
    items: [
      { label: 'The Collection', href: '/collection' },
      { label: 'Craftsmanship', href: '/craftsmanship' },
      { label: 'Lifetime Warranty', href: '/warranty' },
    ],
  },
  {
    heading: 'The House',
    items: [
      { label: 'Heritage', href: '/heritage' },
      { label: 'Journal', href: '/journal' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]
