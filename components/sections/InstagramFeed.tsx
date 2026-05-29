import { Container } from '@/components/ui/Container'
import { Media } from '@/components/ui/Media'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { site } from '@/lib/site'

/**
 * Instagram feed placeholder. Swap the static tiles for the Instagram Basic
 * Display / Graph API when credentials are available; the grid stays the same.
 */
const tiles = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/instagram/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Smoke Connoisseur on Instagram, image ${i + 1}`,
}))

export function InstagramFeed() {
  return (
    <section className="border-t border-hairline bg-ink py-section">
      <Container>
        <div className="flex flex-col gap-6 text-center">
          <Reveal className="flex flex-col items-center gap-5">
            <Eyebrow rule={false}>From the Workshop</Eyebrow>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-serif text-3xl font-light text-ivory md:text-4xl"
            >
              {site.social.instagramHandle}
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {tiles.map((tile, i) => (
            <Reveal key={tile.src} as="div" delay={i * 0.05}>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${site.social.instagramHandle} on Instagram`}
                className="block focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brass"
              >
                <Media
                  asset={tile}
                  aspect="1 / 1"
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="transition-opacity duration-500 hover:opacity-80"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
