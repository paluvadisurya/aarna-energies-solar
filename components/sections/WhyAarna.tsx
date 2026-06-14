"use client";

import { motion } from "motion/react";
import { site } from "@/config/site.config";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";

export default function WhyAarna() {
  const { why } = site;
  return (
    <section className="relative py-24 md:py-32">
      <div className="section-x">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel>{why.eyebrow}</SectionLabel>
            <h2 className="t-section mt-6 max-w-[16ch] text-cream">
              <RevealText text={why.title} by="word" stagger={0.04} />
            </h2>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={1}>
              <p className="t-lede md:text-right">{why.intro}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-cork-shadow/70 bg-cork-shadow/40 md:grid-cols-3">
          {why.pillars.map((pillar, i) => (
            <motion.article
              key={pillar.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-5 bg-canvas p-8 transition-colors duration-500 hover:bg-[#150c06] md:p-10"
            >
              {/* top accent that grows on hover */}
              <span className="absolute left-0 top-0 h-px w-0 bg-sienna transition-all duration-500 group-hover:w-full" />
              <span className="font-display text-5xl font-semibold text-cork-shadow transition-colors duration-500 group-hover:text-sienna/80">
                {pillar.no}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-cream">{pillar.title}</h3>
              <p className="text-[0.92rem] leading-relaxed text-cream/65">{pillar.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
