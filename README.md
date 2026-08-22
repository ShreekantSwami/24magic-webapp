# 24MAGIC Website

Official marketing website for **24MAGIC** by RVK Consultants, built with Next.js and Tailwind CSS.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) v4
- [TypeScript](https://www.typescriptlang.org)
- [Biome](https://biomejs.dev) — linting & formatting
- [Embla Carousel](https://www.embla-carousel.com) — carousels/sliders

## Prerequisites

- [Node.js](https://nodejs.org) 20+
- [pnpm](https://pnpm.io) (package manager)

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Check code with Biome |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm format` | Format code with Biome |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm build:prepare` | Full pre-deploy pipeline (lint → format → typecheck → build) |

## Project Structure

```
src/
├── app/                  # Routes (App Router)
│   ├── page.tsx          # Home
│   ├── about/            # About us
│   ├── services/         # Services
│   ├── solutions/        # Solutions
│   ├── pricing/          # Pricing
│   ├── resources/        # Resources / articles
│   ├── contact/          # Contact
│   ├── privacy-policy/   # Privacy policy
│   └── terms-of-service/ # Terms of service
├── components/           # Reusable UI components
├── data/                 # Mock/content data
└── types.ts              # Shared TypeScript types
```

## Deployment

The site can be deployed on any platform that supports Next.js, e.g. the [Vercel Platform](https://vercel.com/new). Before deploying, run:

```bash
pnpm build:prepare
```

to ensure linting, formatting, type checking, and the production build all pass.
