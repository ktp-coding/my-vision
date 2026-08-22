import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline mt-20 md:mt-32 pt-14 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 grid gap-10 md:gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 no-underline text-inherit mb-4">
            <span
              aria-hidden
              className="w-2 h-2 bg-brass rotate-45"
              style={{ boxShadow: '0 0 10px rgba(233, 180, 76, 0.6)' }}
            />
            <span className="font-display text-lg tracking-[0.32em] text-text uppercase">
              MYVSN
            </span>
          </Link>
          <p className="text-[13px] leading-relaxed text-text/60 font-light max-w-[38ch]">
            แผงเป้าหมายส่วนตัวสำหรับเทรดเดอร์ที่เชื่อว่าวินัย สร้างอิสรภาพได้จริง
          </p>
        </div>

        <FooterCol title="Portfolio" links={[
          { label: 'ที่พัก', href: '/#panel-shelter' },
          { label: 'รถ', href: '/#panel-motion' },
          { label: 'ธุรกิจ', href: '/#panel-business' },
        ]} />

        <FooterCol title="Discipline" links={[
          { label: 'กฎการเทรด', href: '/#discipline' },
          { label: 'Trade Journal', href: '/#journal' },
          { label: 'Passive Income', href: '/#income' },
        ]} />

        <FooterCol title="ส่วนตัว" links={[
          { label: 'Export ข้อมูล', href: '#' },
          { label: 'Import ข้อมูล', href: '#' },
          { label: 'Reset', href: '#' },
        ]} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 mt-14 pt-6 border-t border-hairline-soft flex flex-wrap justify-between items-center gap-4 font-mono text-[10px] tracking-[0.22em] uppercase text-text/40">
        <span>© {year} · The Trader&apos;s Plan · v0.3</span>
        <span>Local storage · Made with discipline</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-brass mb-4">
        {title}
      </div>
      <ul className="list-none p-0 m-0 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[13.5px] text-text/75 hover:text-brass-hi transition-colors no-underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
