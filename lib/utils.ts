/**
 * Tiny class-name joiner. Avoids an external dependency for a one-line need.
 * Filters out falsy values so conditional classes read cleanly.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format an ISO date as a restrained British long-form date, e.g. "29 May 2026".
 */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
