/**
 * Renders structured data as a JSON-LD script tag. Server component.
 * The payload is serialised once; do not pass user input here.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
