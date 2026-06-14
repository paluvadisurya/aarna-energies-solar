"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/config/site.config";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import { Plus } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

export default function Faq() {
  const { faq } = site;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="section-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel>{faq.eyebrow}</SectionLabel>
            <h2 className="t-section mt-6 text-cream">
              <RevealText text={faq.title} by="word" stagger={0.04} />
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="border-t border-cork-shadow/70">
              {faq.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q} className="border-b border-cork-shadow/70">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "text-[1.05rem] font-medium tracking-tight transition-colors duration-300 md:text-xl",
                          isOpen ? "text-cream" : "text-cream/75 group-hover:text-cream"
                        )}
                      >
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
                          isOpen ? "rotate-45 border-sienna text-sienna" : "border-cork-shadow text-cream/60"
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 pr-12 text-[0.95rem] leading-relaxed text-cream/65">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
