import Link from 'next/link';
import type { Goal } from '@/lib/types';

export function Breadcrumb({ trail }: { trail: Goal[] }) {
  return (
    <nav className="flex items-center gap-2 flex-wrap font-mono text-[11px] tracking-[0.14em] uppercase text-text-dim">
      <Link href="/" className="hover:text-brass-hi transition-colors no-underline text-inherit">
        เป้าหมายทั้งหมด
      </Link>
      {trail.map((g, i) => (
        <span key={g.id} className="flex items-center gap-2">
          <span aria-hidden className="text-text-dimmer">›</span>
          {i === trail.length - 1 ? (
            <span className="text-brass-hi normal-case tracking-wide">{g.name}</span>
          ) : (
            <Link
              href={`/g/${g.id}`}
              className="hover:text-brass-hi transition-colors no-underline text-inherit normal-case tracking-wide"
            >
              {g.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
