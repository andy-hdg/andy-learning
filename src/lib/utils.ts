/** Prefix a site-relative path with the configured base, e.g. "/andy-learning/". */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatMonth(date: Date): string {
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  return `${month}/${date.getUTCFullYear()}`;
}

export const byDateDesc = <T extends { data: { date: Date } }>(a: T, b: T) =>
  b.data.date.getTime() - a.data.date.getTime();
