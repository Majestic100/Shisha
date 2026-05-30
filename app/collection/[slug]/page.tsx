import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { JsonLd } from '@/components/ui/JsonLd'
import { ProductGallery } from '@/components/product/ProductGallery'
import { SpecTable } from '@/components/product/SpecTable'
import { getAllProducts, getProductBySlug } from '@/lib/products'
import { buildMetadata, productSchema } from '@/lib/seo'

type Params = { params: { slug: string } }

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return buildMetadata({
    title: product.name,
    description: product.summary,
    path: `/collection/${product.slug}`,
  })
}

export default function ProductPage({ params }: Params) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <>
      <JsonLd data={productSchema(product)} />

      <Container className="pt-32 md:pt-40">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.16em] text-foreground-faint">
            <Link href="/collection" className="link-underline hover:text-foreground">
              The Collection
            </Link>
            <span className="mx-3 text-foreground-faint">/</span>
            <span className="text-foreground/80">{product.name}</span>
          </nav>
        </Reveal>
      </Container>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Gallery */}
            <Reveal className="lg:col-span-7">
              <ProductGallery images={product.gallery} name={product.name} />
            </Reveal>

            {/* Detail */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <Eyebrow>The {product.name}</Eyebrow>
                <h1 className="mt-6 text-balance text-h1 font-light text-foreground">
                  {product.name}
                </h1>
                <p className="mt-4 font-serif text-2xl font-light italic text-brass">
                  {product.tagline}
                </p>
                <p className="mt-7 text-pretty text-foreground-muted">{product.summary}</p>

                <div className="mt-9 flex flex-wrap items-center gap-6 border-t border-hairline pt-7">
                  <span className="text-sm uppercase tracking-[0.16em] text-foreground">
                    {product.priceNote}
                  </span>
                </div>
                <div className="mt-7 flex flex-wrap gap-5">
                  <Button href="/contact" variant="solid" size="lg">
                    Acquire
                  </Button>
                  <Button href="/warranty" variant="link">
                    Lifetime Warranty
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="border-t border-hairline bg-surface-raised py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow>The Name</Eyebrow>
              <h2 className="mt-6 text-balance text-h2 font-light text-foreground">
                The story behind {product.name}.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="text-pretty text-lg leading-relaxed text-foreground-muted">
                {product.story}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Specifications + engineered details */}
      <section className="py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Specifications</Eyebrow>
              <h2 className="mt-6 text-balance text-h3 font-light text-foreground">
                Measured, not described.
              </h2>
              <div className="mt-8">
                <SpecTable specifications={product.specifications} />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <Eyebrow>Engineered Details</Eyebrow>
              <div className="mt-8">
                <Accordion items={product.details} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
