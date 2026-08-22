'use client';

import type { Goal } from '@/lib/types';

type Props = {
  tabs: Array<{ id: string; name: string; count: number }>;
  activeId: string;
  onChange: (id: string) => void;
};

export function CategoryTabs({ tabs, activeId, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="หมวดเป้าหมาย"
      className="flex flex-wrap items-stretch border-y border-hairline"
    >
      {tabs.map((t, i) => {
        const active = t.id === activeId;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={active}
            aria-controls={`panel-${t.id}`}
            id={`tab-${t.id}`}
            onClick={() => onChange(t.id)}
            className={`group relative flex items-baseline gap-5 px-6 md:px-10 py-6 md:py-8 flex-1 min-w-[200px] text-left border-r border-hairline last:border-r-0 transition-colors ${
              active ? 'bg-ink-2' : 'hover:bg-ink-2/60'
            }`}
          >
            <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-text/50 tabular">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex-1">
              <span
                className={`block font-display font-normal leading-none tracking-[-0.01em] transition-colors ${
                  active ? 'text-brass-hi' : 'text-text group-hover:text-brass-hi'
                }`}
                style={{ fontSize: 'clamp(22px, 2.4vw, 30px)' }}
              >
                {t.name}
              </span>
              <span className="mt-2.5 block font-mono text-[10px] tracking-[0.22em] uppercase text-text/50">
                {t.count} เป้าหมาย
              </span>
            </span>
            {active && (
              <span
                aria-hidden
                className="absolute inset-x-0 -top-px h-[2px] bg-brass"
                style={{ boxShadow: '0 0 14px rgba(233,180,76,0.7)' }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

export function buildTabsFromRoots(goals: Goal[], roots: Goal[]): Array<{ id: string; name: string; count: number }> {
  const countDescendants = (id: string): number => {
    const children = goals.filter((g) => g.parentId === id);
    if (children.length === 0) return 1;
    return children.reduce((sum, c) => sum + countDescendants(c.id), 0);
  };
  return roots.map((r) => ({ id: r.id, name: r.name, count: countDescendants(r.id) }));
}
