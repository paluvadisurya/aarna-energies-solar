"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Magnetic from "./Magnetic";

type Variant = "filled" | "ghost" | "accent" | "whatsapp";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  magnetic?: boolean;
  external?: boolean;
  ariaLabel?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-pill px-7 py-3.5 text-[0.8125rem] font-medium tracking-wide transition-[color,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";

const variants: Record<Variant, string> = {
  filled:
    "bg-dark-cork text-cream border border-transparent hover:bg-[#46301d] hover:shadow-[0_0_0_1px_rgba(255,237,215,0.12),0_18px_50px_-20px_rgba(232,128,31,0.55)]",
  ghost:
    "bg-transparent text-cream border border-cream/60 hover:border-sienna hover:text-cream",
  accent:
    "bg-transparent text-cream border border-sienna/80 hover:bg-sienna hover:text-canvas",
  whatsapp:
    "bg-dark-cork text-cream border border-cream/15 hover:border-[#25D366]/70 hover:shadow-[0_0_0_1px_rgba(37,211,102,0.25),0_18px_50px_-18px_rgba(37,211,102,0.45)]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "filled",
  icon,
  className,
  magnetic = true,
  external,
  ariaLabel,
}: ButtonProps) {
  const cls = cn(base, variants[variant], className);

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <span className="relative z-10 grid place-items-center transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const node = href ? (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  ) : (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {inner}
    </button>
  );

  return magnetic ? <Magnetic strength={0.25}>{node}</Magnetic> : node;
}
