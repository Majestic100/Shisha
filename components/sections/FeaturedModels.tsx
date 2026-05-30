import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/product/ProductCard'
import { getFeaturedProducts } from '@/lib/products'

/**
 * Three featured instruments in an asymmetric grid: the second card is offset
 * downward on large screens for a magazine rhythm.
 */
export function FeaturedModels() {
  const featured = getFeaturedProducts().slice(0, 3)

  return (
    <section className="bg-surface py-section">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The Collection"
            title="Three instruments, each a standard."
            className="max-w-2xl"
          />
          <Reveal>
            <Button href="/collection" variant="link">
              View all instruments
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, i) => (
            <Reveal
              key={product.slug}
              as="div"
              delay={i * 0.08}
              className={i === 1 ? 'lg:mt-24' : undefined}
            >
              <ProductCard product={product} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
