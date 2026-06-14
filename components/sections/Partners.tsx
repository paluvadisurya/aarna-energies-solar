"use client";

import { motion } from "motion/react";
import { site } from "@/config/site.config";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";

export default function Partners() {
  const { partners } = site;
  return (
    <section className="relative py-24 md:py-28">
      <div className="section-x">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel>{partners.eyebrow}</SectionLabel>
            <h2 className="t-section mt-6 max-w-[16ch] text-cream">
              <RevealText text={partners.title} by="word" stagger={0.04} />
            </h2>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={1}>
              <p className="t-lede md:text-right">{partners.body}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-cork-shadow/70 bg-cork-shadow/40 sm:grid-cols-2 lg:grid-cols-4">
          {partners.logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-start gap-3 bg-canvas p-8 transition-colors duration-500 hover:bg-[#160d06] md:p-9"
            >
              <span className="text-xl font-semibold tracking-tight text-cream/85 transition-colors duration-300 group-hover:text-cream">
                {logo.name}
              </span>
              <span className="text-[0.74rem] uppercase tracking-[0.12em] text-grey-brown">
                {logo.role}
              </span>
              <span className="mt-2 h-px w-8 bg-cork-shadow transition-all duration-500 group-hover:w-16 group-hover:bg-sienna" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
