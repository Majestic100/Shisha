import type { Metadata } from 'next'
import { site } from '@/lib/site'
import type { JournalEntry, Product } from '@/types'

/**
 * Builds page metadata with sensible Open Graph and Twitter defaults derived
 * from the brand constants. Pass only what differs per page.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  type = 'website',
}: {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
}): Metadata {
  const url = new URL(path, site.url).toString()
  const fullTitle = path === '/' ? `${site.name} — ${site.tagline}` : `${title} · ${site.name}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}

/** Organisation schema for the site root. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    email: site.contact.email,
    sameAs: [site.social.instagram],
    address: {
      '@type': 'PostalAddress',
      addressRegion: site.contact.address.line2,
      addressCountry: 'GB',
    },
  }
}

/** Product schema for a single instrument. */
export function productSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.summary,
    brand: { '@type': 'Brand', name: site.name },
    countryOfOrigin: 'GB',
    material: product.specifications.find((s) => s.label === 'Core material')?.value,
    image: product.gallery.map((g) => new URL(g.src, site.url).toString()),
    url: new URL(`/collection/${product.slug}`, site.url).toString(),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/MadeToOrder',
      priceCurrency: 'GBP',
      url: new URL(`/collection/${product.slug}`, site.url).toString(),
      seller: { '@type': 'Organization', name: site.name },
    },
  }
}

/** Article schema for a journal entry. */
export function articleSchema(entry: JournalEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.title,
    description: entry.excerpt,
    datePublished: entry.date,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name },
    image: new URL(entry.cover.src, site.url).toString(),
    url: new URL(`/journal/${entry.slug}`, site.url).toString(),
  }
}
