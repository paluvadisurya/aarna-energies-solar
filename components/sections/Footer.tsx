import { site } from "@/config/site.config";
import { whatsappLink, telLink, mailLink } from "@/lib/whatsapp";
import Logo from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer() {
  const { footer, company, contact } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cork-shadow/70 bg-canvas-deep">
      <div className="section-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[0.92rem] leading-relaxed text-cream/60">
              {footer.blurb}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-pill border border-cream/15 bg-dark-cork px-5 py-3 text-[0.8rem] font-medium text-cream transition-colors hover:border-[#25D366]/70"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {contact.phone}
            </a>
          </div>

          {/* link columns */}
          {footer.columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="t-eyebrow text-grey-brown">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="link-accent text-[0.88rem] text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact column */}
          <div className="md:col-span-3">
            <h4 className="t-eyebrow text-grey-brown">Get In Touch</h4>
            <ul className="mt-5 space-y-3 text-[0.88rem] text-cream/70">
              <li>
                <a href={telLink()} className="link-accent transition-colors hover:text-cream">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={mailLink()} className="link-accent break-all transition-colors hover:text-cream">
                  {contact.email}
                </a>
              </li>
              <li className="text-cream/60">
                {company.location.city}, {company.location.state}, {company.location.country}
              </li>
              <li className="pt-2 text-[0.78rem] text-grey-brown">GST · {company.gst}</li>
            </ul>
          </div>
        </div>

        <hr className="dashed-rule mt-14" />

        <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[0.78rem] text-grey-brown">
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="text-[0.78rem] text-cream/50">{footer.closingLine}</p>
        </div>
      </div>
    </footer>
  );
}
