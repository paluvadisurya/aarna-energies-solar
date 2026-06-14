"use client";

import Reveal from "./Reveal";

/** Small uppercase eyebrow with a hairline accent tick — used to open sections. */
export default function SectionLabel({ children }: { children: string }) {
  return (
    <Reveal>
      <span className="inline-flex items-center gap-3">
        <span className="h-px w-7 bg-sienna" />
        <span className="t-eyebrow text-grey-brown">{children}</span>
      </span>
    </Reveal>
  );
}
