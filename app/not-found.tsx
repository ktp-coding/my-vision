import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-14 py-24 text-center">
      <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-brass mb-4">
        404 · Not Found
      </div>
      <h1
        className="font-serif font-normal text-text tracking-[-0.01em] m-0 mb-4"
        style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
      >
        ไม่พบเป้าหมายนี้
      </h1>
      <p className="text-text-dim font-light mb-8">
        อาจถูกลบไปแล้ว หรือ URL ไม่ถูกต้อง
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 border border-brass text-brass hover:bg-brass-soft transition-colors font-mono text-xs tracking-widest uppercase no-underline"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  );
}
