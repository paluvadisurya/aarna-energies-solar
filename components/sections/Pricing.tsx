"use client";

import { motion } from "motion/react";
import { site } from "@/config/site.config";
import { whatsappLink } from "@/lib/whatsapp";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { Check, WhatsAppIcon, ArrowRight } from "@/components/ui/Icons";

export default function Pricing() {
  const { pricing } = site;
  const plan = pricing.plan;
  const waMsg = `Hi Aarna Energies, I am interested in the ${plan.name} (${plan.price}). Please share a quote and book a site visit.`;

  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      <div className="sun-pool pointer-events-none absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full opacity-40" />

      <div className="section-x relative">
        <div className="max-w-3xl">
          <SectionLabel>{pricing.eyebrow}</SectionLabel>
          <h2 className="t-section mt-6 text-cream">
            <RevealText text={pricing.title} by="word" stagger={0.035} />
          </h2>
        </div>

        <Reveal>
          <div className="mt-14 grid overflow-hidden rounded-card border border-cork-shadow/70 lg:grid-cols-[1.4fr_1fr]">
            {/* plan */}
            <div className="relative bg-gradient-to-br from-[#160d06] to-canvas p-8 md:p-12">
              <div className="flex items-start justify-between gap-4">
                <p className="max-w-[60%] text-[0.85rem] uppercase tracking-[0.14em] text-muted">
                  {plan.name}
                </p>
                <span className="shrink-0 rounded-pill border border-sienna/50 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-sienna">
                  Most Popular
                </span>
              </div>
              <div className="mt-5 flex items-end gap-3">
                <span className="t-display text-cream">{plan.price}</span>
              </div>
              <p className="mt-1.5 text-[0.9rem] text-muted">{plan.priceNote}</p>
              <p className="mt-5 max-w-sm text-[1.02rem] font-medium text-cream/90">
                {plan.tagline}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sienna/15">
                      <Check className="h-3 w-3 text-sienna" />
                    </span>
                    <span className="text-[0.86rem] leading-snug text-cream/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button
                  href={whatsappLink(waMsg)}
                  external
                  variant="whatsapp"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  <span className="flex items-center gap-2">
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    {pricing.cta}
                  </span>
                </Button>
              </div>
              <p className="mt-5 max-w-md text-[0.78rem] leading-relaxed text-grey-brown">
                {plan.upgradesNote}
              </p>
            </div>

            {/* payment schedule */}
            <div className="border-t border-cork-shadow/70 bg-[#0d0703] p-8 md:border-l md:border-t-0 md:p-12">
              <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-sienna">
                Payment Terms
              </h3>
              <div className="mt-8 space-y-8">
                {pricing.payment.map((p, i) => (
                  <div key={p.stage}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-[0.85rem] text-cream/80">{p.stage}</span>
                      <span className="text-2xl font-semibold text-cream">{p.percent}</span>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-cork-shadow/60">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: p.percent }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.2 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="block h-full rounded-full bg-sienna"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-card border border-cork-shadow/60 p-5">
                <p className="text-[0.72rem] uppercase tracking-[0.14em] text-grey-brown">
                  Pay To
                </p>
                <p className="mt-2 text-[0.9rem] font-medium text-cream">
                  {site.contact.bank.name}
                </p>
                <p className="mt-1 text-[0.8rem] text-cream/65">
                  A/C {site.contact.bank.accountNumber} · IFSC {site.contact.bank.ifsc}
                </p>
                <p className="mt-1 text-[0.78rem] text-grey-brown">
                  {site.contact.bank.upiHint}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
