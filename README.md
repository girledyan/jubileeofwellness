# Jubilee of Wellness — Ready to Roll! waitlist

Waitlist landing page for **Ready to Roll!**, a monthly essential oil
roller subscription. Collects name + email into Postgres.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Prisma** + **Postgres**
- **Tailwind CSS**

## Getting started

You need a Postgres database — a free [Neon](https://neon.tech) or
[Vercel Postgres](https://vercel.com/storage/postgres) project is the
fastest way to get a connection string with no local install.

```bash
npm install
cp .env.example .env      # fill in DATABASE_URL and ADMIN_KEY
npm run db:push           # create the waitlist_signup table
npm run dev                # http://localhost:3000
```

## Viewing signups

Visit `/admin?key=YOUR_ADMIN_KEY` (the `ADMIN_KEY` you set in `.env`) to
see every name + email that's joined the waitlist, newest first.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint
- `npm run typecheck` — type-check without emitting
- `npm run db:push` — sync the Prisma schema to the database
- `npm run db:studio` — open Prisma Studio to browse the database
