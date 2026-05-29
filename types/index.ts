/**
 * Domain types. Mock data in lib/products.ts and lib/journal.ts conform to
 * these, so a CMS integration only needs to satisfy the same shapes.
 */

export interface MediaAsset {
  /** Path under /public, e.g. /images/products/xvr/01.jpg */
  src: string
  alt: string
}

export interface Specification {
  label: string
  value: string
}

export interface EngineeredDetail {
  title: string
  body: string
}

export interface Product {
  slug: string
  name: string
  /** Short, confident line shown under the name. */
  tagline: string
  /** One-sentence summary for cards and meta descriptions. */
  summary: string
  /** Long-form copy: the story behind the name. */
  story: string
  /** Discreet price note. Never a "buy" call. */
  priceNote: string
  specifications: Specification[]
  details: EngineeredDetail[]
  gallery: MediaAsset[]
  featured: boolean
  /** Display order, lowest first. */
  order: number
}

export interface JournalEntry {
  slug: string
  title: string
  excerpt: string
  category: string
  /** ISO date string. */
  date: string
  readingTime: string
  author: string
  cover: MediaAsset
  /** Array of paragraphs. Pull-quotes are prefixed with "> ". */
  body: string[]
}
