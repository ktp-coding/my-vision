import type { GoalRef } from '@/lib/types';
import { displayHost, stripUtm } from '@/lib/format';

const KIND_GLYPH: Record<NonNullable<GoalRef['kind']>, string> = {
  product: '◇',
  video: '▶',
  article: '¶',
  map: '⚑',
};

export function RefList({ refs }: { refs?: GoalRef[] }) {
  if (!refs?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {refs.map((r) => {
        const url = stripUtm(r.url);
        return (
          <a
            key={r.url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-2.5 py-1 border border-hairline hover:border-brass/50 text-text-dim hover:text-brass-hi transition-colors no-underline"
          >
            <span aria-hidden className="text-brass text-xs">
              {KIND_GLYPH[r.kind ?? 'product']}
            </span>
            <span className="font-mono text-[11px] tracking-wide">
              {r.label ?? displayHost(url)}
            </span>
          </a>
        );
      })}
    </div>
  );
}
