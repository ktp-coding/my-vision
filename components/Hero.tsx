"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLImageElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const update = () => {
      raf.current = null;
      const y = window.scrollY;
      if (bgRef.current) {
        // background moves slower (down) — classic parallax
        bgRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(1.08)`;
      }
      if (contentRef.current) {
        // content drifts up + fades as you scroll past hero
        const vh = window.innerHeight;
        const p = Math.min(1, y / vh);
        contentRef.current.style.transform = `translate3d(0, ${-y * 0.25}px, 0)`;
        contentRef.current.style.opacity = String(1 - p * 0.9);
      }
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
    <section className="relative h-[100vh] min-h-[720px] w-full overflow-hidden">
      {/* Parallax background image */}
      <img
        ref={bgRef}
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80"
        alt="Mountain landscape at dawn"
        className="absolute inset-0 h-[115%] w-full object-cover"
        style={{ willChange: "transform" }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Side rails */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 text-xs uppercase tracking-overline text-white/70 md:flex hero-fade-1">
        <span className="[writing-mode:vertical-rl] rotate-180">Follow the vision</span>
        <span className="h-16 w-px bg-white/30" />
        <a href="#" aria-label="instagram" className="hover:text-gold transition-colors">IG</a>
        <a href="#" aria-label="x" className="hover:text-gold transition-colors">X</a>
      </div>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-4 text-xs tracking-overline text-white/70 md:flex hero-fade-1">
        <span className="text-white">Sections</span>
        <span className="h-px w-10 bg-gold" />
        <a href="#residence" className="hover:text-gold transition-colors">01</a>
        <a href="#cars" className="hover:text-gold transition-colors">02</a>
        <a href="#business" className="hover:text-gold transition-colors">03</a>
      </div>

      {/* Center content — drifts up on scroll */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center"
        style={{ willChange: "transform, opacity" }}
      >
        <span className="gold-rule mb-6 text-xs uppercase tracking-overline text-gold hero-fade-2">
          A Trader's Vision Board
        </span>

        <h1 className="font-display text-4xl italic leading-[1.05] text-white gold-glow sm:text-5xl md:text-6xl lg:text-7xl hero-fade-3">
          เป้าหมายที่จะไปให้ถึง
          <br />
          <span className="not-italic font-normal">แรงบันดาลใจในการเทรด</span>
        </h1>

        <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-white/80 md:text-base hero-fade-3">
          ทุก setup ทุก entry และทุก stop loss มีความหมาย
          เมื่อเรารู้ว่าเรากำลังเทรดเพื่ออะไร รวมเป้าหมายในชีวิตทั้งเรื่องที่พัก รถ
          และธุรกิจ ให้เห็นชัดในทุกวัน
        </p>

        <a
          href="#residence"
          className="link-arrow mt-14 text-xs uppercase tracking-overline text-white/80 hover:text-gold hero-fade-4 scroll-cue"
        >
          Scroll down
        </a>
      </div>
    </section>
  );
}
