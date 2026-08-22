import Link from 'next/link';

export function Header({ date }: { date: string }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-hairline-soft">
      <Link href="/" className="flex items-center gap-3 no-underline text-inherit">
        <span
          aria-hidden
          className="w-2.5 h-2.5 bg-brass rotate-45"
          style={{ boxShadow: '0 0 12px rgba(200, 155, 74, 0.5)' }}
        />
        <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-text-dim">
          The Trader&apos;s Plan
        </span>
      </Link>
      <div className="flex gap-7 font-mono text-[11px] tracking-[0.12em] uppercase text-text-dimmer">
        <span>
          วันที่ <b className="ml-2 text-text-dim font-medium">{date}</b>
        </span>
      </div>
    </header>
  );
}
