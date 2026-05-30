#!/usr/bin/env node
/**
 * Downloads imagery from the original Smoke Connoisseur site into a local
 * staging folder. Run this on YOUR machine — the build/CI environment is
 * network-sandboxed and the live site blocks datacentre IPs, so it only works
 * from a normal home/office connection.
 *
 * Usage:
 *   node scripts/fetch-original-images.mjs
 *   node scripts/fetch-original-images.mjs https://www.smokeconnoisseur.co.uk
 *
 * Requires Node 18+ (uses the built-in global fetch).
 *
 * Output:
 *   downloaded-images/<source-page>/<filename>   the image files
 *   downloaded-images/manifest.json              what came from where
 *
 * Nothing here is wired into the site yet. Once downloaded, either:
 *   a) move files into public/images/... yourself, or
 *   b) zip downloaded-images/ and send it back, and I'll place + map them.
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const BASE = (process.argv[2] || 'https://www.smokeconnoisseur.co.uk').replace(/\/$/, '')
const OUT = 'downloaded-images'

const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-GB,en;q=0.9',
}

// Pages to harvest <img>/srcset/og:image/background-image from. Adjust freely.
const PAGES = [
  '/',
  '/collections/all',
  '/pages/heritage',
  '/pages/about',
  '/pages/craftsmanship',
  '/pages/warranty',
  '/pages/contact',
  '/blogs/journal',
]

const seen = new Set()
const manifest = {}

function slugForPage(path) {
  const s = path.replace(/^\/+|\/+$/g, '').replace(/[^a-z0-9]+/gi, '-')
  return s || 'home'
}

function absolutise(url) {
  if (!url) return null
  let u = url.trim().replace(/&amp;/g, '&')
  if (u.startsWith('//')) u = 'https:' + u
  else if (u.startsWith('/')) u = BASE + u
  else if (!/^https?:/i.test(u)) return null
  return u
}

function extractImageUrls(html) {
  const urls = new Set()
  // src="..."
  for (const m of html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) urls.add(m[1])
  // srcset="a 1x, b 2x" — take every candidate
  for (const m of html.matchAll(/srcset=["']([^"']+)["']/gi)) {
    for (const part of m[1].split(',')) {
      const u = part.trim().split(/\s+/)[0]
      if (u) urls.add(u)
    }
  }
  // og:image / twitter:image
  for (const m of html.matchAll(/<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)[^>]*>/gi)) {
    const c = m[0].match(/content=["']([^"']+)["']/i)
    if (c) urls.add(c[1])
  }
  // inline background-image: url(...)
  for (const m of html.matchAll(/background-image\s*:\s*url\((["']?)([^"')]+)\1\)/gi)) urls.add(m[2])
  // data-src / data-srcset (lazy loaders)
  for (const m of html.matchAll(/data-(?:src|srcset)=["']([^"']+)["']/gi)) {
    for (const part of m[1].split(',')) {
      const u = part.trim().split(/\s+/)[0]
      if (u) urls.add(u)
    }
  }
  return [...urls].map(absolutise).filter(Boolean)
}

// Strip Shopify resize suffixes/queries so we fetch the largest original.
function canonicalImage(url) {
  let u = url.split('?')[0]
  u = u.replace(/_(?:\d+x\d*|\d*x\d+|small|medium|large|grande|compact|master|\d+x)(?=\.\w+$)/i, '')
  return u
}

function filenameFor(url) {
  const clean = url.split('?')[0]
  let name = clean.substring(clean.lastIndexOf('/') + 1) || 'image'
  if (!/\.\w{2,5}$/.test(name)) name += '.jpg'
  return name.replace(/[^a-z0-9._-]+/gi, '-')
}

async function getText(url) {
  const res = await fetch(url, { headers: BROWSER_HEADERS })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.text()
}

async function download(url, destDir) {
  const canon = canonicalImage(url)
  if (seen.has(canon)) return null
  seen.add(canon)
  let res = await fetch(canon, { headers: BROWSER_HEADERS })
  if (!res.ok) {
    // Fall back to the original (un-canonicalised) URL.
    res = await fetch(url, { headers: BROWSER_HEADERS })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const file = filenameFor(canon)
  await mkdir(destDir, { recursive: true })
  await writeFile(join(destDir, file), buf)
  return { file, bytes: buf.length, from: canon }
}

async function harvestShopifyProducts() {
  try {
    const data = JSON.parse(await getText(`${BASE}/products.json?limit=250`))
    if (!Array.isArray(data.products)) return
    console.log(`\nproducts.json: ${data.products.length} products`)
    for (const p of data.products) {
      const dir = join(OUT, 'products', p.handle)
      const key = `products/${p.handle}`
      manifest[key] = { title: p.title, handle: p.handle, images: [] }
      for (const img of p.images || []) {
        const src = absolutise(img.src)
        if (!src) continue
        try {
          const r = await download(src, dir)
          if (r) {
            manifest[key].images.push(r.file)
            console.log(`  + ${p.handle}/${r.file} (${(r.bytes / 1024).toFixed(0)} kB)`)
          }
        } catch (e) {
          console.warn(`  ! ${src} — ${e.message}`)
        }
      }
    }
  } catch (e) {
    console.log(`\nproducts.json not available (${e.message}). Skipping — page scrape still runs.`)
  }
}

async function harvestPages() {
  for (const path of PAGES) {
    const url = BASE + path
    const slug = slugForPage(path)
    let html
    try {
      html = await getText(url)
    } catch (e) {
      console.warn(`\n${path} — ${e.message}, skipping`)
      continue
    }
    const imgs = extractImageUrls(html)
    if (!imgs.length) continue
    const dir = join(OUT, 'pages', slug)
    const key = `pages/${slug}`
    manifest[key] = { url, images: [] }
    console.log(`\n${path}: ${imgs.length} candidate images`)
    for (const src of imgs) {
      try {
        const r = await download(src, dir)
        if (r) {
          manifest[key].images.push(r.file)
          console.log(`  + ${slug}/${r.file} (${(r.bytes / 1024).toFixed(0)} kB)`)
        }
      } catch (e) {
        console.warn(`  ! ${src} — ${e.message}`)
      }
    }
  }
}

async function main() {
  console.log(`Fetching imagery from ${BASE}`)
  console.log(`Output → ${OUT}/`)
  await mkdir(OUT, { recursive: true })
  await harvestShopifyProducts()
  await harvestPages()
  await writeFile(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2))
  const total = Object.values(manifest).reduce((n, v) => n + v.images.length, 0)
  console.log(`\nDone. ${total} images saved under ${OUT}/. See ${OUT}/manifest.json.`)
  if (total === 0) {
    console.log(
      'No images downloaded. If you saw 403s, the site is blocking automated requests —\n' +
        'try again on a normal home connection, or save images manually from the browser.'
    )
  }
}

main().catch((e) => {
  console.error('Fatal:', e)
  process.exit(1)
})
