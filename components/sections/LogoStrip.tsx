import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

const makers = ['Aston Martin', 'Rolls-Royce', 'McLaren', 'Royal Air Force']

/**
 * Provenance strip. Wordmarks are rendered as type rather than logos to avoid
 * misrepresenting third-party trademarks; the claim is association of makers,
 * not endorsement.
 */
export function LogoStrip() {
  return (
    <section className="border-y border-hairline bg-surface-raised">
      <Container className="py-14 md:py-16">
        <Reveal className="flex flex-col items-center gap-10 text-center">
          <p className="eyebrow text-foreground-faint">
            Made by the makers of
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
            {makers.map((maker) => (
              <li
                key={maker}
                className="font-serif text-xl font-light tracking-wide text-foreground/75 md:text-2xl"
              >
                {maker}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
