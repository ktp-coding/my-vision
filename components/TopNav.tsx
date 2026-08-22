'use client';

import Link from 'next/link';

type Props = {
  overlay?: boolean;
};

export function TopNav({ overlay = false }: Props) {
  return (
    <header
      className={`${
        overlay ? 'absolute top-0 left-0 right-0 z-30' : 'relative'
      } px-6 md:px-10 lg:px-14 py-6 md:py-8`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 no-underline text-inherit">
          <span
            aria-hidden
            className="w-2 h-2 bg-brass rotate-45"
            style={{ boxShadow: '0 0 10px rgba(233, 180, 76, 0.6)' }}
          />
          <span className="font-display text-lg tracking-[0.32em] text-text uppercase">
            MYVSN
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-sans text-[13px] text-text/90">
          <Link href="/#portfolio" className="hover:text-brass-hi transition-colors no-underline text-inherit">
            Portfolio
          </Link>
          <Link href="/#discipline" className="hover:text-brass-hi transition-colors no-underline text-inherit">
            Discipline
          </Link>
          <Link href="/#journal" className="hover:text-brass-hi transition-colors no-underline text-inherit">
            Journal
          </Link>
        </nav>

        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-text/80">
          <span aria-hidden className="w-2 h-2 rounded-full bg-market" style={{ boxShadow: '0 0 8px var(--market)' }} />
          <span>Live</span>
        </div>
      </div>
    </header>
  );
}
