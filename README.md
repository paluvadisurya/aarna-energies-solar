# Aarna Energies — Website

A cinematic, conversion-focused marketing site for **Shree Aarna Energies LLP**, an engineering-led rooftop solar EPC. Built to turn visitors into WhatsApp leads.

> _"Solar is a 25-year infrastructure asset — not a short-term electrical purchase."_

![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-087ea4?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)
![Motion](https://img.shields.io/badge/Motion-12-ff4d8d)

---

## ✨ Highlights

- **Cinematic single-scroll experience** — a warm, dark "engineered light" aesthetic with a live animated solar core (HTML canvas), masked character-reveal headlines, scroll-driven parallax and buttery smooth scrolling.
- **WhatsApp-first lead generation** — every primary action opens a pre-filled WhatsApp Business chat. A persistent floating chat bubble follows the visitor, and pricing CTAs deep-link with the plan already in the message.
- **One-file content editing** — all copy, prices, specs, phone numbers and the WhatsApp number live in [`config/site.config.ts`](config/site.config.ts). No need to touch component code.
- **Fully responsive** — purpose-built desktop and mobile layouts, including a full-screen mobile menu.
- **Fast & SEO-ready** — statically prerendered, with Open Graph metadata, JSON-LD `LocalBusiness` structured data, `sitemap.xml` and `robots.txt`.
- **Accessible & considerate** — respects `prefers-reduced-motion`, semantic markup, keyboard-operable controls.

---

## 🧰 Tech Stack

| Layer        | Choice                                     |
| ------------ | ------------------------------------------ |
| Framework    | Next.js 16 (App Router, Turbopack)         |
| UI           | React 19 + TypeScript                      |
| Styling      | Tailwind CSS v4 (design tokens in CSS)     |
| Animation    | Motion (Framer Motion) 12                  |
| Smooth scroll| Lenis                                      |
| Fonts        | Plus Jakarta Sans (variable, via next/font)|

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build && npm run start
```

Requires **Node.js 18.18+** (Node 20+ recommended).

---

## ✏️ Editing the Content (start here)

**You almost never need to touch the code.** Everything visible on the site is in one file:

```
config/site.config.ts
```

Open it, change the text between the quotes, save. A few common edits:

### Change the WhatsApp number (most important)

```ts
contact: {
  whatsapp: "918686883329",   // ← international format, no "+" or spaces
  whatsappDefaultMessage: "Hi Aarna Energies 👋 ...",
}
```

Every "Chat on WhatsApp" button, the floating bubble and the contact section all use this number automatically.

### Change the price

```ts
pricing: {
  plan: {
    price: "₹1,85,000",
    priceNote: "Complete system, including GST",
    includes: [ "3 kW Adani or reputed-make panels", /* ... */ ],
  },
}
```

### Update phone, email, address, bank details

```ts
contact: {
  phone: "+91 86868 83329",
  email: "sriaarnaenergies@gmail.com",
  bank: { name: "...", accountNumber: "...", ifsc: "..." },
}
```

### Add / edit an FAQ, a technology trend, a spec, a pillar…

Find the matching section in the config (they're numbered and commented) and edit the list. Lists are just items separated by commas — add or remove freely.

> 💡 Tip: keep the quotes `" "` around text and the commas at the end of each line.

---

## 🗂️ Project Structure

```
aarna-energies/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Assembles all sections + JSON-LD
│   ├── globals.css         # Design tokens (Tailwind v4 @theme) + base styles
│   ├── sitemap.ts          # /sitemap.xml
│   └── robots.ts           # /robots.txt
├── components/
│   ├── sections/           # One file per page section (Hero, Pricing, …)
│   └── ui/                 # Reusable primitives (Button, Counter, SunField, …)
├── config/
│   └── site.config.ts      # ⭐ ALL editable content
├── lib/
│   ├── whatsapp.ts         # WhatsApp / tel / mailto link builders
│   └── cn.ts               # className helper
└── public/
    └── favicon.svg         # Solar "A" mark
```

### Page sections (top → bottom)

Hero → Marquee → Positioning → Why Aarna → Technology → Inverter Comparison → System Specs → Impact → Scope of Work → Pricing → Partners → FAQ → Contact → Footer.

---

## 🎨 Design System

The visual language is a warm, dark "studio" aesthetic. Tokens are defined once in `app/globals.css` under Tailwind's `@theme`:

| Token            | Value     | Role                                  |
| ---------------- | --------- | ------------------------------------- |
| `canvas`         | `#100904` | Warm near-black page background        |
| `cream`          | `#ffedd7` | Primary text & borders                 |
| `sienna`         | `#dc5000` | Burnt-sienna hairline accent           |
| `dark-cork`      | `#382416` | Filled button / card surface           |
| `solar-amber`    | `#e8801f` | The animated sun glow                  |
| `forest`         | `#445231` | Eco / environmental-impact motif       |

Type uses **Plus Jakarta Sans** across every scale, from 10px labels to room-filling display headlines.

---

## ☁️ Deployment

This is a standard Next.js app — deploy anywhere that supports Next 16. The easiest is **Vercel**:

1. Push to GitHub (already configured).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Deploy — no environment variables required.

Update `meta.url` in `config/site.config.ts` to your live domain so SEO metadata and the sitemap point to the right place.

---

## 📞 Company

**Shree Aarna Energies LLP** · GST 37AFPFS4704M1ZC
Vizianagaram, Andhra Pradesh, India
📱 +91 86868 83329 · ✉️ sriaarnaenergies@gmail.com

Channel partner for **SolarEdge** & **S R Portables**.

---

_Built with care. Powered by good choices and pure sunshine._ ☀️
