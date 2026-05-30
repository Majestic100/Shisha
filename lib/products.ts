import type { Product } from '@/types'

/**
 * MOCK PRODUCT DATA.
 * Replace this array with a CMS query (Sanity, Contentful, Shopify Storefront,
 * etc.) returning the same `Product[]` shape. Nothing else needs to change.
 *
 * Models, prices and features reflect the Smoke Connoisseur catalogue. Copy is
 * written in the house voice — sparse and engineer-precise — rather than lifted
 * verbatim. Weights and dimensions are not published by the maker and are left
 * out of the spec tables rather than invented.
 *
 * Image paths point at /public/images/products/<slug>/. Drop real photography
 * in those folders and the gallery picks it up automatically.
 */
export const products: Product[] = [
  {
    slug: 'xvr',
    name: 'XVR',
    tagline: 'The reference instrument.',
    summary:
      'The most considered piece in the collection. British V2A stainless steel, sealed by Magni Connect, silent by design.',
    story:
      'XVR is the instrument against which every other is measured. It is machined in Coventry by engineers whose other work carries the names of Aston Martin and Rolls-Royce, then finished by hand. Nothing is added for show. Click-lock assembly, a sealed airpath and a calibrated diffuser are not features here. They are the specification.',
    priceNote: 'From £400',
    specifications: [
      { label: 'Core material', value: 'V2A British stainless steel' },
      { label: 'Assembly', value: 'Click-lock, Magni Connect seals' },
      { label: 'Airflow', value: 'Smooth Purge 360°, removable diffuser' },
      { label: 'Hose', value: 'Velvet-touch' },
      { label: 'Supplied with', value: 'Stone bowl, heat management device' },
      { label: 'Manufacture', value: 'Machined in Coventry, England' },
    ],
    details: [
      {
        title: 'Click-lock assembly',
        body: 'Each interface locks positively by hand, without tools and without thread tape. The connection is secure and repeatable across a lifetime of use.',
      },
      {
        title: 'Magni Connect seals',
        body: 'The sealing system holds the airpath airtight without perishable rubber grommets, so the draw stays true as the years pass.',
      },
      {
        title: 'Smooth Purge 360°',
        body: 'Spent smoke clears evenly through a full-circle purge rather than a single valve, modelled on the airflow work the engineers do elsewhere.',
      },
      {
        title: 'Calibrated diffuser',
        body: 'A removable diffuser and velocity-restriction adapters let the draw be tuned, then quieted, to preference.',
      },
    ],
    gallery: [
      { src: '/images/products/xvr/01.jpg', alt: 'XVR hookah, full instrument against an off-black ground' },
      { src: '/images/products/xvr/02.jpg', alt: 'Macro detail of the XVR machined collar' },
      { src: '/images/products/xvr/03.jpg', alt: 'XVR click-lock interface, close detail' },
      { src: '/images/products/xvr/04.jpg', alt: 'XVR base, British V2A stainless finish' },
    ],
    featured: true,
    order: 1,
  },
  {
    slug: 'mist-velocity-restriction',
    name: 'Mist Velocity Restriction',
    tagline: 'The first, engineered in Britain.',
    summary:
      'The world’s first British-designed and British-made shisha. Named for the airflow principle it governs.',
    story:
      'The Mist Velocity Restriction was the beginning: the first shisha designed and made in Britain, drawn in Coventry with the discipline of motorsport engineering. It takes its name from the law it obeys. By restricting flow velocity through a calibrated restriction, the draw is rendered all but silent and the mist settles rather than scatters. The name is not poetry. It is a specification.',
    priceNote: 'From £350',
    specifications: [
      { label: 'Core material', value: 'Medical-grade stainless steel' },
      { label: 'Assembly', value: 'Click-lock, Magni Connect seals' },
      { label: 'Airflow', value: 'Velocity restriction, removable diffuser' },
      { label: 'Hose', value: 'Velvet-touch' },
      { label: 'Origin', value: 'British-designed, British-made' },
      { label: 'Manufacture', value: 'Made in Coventry, England' },
    ],
    details: [
      {
        title: 'Calibrated restriction',
        body: 'A machined restriction governs flow velocity precisely, drawing the same characteristic at the first coal as at the last.',
      },
      {
        title: 'Settled mist',
        body: 'By holding velocity low, the mist is encouraged to settle and hang rather than disperse, for a fuller, quieter draw.',
      },
      {
        title: 'Supercar discipline',
        body: 'Designed by engineers who build for Britain’s finest marques, to the tolerances that work demands.',
      },
    ],
    gallery: [
      { src: '/images/products/mist-velocity-restriction/01.jpg', alt: 'Mist Velocity Restriction hookah, full instrument' },
      { src: '/images/products/mist-velocity-restriction/02.jpg', alt: 'Stainless column detail' },
      { src: '/images/products/mist-velocity-restriction/03.jpg', alt: 'Calibrated velocity restriction, macro view' },
      { src: '/images/products/mist-velocity-restriction/04.jpg', alt: 'Fitting detail against off-black' },
    ],
    featured: true,
    order: 2,
  },
  {
    slug: 'shakespeare',
    name: 'Shakespeare',
    tagline: 'Made within sight of his county.',
    summary:
      'Hand-finished in Warwickshire, the county that bore the playwright. British craft, named for British letters.',
    story:
      'Shakespeare is made within sight of the county that bore him. It is hand-finished in Warwickshire by local artisans, from parts machined in the Midlands, and carries the same sealed, click-lock engineering as the rest of the house. The name is a quiet tribute to where the work is done, and to whom the county is owed.',
    priceNote: 'From £250',
    specifications: [
      { label: 'Core material', value: 'Medical-grade stainless steel' },
      { label: 'Assembly', value: 'Click-lock, Magni Connect seals' },
      { label: 'Airflow', value: 'Smooth Purge 360°, removable diffuser' },
      { label: 'Hose', value: 'Velvet-touch' },
      { label: 'Finishing', value: 'Hand-finished in Warwickshire' },
      { label: 'Manufacture', value: 'Made in England' },
    ],
    details: [
      {
        title: 'Hand-finished',
        body: 'Finished by local artisans in Coventry and Warwickshire, where the marks of the hand are a feature, not a flaw.',
      },
      {
        title: 'Sealed airpath',
        body: 'Magni Connect seals and click-lock assembly hold the draw airtight without perishable parts.',
      },
      {
        title: 'Named for the county',
        body: 'A tribute to Warwickshire, the county that produced both the playwright and the people who build this.',
      },
    ],
    gallery: [
      { src: '/images/products/shakespeare/01.jpg', alt: 'Shakespeare hookah, full instrument' },
      { src: '/images/products/shakespeare/02.jpg', alt: 'Hand-finished fitting detail' },
      { src: '/images/products/shakespeare/03.jpg', alt: 'Polished base detail' },
      { src: '/images/products/shakespeare/04.jpg', alt: 'Maker’s detail at the base' },
    ],
    featured: true,
    order: 3,
  },
  {
    slug: 'london',
    name: 'London',
    tagline: 'A capital, cast as an instrument.',
    summary:
      'The British telephone box, reimagined as a shisha. Purge releases through the silhouette itself.',
    story:
      'London takes one of Britain’s most recognised silhouettes — the red telephone box — and renders it as an instrument. The conceit is not decoration: the purge releases smoke through the form itself. Beneath the shape sits the same medical-grade steel, click-lock assembly and sealed airpath as every piece the house makes. A landmark you can keep.',
    priceNote: 'From £350',
    specifications: [
      { label: 'Core material', value: 'Medical-grade stainless steel' },
      { label: 'Assembly', value: 'Click-lock, Magni Connect seals' },
      { label: 'Airflow', value: 'Smooth Purge 360°, three airflow adapters' },
      { label: 'Hose', value: 'Velvet-touch' },
      { label: 'Form', value: 'British telephone-box silhouette' },
      { label: 'Manufacture', value: 'Made in England' },
    ],
    details: [
      {
        title: 'Purge through the form',
        body: 'The telephone-box silhouette is functional: spent smoke releases through the structure itself.',
      },
      {
        title: 'Three airflow adapters',
        body: 'Supplied with three adapters and a removable diffuser, the draw is tuned to preference.',
      },
      {
        title: 'Engineered beneath the icon',
        body: 'Designed by former engineers from Britain’s finest marques, on the same sealed, click-lock platform as the collection.',
      },
    ],
    gallery: [
      { src: '/images/products/london/01.jpg', alt: 'London hookah, telephone-box form, full instrument' },
      { src: '/images/products/london/02.jpg', alt: 'London purge detail through the form' },
      { src: '/images/products/london/03.jpg', alt: 'London base and fittings' },
    ],
    featured: false,
    order: 4,
  },
  {
    slug: 'shakespeare-lounge',
    name: 'Shakespeare Lounge',
    tagline: 'Proportioned for the long evening.',
    summary:
      'A lounge-height take on Shakespeare. The same British engineering, drawn for the table and the room.',
    story:
      'The Shakespeare Lounge keeps the engineering of its namesake and re-proportions it for the lounge: a height drawn for the low table and the unhurried evening. It carries the same sealed airpath, click-lock assembly and hand finishing, in a stance made to stay put.',
    priceNote: 'From £250',
    specifications: [
      { label: 'Core material', value: 'Medical-grade stainless steel' },
      { label: 'Assembly', value: 'Click-lock, Magni Connect seals' },
      { label: 'Airflow', value: 'Smooth Purge 360°, removable diffuser' },
      { label: 'Hose', value: 'Velvet-touch' },
      { label: 'Format', value: 'Lounge height' },
      { label: 'Manufacture', value: 'Made in England' },
    ],
    details: [
      {
        title: 'Lounge proportion',
        body: 'Re-drawn for the low table and the long sitting, without conceding the engineering.',
      },
      {
        title: 'Hand-finished',
        body: 'Finished by artisans in Coventry and Warwickshire, as the standing Shakespeare is.',
      },
    ],
    gallery: [
      { src: '/images/products/shakespeare-lounge/01.jpg', alt: 'Shakespeare Lounge hookah, full instrument' },
      { src: '/images/products/shakespeare-lounge/02.jpg', alt: 'Shakespeare Lounge fitting detail' },
      { src: '/images/products/shakespeare-lounge/03.jpg', alt: 'Shakespeare Lounge base detail' },
    ],
    featured: false,
    order: 5,
  },
]

export function getAllProducts(): Product[] {
  return [...products].sort((a, b) => a.order - b.order)
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((p) => p.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
