"use client";

import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      raf.current = null;
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? y / h : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      setScrolled(y > 80);
    };
    const onScroll = () => {
      if (raf.current != null) return;
      raf.current = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current != null) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        scrolled
          ? "bg-night/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
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

      {/* scroll progress bar */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gold/80"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </header>
  );
}
