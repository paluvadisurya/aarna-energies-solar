"use client";

import { site } from "@/config/site.config";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";

export default function Positioning() {
  const { positioning } = site;
  return (
    <section id="approach" className="relative overflow-hidden py-28 md:py-40">
      {/* warm sun pool low-left */}
      <div className="sun-pool pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full opacity-60" />

      <div className="section-x relative grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <SectionLabel>{positioning.eyebrow}</SectionLabel>
          <h2 className="t-headline mt-7 max-w-[18ch] text-cream">
            <RevealText text={positioning.statement} by="word" stagger={0.03} />
          </h2>
        </div>

        <div className="flex flex-col justify-end md:col-span-5">
          <Reveal delay={1}>
            <p className="t-lede border-l border-cork-shadow pl-6">{positioning.body}</p>
            <p className="mt-7 pl-6 text-[0.85rem] font-medium tracking-wide text-grey-brown">
              {positioning.signature}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
