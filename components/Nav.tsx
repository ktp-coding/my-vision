export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#" className="font-display text-xl font-semibold tracking-[0.25em] text-white">
          MY&nbsp;VISION
        </a>

        <nav className="hidden items-center gap-10 text-sm font-light text-white/85 md:flex">
          <a href="#residence" className="hover:text-gold transition-colors">ที่พัก</a>
          <a href="#cars" className="hover:text-gold transition-colors">รถ</a>
          <a href="#business" className="hover:text-gold transition-colors">ธุรกิจ</a>
        </nav>

        <div className="flex items-center gap-3 text-sm font-light text-white/85">
          <span className="hidden h-6 w-6 items-center justify-center rounded-full border border-white/40 text-[10px] md:inline-flex">
            ✦
          </span>
          <span className="hidden md:inline">Trader's Board</span>
        </div>
      </div>
    </header>
  );
}
