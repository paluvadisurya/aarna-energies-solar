"use client";

import { site } from "@/config/site.config";
import { whatsappLink, telLink, mailLink } from "@/lib/whatsapp";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SunField from "@/components/ui/SunField";
import { WhatsAppIcon, ArrowRight, PhoneIcon, MailIcon, MapPin, Check } from "@/components/ui/Icons";

export default function Contact() {
  const { contact_section: cs, contact, company } = site;

  return (
    <section id="contact" className="grain relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 -z-10 opacity-90">
        <SunField className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_50%_120%,transparent_30%,rgba(10,6,3,0.85)_100%)]" />

      <div className="section-x relative">
        <div className="max-w-3xl">
          <SectionLabel>{cs.eyebrow}</SectionLabel>
          <h2 className="t-headline mt-7 text-cream">
            <RevealText text={cs.title} by="word" stagger={0.04} />
          </h2>
          <Reveal delay={1}>
            <p className="t-lede mt-7 max-w-xl">{cs.body}</p>
          </Reveal>

          <Reveal delay={2}>
            <ul className="mt-9 flex flex-col gap-3">
              {cs.points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-sienna/15">
                    <Check className="h-3 w-3 text-sienna" />
                  </span>
                  <span className="text-[0.92rem] text-cream/85">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-11 flex flex-wrap items-center gap-4">
              <Button
                href={whatsappLink()}
                external
                variant="whatsapp"
                icon={<ArrowRight className="h-4 w-4" />}
                className="px-8 py-4 text-[0.9rem]"
              >
                <span className="flex items-center gap-2.5">
                  <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                  {cs.primaryCta}
                </span>
              </Button>
              <Button href={telLink()} variant="ghost" magnetic={false}>
                Call {contact.phone}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* contact detail strip */}
        <Reveal>
          <div className="mt-20 grid gap-px overflow-hidden rounded-card border border-cork-shadow/70 bg-cork-shadow/40 sm:grid-cols-3">
            <a href={telLink()} className="group flex items-start gap-4 bg-canvas/90 p-7 transition-colors hover:bg-[#160d06]">
              <PhoneIcon className="mt-0.5 h-5 w-5 text-sienna" />
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-grey-brown">Call / WhatsApp</p>
                <p className="mt-1.5 text-[0.95rem] font-medium text-cream">{contact.phone}</p>
              </div>
            </a>
            <a href={mailLink()} className="group flex items-start gap-4 bg-canvas/90 p-7 transition-colors hover:bg-[#160d06]">
              <MailIcon className="mt-0.5 h-5 w-5 text-sienna" />
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-grey-brown">Email</p>
                <p className="mt-1.5 break-all text-[0.95rem] font-medium text-cream">{contact.email}</p>
              </div>
            </a>
            <div className="flex items-start gap-4 bg-canvas/90 p-7">
              <MapPin className="mt-0.5 h-5 w-5 text-sienna" />
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-grey-brown">Based In</p>
                <p className="mt-1.5 text-[0.95rem] font-medium text-cream">
                  {company.location.city}, {company.location.state}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
