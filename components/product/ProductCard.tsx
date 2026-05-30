import Link from 'next/link'
import { Media } from '@/components/ui/Media'
import type { Product } from '@/types'

/**
 * Product card with a hover/focus reveal. Name and tagline are always present;
 * the summary, price note and "Discover" cue rise in on interaction. The whole
 * card is one link, and the reveal also triggers on keyboard focus.
 */
export function ProductCard({
  product,
  priority = false,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
}: {
  product: Product
  priority?: boolean
  sizes?: string
}) {
  return (
    <article className="group">
      <Link
        href={`/collection/${product.slug}`}
        className="block focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-brass"
      >
        <div className="relative overflow-hidden">
          <Media
            asset={product.gallery[0]}
            aspect="4 / 5"
            sizes={sizes}
            priority={priority}
            className="transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100"
          />
        </div>

        <div className="relative mt-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">
              {product.name}
            </h3>
            <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.2em] text-foreground-faint">
              {product.specifications.find((s) => s.label === 'Manufacture')?.value}
            </span>
          </div>
          <p className="mt-2 text-pretty text-sm text-foreground-muted">
            {product.tagline}
          </p>

          {/* Revealed on hover / focus */}
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-700 ease-luxe group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
            <div className="overflow-hidden">
              <p className="max-w-sm pt-4 text-pretty text-sm text-foreground-muted">
                {product.summary}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4">
                <span className="text-xs uppercase tracking-[0.16em] text-foreground-faint">
                  {product.priceNote}
                </span>
                <span className="text-[0.72rem] uppercase tracking-[0.2em] text-brass">
                  Discover
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
