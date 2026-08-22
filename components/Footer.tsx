export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-2/60 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          <div>
            <span className="font-display text-lg font-semibold tracking-[0.25em] text-white">
              MY VISION
            </span>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-white/60">
              เป้าหมายไม่ใช่แค่ตัวเลขบนพอร์ต แต่คือชีวิตที่เราสร้างขึ้นด้วยวินัยและความอดทน
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-overline text-gold">
              เป้าหมายในบอร์ด
            </h4>
            <ul className="mt-5 space-y-3 text-sm font-light text-white/75">
              <li><a href="#residence" className="hover:text-gold">ที่พัก · Residence</a></li>
              <li><a href="#cars" className="hover:text-gold">รถ · Cars</a></li>
              <li><a href="#business" className="hover:text-gold">ธุรกิจ · Businesses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-overline text-gold">
              Trader's Notes
            </h4>
            <ul className="mt-5 space-y-3 text-sm font-light text-white/75">
              <li>• เทรดตาม plan ไม่เทรดตามอารมณ์</li>
              <li>• Cut loss เร็ว let profit run</li>
              <li>• Journal ทุก setup ที่เข้า</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} My Vision · Personal Board</span>
          <span className="italic">"เทรดวันนี้ เพื่อชีวิตในอีก 5 ปี"</span>
        </div>
      </div>
    </footer>
  );
}
