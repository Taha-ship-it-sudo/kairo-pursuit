# Kairo Pursuit

Marketing site for **Kairo Pursuit** — consulting and AI automation for small businesses. Based in San Luis Obispo, CA; serving California, Texas, and Colorado.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing copy

All site copy lives in [`src/content/site.ts`](src/content/site.ts). Update text, FAQs, contact email, and social links there.

## Contact form

Form submissions email `tahaashraf@kairopursuit.com` via [Resend](https://resend.com).

1. Copy `.env.example` → `.env.local`
2. Add your `RESEND_API_KEY`
3. Restart `npm run dev`

For production on Vercel, add the same env vars in the project settings.

## Deploy

Deploy to Vercel with the default Next.js settings.
