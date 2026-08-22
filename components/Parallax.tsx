"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  speed?: number; // -1..1, negative = moves opposite to scroll (looks "slower/behind")
  className?: string;
  style?: CSSProperties;
};

/**
 * Translates its children on Y-axis relative to viewport scroll.
 * speed = 0.3 → element moves 30% of viewport-relative scroll.
 * Uses rAF-throttled scroll updates and mutates transform directly
 * (no re-render per frame).
 */
export default function Parallax({
  children,
  speed = 0.25,
  className = "",
  style,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // respect reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const update = () => {
      raf.current = null;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      // distance from viewport center, normalized
      const offset = rect.top + rect.height / 2 - viewport / 2;
      const translate = offset * speed * -1;
      el.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (raf.current != null) return;
      raf.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current != null) window.cancelAnimationFrame(raf.current);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform", ...style }}>
      {children}
    </div>
  );
}
