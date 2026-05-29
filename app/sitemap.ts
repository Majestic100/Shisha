import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { getAllProducts } from '@/lib/products'
import { getAllJournal } from '@/lib/journal'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/collection', '/heritage', '/craftsmanship', '/warranty', '/journal', '/contact']

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: new URL(route || '/', site.url).toString(),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))

  const productEntries: MetadataRoute.Sitemap = getAllProducts().map((p) => ({
    url: new URL(`/collection/${p.slug}`, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const journalEntries: MetadataRoute.Sitemap = getAllJournal().map((e) => ({
    url: new URL(`/journal/${e.slug}`, site.url).toString(),
    lastModified: new Date(e.date),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticEntries, ...productEntries, ...journalEntries]
}
