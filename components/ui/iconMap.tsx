import {
  SunMedium,
  LayoutGrid,
  Cpu,
  BatteryCharging,
  Zap,
  PlugZap,
  Gift,
  Leaf,
  ShieldCheck,
  Ruler,
  Wrench,
  FileCheck2,
  Smartphone,
  LifeBuoy,
  Sun,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the friendly "icon" names used in config/site.config.ts to real icons.
 * Add a name here if you reference a new icon in the config.
 */
const map: Record<string, LucideIcon> = {
  survey: Ruler,
  panel: SunMedium,
  grid: LayoutGrid,
  chip: Cpu,
  battery: BatteryCharging,
  bolt: Zap,
  plug: PlugZap,
  gift: Gift,
  leaf: Leaf,
  shield: ShieldCheck,
  install: Wrench,
  document: FileCheck2,
  monitor: Smartphone,
  support: LifeBuoy,
  sun: Sun,
};

export function SectionIcon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Sun;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
