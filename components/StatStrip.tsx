type Stat = {
  label: string;
  value: string;
  unit?: string;
  note?: string;
};

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 border-b border-hairline-soft">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`py-8 pr-6 ${
            i < stats.length - 1 ? 'md:border-r' : ''
          } ${i % 2 === 0 ? 'border-r md:border-r' : ''} border-hairline-soft`}
        >
          <div className="mb-2.5 font-mono text-[10px] tracking-[0.2em] uppercase text-text-dimmer">
            {s.label}
          </div>
          <div
            className="font-mono tabular font-medium text-text leading-tight tracking-[-0.01em]"
            style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}
          >
            {s.value}
            {s.unit && <span className="text-[0.55em] text-text-dim ml-1 font-normal">{s.unit}</span>}
          </div>
          {s.note && <div className="mt-2 text-xs text-text-dim font-light">{s.note}</div>}
        </div>
      ))}
    </section>
  );
}
