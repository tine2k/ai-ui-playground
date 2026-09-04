# Repository: ai-ui-playground

Playground for AI-powered UI experiments. Current experiment: a Next.js 16
analytics dashboard (design spec in `DESIGN.md`).

## Verify your changes

There is no `test` or `typecheck` script. After changes, run:

- `npm run lint`
- `npm run build` — Next type-checks during build

## Conventions

- Path alias `@/*` → repo root; strict TS — no implicit `any`
- Client components start with `"use client"`; `app/page.tsx` is a server
  component
- Currency: rate (`USD_TO_EUR = 0.92`) and formatters live only in
  `lib/currency.ts`; components use `useCurrency().format(...)`
- Status badges use `bg-status-*-bg`, `text-status-*-text`,
  `border-status-*-border` tokens from `app/globals.css` (`@theme`)
- Tailwind utility-first; bespoke theme tokens only in `globals.css`
- Icon colors via Tailwind text classes (`text-slate-400`, ...), never
  lucide `color=` props
- New UI lives in `app/components/*.tsx`; after design-affecting changes,
  update `DESIGN.md` (code is the source of truth)
- No emojis, no extra prose