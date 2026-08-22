'use client';

import Link from 'next/link';
import type { Goal } from '@/lib/types';
import { useGoals } from '@/lib/store';
import { rollup, selectChildren } from '@/lib/selectors';
import { PriceDisplay } from './PriceDisplay';
import { RefList } from './RefList';
import { StatusBadge } from './StatusBadge';
import { ProgressBar } from './ProgressBar';

type Props = {
  goal: Goal;
  index?: number;
  total?: number;
};

export function GoalCard({ goal, index, total }: Props) {
  const goals = useGoals((s) => s.goals);
  const children = selectChildren(goals, goal.id);
  const hasChildren = children.length > 0;
  const r = rollup(goals, goal.id);

  const targetMin = goal.isRollup || hasChildren ? r.targetMin : goal.targetMin;
  const targetMax = goal.isRollup || hasChildren ? r.targetMax : goal.targetMax ?? goal.targetMin;
  const displayTarget = Math.round((targetMin + targetMax) / 2);

  return (
    <Link
      href={`/g/${goal.id}`}
      className="group block bg-ink hover:bg-ink-2 transition-colors p-7 md:p-10 no-underline text-inherit"
    >
      <div className="flex justify-between items-start gap-4 mb-1">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-text-dim flex items-center gap-2.5">
            <span aria-hidden className="text-brass">
              ◇
            </span>
            {goal.category ? categoryLabel(goal.category) : 'เป้าหมาย'}
          </span>
          <StatusBadge status={goal.status} />
        </div>
        {index !== undefined && total !== undefined && (
          <div className="font-mono text-[11px] text-text-dimmer tracking-wide tabular">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
        )}
      </div>

      <h3
        className="font-serif font-normal text-text leading-[1.15] tracking-[-0.005em] mt-2 mb-2"
        style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', textWrap: 'balance' }}
      >
        {goal.name}
      </h3>

      {goal.spec && (
        <p className="text-[13.5px] leading-[1.65] text-text-dim font-light max-w-[42ch] mb-1">
          {goal.spec}
        </p>
      )}
      {goal.note && (
        <p className="text-[13px] leading-[1.65] text-text-dimmer font-light max-w-[42ch]">
          {goal.note}
        </p>
      )}

      <div className="mt-5 pt-5 border-t border-hairline-soft">
        <PriceDisplay min={targetMin} max={targetMax !== targetMin ? targetMax : undefined} />
      </div>

      {displayTarget > 0 && (
        <div className="mt-5">
          <ProgressBar saved={r.saved} target={displayTarget} showTicks={false} />
        </div>
      )}

      {goal.refs && goal.refs.length > 0 && (
        <div className="mt-5">
          <RefList refs={goal.refs} />
        </div>
      )}

      <div className="mt-6 pt-5 border-t border-hairline-soft grid grid-cols-2 gap-5">
        <FootCell k={hasChildren ? 'เป้าหมายย่อย' : 'สถานะ'} v={hasChildren ? `${children.length} รายการ` : statusLabel(goal.status)} />
        {goal.monthlyIncome ? (
          <FootCell k="รายได้ / เดือน" v={`${goal.monthlyIncome.toLocaleString()}`} note="฿" tone="market" />
        ) : (
          <FootCell k="เก็บแล้ว" v={r.saved > 0 ? r.saved.toLocaleString() : '—'} note={r.saved > 0 ? '฿' : ''} />
        )}
      </div>
    </Link>
  );
}

function FootCell({ k, v, note, tone }: { k: string; v: string; note?: string; tone?: 'market' }) {
  return (
    <div>
      <div className="mb-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-text-dimmer">
        {k}
      </div>
      <div
        className={`font-mono tabular text-sm font-medium tracking-tight ${
          tone === 'market' ? 'text-market' : 'text-text'
        }`}
      >
        {v}
        {note && <small className="ml-1 font-sans font-light text-text-dim text-[11px] tracking-normal">{note}</small>}
      </div>
    </div>
  );
}

function categoryLabel(c: NonNullable<Goal['category']>): string {
  const map: Record<NonNullable<Goal['category']>, string> = {
    shelter: 'ที่พัก · Shelter',
    motion: 'ยานพาหนะ · Motion',
    business: 'ธุรกิจ · Legacy',
    income: 'รายได้ · Cashflow',
    custom: 'อื่นๆ · Custom',
  };
  return map[c];
}

function statusLabel(s: Goal['status']): string {
  const map: Record<Goal['status'], string> = {
    idea: 'ไอเดีย',
    researching: 'กำลังศึกษา',
    shortlisted: 'ตัวเลือกหลัก',
    committed: 'ตัดสินใจแล้ว',
    acquired: 'ได้แล้ว',
  };
  return map[s];
}
