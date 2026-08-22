'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Goal } from '@/lib/types';
import { useGoals } from '@/lib/store';
import { rollup, selectChildren } from '@/lib/selectors';
import { PriceDisplay } from './PriceDisplay';
import { RefList } from './RefList';
import { StatusBadge } from './StatusBadge';

type Props = {
  goal: Goal;
  index: number;
  total: number;
  reverse?: boolean;
};

export function GoalSplit({ goal, index, total, reverse }: Props) {
  const goals = useGoals((s) => s.goals);
  const children = selectChildren(goals, goal.id);
  const hasChildren = children.length > 0;
  const r = rollup(goals, goal.id);

  const targetMin = goal.isRollup || hasChildren ? r.targetMin : goal.targetMin;
  const targetMax = goal.isRollup || hasChildren ? r.targetMax : goal.targetMax ?? goal.targetMin;

  const idx = String(index + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');

  return (
    <section className="relative py-20 md:py-32">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center ${
          reverse ? 'lg:[&>*:first-child]:col-start-7' : ''
        }`}
      >
        {/* ── content side ── */}
        <div
          className={`relative lg:col-span-6 ${
            reverse ? 'lg:col-start-1 lg:row-start-1' : ''
          }`}
        >
          {/* ghost number */}
          <div
            aria-hidden
            className="ghost-num select-none"
            style={{
              top: '-0.35em',
              left: reverse ? 'auto' : '-0.12em',
              right: reverse ? '-0.12em' : 'auto',
            }}
          >
            {idx}
          </div>

          <div className="relative z-10 max-w-[42ch]">
            <div className="gold-label mb-6">
              <span>{goal.tagline ?? 'เป้าหมาย'}</span>
            </div>

            <h2
              className="font-display font-normal text-text leading-[1.06] tracking-[-0.015em] m-0"
              style={{ fontSize: 'clamp(30px, 4vw, 52px)', textWrap: 'balance' }}
            >
              {goal.name}
            </h2>

            {goal.spec && (
              <p className="mt-6 text-[15px] leading-[1.75] text-text/75 font-light">
                {goal.spec}
              </p>
            )}
            {goal.note && (
              <p className="mt-3 text-[13px] leading-[1.65] text-text/55 font-light">
                {goal.note}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-3">
              <PriceDisplay
                min={targetMin}
                max={targetMax !== targetMin ? targetMax : undefined}
                size="md"
              />
              <StatusBadge status={goal.status} />
            </div>

            {goal.monthlyIncome ? (
              <div className="mt-5 font-mono text-[13px] text-market tabular">
                +{goal.monthlyIncome.toLocaleString()} ฿/เดือน
                <span className="text-text/50 ml-2">passive</span>
              </div>
            ) : null}

            {goal.refs && goal.refs.length > 0 && (
              <div className="mt-8">
                <RefList refs={goal.refs} />
              </div>
            )}

            <div className="mt-10">
              <Link href={`/g/${goal.id}`} className="read-more">
                ดูรายละเอียด
              </Link>
            </div>
          </div>
        </div>

        {/* ── image side ── */}
        <div
          className={`relative lg:col-span-5 ${
            reverse ? 'lg:col-start-2 lg:row-start-1' : 'lg:col-start-8'
          }`}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-panel">
            {goal.imageUrl ? (
              <Image
                src={goal.imageUrl}
                alt={goal.name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-text-dim font-display text-3xl">
                {goal.name}
              </div>
            )}

            {/* small index tag in the image corner */}
            <div className="absolute top-4 left-4 flex items-center gap-2.5 font-mono text-[10px] tracking-[0.22em] uppercase text-text bg-ink/70 backdrop-blur-sm px-3 py-1.5">
              <span className="tabular">{idx}</span>
              <span aria-hidden className="w-4 h-px bg-brass" />
              <span>{totalStr}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
