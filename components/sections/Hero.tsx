import Image from 'next/image'
import { BLUR } from '@/lib/blur'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'

/**
 * Opening statement. Asymmetric split: the statement sits on an off-black band
 * to the left, the portrait product photograph fills the right. On mobile the
 * image stacks beneath the copy. The dark band is a fixed always-dark context,
 * so text colours are hard-set rather than themed.
 */
export function Hero() {
  return (
    <section className="relative grid min-h-[100svh] grid-cols-1 bg-ink lg:grid-cols-2">
      {/* Copy */}
      <div className="order-2 flex items-center lg:order-1">
        <div className="container-page py-20 lg:py-0 lg:pr-10">
          <div className="max-w-xl animate-fade-up pt-8 lg:pt-32">
            <Eyebrow>Engineered for Legacy</Eyebrow>
            <h1 className="mt-7 text-balance text-display font-light text-ivory">
              The first hookah, engineered in England.
            </h1>
            <p className="mt-7 max-w-md text-pretty text-base text-ivory/70 md:text-lg">
              Machined from solid metal by the engineers behind Britain&rsquo;s
              finest motor cars. Built once, to be kept for a lifetime.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button href="/collection" variant="solid" size="lg">
                Explore the Collection
              </Button>
              <Button href="/heritage" variant="heroLink">
                The Heritage
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product photograph */}
      <div className="relative order-1 min-h-[52svh] overflow-hidden bg-ink-raised lg:order-2 lg:min-h-full">
        <Image
          src="/images/hero.jpg"
          alt="A Smoke Connoisseur hookah in close detail against an off-black ground"
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
        {/* Soft seam so the image meets the copy band without a hard edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-ink to-transparent lg:block"
        />
      </div>

      <span
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/40 lg:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-scroll-cue bg-ivory/40" />
      </span>
    </section>
  )
}
