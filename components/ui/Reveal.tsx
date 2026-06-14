"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** when true, animates every time it enters view, not just once */
  repeat?: boolean;
};

/** Fade + lift wrapper triggered when the element scrolls into view. */
export default function Reveal({ children, className, delay = 0, repeat = false }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: !repeat, margin: "-12% 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}
