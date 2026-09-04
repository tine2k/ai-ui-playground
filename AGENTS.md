# Repository: ai-ui-playground

Playground for AI-powered UI experiments. The current experiment is a
Next.js 16 analytics dashboard.

## Stack

- Next.js 16.3.4 (App Router) + React 19.2.8
- TypeScript 5, strict mode (`tsconfig.json`)
- Tailwind CSS 4 via PostCSS (`postcss.config.mjs`, `@tailwindcss/postcss`)
- ESLint 9 flat config (`eslint.config.mjs`, `eslint-config-next`)
- `lucide-react` icons; Inter font via `next/font/google`

## Scripts

- `npm run dev` — Next dev server on :3000
- `npm run build` — production build (Next type-checks during build)
- `npm run start` — run the production build
- `npm run lint` — ESLint

There is no separate `typecheck` or `test` script — whenever you finish
changes, run `npm run lint` and `npm run build` (the build performs
type-checking).

## Structure

- `app/layout.tsx` — root layout; loads Inter font, sets metadata
- `app/page.tsx` — server component, reads `?currency=` and renders
  `CurrencyProvider` + `Dashboard`
- `app/globals.css` — Tailwind v4 `@import`, defines status-badge theme
  tokens (`--color-status-*`)
- `app/components/Dashboard.tsx` — page shell; computes sidebar width from
  media queries (0 / 64 / 240)
- `app/components/Sidebar.tsx` — fixed nav, mobile hamburger + backdrop
- `app/components/Header.tsx` — sticky top bar, search, USD/EUR toggle
  (`Link` to `/?currency=...`), bell, avatar
- `app/components/StatCard.tsx` — KPI tile
- `app/components/ChartPlaceholder.tsx` — static Revenue Overview stub
- `app/components/ActivityTable.tsx` — recent-activity table
- `app/components/StatusBadge.tsx` — Completed / Pending / Failed pill
- `app/components/CurrencyContext.tsx` — client context providing
  `currency` and `format(usdAmount)`; exports `formatUSDCents` /
  `formatEURCents` for the table
- `public/` — static assets (default Next.js SVGs)
- `DESIGN.md` — design notes / spec
- `README.md` — user-facing overview

## Conventions

- Path alias `@/*` → repo root (`tsconfig.json`)
- Client components are tagged with `"use client"` at the top; the page is
  a server component
- File extension `.ts`/`.tsx`; strict TS — no implicit `any`
- Tailwind utility-first; bespoke theme tokens live in `globals.css` under
  `@theme { ... }`
- Status colors: `bg-status-*-bg`, `text-status-*-text`,
  `border-status-*-border`
- Currency formatting: server seeds `Currency` from the `currency`
  search param; rates are hard-coded (`USD_TO_EUR = 0.92` in both
  `CurrencyContext.tsx` and `ActivityTable.tsx` — keep them in sync if you
  change)
- No emojis, no extra prose

## Git

- Remote: `origin` → `https://github.com/tine2k/ai-ui-playground.git`
- Default branch: `main`
- User email: `martin.maier.moessner@gmail.com` (set locally)
