# Jubilee of Wellness — Ready to Roll! waitlist

Waitlist landing page for **Ready to Roll!**, a monthly essential oil
roller subscription. The signup form posts directly to Klaviyo — no
backend or database required.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS**
- **Klaviyo** (client-side subscribe API) for collecting signups

## Getting started

```bash
npm install
cp .env.example .env      # fill in your Klaviyo company ID + list ID
npm run dev                # http://localhost:3000
```

## Viewing signups

Signups land directly in your Klaviyo list — view, segment, and email
them from the Klaviyo dashboard. There's no separate admin page in
this app.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint
- `npm run typecheck` — type-check without emitting
