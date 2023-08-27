import { NODE_ENV } from '$env/static/private'

export function getCacheControl(maxAge = 30) {
  if (NODE_ENV === 'development') return 'no-cache';

  const sMaxAge = maxAge * 2;
  const staleWhileRevalidate = sMaxAge * 2;

  return `max-age=${maxAge}, s-max-age=${sMaxAge}, stale-while-revalidate=${staleWhileRevalidate}, stale-if-error=86400`;
}
