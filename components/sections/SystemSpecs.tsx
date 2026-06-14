"use client";

import { motion } from "motion/react";
import { site } from "@/config/site.config";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import { SunMark } from "@/components/ui/Icons";
import { SectionIcon } from "@/components/ui/iconMap";

export default function SystemSpecs() {
  const { system } = site;
  return (
    <section id="system" className="relative overflow-hidden py-24 md:py-32">
      <div className="sun-pool pointer-events-none absolute -right-32 top-10 h-[480px] w-[480px] rounded-full opacity-50" />

      <div className="section-x relative">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel>{system.eyebrow}</SectionLabel>
            <h2 className="t-section mt-6 max-w-[18ch] text-cream">
              <RevealText text={system.title} by="word" stagger={0.03} />
            </h2>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={1}>
              <p className="t-lede md:text-right">{system.intro}</p>
            </Reveal>
          </div>
        </div>

        {/* featured capacity */}
        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-8 rounded-card border border-cork-shadow/70 bg-gradient-to-br from-[#160d06] to-canvas p-8 md:flex-row md:items-center md:p-12">
            <div className="flex items-end gap-4">
              <SunMark className="mb-3 h-9 w-9 text-sienna" />
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="t-display text-cream">{system.headline.capacity}</span>
                </div>
                <p className="mt-1 text-[0.85rem] uppercase tracking-[0.14em] text-grey-brown">
                  {system.headline.capacityNote}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 rounded-2xl border border-sienna/40 bg-canvas/50 px-5 py-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sienna/15 text-sienna">
                <SectionIcon name={system.freeGift.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-sienna">
                  {system.freeGift.label}
                </p>
                <p className="mt-0.5 text-[0.95rem] text-cream/90">{system.freeGift.text}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* spec groups */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-cork-shadow/70 bg-cork-shadow/40 md:grid-cols-3">
          {system.specGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-canvas p-8 md:p-9"
            >
              <h3 className="flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-sienna">
                <span className="h-1.5 w-1.5 rounded-full bg-sienna" />
                {group.title}
              </h3>
              <dl className="mt-6 space-y-0">
                {group.items.map((item) => (
                  <div
                    key={item.k}
                    className="flex justify-between gap-4 border-b border-cork-shadow/40 py-3.5 last:border-b-0"
                  >
                    <dt className="text-[0.9rem] text-muted">{item.k}</dt>
                    <dd className="max-w-[58%] text-right text-[0.9rem] font-medium text-cream/90">
                      {item.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
