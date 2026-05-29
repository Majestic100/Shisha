import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { PageHeader } from '@/components/sections/PageHeader'
import { ProductCard } from '@/components/product/ProductCard'
import { getAllProducts } from '@/lib/products'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'The Collection',
  description:
    'The complete collection of Smoke Connoisseur instruments. Each machined from solid metal in England and warranted for a lifetime.',
  path: '/collection',
})

export default function CollectionPage() {
  const products = getAllProducts()

  return (
    <>
      <PageHeader
        eyebrow="The Collection"
        title="Instruments, not products."
        intro="Each piece is machined from solid metal, finished by hand and warranted for a lifetime. None is made to be replaced."
      />

      <section className="py-section">
        <Container>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.slug} as="div" delay={(i % 3) * 0.08}>
                <ProductCard product={product} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
