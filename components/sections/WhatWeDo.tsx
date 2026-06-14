"use client";

import { motion } from "motion/react";
import { site } from "@/config/site.config";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import { SectionIcon } from "@/components/ui/iconMap";

export default function WhatWeDo() {
  const { offer } = site;
  return (
    <section id="offer" className="relative py-24 md:py-32">
      <div className="section-x">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel>{offer.eyebrow}</SectionLabel>
            <h2 className="t-section mt-6 max-w-[18ch] text-cream">
              <RevealText text={offer.title} by="word" stagger={0.035} />
            </h2>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={1}>
              <p className="t-lede md:text-right">{offer.intro}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-cork-shadow/70 bg-cork-shadow/40 sm:grid-cols-2 lg:grid-cols-3">
          {offer.services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-5 bg-canvas p-8 transition-colors duration-500 hover:bg-[#160d06] md:p-9"
            >
              <span className="absolute left-0 top-0 h-px w-0 bg-sienna transition-all duration-500 group-hover:w-full" />
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-cork-shadow bg-[#160d06] text-sienna transition-colors duration-500 group-hover:border-sienna/60">
                <SectionIcon name={service.icon} className="h-7 w-7" />
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-cream">{service.title}</h3>
              <p className="text-[0.98rem] leading-relaxed text-cream/70">{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
