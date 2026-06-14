import { site } from "@/config/site.config";

/**
 * Brand lockup: a solar "A" mark (sun + panel) next to the AARNA ENERGIES
 * wordmark in two weights so the name reads clearly and stands out.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label={`${site.company.name} home`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-dark-cork ring-1 ring-cream/10 transition-colors duration-500 group-hover:ring-sienna/50">
        <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden>
          <circle cx="27" cy="12" r="6.5" fill="#e8801f" className="origin-center transition-transform duration-500 group-hover:scale-110" />
          <circle cx="27" cy="12" r="6.5" fill="url(#lg)" />
          <path d="M9 31 L17.5 9 L22.5 9 L31 31 L25 31 L20 17.5 L15 31 Z" fill="#ffedd7" />
          <path d="M15.4 26.5 H24.6" stroke="#100904" strokeWidth="2.2" />
          <defs>
            <radialGradient id="lg" cx="0.35" cy="0.3" r="0.8">
              <stop offset="0" stopColor="#f7b733" />
              <stop offset="1" stopColor="#dc5000" />
            </radialGradient>
          </defs>
        </svg>
      </span>
      {!compact && (
        <span className="flex items-baseline gap-1 leading-none">
          <span className="text-[1.02rem] font-bold tracking-[0.06em] text-cream">AARNA</span>
          <span className="hidden text-[1.02rem] font-light tracking-[0.18em] text-cream/70 sm:inline">
            ENERGIES
          </span>
        </span>
      )}
    </a>
  );
}
