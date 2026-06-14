"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { site } from "@/config/site.config";
import { whatsappLink } from "@/lib/whatsapp";
import SunField from "@/components/ui/SunField";
import Button from "@/components/ui/Button";
import RevealText from "@/components/ui/RevealText";
import { WhatsAppIcon, ArrowRight, ChevronDown } from "@/components/ui/Icons";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yHead = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ySun = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const { hero } = site;

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* live solar field */}
      <motion.div style={{ y: ySun }} className="absolute inset-0 -z-10">
        <SunField className="h-full w-full" />
      </motion.div>
      {/* vignette to deepen the edges */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_40%,rgba(10,6,3,0.7)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-canvas to-transparent" />

      {/* vertical edge label */}
      <div className="pointer-events-none absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
        <span
          className="t-eyebrow whitespace-nowrap text-grey-brown"
          style={{ writingMode: "vertical-rl" }}
        >
          AARNA · 3 kW ON-GRID · HYBRID-READY
        </span>
      </div>

      <motion.div
        style={{ y: yHead, opacity: fade }}
        className="section-x relative z-10 flex flex-1 flex-col justify-center pt-28 pb-36"
      >
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-sienna" />
          <span className="t-eyebrow text-cream/70">{hero.eyebrow}</span>
        </motion.div>

        {/* headline */}
        <h1 className="t-display max-w-[16ch] text-cream">
          {hero.headline.map((line, i) => (
            <span key={i} className="block">
              <RevealText text={line} by="char" delay={0.25 + i * 0.12} stagger={0.035} />
            </span>
          ))}
          <span className="block text-shimmer">
            <RevealText text={hero.headlineAccent} by="char" delay={0.6} stagger={0.028} />
          </span>
        </h1>

        {/* lede + CTAs, pushed center-right per the asymmetric grid */}
        <div className="mt-12 flex flex-col gap-9 md:mt-16 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="t-lede max-w-md md:ml-auto md:text-right"
          >
            {hero.lede}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            href={whatsappLink()}
            external
            variant="whatsapp"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            <span className="flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {hero.primaryCta}
            </span>
          </Button>
          <Button href={hero.secondaryHref} variant="ghost" magnetic={false}>
            {hero.secondaryCta}
          </Button>
        </motion.div>
      </motion.div>

      {/* stat strip */}
      <motion.div
        style={{ opacity: fade }}
        className="section-x relative z-10 border-t border-cork-shadow/60 pb-10 pt-6"
      >
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
          {hero.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <dt className="flex items-baseline gap-0.5 text-3xl font-semibold tracking-tight text-cream md:text-4xl">
                {s.value}
                <span className="text-sienna">{s.suffix}</span>
              </dt>
              <dd className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-grey-brown">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>

      {/* scroll prompt */}
      <motion.a
        href="#approach"
        style={{ opacity: fade }}
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 md:flex"
        aria-label="Scroll to continue"
      >
        <span className="t-eyebrow text-grey-brown">{hero.scrollPrompt}</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-cream/60" />
      </motion.a>
    </section>
  );
}
