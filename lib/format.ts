export function formatMoney(n: number, opts?: { compact?: boolean }): string {
  if (opts?.compact) {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
    return n.toString();
  }
  return n.toLocaleString('en-US');
}

export function formatRange(min: number, max: number | undefined, compact = false): string {
  if (max === undefined || max === min) return formatMoney(min, { compact });
  return `${formatMoney(min, { compact })} – ${formatMoney(max, { compact })}`;
}

export function stripUtm(rawUrl: string): string {
  try {
    const u = new URL(rawUrl);
    const skip = new Set([
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_content',
      'utm_term', 'gad_source', 'gclid', 'fbclid',
    ]);
    for (const key of Array.from(u.searchParams.keys())) {
      if (skip.has(key)) u.searchParams.delete(key);
    }
    return u.toString();
  } catch {
    return rawUrl;
  }
}

export function displayHost(rawUrl: string): string {
  try {
    const u = new URL(rawUrl);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return rawUrl;
  }
}

export function faviconUrl(rawUrl: string): string {
  try {
    const u = new URL(rawUrl);
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=32`;
  } catch {
    return '';
  }
}
