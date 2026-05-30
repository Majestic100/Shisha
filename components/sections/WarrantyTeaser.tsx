import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

/**
 * Lifetime warranty teaser. A single, confident statement.
 */
export function WarrantyTeaser() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Eyebrow rule={false}>The Lifetime Warranty</Eyebrow>
          <p className="mt-8 text-balance font-serif text-4xl font-light leading-[1.1] text-foreground md:text-6xl">
            The world&rsquo;s first hookah warranted for a lifetime.
          </p>
          <p className="mt-8 max-w-xl text-pretty text-foreground-muted">
            Not a season. Not a decade. A lifetime. We can offer it because we
            built the instrument to outlast the promise.
          </p>
          <div className="mt-10">
            <Button href="/warranty" variant="outline" size="lg">
              The Warranty
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
