import { formatMoney } from '@/lib/format';

type Props = {
  min: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
};

const SIZES = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl md:text-5xl',
};

export function PriceDisplay({ min, max, size = 'lg' }: Props) {
  const showRange = max !== undefined && max !== min;
  return (
    <div className="flex items-baseline gap-3 font-mono tabular text-text tracking-[-0.02em] leading-none">
      <span className={`${SIZES[size]} font-medium`}>
        {showRange ? (
          <>
            {formatMoney(min)}
            <span className="text-text-dim mx-1.5 font-light">–</span>
            {formatMoney(max!)}
          </>
        ) : (
          formatMoney(min)
        )}
      </span>
      <span className="text-[11px] tracking-[0.16em] uppercase text-text-dim">THB</span>
    </div>
  );
}
