# Image manifest

The site ships with no photography. Until real images are present, every slot
renders an on-brand machined-panel placeholder (see `components/ui/Media.tsx`),
so the layout never looks broken.

Drop files at the exact paths below and `next/image` picks them up
automatically. Recommended: sRGB JPEG or WebP. Portrait product shots at 4:5,
heroes and journal covers at 16:9. Cinematic, dramatic lighting, macro detail
against a dark ground — never lifestyle or coloured smoke.

## Home
- `public/images/hero.jpg` — fullscreen hero (16:9 or taller), product in close detail

## Products (`public/images/products/<slug>/`)
- `xvr/01.jpg` … `xvr/04.jpg`
- `mist-velocity-restriction/01.jpg` … `04.jpg`
- `shakespeare/01.jpg` … `04.jpg`
- `sovereign/01.jpg` … `03.jpg`
- `meridian/01.jpg` … `03.jpg`
- `hallmark/01.jpg` … `03.jpg`

The first image of each product also serves as its collection-grid card (4:5).

## Heritage (`public/images/heritage/`) — black and white preferred
- `works.jpg` — the works in the landscape (16:9)
- `workshop.jpg` — engineer at the lathe (4:5), used on the home page
- `cabinetmaker.jpg` — the cabinetmaker at his bench (4:5)

## Craftsmanship (`public/images/craftsmanship/`)
- `machining.jpg` — CNC machining (4:3)
- `polishing.jpg` — hand-polishing (4:3)
- `inspection.jpg` — quality inspection (4:3)

## Journal (`public/images/journal/`)
- `permanence.jpg`
- `billet.jpg`
- `warwickshire.jpg`
- `quiet-draw.jpg`

## Instagram (`public/images/instagram/`)
- `01.jpg` … `06.jpg` — square (1:1) feed placeholders

---

To change which files a page expects, edit the `src` paths in `lib/products.ts`,
`lib/journal.ts`, or the relevant section component.
