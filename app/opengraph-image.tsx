import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.name} — ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Generated Open Graph image. Brand-coloured, type-led, no photography needed.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            color: '#8A6A2F',
            fontSize: 24,
            letterSpacing: 6,
            textTransform: 'uppercase',
          }}
        >
          <div style={{ width: 56, height: 2, backgroundColor: '#8A6A2F' }} />
          {site.tagline}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: '#15120D',
          }}
        >
          <div style={{ fontSize: 88, lineHeight: 1.05, maxWidth: 940 }}>
            The first hookah, engineered in England.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(21,18,13,0.18)',
            paddingTop: '32px',
            color: '#15120D',
            fontSize: 30,
            letterSpacing: 8,
            textTransform: 'uppercase',
          }}
        >
          <span>Smoke Connoisseur</span>
          <span style={{ color: '#8A6A2F', fontSize: 22, letterSpacing: 4 }}>
            Made in England
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
