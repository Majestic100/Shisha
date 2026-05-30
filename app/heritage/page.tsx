import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Media } from '@/components/ui/Media'
import { PageHeader } from '@/components/sections/PageHeader'
import { Quote } from '@/components/sections/Quote'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Heritage',
  description:
    'The engineers behind Smoke Connoisseur build for Aston Martin, Rolls-Royce, McLaren and the Royal Air Force. The making, the workshop, the county.',
  path: '/heritage',
})

export default function HeritagePage() {
  return (
    <>
      <PageHeader
        eyebrow="Heritage"
        title="Skill does not arrive. It accumulates."
        intro="The English Midlands have made precision for two centuries. We did not bring the craft here. We were drawn to where it already was."
      />

      {/* Lead image, monochrome */}
      <section className="py-section">
        <Container>
          <Reveal>
            <Media
              asset={{
                src: '/images/heritage/works.jpg',
                alt: 'The works in the Warwickshire countryside, black and white',
              }}
              aspect="16 / 9"
              sizes="(min-width: 1024px) 80vw, 100vw"
              imgClassName="grayscale"
            />
          </Reveal>
        </Container>
      </section>

      {/* Long-form: the engineers */}
      <section className="pb-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <Eyebrow>The Engineers</Eyebrow>
              <h2 className="mt-6 text-balance text-h2 font-light text-foreground">
                The hands that build supercars.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-6 text-pretty text-lg leading-relaxed text-foreground-muted">
                <p>
                  Our instruments are machined by engineers whose other work
                  carries names you already know. Components for Aston Martin.
                  Parts for Rolls-Royce and McLaren. Assemblies bound for the
                  Royal Air Force. The discipline these demand is not something
                  one switches off between projects.
                </p>
                <p>
                  A tolerance of two hundredths of a millimetre is not a
                  marketing figure to them. It is a Tuesday. When they turned
                  that habit toward a hookah, the result was inevitable: an
                  instrument with no welds, no grommets and no compromises, drawn
                  to the standard of the machines they spend their lives on.
                </p>
                <p>
                  We do not name them individually. They would not wish it. The
                  work speaks plainly enough on their behalf.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Quote
        quote="The hand that machines to aerospace tolerance does not forget how on a Friday afternoon."
        attribution="On the workshop"
      />

      {/* The cabinetmaker */}
      <section className="py-section">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="order-2 lg:order-1 lg:col-span-6">
              <Eyebrow>The Cabinetmaker</Eyebrow>
              <h2 className="mt-6 text-balance text-h2 font-light text-foreground">
                A craftsman who once furnished a Queen.
              </h2>
              <div className="mt-7 space-y-6 text-pretty text-lg leading-relaxed text-foreground-muted">
                <p>
                  Among those who shape the house is a cabinetmaker who built
                  furniture for Her Majesty Queen Elizabeth II. His joinery does
                  not appear in the instrument itself, but it governs how each
                  one is cased, cradled and presented.
                </p>
                <p>
                  Craft, we have learned, transfers between materials more
                  readily than it transfers between people. Wood taught us about
                  metal. A Queen&rsquo;s furniture taught us how an heirloom
                  should be handed over.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
              <Media
                asset={{
                  src: '/images/heritage/cabinetmaker.jpg',
                  alt: 'The cabinetmaker at his bench, black and white',
                }}
                aspect="4 / 5"
                sizes="(min-width: 1024px) 40vw, 100vw"
                imgClassName="grayscale"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The process, in brief */}
      <section className="border-t border-hairline bg-surface-raised py-section">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>From Block to Heirloom</Eyebrow>
            <h2 className="mt-6 text-balance text-h2 font-light text-foreground">
              Four weeks. Forty operations. No shortcuts.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-hairline sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', t: 'The Billet', d: 'Certified 316L stainless or grade 5 titanium, traceable to source.' },
              { n: '02', t: 'Machining', d: 'Cut from a single block to hundredths of a millimetre.' },
              { n: '03', t: 'Finishing', d: 'Polished by hand across several days, one grade at a time.' },
              { n: '04', t: 'The Hallmark', d: 'Struck by hand. The lifetime warranty begins here.' },
            ].map((step, i) => (
              <Reveal
                as="div"
                key={step.n}
                delay={i * 0.08}
                className="bg-surface p-8 md:p-10"
              >
                <p className="font-serif text-4xl font-light text-brass">{step.n}</p>
                <h3 className="mt-6 font-serif text-2xl font-light text-foreground">
                  {step.t}
                </h3>
                <p className="mt-3 text-pretty text-sm text-foreground-muted">{step.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
