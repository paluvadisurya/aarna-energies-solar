"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/cn";

type RevealTextProps = {
  text: string;
  className?: string;
  /** split granularity */
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

const container: Variants = {
  hidden: {},
  show: (custom: { delay: number; stagger: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const item: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const maskStyle = { paddingBottom: "0.12em", marginBottom: "-0.12em" } as const;

function Mask({ children }: { children: React.ReactNode }) {
  return (
    <span aria-hidden className="inline-block overflow-hidden align-bottom" style={maskStyle}>
      <motion.span variants={item} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Masked line-reveal: each word (or char) rises from behind a clip mask with a
 * stagger — the signature character-reveal motion of the design system.
 * Words are kept on one line (no mid-word breaks); spaces between words wrap.
 */
export default function RevealText({
  text,
  className,
  by = "word",
  delay = 0,
  stagger = 0.045,
  once = true,
  as = "span",
}: RevealTextProps) {
  const words = text.split(" ");
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("inline", className)}
      variants={container}
      custom={{ delay, stagger }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-8% 0px" }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span className="inline-block whitespace-nowrap">
            {by === "char"
              ? Array.from(word).map((ch, ci) => <Mask key={ci}>{ch}</Mask>)
              : <Mask>{word}</Mask>}
          </span>
          {wi < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </MotionTag>
  );
}
