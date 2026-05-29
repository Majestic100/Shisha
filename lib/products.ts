import type { Product } from '@/types'

/**
 * MOCK PRODUCT DATA.
 * Replace this array with a CMS query (Sanity, Contentful, Shopify Storefront,
 * etc.) returning the same `Product[]` shape. Nothing else needs to change.
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
      'The first piece judged worthy of the hallmark. Machined from a single billet, sealed, and silent.',
    story:
      'XVR is named for its fifteenth revision. Fourteen prototypes were drawn, cut and rejected before the engineers signed the fifteenth. Nothing was added for show. Everything that remained had earned its place. It is the instrument against which every later piece is measured.',
    priceNote: 'Commissioned to order · from £4,800',
    specifications: [
      { label: 'Core material', value: 'Billet 316L stainless steel' },
      { label: 'Fittings', value: 'Naval brass, hand-finished' },
      { label: 'Weight', value: '4.2 kg' },
      { label: 'Height', value: '580 mm' },
      { label: 'Finish', value: 'Vapour-blasted, hand-polished' },
      { label: 'Manufacture', value: 'Made in England' },
    ],
    details: [
      {
        title: 'Single-billet core',
        body: 'The column is machined from one block of 316L. No welds, no seams, no joints to loosen across a lifetime of use.',
      },
      {
        title: 'Sealed airpath',
        body: 'Every interface is machined to a tolerance of two hundredths of a millimetre. The draw is airtight without a single rubber grommet.',
      },
      {
        title: 'Calibrated diffuser',
        body: 'The diffuser geometry was modelled in the same software used for intake ducting. It quiets the draw and holds the mist.',
      },
    ],
    gallery: [
      { src: '/images/products/xvr/01.jpg', alt: 'XVR hookah, full instrument against an off-black ground' },
      { src: '/images/products/xvr/02.jpg', alt: 'Macro detail of the XVR machined brass collar' },
      { src: '/images/products/xvr/03.jpg', alt: 'XVR sealed airpath thread, close detail' },
      { src: '/images/products/xvr/04.jpg', alt: 'XVR base, vapour-blasted stainless finish' },
    ],
    featured: true,
    order: 1,
  },
  {
    slug: 'mist-velocity-restriction',
    name: 'Mist Velocity Restriction',
    tagline: 'Stillness, engineered.',
    summary:
      'Named for the principle it governs. Airflow is restrained so the draw falls silent and the mist hangs.',
    story:
      'The Mist Velocity Restriction takes its name from the airflow law it was built to obey. By restricting velocity through a calibrated venturi, the draw is rendered all but silent and the mist settles rather than scatters. The name is not poetry. It is a specification.',
    priceNote: 'Commissioned to order · from £5,400',
    specifications: [
      { label: 'Core material', value: 'Billet titanium, grade 5' },
      { label: 'Fittings', value: 'Naval brass, hand-finished' },
      { label: 'Weight', value: '3.6 kg' },
      { label: 'Height', value: '610 mm' },
      { label: 'Finish', value: 'Bead-blasted titanium, brushed brass' },
      { label: 'Manufacture', value: 'Made in England' },
    ],
    details: [
      {
        title: 'Calibrated venturi',
        body: 'A machined restriction governs flow velocity precisely, drawing the same characteristic at the first coal as at the last.',
      },
      {
        title: 'Grade 5 titanium column',
        body: 'Aerospace titanium carries the structure at a lower mass, without conceding rigidity at the joints.',
      },
      {
        title: 'Acoustic damping',
        body: 'Internal surfaces are profiled to absorb turbulence. The instrument is quiet by design, not by accident.',
      },
    ],
    gallery: [
      { src: '/images/products/mist-velocity-restriction/01.jpg', alt: 'Mist Velocity Restriction hookah, full instrument' },
      { src: '/images/products/mist-velocity-restriction/02.jpg', alt: 'Titanium column detail, bead-blasted finish' },
      { src: '/images/products/mist-velocity-restriction/03.jpg', alt: 'Calibrated venturi restriction, macro view' },
      { src: '/images/products/mist-velocity-restriction/04.jpg', alt: 'Brushed brass fitting against off-black' },
    ],
    featured: true,
    order: 2,
  },
  {
    slug: 'shakespeare',
    name: 'Shakespeare',
    tagline: 'Written in brass.',
    summary:
      'A tribute to the maker’s county. Hand-engraved by a single craftsman, signed and numbered.',
    story:
      'Shakespeare is made within sight of the county that bore him. Each column is hand-engraved by one craftsman, in a hand that takes years to acquire and a morning to read. The work is signed and numbered. No two are identical, and none is meant to be.',
    priceNote: 'Commissioned to order · from £7,200',
    specifications: [
      { label: 'Core material', value: 'Billet 316L stainless steel' },
      { label: 'Fittings', value: 'Hand-engraved naval brass' },
      { label: 'Weight', value: '4.5 kg' },
      { label: 'Height', value: '585 mm' },
      { label: 'Finish', value: 'Hand-engraved, mirror-polished' },
      { label: 'Manufacture', value: 'Made in England' },
    ],
    details: [
      {
        title: 'Hand engraving',
        body: 'The motif is cut by hand, not rolled or etched. Each line carries the pressure of the tool and the judgement of the engraver.',
      },
      {
        title: 'Signed and numbered',
        body: 'Every Shakespeare records its maker and its place in the series, struck into the base beneath the hallmark.',
      },
      {
        title: 'Mirror finish',
        body: 'The polish is built in stages across several days, each grade removing the marks of the last.',
      },
    ],
    gallery: [
      { src: '/images/products/shakespeare/01.jpg', alt: 'Shakespeare hookah, hand-engraved column' },
      { src: '/images/products/shakespeare/02.jpg', alt: 'Detail of hand engraving on naval brass' },
      { src: '/images/products/shakespeare/03.jpg', alt: 'Mirror-polished base with hallmark' },
      { src: '/images/products/shakespeare/04.jpg', alt: 'Engraver’s signature struck into the base' },
    ],
    featured: true,
    order: 3,
  },
  {
    slug: 'sovereign',
    name: 'Sovereign',
    tagline: 'Weight without compromise.',
    summary: 'The heaviest piece in the collection. Built to stand, not to travel.',
    story:
      'The Sovereign is unapologetic about its mass. It was drawn for a single place in a single room, and it holds that place absolutely. Where others are made to be carried, the Sovereign is made to be returned to.',
    priceNote: 'Commissioned to order · from £6,100',
    specifications: [
      { label: 'Core material', value: 'Billet 316L stainless steel' },
      { label: 'Fittings', value: 'Solid naval brass' },
      { label: 'Weight', value: '5.8 kg' },
      { label: 'Height', value: '640 mm' },
      { label: 'Finish', value: 'Satin-brushed, hand-polished' },
      { label: 'Manufacture', value: 'Made in England' },
    ],
    details: [
      {
        title: 'Ballasted base',
        body: 'A machined ballast lowers the centre of mass so the instrument settles and stays settled.',
      },
      {
        title: 'Solid brass throughout',
        body: 'Fittings are turned from solid stock, not cast, for a density that reads in the hand.',
      },
      {
        title: 'Satin finish',
        body: 'A directional brush catches low light without glare, chosen for the long evening.',
      },
    ],
    gallery: [
      { src: '/images/products/sovereign/01.jpg', alt: 'Sovereign hookah, full instrument' },
      { src: '/images/products/sovereign/02.jpg', alt: 'Ballasted base, satin-brushed steel' },
      { src: '/images/products/sovereign/03.jpg', alt: 'Solid brass fitting detail' },
    ],
    featured: false,
    order: 4,
  },
  {
    slug: 'meridian',
    name: 'Meridian',
    tagline: 'Calibrated for the long evening.',
    summary: 'A taller draw and a slower burn. Drawn for conversation that does not end early.',
    story:
      'The Meridian was proportioned for time. A taller column lengthens the draw and slows the burn, so the instrument keeps pace with the evening rather than outrunning it. It is named for the highest point of the day, and made for its quietest.',
    priceNote: 'Commissioned to order · from £5,200',
    specifications: [
      { label: 'Core material', value: 'Billet 316L stainless steel' },
      { label: 'Fittings', value: 'Naval brass, hand-finished' },
      { label: 'Weight', value: '4.0 kg' },
      { label: 'Height', value: '720 mm' },
      { label: 'Finish', value: 'Vapour-blasted, hand-polished' },
      { label: 'Manufacture', value: 'Made in England' },
    ],
    details: [
      {
        title: 'Extended column',
        body: 'Additional column length cools the draw further and lengthens the interval between attentions.',
      },
      {
        title: 'Slow-burn geometry',
        body: 'The bowl interface is profiled to moderate heat, drawing more from each coal.',
      },
    ],
    gallery: [
      { src: '/images/products/meridian/01.jpg', alt: 'Meridian hookah, extended column' },
      { src: '/images/products/meridian/02.jpg', alt: 'Meridian draw interface, macro detail' },
      { src: '/images/products/meridian/03.jpg', alt: 'Meridian base against off-black ground' },
    ],
    featured: false,
    order: 5,
  },
  {
    slug: 'hallmark',
    name: 'Hallmark',
    tagline: 'The first of the line.',
    summary: 'The founding instrument, kept in production unchanged. The standard everything else answers to.',
    story:
      'The Hallmark is the piece the house began with, and it has not changed. It remains in production exactly as drawn, because a standard that moves is no standard at all. To own a Hallmark is to own the origin of the line.',
    priceNote: 'Commissioned to order · from £4,400',
    specifications: [
      { label: 'Core material', value: 'Billet 316L stainless steel' },
      { label: 'Fittings', value: 'Naval brass, hand-finished' },
      { label: 'Weight', value: '4.1 kg' },
      { label: 'Height', value: '560 mm' },
      { label: 'Finish', value: 'Hand-polished' },
      { label: 'Manufacture', value: 'Made in England' },
    ],
    details: [
      {
        title: 'Unchanged drawing',
        body: 'Produced to the original specification, revision-locked since the first piece left the works.',
      },
      {
        title: 'Struck hallmark',
        body: 'Each instrument carries the house mark, struck by hand into the base.',
      },
    ],
    gallery: [
      { src: '/images/products/hallmark/01.jpg', alt: 'Hallmark hookah, the founding instrument' },
      { src: '/images/products/hallmark/02.jpg', alt: 'House mark struck into the base' },
      { src: '/images/products/hallmark/03.jpg', alt: 'Hand-polished brass collar detail' },
    ],
    featured: false,
    order: 6,
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
