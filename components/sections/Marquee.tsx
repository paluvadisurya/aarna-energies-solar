"use client";

import { site } from "@/config/site.config";

/** Infinite scrolling band of capability keywords, separated by a sun glyph. */
export default function Marquee() {
  const items = site.marquee;
  const row = [...items, ...items];

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-cork-shadow/70 bg-canvas py-5"
    >
      <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center whitespace-nowrap will-change-transform">
        {row.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="px-7 text-[1.05rem] font-medium tracking-tight text-cream/85 sm:text-[1.35rem]">
              {word}
            </span>
            <SunGlyph />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-canvas to-transparent" />
    </section>
  );
}

function SunGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-sienna" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="4.5" />
      <path strokeLinecap="round" d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
    </svg>
  );
}
