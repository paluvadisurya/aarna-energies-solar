import { site } from "@/config/site.config";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Positioning from "@/components/sections/Positioning";
import WhyAarna from "@/components/sections/WhyAarna";
import Technology from "@/components/sections/Technology";
import InverterComparison from "@/components/sections/InverterComparison";
import SystemSpecs from "@/components/sections/SystemSpecs";
import Impact from "@/components/sections/Impact";
import ScopeOfWork from "@/components/sections/ScopeOfWork";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.company.legalName,
    alternateName: site.company.name,
    description: site.meta.description,
    url: site.meta.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    taxID: site.company.gst,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.company.location.city,
      addressRegion: site.company.location.state,
      addressCountry: site.company.location.country,
    },
    areaServed: `${site.company.location.state}, ${site.company.location.country}`,
    makesOffer: {
      "@type": "Offer",
      name: site.pricing.plan.name,
      price: "185000",
      priceCurrency: "INR",
    },
    knowsAbout: site.meta.keywords,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <SmoothScroll />
      <ScrollProgress />
      <Nav />
      <FloatingWhatsApp />

      <main>
        <Hero />
        <Marquee />
        <WhatWeDo />
        <Positioning />
        <WhyAarna />
        <Technology />
        <InverterComparison />
        <SystemSpecs />
        <Impact />
        <ScopeOfWork />
        <Pricing />
        <Partners />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
