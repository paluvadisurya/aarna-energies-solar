import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/config/site.config";
import "./globals.css";

/* halyard-display-variable substitute per the design system */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = site.meta.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.company.name} · ${site.meta.tagline}`,
    template: `%s · ${site.company.name}`,
  },
  description: site.meta.description,
  keywords: [...site.meta.keywords],
  authors: [{ name: site.company.legalName }],
  creator: site.company.legalName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: site.company.name,
    title: `${site.company.name} · ${site.meta.tagline}`,
    description: site.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.company.name} · ${site.meta.tagline}`,
    description: site.meta.description,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: site.company.name,
    statusBarStyle: "black-translucent",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#100904",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
