# AI UI Playground

A playground for experimenting with AI-powered user interfaces.

## Overview

A Next.js 16 analytics dashboard demo featuring a responsive sidebar, KPI stat
cards, a chart placeholder, and a recent-activity table. It demonstrates a
USD/EUR currency toggle via URL `searchParams`.

## Stack

- Next.js 16.3.4 (App Router)
- React 19.2.8
- TypeScript 5
- Tailwind CSS 4 (PostCSS)
- ESLint 9 (`eslint-config-next`)
- `lucide-react` for icons
- Google Font: Inter (via `next/font`)

## Getting started

```bash
npm install
npm run dev    # http://localhost:3000
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (type-checks via Next)
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Project layout

```
app/
  layout.tsx              # Root layout, loads Inter font and metadata
  page.tsx                # Server component; reads ?currency= and renders Dashboard
  globals.css             # Tailwind v4 entry + status-badge theme tokens
  components/
    Dashboard.tsx         # Page composition + responsive sidebar offset
    Sidebar.tsx           # Fixed sidebar with mobile hamburger
    Header.tsx            # Sticky top bar; contains the USD/EUR toggle Link
    StatCard.tsx          # Single KPI tile
    ChartPlaceholder.tsx  # Static "Revenue Overview" chart stub
    ActivityTable.tsx     # Recent-activity table with formatted amounts
    StatusBadge.tsx       # Pill component (Completed / Pending / Failed)
    CurrencyContext.tsx   # Client context + USD↔EUR formatter helpers
public/                   # Static assets (default Next.js SVGs)
DESIGN.md                 # Design notes / specification
```

## Currency toggle

The page reads `?currency=USD|EUR` in `app/page.tsx:5`, which seeds
`CurrencyProvider`. Components consume `useCurrency()` to format USD amounts
into either locale (EUR applies a fixed rate of `USD_TO_EUR = 0.92`). The
`Header` USD/EUR toggle is a plain `Link` that navigates to the alternate
query string (`Header.tsx:11`).

## Responsive breakpoints

- `< 768px` — sidebar hidden, opened via hamburger; sidebar offset is 0
- `768–1279px` — sidebar collapsed to icons (64px wide)
- `≥ 1280px` — sidebar expanded with labels (240px wide)

These breakpoints drive both the sidebar's own classes and the
`marginLeft` applied to the main content area in `Dashboard.tsx:55`.
