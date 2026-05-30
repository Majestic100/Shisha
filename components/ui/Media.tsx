'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BLUR } from '@/lib/blur'
import { cn } from '@/lib/utils'
import type { MediaAsset } from '@/types'

/**
 * next/image wrapper with a blur placeholder and a graceful empty state.
 *
 * Behind the image sits a machined-panel fallback. While a real photo loads,
 * the blur shows; if the file is absent (none shipped yet), onError hides the
 * broken element and the dark panel remains — so empty slots look intentional.
 * Drop photography into /public/images/... and it fades in automatically.
 */
export function Media({
  asset,
  fill = true,
  sizes = '100vw',
  priority = false,
  aspect,
  tone = 'light',
  className,
  imgClassName,
}: {
  asset: MediaAsset
  fill?: boolean
  sizes?: string
  priority?: boolean
  /** CSS aspect-ratio, e.g. "4 / 5". Ignored when the parent sets a height. */
  aspect?: string
  /** Placeholder panel tone. 'light' suits the white theme; 'dark' for hero use. */
  tone?: 'light' | 'dark'
  className?: string
  imgClassName?: string
}) {
  const [errored, setErrored] = useState(false)
  const dark = tone === 'dark'

  return (
    <div
      className={cn('relative overflow-hidden bg-surface-raised', className)}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {/* Machined-panel fallback: visible until/unless a real photo loads */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0',
          dark
            ? 'bg-[radial-gradient(120%_120%_at_30%_20%,#1b1714_0%,#0d0b09_55%,#070605_100%)]'
            : 'bg-[radial-gradient(120%_120%_at_30%_20%,#fafafa_0%,#efefee_55%,#e4e3e1_100%)]'
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(90deg,transparent,transparent_2px,#8A6A2F_2px,#8A6A2F_3px)]"
      />
      {!errored && (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill={fill}
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          blurDataURL={BLUR}
          onError={() => setErrored(true)}
          className={cn('object-cover', imgClassName)}
        />
      )}
    </div>
  )
}
