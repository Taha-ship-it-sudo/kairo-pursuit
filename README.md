# Kairo Pursuit

Marketing site for **Kairo Pursuit**: tasked (best fit tech for every job) and websites for local service businesses. Based in San Luis Obispo, CA; serving California, Texas, and Colorado.

Live at [kairopursuit.com](https://kairopursuit.com). This repo matches the production deployment from Oct 20, 2026.

## Stack

- Next.js (App Router) + TypeScript
- Plain CSS in `src/app/globals.css` (no Tailwind)
- Archivo from Google Fonts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing copy

Most site copy (contact details, nav, process steps, FAQ) lives in [`src/content/site.ts`](src/content/site.ts). Section layouts are in `src/components/`. Case study screenshots are in `public/case-studies/`.

## Contact form

Form submissions go to `src/app/api/contact/route.ts`, which emails `tahaashraf@kairopursuit.com` through [Resend](https://resend.com).

1. Copy `.env.example` to `.env.local`
2. Add your `RESEND_API_KEY`
3. Restart `npm run dev`

On Vercel, the same env vars are set for Production only, so preview deployments can't send form emails.

## Deploy

The Vercel project is **not** connected to this repo, so pushing here does not change the live site. Deploys are made directly to the `kairo-pursuit` project on Vercel. After deploying a change, commit the same change here so the repo stays in sync with production.
