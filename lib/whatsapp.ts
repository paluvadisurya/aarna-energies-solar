import { site } from "@/config/site.config";

/**
 * Build a wa.me deep link to the company's WhatsApp Business chat.
 * Pass an optional custom message; falls back to the configured default.
 */
export function whatsappLink(message?: string): string {
  const number = site.contact.whatsapp.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(message ?? site.contact.whatsappDefaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}

/** tel: link for the company phone number. */
export function telLink(): string {
  return `tel:${site.contact.phoneRaw}`;
}

/** mailto: link for the company email. */
export function mailLink(subject = "Rooftop Solar Enquiry"): string {
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
}
