"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/config/site.config";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import { SectionIcon } from "@/components/ui/iconMap";
import { cn } from "@/lib/cn";

export default function Technology() {
  const { technology } = site;
  const [active, setActive] = useState(0);
  const current = technology.trends[active];

  return (
    <section id="technology" className="relative overflow-hidden py-24 md:py-32">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_50%,rgba(232,128,31,0.10),transparent_70%)]" />

      <div className="section-x relative">
        <div className="max-w-3xl">
          <SectionLabel>{technology.eyebrow}</SectionLabel>
          <h2 className="t-section mt-6 text-cream">
            <RevealText text={technology.title} by="word" stagger={0.035} />
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-cork-shadow/70 bg-cork-shadow/40 lg:grid-cols-2">
          {/* selector list */}
          <ul className="flex flex-col bg-canvas">
            {technology.trends.map((trend, i) => {
              const selected = i === active;
              return (
                <li key={trend.tag}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex w-full items-center gap-5 border-b border-cork-shadow/50 px-7 py-7 text-left transition-colors duration-300 last:border-b-0 md:px-9",
                      selected ? "bg-[#160d06]" : "hover:bg-[#130b06]"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-12 w-12 shrink-0 place-items-center rounded-xl border transition-colors duration-300",
                        selected
                          ? "border-sienna bg-sienna/15 text-sienna"
                          : "border-cork-shadow text-muted"
                      )}
                    >
                      <SectionIcon name={trend.icon} className="h-6 w-6" />
                    </span>
                    <span className="flex flex-1 flex-col">
                      <span
                        className={cn(
                          "text-lg font-semibold tracking-tight transition-colors duration-300",
                          selected ? "text-cream" : "text-cream/70"
                        )}
                      >
                        {trend.title}
                      </span>
                      <span className="mt-1 text-[0.8rem] uppercase tracking-[0.12em] text-muted">
                        {trend.spec}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-all duration-300",
                        selected ? "scale-100 bg-sienna" : "scale-0 bg-transparent"
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* detail panel */}
          <div className="relative min-h-[320px] overflow-hidden bg-[#0d0703] p-9 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col"
              >
                <SectionIcon
                  name={current.icon}
                  className="pointer-events-none absolute -right-4 -top-2 h-44 w-44 text-cork-shadow/50"
                  strokeWidth={1}
                />
                <span className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-sienna">
                  {current.tag} / 04
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-cream md:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-cream/80">
                  {current.body}
                </p>
                <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-pill border border-sienna/50 px-4 py-2 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-cream/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-sienna" />
                  {current.spec}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
