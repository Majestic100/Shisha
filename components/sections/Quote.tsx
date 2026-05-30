import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Large serif pull-quote / testimonial block.
 */
export function Quote({
  quote,
  attribution,
  bordered = true,
}: {
  quote: string
  attribution?: string
  bordered?: boolean
}) {
  return (
    <section className={bordered ? 'border-y border-hairline bg-surface-raised py-section' : 'py-section'}>
      <Container>
        <Reveal>
          <figure className="mx-auto max-w-4xl text-center">
            <blockquote className="text-balance font-serif text-3xl font-light italic leading-[1.25] text-foreground md:text-5xl">
              <span aria-hidden className="text-brass">&ldquo;</span>
              {quote}
              <span aria-hidden className="text-brass">&rdquo;</span>
            </blockquote>
            {attribution && (
              <figcaption className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground-faint">
                {attribution}
              </figcaption>
            )}
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}
