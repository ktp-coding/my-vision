export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[720px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80"
        alt="Mountain landscape at dawn"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Side rails */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 text-xs uppercase tracking-overline text-white/70 md:flex">
        <span className="[writing-mode:vertical-rl] rotate-180">Follow the vision</span>
        <span className="h-16 w-px bg-white/30" />
        <a href="#" aria-label="instagram" className="hover:text-gold">IG</a>
        <a href="#" aria-label="x" className="hover:text-gold">X</a>
      </div>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-4 text-xs tracking-overline text-white/70 md:flex">
        <span className="text-white">Sections</span>
        <span className="h-px w-10 bg-gold" />
        <a href="#residence" className="hover:text-gold">01</a>
        <a href="#cars" className="hover:text-gold">02</a>
        <a href="#business" className="hover:text-gold">03</a>
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="gold-rule mb-6 text-xs uppercase tracking-overline text-gold">
          A Trader's Vision Board
        </span>

        <h1 className="font-display text-4xl italic leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          เป้าหมายที่จะไปให้ถึง
          <br />
          <span className="not-italic font-normal">แรงบันดาลใจในการเทรด</span>
        </h1>

        <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-white/80 md:text-base">
          ทุก setup ทุก entry และทุก stop loss มีความหมาย
          เมื่อเรารู้ว่าเรากำลังเทรดเพื่ออะไร รวมเป้าหมายในชีวิตทั้งเรื่องที่พัก รถ
          และธุรกิจ ให้เห็นชัดในทุกวัน
        </p>

        <a
          href="#residence"
          className="link-arrow mt-14 text-xs uppercase tracking-overline text-white/80 hover:text-gold"
        >
          Scroll down
        </a>
      </div>
    </section>
  );
}
