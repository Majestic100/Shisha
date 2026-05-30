import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Lifetime Warranty',
  description:
    'The world’s first hookah warranted for a lifetime. Not a season, not a decade — a lifetime. Because the instrument was built to outlast the promise.',
  path: '/warranty',
})

const principles = [
  {
    title: 'It covers the instrument, for life',
    body: 'Every Smoke Connoisseur instrument is warranted against defect in material and workmanship for the lifetime of its owner. Not the first owner only. The owner.',
  },
  {
    title: 'It transfers with the piece',
    body: 'An heirloom that cannot be passed on is not an heirloom. The warranty travels with the instrument to whoever next holds it.',
  },
  {
    title: 'It is honoured in person',
    body: 'Should anything ever be wrong, we put it right at the works in England. No call centres. No scripts. The people who made it, mend it.',
  },
]

export default function WarrantyPage() {
  return (
    <>
      {/* Statement hero */}
      <section className="flex min-h-[80svh] items-center border-b border-hairline pt-32">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <Reveal className="flex flex-col items-center">
              <Eyebrow rule={false}>The Lifetime Warranty</Eyebrow>
              <h1 className="mt-10 text-balance font-serif text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[1.02] text-foreground">
                The world&rsquo;s longest warranty on the world&rsquo;s first
                engineered hookah.
              </h1>
              <p className="mt-10 max-w-2xl text-pretty text-lg text-foreground-muted">
                Not a season. Not a decade. A lifetime. We can make the promise
                because we built the instrument to keep it.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-section">
        <Container>
          <div className="grid gap-px overflow-hidden border border-hairline md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="div" key={p.title} delay={i * 0.08} className="bg-surface p-10 md:p-12">
                <p className="font-serif text-4xl font-light text-brass">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-8 font-serif text-2xl font-light text-foreground">
                  {p.title}
                </h2>
                <p className="mt-4 text-pretty text-foreground-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why we can offer it */}
      <section className="border-t border-hairline bg-surface-raised py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Why We Can Offer It</Eyebrow>
              <h2 className="mt-6 text-balance text-h2 font-light text-foreground">
                A warranty is a confession of how something was made.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-6 text-pretty text-lg leading-relaxed text-foreground-muted">
                <p>
                  Most warranties are bets, priced so the maker wins. Ours is not
                  a bet. It is a description. There are no welds to fail, no
                  grommets to perish and no plating to wear through, because the
                  instrument has none of these.
                </p>
                <p>
                  Machined from solid metal and finished by hand, there is
                  simply very little that can go wrong. The lifetime warranty is
                  not generosity. It is arithmetic.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/collection" variant="outline" size="lg">
                  Explore the Collection
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
