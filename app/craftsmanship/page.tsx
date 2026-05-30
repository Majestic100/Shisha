import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Media } from '@/components/ui/Media'
import { PageHeader } from '@/components/sections/PageHeader'
import { Quote } from '@/components/sections/Quote'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Craftsmanship',
  description:
    'CNC precision, hand-polished finish and a final inspection that rejects more than it passes. How a Smoke Connoisseur instrument is made.',
  path: '/craftsmanship',
})

const stages = [
  {
    n: '01',
    title: 'Machined from solid',
    body: 'Each column is cut from a single billet on multi-axis CNC machines. There are no welds and no joints, because there is nothing to join. The structure is one piece, as strong on the day it is inherited as on the day it is struck.',
    image: { src: '/images/craftsmanship/machining.jpg', alt: 'CNC machining of a steel column, swarf and coolant' },
  },
  {
    n: '02',
    title: 'Polished by hand',
    body: 'The finish is not applied. It is revealed, by hand, across several days. Each grade of abrasive removes the marks of the one before, until the surface holds light the way it was drawn to. A machine could be quicker. It could not be this.',
    image: { src: '/images/craftsmanship/polishing.jpg', alt: 'Hand-polishing of a brass fitting' },
  },
  {
    n: '03',
    title: 'Inspected without mercy',
    body: 'Every instrument is measured against its drawing and judged against the hallmark. We reject more than we pass. The pieces that fail are not sold at a discount. They are returned to billet and begin again.',
    image: { src: '/images/craftsmanship/inspection.jpg', alt: 'Quality inspection with precision measuring tools' },
  },
]

export default function CraftsmanshipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Craftsmanship"
        title="Precision is a habit, not an event."
        intro="The instrument is the sum of forty operations, each held to the standard of the last. Here is how a block of metal becomes an heirloom."
      />

      <div className="divide-y divide-hairline">
        {stages.map((stage, i) => (
          <section key={stage.n} className="py-section">
            <Container>
              <div
                className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-16 ${
                  i % 2 === 1 ? '' : ''
                }`}
              >
                <Reveal
                  className={`${
                    i % 2 === 1 ? 'lg:order-2 lg:col-span-6 lg:col-start-7' : 'lg:col-span-6'
                  }`}
                >
                  <Media
                    asset={stage.image}
                    aspect="4 / 3"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </Reveal>
                <Reveal
                  delay={0.1}
                  className={`${
                    i % 2 === 1 ? 'lg:order-1 lg:col-span-5' : 'lg:col-span-5 lg:col-start-8'
                  }`}
                >
                  <p className="font-serif text-5xl font-light text-brass">{stage.n}</p>
                  <h2 className="mt-6 text-balance text-h2 font-light text-foreground">
                    {stage.title}
                  </h2>
                  <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground-muted">
                    {stage.body}
                  </p>
                </Reveal>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <Quote
        quote="We do not polish to hide the work. We polish to reveal it."
        attribution="The Workshop"
      />

      <section className="py-section">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow rule={false}>Tolerances</Eyebrow>
            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-hairline sm:grid-cols-3">
              {[
                { v: '0.02 mm', l: 'Machining tolerance' },
                { v: '40+', l: 'Operations per instrument' },
                { v: '100%', l: 'Inspected by hand' },
              ].map((stat) => (
                <div key={stat.l} className="bg-surface p-10">
                  <p className="font-serif text-4xl font-light text-foreground">{stat.v}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-foreground-faint">
                    {stat.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
