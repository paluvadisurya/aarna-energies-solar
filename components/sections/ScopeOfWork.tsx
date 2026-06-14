"use client";

import { motion } from "motion/react";
import { site } from "@/config/site.config";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import { Check } from "@/components/ui/Icons";

function List({
  title,
  items,
  accent,
}: {
  title: string;
  items: readonly string[];
  accent: boolean;
}) {
  return (
    <div className="bg-canvas p-8 md:p-10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold tracking-tight text-cream">{title}</h3>
        <span
          className="rounded-pill border px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em]"
          style={{
            borderColor: accent ? "rgba(220,80,0,0.5)" : "rgba(108,95,81,0.5)",
            color: accent ? "#ffedd7" : "#6c5f51",
          }}
        >
          {accent ? "We handle it" : "You provide"}
        </span>
      </div>
      <ul className="mt-7 space-y-0">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: accent ? -12 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-6%" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="flex items-start gap-3 border-b border-cork-shadow/40 py-3.5 last:border-b-0"
          >
            <span
              className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
              style={{ background: accent ? "rgba(220,80,0,0.15)" : "rgba(108,95,81,0.15)" }}
            >
              <Check className="h-3 w-3" style={{ color: accent ? "#dc5000" : "#6c5f51" }} />
            </span>
            <span className="text-[0.9rem] leading-snug text-cream/80">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function ScopeOfWork() {
  const { scope } = site;
  return (
    <section id="scope" className="relative py-24 md:py-32">
      <div className="section-x">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel>{scope.eyebrow}</SectionLabel>
            <h2 className="t-section mt-6 max-w-[16ch] text-cream">
              <RevealText text={scope.title} by="word" stagger={0.04} />
            </h2>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={1}>
              <p className="t-lede md:text-right">{scope.intro}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-cork-shadow/70 bg-cork-shadow/40 md:grid-cols-2">
          <List title="Aarna Energies" items={scope.aarna} accent />
          <List title="Client" items={scope.client} accent={false} />
        </div>
      </div>
    </section>
  );
}
