'use client';

import { useState, useMemo } from 'react';
import { useGoals } from '@/lib/store';
import { selectChildren, rollupRoots, rollup } from '@/lib/selectors';
import { MntnHero } from '@/components/MntnHero';
import { CategoryTabs, buildTabsFromRoots } from '@/components/CategoryTabs';
import { GoalSplit } from '@/components/GoalSplit';
import { SectionMarker } from '@/components/SectionMarker';
import { Rules } from '@/components/Rules';
import { Footer } from '@/components/Footer';
import { formatMoney } from '@/lib/format';

export default function OverviewPage() {
  const goals = useGoals((s) => s.goals);
  const roots = selectChildren(goals, null);
  const r = rollupRoots(goals);

  const tabs = useMemo(() => buildTabsFromRoots(goals, roots), [goals, roots]);
  const [activeTab, setActiveTab] = useState<string>(roots[0]?.id ?? '');

  const activeRoot = roots.find((g) => g.id === activeTab);
  const activeChildren = activeRoot ? selectChildren(goals, activeRoot.id) : [];
  const activeRollup = activeRoot
    ? rollup(goals, activeRoot.id)
    : { targetMin: 0, targetMax: 0, saved: 0, count: 0, monthlyIncome: 0 };
  const heroImage =
    activeRoot?.imageUrl ??
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80';

  return (
    <>
      {/* ── HERO ── */}
      <MntnHero
        heroImage={heroImage}
        targetMin={r.targetMin}
        targetMax={r.targetMax}
        saved={r.saved}
        goalCount={r.count}
      />

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <SectionMarker
          index="01"
          label="Portfolio"
          title="เป้าหมาย"
          emphasis="รายหมวด"
        />
        <p className="max-w-[54ch] text-[15px] leading-[1.75] text-text/70 font-light mb-12">
          แต่ละหมวดถูกจัดเป็น tree — ระดับบนคือหมวดหลัก (บ้าน / รถ / ธุรกิจ) แต่ละหมวดสามารถแตกย่อยได้เรื่อยๆ
          กดที่ tab เพื่อเลือกดูหมวดที่สนใจ
        </p>

        <CategoryTabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      </section>

      {/* ── ACTIVE CATEGORY META ── */}
      {activeRoot && (
        <div
          id={`panel-${activeRoot.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeRoot.id}`}
          className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14"
        >
          <div className="py-10 md:py-14 grid gap-8 md:grid-cols-[1.4fr_1fr] items-end border-b border-hairline">
            <div>
              {activeRoot.tagline && (
                <div className="gold-label mb-4">
                  <span>{activeRoot.tagline}</span>
                </div>
              )}
              <h3
                className="font-display font-normal m-0 text-text tracking-[-0.02em] leading-[1.02]"
                style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
              >
                {activeRoot.name}
                <span className="text-text/40 font-light">
                  {' '}— {activeChildren.length}
                </span>
              </h3>
            </div>
            <dl className="grid grid-cols-2 gap-8 font-mono text-[11px]">
              <div>
                <dt className="text-text/50 text-[10px] tracking-[0.22em] uppercase mb-2">
                  มูลค่ารวม
                </dt>
                <dd className="text-text tabular text-xl font-display font-light">
                  {activeRollup.targetMin === activeRollup.targetMax
                    ? formatMoney(activeRollup.targetMin, { compact: true })
                    : `${formatMoney(activeRollup.targetMin, { compact: true })}–${formatMoney(activeRollup.targetMax, { compact: true })}`}
                  <span className="text-text-dim text-[10px] tracking-[0.2em] ml-2">THB</span>
                </dd>
              </div>
              <div>
                <dt className="text-text/50 text-[10px] tracking-[0.22em] uppercase mb-2">
                  {activeRollup.monthlyIncome > 0 ? 'รายได้ / เดือน' : 'สถานะ'}
                </dt>
                <dd
                  className={`tabular text-xl font-display font-light ${
                    activeRollup.monthlyIncome > 0 ? 'text-market' : 'text-text'
                  }`}
                >
                  {activeRollup.monthlyIncome > 0
                    ? `${activeRollup.monthlyIncome.toLocaleString()} ฿`
                    : 'กำลังศึกษา'}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}

      {/* ── SPLIT PANELS ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        {activeChildren.length === 0 ? (
          <div className="py-24 text-center text-text/50 font-light">
            ยังไม่มีเป้าหมายในหมวดนี้
          </div>
        ) : (
          activeChildren.map((child, i) => (
            <GoalSplit
              key={child.id}
              goal={child}
              index={i}
              total={activeChildren.length}
              reverse={i % 2 === 1}
            />
          ))
        )}
      </div>

      {/* ── DISCIPLINE ── */}
      <section id="discipline" className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14">
        <SectionMarker index="02" label="Discipline" title="กฎที่" emphasis="ห้ามผิด" />
        <Rules />
      </section>

      <Footer />
    </>
  );
}
