"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/config/site.config";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import Logo from "@/components/ui/Logo";
import { WhatsAppIcon, ArrowUpRight } from "@/components/ui/Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-cork-shadow/70 bg-canvas/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="section-x flex h-[68px] items-center justify-between">
          <Logo />

          {/* desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {site.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-accent text-[0.78rem] font-medium uppercase tracking-[0.18em] text-cream/75 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-pill border border-cream/15 bg-dark-cork px-5 py-2.5 text-[0.78rem] font-medium text-cream transition-all duration-300 hover:border-[#25D366]/70 sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {site.nav.cta.label}
            </a>

            {/* mobile toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative grid h-10 w-10 place-items-center lg:hidden"
            >
              <span
                className={cn(
                  "absolute h-px w-6 bg-cream transition-all duration-300",
                  open ? "rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-6 bg-cream transition-all duration-300",
                  open ? "-rotate-45" : "translate-y-1.5"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-canvas/97 backdrop-blur-xl lg:hidden"
          >
            <div className="grain relative flex flex-1 flex-col justify-center px-8">
              <ul className="space-y-2">
                {site.nav.links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-3 py-2 text-4xl font-medium tracking-tight text-cream"
                    >
                      <span className="t-eyebrow text-grey-brown">0{i + 1}</span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 inline-flex w-fit items-center gap-2.5 rounded-pill bg-[#25D366] px-7 py-4 text-[0.95rem] font-semibold text-canvas"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {site.nav.cta.label}
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
