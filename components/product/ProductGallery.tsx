'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Media } from '@/components/ui/Media'
import { cn } from '@/lib/utils'
import type { MediaAsset } from '@/types'

/**
 * Product gallery with custom controls: a large stage, previous/next buttons,
 * a numeric counter and a thumbnail rail. Keyboard accessible — arrow keys
 * move between frames when the stage is focused.
 */
export function ProductGallery({ images, name }: { images: MediaAsset[]; name: string }) {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()
  const count = images.length

  const go = (next: number) => setIndex((next + count) % count)

  if (count === 0) return null

  return (
    <div className="flex flex-col gap-4">
      <div
        className="group relative"
        role="group"
        aria-roledescription="carousel"
        aria-label={`${name} gallery`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault()
            go(index + 1)
          }
          if (e.key === 'ArrowLeft') {
            e.preventDefault()
            go(index - 1)
          }
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Media
              asset={images[index]}
              aspect="4 / 5"
              priority={index === 0}
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-hairline bg-ink/50 text-ivory backdrop-blur-sm transition-colors duration-300 hover:border-brass hover:text-brass"
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next image"
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-hairline bg-ink/50 text-ivory backdrop-blur-sm transition-colors duration-300 hover:border-brass hover:text-brass"
            >
              <Arrow direction="right" />
            </button>
            <div className="absolute bottom-4 right-4 bg-ink/60 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-ivory backdrop-blur-sm">
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <ul className="grid grid-cols-4 gap-3" aria-label="Gallery thumbnails">
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View image ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={cn(
                  'block w-full transition-opacity duration-300',
                  i === index
                    ? 'opacity-100 ring-1 ring-brass'
                    : 'opacity-50 hover:opacity-90'
                )}
              >
                <Media asset={image} aspect="1 / 1" sizes="20vw" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={direction === 'left' ? 'rotate-180' : undefined}
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
