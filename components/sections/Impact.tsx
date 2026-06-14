"use client";

import { motion } from "motion/react";
import { site } from "@/config/site.config";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { Leaf } from "@/components/ui/Icons";

export default function Impact() {
  const { impact } = site;
  return (
    <section id="impact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_40%,rgba(68,82,49,0.22),transparent_70%)]" />

      <div className="section-x relative">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel>{impact.eyebrow}</SectionLabel>
            <h2 className="t-section mt-6 max-w-[16ch] text-cream">
              <RevealText text={impact.title} by="word" stagger={0.04} />
            </h2>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={1}>
              <p className="t-lede md:text-right">{impact.body}</p>
            </Reveal>
          </div>
        </div>

        {/* counters */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-cork-shadow/70 bg-cork-shadow/40 md:grid-cols-4">
          {impact.counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-canvas p-8 transition-colors duration-500 hover:bg-[#0e1109] md:p-10"
            >
              <div className="flex items-baseline gap-1 text-5xl font-semibold tracking-tight text-cream md:text-6xl">
                <Counter value={c.value} decimals={"decimals" in c ? (c.decimals as number) : 0} />
                <span className="text-3xl text-forest md:text-4xl" style={{ color: "#7c9a4e" }}>
                  {c.suffix}
                </span>
              </div>
              <p className="mt-3 max-w-[18ch] text-[0.82rem] uppercase leading-relaxed tracking-[0.12em] text-grey-brown">
                {c.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* quote */}
        <Reveal>
          <figure className="mt-16 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <Leaf className="h-10 w-10 shrink-0" style={{ color: "#7c9a4e" }} />
            <blockquote className="t-headline max-w-[24ch] text-cream/90">
              &ldquo;{impact.quote}&rdquo;
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
