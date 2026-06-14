"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { site } from "@/config/site.config";
import { Info } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import { SectionIcon } from "@/components/ui/iconMap";
import { cn } from "@/lib/cn";

type Rating = "high" | "mid" | "low";
const score: Record<Rating, number> = { high: 3, mid: 2, low: 1 };

function Meter({ rating, accent }: { rating: Rating; accent: boolean }) {
  const n = score[rating];
  return (
    <span className="flex items-center gap-1.5">
      {[1, 2, 3].map((seg) => (
        <span
          key={seg}
          className={cn(
            "h-1.5 w-5 rounded-full transition-colors duration-300",
            seg <= n
              ? accent
                ? "bg-sienna"
                : "bg-cream/70"
              : "bg-cork-shadow/70"
          )}
        />
      ))}
    </span>
  );
}

export default function InverterComparison() {
  const { inverters } = site;
  const [active, setActive] = useState(2); // default: Power Optimizer (SolarEdge)
  const options = inverters.options;

  return (
    <section className="relative py-24 md:py-32">
      <div className="section-x">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel>{inverters.eyebrow}</SectionLabel>
            <h2 className="t-section mt-6 max-w-[20ch] text-cream">
              <RevealText text={inverters.title} by="word" stagger={0.035} />
            </h2>
          </div>
        </div>

        {/* ---------- desktop table ---------- */}
        <div className="mt-14 hidden overflow-hidden rounded-card border border-cork-shadow/70 lg:block">
          {/* option header */}
          <div className="grid grid-cols-[1.1fr_repeat(3,1fr)]">
            <div className="bg-[#0d0703] p-7" />
            {options.map((opt, i) => (
              <button
                key={opt.key}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "relative border-l border-cork-shadow/60 p-7 text-left transition-colors duration-300",
                  i === active ? "bg-[#160d06]" : "bg-canvas hover:bg-[#130b06]"
                )}
              >
                {i === active && (
                  <motion.span
                    layoutId="inv-accent"
                    className="absolute left-0 top-0 h-px w-full bg-sienna"
                  />
                )}
                <span
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-xl border transition-colors duration-300",
                    i === active ? "border-sienna/60 bg-sienna/15 text-sienna" : "border-cork-shadow text-muted"
                  )}
                >
                  <SectionIcon name={opt.icon} className="h-5 w-5" />
                </span>
                <h3
                  className={cn(
                    "mt-3 text-lg font-semibold tracking-tight transition-colors",
                    i === active ? "text-cream" : "text-cream/75"
                  )}
                >
                  {opt.name}
                </h3>
                <p className="mt-1.5 text-[0.85rem] leading-snug text-muted">{opt.principle}</p>
                {i === active && (
                  <span className="mt-3 inline-block rounded-pill border border-sienna/50 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-cream/90">
                    {opt.bestFor}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* rows */}
          <div>
            {inverters.rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.1fr_repeat(3,1fr)] border-t border-cork-shadow/50"
              >
                <div className="bg-[#0d0703] px-7 py-5 text-[0.88rem] font-medium uppercase tracking-[0.08em] text-muted">
                  {row.label}
                </div>
                {options.map((opt, i) => (
                  <div
                    key={opt.key}
                    className={cn(
                      "flex items-center border-l border-cork-shadow/60 px-7 py-5 transition-colors duration-300",
                      i === active ? "bg-[#160d06]" : "bg-canvas"
                    )}
                  >
                    <Meter rating={row.values[opt.key as keyof typeof row.values] as Rating} accent={i === active} />
                  </div>
                ))}
              </div>
            ))}
            {/* brands row */}
            <div className="grid grid-cols-[1.1fr_repeat(3,1fr)] border-t border-cork-shadow/50">
              <div className="bg-[#0d0703] px-7 py-5 text-[0.88rem] font-medium uppercase tracking-[0.08em] text-muted">
                Typical Brands
              </div>
              {options.map((opt, i) => (
                <div
                  key={opt.key}
                  className={cn(
                    "border-l border-cork-shadow/60 px-7 py-5 text-[0.86rem] leading-relaxed transition-colors duration-300",
                    i === active ? "bg-[#160d06] text-cream/85" : "bg-canvas text-cream/60"
                  )}
                >
                  {opt.brands}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- mobile tabs ---------- */}
        <div className="mt-12 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-3">
            {options.map((opt, i) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-pill border px-4 py-2.5 text-[0.8rem] font-medium transition-colors",
                  i === active
                    ? "border-sienna bg-[#160d06] text-cream"
                    : "border-cork-shadow text-cream/60"
                )}
              >
                <SectionIcon name={opt.icon} className="h-4 w-4" />
                {opt.name}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 rounded-card border border-cork-shadow/70 bg-[#0d0703] p-6"
          >
            <p className="text-[0.8rem] text-grey-brown">{options[active].principle}</p>
            <span className="mt-2 inline-block rounded-pill border border-sienna/50 px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-cream/80">
              {options[active].bestFor}
            </span>
            <div className="mt-6 space-y-4">
              {inverters.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4">
                  <span className="text-[0.78rem] uppercase tracking-[0.08em] text-grey-brown">
                    {row.label}
                  </span>
                  <Meter
                    rating={row.values[options[active].key as keyof typeof row.values] as Rating}
                    accent
                  />
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-cork-shadow/50 pt-4 text-[0.8rem] text-cream/60">
              {options[active].brands}
            </p>
          </motion.div>
        </div>

        <p className="mt-8 flex max-w-2xl items-start gap-2.5 text-[0.92rem] leading-relaxed text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-sienna" />
          <span>{inverters.note}</span>
        </p>
      </div>
    </section>
  );
}
