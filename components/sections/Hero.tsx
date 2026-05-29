import { Media } from '@/components/ui/Media'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'

/**
 * Fullscreen opening statement. A single product shot against off-black, one
 * line of copy, one call to action. The image carries `priority` for LCP.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Media
        asset={{
          src: '/images/hero.jpg',
          alt: 'A Smoke Connoisseur hookah in close detail against an off-black ground',
        }}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
      />
      {/* Legibility wash — no neon, no colour. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20"
      />

      <div className="container-page relative z-10 pb-20 md:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow>Engineered for Legacy</Eyebrow>
          <h1 className="mt-7 text-balance text-display font-light text-ivory">
            The first hookah, engineered in England.
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-base text-ivory-muted md:text-lg">
            Machined from solid metal by the engineers behind Britain&rsquo;s
            finest motor cars. Built once, to be kept for a lifetime.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button href="/collection" variant="solid" size="lg">
              Explore the Collection
            </Button>
            <Button href="/heritage" variant="link">
              The Heritage
            </Button>
          </div>
        </div>
      </div>

      <span
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory-faint md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-scroll-cue bg-ivory-faint" />
      </span>
    </section>
  )
}
