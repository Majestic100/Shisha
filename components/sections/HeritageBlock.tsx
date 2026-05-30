import { Container } from '@/components/ui/Container'
import { Media } from '@/components/ui/Media'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

/**
 * Heritage teaser for the home page. Asymmetric 5/7 split, image left.
 */
export function HeritageBlock() {
  return (
    <section className="border-t border-hairline bg-surface-raised py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Media
              asset={{
                src: '/images/heritage/workshop.jpg',
                alt: 'The workshop in black and white, an engineer at the lathe',
              }}
              aspect="4 / 5"
              sizes="(min-width: 1024px) 40vw, 100vw"
              imgClassName="grayscale"
            />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <Eyebrow>The Hands Behind It</Eyebrow>
            <h2 className="mt-7 text-balance text-h2 font-light text-foreground">
              Built by engineers. Finished by a craftsman who furnished a Queen.
            </h2>
            <div className="mt-7 space-y-5 text-pretty text-foreground-muted">
              <p>
                Our instruments are machined in Coventry by engineers who spend
                their other hours on Aston Martin, Rolls-Royce and Bentley, and
                on one of the world&rsquo;s most revered British marques. The
                tolerances they keep there, they keep here.
              </p>
              <p>
                The cases are informed by a cabinetmaker who once built
                furniture for Her Majesty Queen Elizabeth II. Craft transfers
                between materials. So does standard.
              </p>
            </div>
            <div className="mt-9">
              <Button href="/heritage" variant="outline">
                Read the Heritage
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
