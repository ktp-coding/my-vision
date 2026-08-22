'use client';

type ProgressProps = {
  items: Array<{ id: string; label: string }>;
  activeId?: string;
  onSelect?: (id: string) => void;
};

export function LeftRail() {
  const today = new Date();
  const yy = String(today.getFullYear()).slice(-2);
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');

  return (
    <aside
      className="hidden lg:flex fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-6 font-mono text-[10px] tracking-[0.24em] uppercase text-text/70"
      aria-label="meta rail"
    >
      <span
        className="rotate-180 whitespace-nowrap"
        style={{ writingMode: 'vertical-rl' }}
      >
        Trader&apos;s Log · {yy}.{mm}.{dd}
      </span>
      <span aria-hidden className="w-px h-12 bg-brass/60" />
    </aside>
  );
}

export function RightRail({ items, activeId, onSelect }: ProgressProps) {
  return (
    <aside
      className="hidden lg:flex fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-20 flex-col items-end gap-4 font-mono text-[10px] tracking-[0.22em] uppercase text-text/60"
      aria-label="section progress"
    >
      {items.map((it, i) => {
        const active = it.id === activeId;
        return (
          <button
            key={it.id}
            onClick={() => onSelect?.(it.id)}
            className={`group flex items-center gap-3 no-underline transition-colors ${
              active ? 'text-brass-hi' : 'hover:text-text'
            }`}
          >
            <span className="tabular">{String(i + 1).padStart(2, '0')}</span>
            <span
              aria-hidden
              className={`h-px transition-all ${
                active ? 'w-10 bg-brass-hi' : 'w-5 bg-text/40 group-hover:w-8 group-hover:bg-text'
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
}
