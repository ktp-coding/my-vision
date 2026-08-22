'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useGoals } from '@/lib/store';
import { selectById, selectChildren, selectBreadcrumb, rollup } from '@/lib/selectors';
import { TopNav } from '@/components/TopNav';
import { Breadcrumb } from '@/components/Breadcrumb';
import { GoalSplit } from '@/components/GoalSplit';
import { PriceDisplay } from '@/components/PriceDisplay';
import { RefList } from '@/components/RefList';
import { StatusBadge } from '@/components/StatusBadge';
import { ProgressBar } from '@/components/ProgressBar';
import { Footer } from '@/components/Footer';

export default function FocusPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const goals = useGoals((s) => s.goals);
  const goal = selectById(goals, id);
  const hydrated = useGoals((s) => s.hydrated);

  if (!hydrated) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 md:px-14 py-14">
        <div className="font-mono text-xs text-text/50 tracking-widest uppercase">Loading…</div>
      </div>
    );
  }
  if (!goal) return notFound();

  const children = selectChildren(goals, goal.id);
  const trail = selectBreadcrumb(goals, goal.id);
  const r = rollup(goals, goal.id);
  const hasChildren = children.length > 0;

  const targetMin = hasChildren ? r.targetMin : goal.targetMin;
  const targetMax = hasChildren ? r.targetMax : goal.targetMax ?? goal.targetMin;
  const displayTarget = Math.round((targetMin + targetMax) / 2);

  return (
    <>
      {/* ── FULL-BLEED HERO ── */}
      <section className="relative min-h-[80vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {goal.imageUrl ? (
            <Image
              src={goal.imageUrl}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover slow-zoom"
            />
          ) : (
            <div className="absolute inset-0 bg-panel" />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(13,34,49,0.55) 0%, rgba(13,34,49,0.25) 40%, rgba(13,34,49,0.95) 100%)',
            }}
          />
        </div>

        <TopNav overlay />

        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-14 pt-6">
          <Breadcrumb trail={trail} />
        </div>

        <div className="mt-auto max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-14 pb-14 md:pb-24 fade-up">
          <div className="gold-label mb-6">
            <span className="tabular">{String(trail.length).padStart(2, '0')}</span>
            <span>{goal.tagline ?? (trail.length === 1 ? 'หมวดหลัก' : `ระดับ ${trail.length}`)}</span>
          </div>
          <div className="mb-4">
            <StatusBadge status={goal.status} />
          </div>
          <h1
            className="font-display font-light m-0 text-text leading-[0.98] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(44px, 8vw, 120px)', textWrap: 'balance' }}
          >
            {goal.name}
          </h1>
          {goal.spec && (
            <p className="mt-6 text-base md:text-lg leading-[1.6] text-text/75 font-light max-w-[52ch]">
              {goal.spec}
            </p>
          )}
          {goal.note && (
            <p className="mt-2 text-sm text-text/55 font-light max-w-[52ch]">{goal.note}</p>
          )}
        </div>
      </section>

      {/* ── META STRIP ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-12 md:py-16 grid gap-10 md:grid-cols-[1.4fr_1fr] items-start border-b border-hairline">
        <div>
          {goal.refs && goal.refs.length > 0 && (
            <>
              <div className="gold-label mb-5">
                <span>แหล่งข้อมูล</span>
              </div>
              <RefList refs={goal.refs} />
            </>
          )}
        </div>
        <aside className="flex flex-col gap-6">
          {displayTarget > 0 && (
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-text/50 mb-3">
                มูลค่าเป้าหมาย
              </div>
              <PriceDisplay min={targetMin} max={targetMax !== targetMin ? targetMax : undefined} size="lg" />
              {hasChildren && (
                <div className="mt-2 font-mono text-[11px] text-text/60">
                  รวมจาก {children.length} เป้าหมายย่อย
                </div>
              )}
            </div>
          )}
          {displayTarget > 0 && (
            <div className="pt-5 border-t border-hairline-soft">
              <ProgressBar saved={r.saved} target={displayTarget} showTicks />
            </div>
          )}
          {goal.monthlyIncome ? (
            <div className="pt-5 border-t border-hairline-soft">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-text/50 mb-2">
                รายได้ต่อเดือน
              </div>
              <div className="font-display font-light text-3xl text-market tabular">
                {goal.monthlyIncome.toLocaleString()}{' '}
                <span className="text-xs text-text/60 tracking-widest">฿/เดือน</span>
              </div>
            </div>
          ) : null}
        </aside>
      </section>

      {/* ── CHILDREN ── */}
      {hasChildren && (
        <>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-16 md:pt-24 pb-6">
            <div className="gold-label mb-5">
              <span>Sub-goals</span>
              <span className="tabular">{String(children.length).padStart(2, '0')}</span>
            </div>
            <h2
              className="font-display font-normal text-text tracking-[-0.02em] leading-[1.02] m-0"
              style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}
            >
              เป้าหมาย <em className="italic text-brass-hi font-light">ย่อย</em>
            </h2>
          </div>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
            {children.map((child, i) => (
              <GoalSplit
                key={child.id}
                goal={child}
                index={i}
                total={children.length}
                reverse={i % 2 === 1}
              />
            ))}
          </div>
        </>
      )}

      {!hasChildren && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-16 text-center text-text/50 font-light">
          เป้าหมายนี้ยังไม่ถูกแบ่งย่อย
        </div>
      )}

      <Footer />
    </>
  );
}
