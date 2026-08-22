type Props = {
  saved: number;
  target: number;
  showTicks?: boolean;
};

export function ProgressBar({ saved, target, showTicks = true }: Props) {
  const pct = target > 0 ? Math.min((saved / target) * 100, 100) : 0;
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex justify-between font-mono text-[11px] tracking-wide text-text-dim tabular">
        <span>
          สะสมแล้ว {saved.toLocaleString()} ฿
        </span>
        <span className="text-brass-hi font-medium">{pct.toFixed(1)}%</span>
      </div>
      <div className="relative h-[3px] bg-hairline overflow-hidden">
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, var(--brass) 0%, var(--brass-hi) 100%)',
            boxShadow: '0 0 12px rgba(232, 192, 121, 0.4)',
          }}
        />
      </div>
      {showTicks && (
        <div className="flex justify-between">
          {Array.from({ length: 11 }).map((_, i) => (
            <span key={i} className="w-px h-1 bg-hairline" />
          ))}
        </div>
      )}
    </div>
  );
}
