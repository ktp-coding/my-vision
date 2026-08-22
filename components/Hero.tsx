import { formatMoney } from '@/lib/format';

type Props = {
  targetMin: number;
  targetMax: number;
  saved: number;
};

export function Hero({ targetMin, targetMax, saved }: Props) {
  const target = Math.round((targetMin + targetMax) / 2);
  const remaining = Math.max(target - saved, 0);

  return (
    <section className="py-14 md:py-24 grid gap-8 md:gap-16 md:grid-cols-[1.4fr_1fr] items-end border-b border-hairline-soft">
      <div>
        <div className="mb-6 font-mono text-[11px] tracking-[0.28em] uppercase text-brass flex items-center gap-3">
          <span aria-hidden className="inline-block w-8 h-px bg-brass" />
          Manifest · เป้าหมายที่ต้องไปถึง
        </div>
        <h1
          className="font-serif font-normal m-0 text-text leading-[1.02] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(38px, 6.5vw, 78px)', textWrap: 'balance' }}
        >
          ทุกไม้ที่ลั่น
          <br />
          คือหนึ่งก้าว
          <em className="font-light italic text-brass-hi">เข้าใกล้ชีวิต</em>
          <br />
          ที่ออกแบบเอง
        </h1>
        <p className="mt-6 text-base leading-[1.7] text-text-dim font-light max-w-[44ch]">
          นี่ไม่ใช่แค่ตัวเลขบนหน้าจอ — คือบ้านที่จะเรียกว่าบ้าน, รถที่ขับพาครอบครัวไปเที่ยว,
          ธุรกิจที่สร้างมูลค่าให้คนอื่น, และอิสรภาพทางการเงินที่มาจากวินัย ไม่ใช่โชค
        </p>
      </div>

      <aside className="flex flex-col items-start gap-4">
        <div className="w-full py-7 border-t border-b border-hairline">
          <div className="mb-3.5 font-mono text-[10px] tracking-[0.22em] uppercase text-text-dimmer">
            มูลค่าเป้าหมายรวม
          </div>
          <div
            className="font-mono tabular font-medium text-text leading-none tracking-[-0.02em]"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
          >
            {formatMoney(target)}
            <span className="text-[0.5em] text-text-dim tracking-[0.1em] ml-1.5 font-normal">THB</span>
          </div>
          <div className="mt-3.5 flex gap-5 font-mono text-[11px] text-text-dim">
            <span>
              สะสมแล้ว <b className="text-market">{formatMoney(saved)}</b>
            </span>
            <span>
              คงเหลือ <b className="text-text">{formatMoney(remaining)}</b>
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
}
