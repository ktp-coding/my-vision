const RULES = [
  { title: 'ตัด SL ทุกไม้ ไม่มีข้อยกเว้น', body: 'เสียเงินได้ เสียแผนไม่ได้ — เพราะแผนคือทุนที่แท้จริง' },
  { title: 'Risk ต่อไม้ ≤ 1% ของพอร์ต', body: 'อยู่ในเกมนานๆ ดอกเบี้ยทบต้นจะทำงานให้เอง' },
  { title: 'อารมณ์เสีย = ปิดจอ', body: 'ตลาดจะยังอยู่พรุ่งนี้ อย่าคืนกำไรให้มันด้วยความโกรธ' },
  { title: 'Journal ทุกไม้ ทบทวนทุกสัปดาห์', body: 'ที่ไม่ได้จดคือที่จะพลาดซ้ำ' },
  { title: 'ถอนเข้าบัญชีเป้าหมายทุกเดือน', body: 'เงินในพอร์ตคือเครื่องมือ เงินในบัญชีเป้าหมายคือชีวิต' },
  { title: 'เปิดหน้านี้ก่อนเทรดทุกวัน', body: 'ให้เห็นว่ากำลังเทรดเพื่ออะไร ไม่ใช่เทรดเพื่อเทรด' },
];

export function Rules() {
  return (
    <section className="pt-4 pb-16 md:pb-24 grid gap-10 md:gap-16 md:grid-cols-[1fr_1.6fr] items-start">
      <div className="md:pr-8">
        <p
          className="font-display font-light italic text-brass-hi m-0 leading-[1.15] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}
        >
          &ldquo;วินัยไม่ใช่ข้อจำกัด — วินัยคือใบเบิกทางของอิสรภาพ&rdquo;
        </p>
        <div className="mt-6 font-mono text-[10px] tracking-[0.28em] uppercase text-text/50">
          กฎ 6 ข้อที่ห้ามยืดหยุ่น
        </div>
      </div>

      <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 list-none p-0 m-0">
        {RULES.map((r, i) => (
          <li key={r.title} className="relative pl-10 border-l border-hairline pl-6">
            <span className="absolute -left-px top-0 flex items-center justify-center w-6 h-6 bg-ink border border-brass -translate-x-1/2 font-mono text-[10px] text-brass tabular tracking-wider">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="font-display text-[19px] leading-snug text-text tracking-tight mb-1.5">
              {r.title}
            </div>
            <div className="text-[13.5px] leading-relaxed text-text/60 font-light">
              {r.body}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
