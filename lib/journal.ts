import type { JournalEntry } from '@/types'

/**
 * MOCK JOURNAL DATA.
 * Replace with a CMS query returning the same `JournalEntry[]` shape.
 * Paragraphs prefixed with "> " render as serif pull-quotes.
 */
export const journal: JournalEntry[] = [
  {
    slug: 'on-the-permanence-of-things',
    title: 'On the Permanence of Things',
    excerpt:
      'Most objects are designed to be replaced. A few are designed to be kept. The difference is not price. It is intent.',
    category: 'Philosophy',
    date: '2026-05-12',
    readingTime: '6 min',
    author: 'The House',
    cover: {
      src: '/images/journal/permanence.jpg',
      alt: 'A single machined component resting on dark cloth',
    },
    body: [
      'Most objects are designed to be replaced. The replacement is the point. It is how the object earns its keep for the people who made it, and it is why so little of what we own is built to last beyond the warranty that protects the sale.',
      'A few objects are designed to be kept. They are rarer than they should be, and they are not defined by price. A keepsake is defined by intent. It is made by people who expected it to outlive them, and who built accordingly.',
      '> An heirloom is simply a tool that refused to become disposable.',
      'We set out to make a hookah that could be inherited. That single decision changed everything downstream. It changed the material. It changed the joints. It changed the warranty. It changed, in the end, the company.',
      'When you build for permanence, you cannot hide behind a replacement cycle. Every choice has to answer to a longer question. Not "will this last the season", but "will this last the century". The engineering is the easy part. The discipline is the rest.',
    ],
  },
  {
    slug: 'from-billet-to-hallmark',
    title: 'From Billet to Hallmark',
    excerpt:
      'A single block of steel becomes an instrument across four weeks and forty operations. None of them is rushed.',
    category: 'Craft',
    date: '2026-04-28',
    readingTime: '8 min',
    author: 'The Workshop',
    cover: {
      src: '/images/journal/billet.jpg',
      alt: 'Raw steel billet beside a finished column',
    },
    body: [
      'It begins as a block. A billet of 316L stainless, certified and traceable, with no obligation yet to become anything in particular. Over four weeks it is persuaded, one operation at a time, to become a column.',
      'The first cuts are rough. They remove mass and reveal the rough proportion of the piece. The cuts that follow are finer, and the last are measured in hundredths of a millimetre. The machine is precise, but the judgement is human.',
      '> We do not polish to hide the work. We polish to reveal it.',
      'The finish is built in stages over several days, each grade of abrasive removing the marks of the one before. Skip a stage and the eye will find it, even if the hand cannot. So no stage is skipped.',
      'The last act is the hallmark. It is struck by hand into the base, and with it the instrument passes from work in progress to work complete. From that strike, the lifetime warranty begins.',
    ],
  },
  {
    slug: 'warwickshire-brass',
    title: 'Warwickshire Brass',
    excerpt:
      'Why a hookah is being machined in the English Midlands, by hands that also build for Aston Martin and Rolls-Royce.',
    category: 'Heritage',
    date: '2026-04-09',
    readingTime: '7 min',
    author: 'The House',
    cover: {
      src: '/images/journal/warwickshire.jpg',
      alt: 'The works in the Warwickshire countryside, black and white',
    },
    body: [
      'The English Midlands have made precision for a very long time. The skills did not arrive with the supercar; the supercar arrived because the skills were already here. We sit within that tradition, not beside it.',
      'The engineers who machine our instruments machine other things too. Components for Aston Martin. Parts for Rolls-Royce and Bentley. Assemblies for one of the world’s most revered British marques. The tolerances they work to elsewhere are the tolerances they bring here.',
      '> The hand that machines to aerospace tolerance does not forget how on a Friday afternoon.',
      'Among them is a cabinetmaker who once made furniture for Queen Elizabeth II. His joinery informs how our cases are made, and how the instruments are presented. Craft, it turns out, transfers between materials more readily than between people.',
      'We could make this elsewhere, more cheaply. We do not, because the place is part of the object. Warwickshire is in the work, and it stays there.',
    ],
  },
  {
    slug: 'the-quiet-draw',
    title: 'The Quiet Draw',
    excerpt:
      'Silence is not the absence of engineering. It is the result of a great deal of it.',
    category: 'Engineering',
    date: '2026-03-21',
    readingTime: '5 min',
    author: 'The Workshop',
    cover: {
      src: '/images/journal/quiet-draw.jpg',
      alt: 'Cross-section study of the diffuser geometry',
    },
    body: [
      'A loud draw is a sign of turbulence, and turbulence is a sign of compromise. Somewhere in the airpath, flow is being forced where it does not wish to go, and it complains audibly about it.',
      'We modelled the airpath in the same software used for intake ducting, then refined it on the bench. The diffuser geometry was the last variable to settle, and the most consequential.',
      '> Quiet is expensive. It is also, we think, the point.',
      'The result is an instrument that draws almost in silence, and holds the mist rather than scattering it. None of this is visible. All of it is felt.',
    ],
  },
]

export function getAllJournal(): JournalEntry[] {
  return [...journal].sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export function getJournalBySlug(slug: string): JournalEntry | undefined {
  return journal.find((e) => e.slug === slug)
}
