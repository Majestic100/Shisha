# Smoke Connoisseur

> Engineered for Legacy.

Marketing site for Smoke Connoisseur — a British maker of machined, lifetime-warranted hookah instruments. Built as a magazine-grade, engineering-catalogue experience: off-black, warm ivory, antique brass; serif headlines; generous whitespace; slow, subtle reveals.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start
```

Requires Node.js 18.17+.

> **Fonts:** Cormorant Garamond (serif) and Inter (sans) are loaded via `next/font/google` and fetched at build time. The first `npm run build` therefore needs outbound network access to Google Fonts (as does Vercel). No font files are committed.

---

## Project structure

```
app/                      App Router pages, metadata, sitemap, robots, OG image
  page.tsx                Home (/)
  heritage/               /heritage
  collection/             /collection  +  /collection/[slug]
  craftsmanship/          /craftsmanship
  warranty/               /warranty
  journal/                /journal  +  /journal/[slug]
  contact/                /contact
  layout.tsx              Root layout: fonts, header/footer, global metadata, JSON-LD
  globals.css             Tailwind layers + base tokens
components/
  layout/                 Header (transparent→solid), Footer (newsletter)
  ui/                     Button, Reveal, Eyebrow, SectionHeading, Accordion, Media, Container, JsonLd
  sections/               Hero, LogoStrip, FeaturedModels, HeritageBlock, WarrantyTeaser,
                          InstagramFeed, Quote, PageHeader
  product/                ProductCard, ProductGallery (carousel), SpecTable
  forms/                  ContactForm, NewsletterForm (UI-only, client-side validation)
lib/
  products.ts             MOCK product data + accessors  ← swap for a CMS
  journal.ts              MOCK journal data + accessors   ← swap for a CMS
  site.ts                 Brand constants, navigation
  seo.ts                  Metadata builder + JSON-LD schemas
  fonts.ts                next/font setup
  utils.ts                cn(), formatDate()
  blur.ts                 Generated blur placeholder for next/image
types/index.ts            Product, JournalEntry, Specification, etc.
public/images/            Photography lives here (see "Adding photography")
```

---

## Design system

Tokens are role-based, so the palette can be re-themed in one place
(`tailwind.config.ts`) without touching components.

| Token | Value | Use |
| --- | --- | --- |
| `surface` | `#FFFFFF` | Primary background (white) |
| `surface-raised` | `#F4F3F1` | Cards, alternating sections |
| `foreground` | `#15120D` | Primary text (near-black) |
| `foreground-muted` / `foreground-faint` | foreground @ 72% / 58% | Secondary / tertiary text |
| `brass` / `brass-light` | `#8A6A2F` / `#A9854A` | Accent, hover (AA-contrast on white) |
| `graphite` | `#6B6760` | Dim surfaces |
| `hairline` | foreground @ 14% | 1px rules |

- **Type:** serif (Cormorant Garamond) for headings; sans (Inter) for body. Fluid sizes `text-display / h1 / h2 / h3`, plus `eyebrow` (uppercase, 0.28em tracking, brass).
- **Spacing:** 4px base; section rhythm via `py-section` (`clamp(5rem, 10vw, 11rem)`); content capped at `max-w-content` (1440px) with wide gutters; full-bleed heroes.
- **Motion:** `Reveal` (fade + 16px rise, once), header transparent→solid after 64px, animated accordions/gallery — all respect `prefers-reduced-motion`.

Tokens live in `tailwind.config.ts`; global base styles in `app/globals.css`.

---

## Swapping mock data for a CMS

All content is mock data behind typed accessors, so a CMS only needs to return the same shapes (`Product`, `JournalEntry` in `types/index.ts`).

Replace the bodies of the accessors in `lib/products.ts` and `lib/journal.ts`:

```ts
// lib/products.ts — example with an async CMS source
export async function getAllProducts(): Promise<Product[]> {
  const data = await cms.fetch(/* ... */)
  return data.map(toProduct) // map CMS fields → Product
}
```

The pages already `await` nothing synchronous that would block this; make the accessors `async` and `await` them in the (server) page components.

---

## Adding photography

The user supplies photography. Until files are present, `Media` shows an on-brand machined-panel placeholder (so empty slots look intentional, not broken). Drop images into `public/images/` using the paths the data references:

```
public/images/
  hero.jpg                                  Home hero (cinematic macro, dark ground)
  products/<slug>/01.jpg … 04.jpg           Per-product gallery (e.g. products/xvr/01.jpg)
  heritage/works.jpg, workshop.jpg, cabinetmaker.jpg
  craftsmanship/machining.jpg, polishing.jpg, inspection.jpg
  journal/<name>.jpg                         Cover per entry (see lib/journal.ts)
  instagram/01.jpg … 06.jpg                  Feed placeholders
```

See `public/images/IMAGE_MANIFEST.md` for the exact list pulled from the data.
Recommended: 4:5 portrait for products, 16:9 for heroes/journal covers; sRGB JPEG/WebP.

For true `next/image` blur-up on real photos, prefer static imports or supply a `blurDataURL` per asset; the shared generated placeholder in `lib/blur.ts` is the fallback.

---

## Forms

`ContactForm` and `NewsletterForm` are **UI-only**: client-side validation and a success state, no network request. To make them live, wire the `handleSubmit` placeholder to a Route Handler (`app/api/...`) or a service (Resend, Mailchimp). No secrets are required as shipped, and none are read.

---

## SEO & accessibility

- Per-page metadata + Open Graph + Twitter via `lib/seo.ts`; generated OG image at `app/opengraph-image.tsx`.
- Structured data (JSON-LD): `Organization` (root), `Product` (product pages), `Article` (journal).
- `sitemap.xml` and `robots.txt` generated from the data.
- Semantic landmarks, skip link, focus-visible rings, labelled controls, `aria-current`, reduced-motion support, British English copy.

Set the canonical domain in `lib/site.ts` (`site.url`).

---

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new) — the framework is detected automatically.
3. No environment variables are required for the site as shipped.
4. Deploy. Update `site.url` in `lib/site.ts` to the production domain for correct canonical/OG URLs.

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint with `eslint-config-next` |
