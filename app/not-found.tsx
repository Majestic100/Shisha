import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow rule={false}>Error 404</Eyebrow>
          <h1 className="mt-8 text-balance text-h1 font-light text-foreground">
            This page was never machined.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-pretty text-foreground-muted">
            The page you sought does not exist. Everything that does is in the
            collection.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Button href="/" variant="solid">
              Return Home
            </Button>
            <Button href="/collection" variant="link">
              The Collection
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
