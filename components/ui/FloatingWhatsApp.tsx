"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

/**
 * Persistent WhatsApp lead magnet — appears after the hero, gently pulses,
 * and expands a nudge label periodically to invite the chat.
 */
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t1 = setTimeout(() => setNudge(true), 1200);
    const t2 = setTimeout(() => setNudge(false), 6200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Aarna Energies on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 sm:bottom-7 sm:right-7"
        >
          {/* expanding nudge label */}
          <AnimatePresence>
            {nudge && (
              <motion.span
                initial={{ width: 0, opacity: 0, marginRight: 0 }}
                animate={{ width: "auto", opacity: 1, marginRight: 12 }}
                exit={{ width: 0, opacity: 0, marginRight: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="hidden overflow-hidden whitespace-nowrap rounded-pill border border-cream/15 bg-dark-cork px-4 py-2.5 text-[0.8rem] font-medium text-cream shadow-[0_18px_50px_-20px_rgba(0,0,0,0.8)] sm:block"
              >
                Chat for a free estimate
              </motion.span>
            )}
          </AnimatePresence>

          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-canvas shadow-[0_18px_45px_-12px_rgba(37,211,102,0.65)] transition-transform duration-300 group-hover:scale-105">
            {/* pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
            <WhatsAppIcon className="relative h-7 w-7" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
