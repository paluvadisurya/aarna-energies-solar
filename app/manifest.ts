import type { MetadataRoute } from "next";
import { site } from "@/config/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.company.name} · ${site.meta.tagline}`,
    short_name: site.company.name,
    description: site.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#100904",
    theme_color: "#100904",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
