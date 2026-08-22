import Image from 'next/image';
import { TopNav } from './TopNav';
import { formatMoney } from '@/lib/format';

type Props = {
  heroImage: string;
  targetMin: number;
  targetMax: number;
  saved: number;
  goalCount: number;
};

export function MntnHero({ heroImage, targetMin, targetMax, saved, goalCount }: Props) {
  const target = Math.round((targetMin + targetMax) / 2);
  const pct = target > 0 ? ((saved / target) * 100).toFixed(1) : '0.0';

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* full-bleed backdrop */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover slow-zoom"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,34,49,0.55) 0%, rgba(13,34,49,0.15) 40%, rgba(13,34,49,0.9) 100%)',
          }}
        />
      </div>

      <TopNav overlay />

      {/* centered hero text */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 fade-up">
        <div className="gold-label mb-6 md:mb-8">
          <span>บันทึกเป้าหมายส่วนตัว</span>
          <span aria-hidden className="w-10 h-px bg-brass" />
        </div>

        <h1
          className="font-display font-light m-0 text-text leading-[1.02] tracking-[-0.015em] max-w-[16ch]"
          style={{ fontSize: 'clamp(48px, 8vw, 108px)', textWrap: 'balance' }}
        >
          เทรดเพื่อชีวิต
          <br />
          <em className="italic font-light text-brass-hi">ที่ออกแบบเอง</em>
        </h1>

        <p className="mt-8 md:mt-10 max-w-[46ch] text-[15px] md:text-base leading-[1.7] text-text/75 font-light">
          ทุกไม้ที่ลั่นคือหนึ่งก้าวเข้าใกล้บ้านที่จะเรียกว่าบ้าน,
          รถที่ขับพาครอบครัวไปเที่ยว, และธุรกิจที่สร้างมูลค่าให้คนอื่น
        </p>

        <div className="mt-14 md:mt-20 flex items-center gap-3 font-mono text-[10px] tracking-[0.28em] uppercase text-text/70">
          <span>เลื่อนลงเพื่อดูรายละเอียด</span>
          <span aria-hidden className="text-brass">↓</span>
        </div>
      </div>

      {/* bottom stats strip */}
      <div className="relative z-10 border-t border-hairline bg-ink/60 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <StatCell label="เป้าหมายรวม" value={formatMoney(target, { compact: true })} unit="THB" />
          <StatCell label="เป้าหมายทั้งหมด" value={String(goalCount)} unit="รายการ" />
          <StatCell label="Progress" value={pct} unit="%" tone="brass" />
          <StatCell label="คงเหลือ" value={formatMoney(Math.max(target - saved, 0), { compact: true })} unit="THB" />
        </div>
      </div>
    </section>
  );
}

function StatCell({
  label,
  value,
  unit,
  tone,
}: {
  label: string;
  value: string;
  unit?: string;
  tone?: 'brass';
}) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-text/60 mb-2">
        {label}
      </div>
      <div className={`font-display font-light tabular text-2xl md:text-3xl leading-none tracking-tight ${tone === 'brass' ? 'text-brass-hi' : 'text-text'}`}>
        {value}
        {unit && <span className="text-[0.42em] text-text-dim tracking-[0.16em] ml-2 font-normal">{unit}</span>}
      </div>
    </div>
  );
}
