import { site } from "@/config/site.config";

/** Wordmark: a small solar-panel "A" mark + the AARNA wordmark. */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label={`${site.company.name} home`}>
      <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
        <circle cx="26" cy="13" r="7.5" fill="#e8801f" className="origin-center transition-transform duration-500 group-hover:scale-110" />
        <path d="M11 30 L18.5 10 L22.5 10 L30 30 L24.5 30 L20.5 17 L16.5 30 Z" fill="#ffedd7" />
        <path d="M16.5 25.5 H24.5" stroke="#100904" strokeWidth="2.4" />
      </svg>
      {!compact && (
        <span className="text-[1.05rem] font-semibold tracking-[0.14em] text-cream">
          {site.nav.wordmark}
        </span>
      )}
    </a>
  );
}
