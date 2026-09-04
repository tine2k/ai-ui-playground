# Analytics Dashboard — Design Reference

Living reference for the current implementation (dark theme). The code is the
source of truth — update this file when design decisions change.

## 1. Overview

Single-page analytics dashboard: fixed left sidebar, sticky header, and a
scrollable main area with KPI stat cards, a chart placeholder, and a
recent-activity table. Desktop-first; the sidebar collapses by breakpoint.

Includes a USD/EUR currency toggle (see §7).

## 2. Layout

```
┌────────────┬─────────────────────────────────────────────────────┐
│            │  Dashboard        [Search] [USD/EUR] [Bell] [MM ▾]  │
│  SIDEBAR   ├─────────────────────────────────────────────────────┤
│            │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  Acme Inc  │  │ Revenue  │ │ Users    │ │ Convers. │ │ Growth  │ │
│            │  │ $45,231  │ │ 2,350    │ │ 1,230    │ │ +25.5%  │ │
│  Dashboard │  └──────────┘ └──────────┘ └──────────┘ └─────────┘ │
│  Analytics │  ┌────────────────────────────────────────────────┐ │
│  Reports   │  │ Revenue Overview                 Last 7 days ▾ │ │
│  Settings  │  │              (chart placeholder, 320px)        │ │
│            │  └────────────────────────────────────────────────┘ │
│  ────────  │  ┌────────────────────────────────────────────────┐ │
│  [MM]      │  │ Recent Activity                        View All│ │
│  Martin    │  │  Name        Status      Date           Amount │ │
└────────────┴─────────────────────────────────────────────────────┘
```

## 3. Breakpoints

| Range          | Sidebar                                     | Main content |
|----------------|---------------------------------------------|--------------|
| `< 768px`      | Off-canvas; floating hamburger + backdrop   | No offset    |
| `768–1279px`   | 64px (`md:w-16`), icons only                | `md:ml-16`   |
| `≥ 1280px`     | 240px (`xl:w-60`), icons + labels           | `xl:ml-60`   |

- Mobile hamburger is a floating fixed button (top-left), not part of the header.
- Sidebar/backdrop slide and main margin animate at `duration-200 ease-in-out`.
- Stat cards: 1 column → 2 columns at `sm` (640px) → 4 columns at 1280px.
- Search input and currency toggle are hidden below `sm`.
- Chart placeholder height: 320px, reduced to 240px below `md`.

## 4. Colors

Dark theme built on Tailwind `slate`. Hex shown for reference only — always
use the Tailwind classes.

| Role                    | Class                          | Hex       |
|-------------------------|--------------------------------|-----------|
| Page background         | `bg-slate-900`                 | `#0F172A` |
| Surface (card/sidebar/header) | `bg-slate-800`           | `#1E293B` |
| Hover / active surface  | `bg-slate-700`                 | `#334155` |
| Borders                 | `border-slate-700` (`/70`, `/60` for subtle) | `#334155` |
| Inset areas (search, table head, chart) | `bg-slate-900` or `bg-slate-900/40` | — |
| Primary text            | `text-white`                   | —         |
| Secondary text          | `text-slate-400`               | `#94A3B8` |
| Muted text              | `text-slate-500`               | `#64748B` |
| Accent fill (avatars)   | `bg-blue-500`                  | `#3B82F6` |
| Accent text (links, icons) | `text-blue-400`             | `#60A5FA` |
| Positive change         | `text-emerald-500`             | `#10B981` |
| Notification dot        | `bg-red-500`                   | `#EF4444` |
| Card shadow             | `shadow-lg shadow-black/20`    | —         |

Stat-card icon chips: `bg-{accent}-500/15` container, `text-{accent}-400`
icon, where accent ∈ blue / emerald / amber / pink.

### Status badge tokens

The only bespoke theme tokens; defined in `app/globals.css` under `@theme`.
Badges intentionally keep light pastel colors on the dark UI.

| Status    | Background            | Text                   | Border                   |
|-----------|-----------------------|------------------------|--------------------------|
| Completed | `#ECFDF5`             | `#065F46`              | `#D1FAE5`                |
| Pending   | `#FFFBEB`             | `#92400E`              | `#FEF3C7`                |
| Failed    | `#FEF2F2`             | `#991B1B`              | `#FECACA`                |

Classes: `bg-status-*-bg`, `text-status-*-text`, `border-status-*-border`.

## 5. Typography

Font: Inter via `next/font/google` (loaded in `app/layout.tsx`).

| Style          | Classes                                    |
|----------------|--------------------------------------------|
| Page title     | `text-2xl font-bold leading-8 tracking-tight` (24px) |
| Section title  | `text-base font-semibold` (16px)           |
| Stat value     | `text-3xl font-bold leading-9 tracking-tight` (30px) |
| Body           | `text-sm` (14px)                           |
| Label / nav    | `text-sm font-medium`                      |
| Small / muted  | `text-xs` (12px)                           |
| Badge, table header | `text-xs font-medium` (table headers add `uppercase tracking-wider`) |

## 6. Spacing, Radius, Motion

Tailwind 4px base scale throughout. Key values:

| Element             | Value                                   |
|---------------------|-----------------------------------------|
| Card padding        | `p-6` (24px)                            |
| Main content padding| `p-6`                                   |
| Section gap         | `mb-6` (24px)                           |
| Stat grid gap       | `gap-4`, `gap-6` at ≥1280px             |
| Header / logo area  | `h-16` (64px)                           |
| Nav item            | `h-10`, `gap-3`, `mb-1`                 |
| Table cell          | `py-3`, `px-6` outer cols, `px-4` inner |
| Badge               | `px-2.5 py-0.5`                         |
| Radius: cards       | `rounded-xl` (12px)                     |
| Radius: controls, nav items | `rounded-lg` (8px)              |
| Radius: icon chips  | `rounded-[10px]`                        |
| Radius: badges, avatars | `rounded-full`                      |

Motion: interactive hovers `duration-150 ease-in-out`; table row hover
`duration-100`; sidebar/margin transitions `duration-200`.

## 7. Components

### Sidebar (`Sidebar.tsx`)

Fixed left, full height, `bg-slate-800`. Structure top to bottom:

1. **Logo area** (`h-16 px-4`): full name "Acme Inc" at `xl`, letter "A" at
   `md`; `text-lg font-bold tracking-tight text-white`.
2. **Nav**: Dashboard (active), Analytics, Reports, Settings. Items `h-10
   rounded-lg`, icon 20px, label hidden at `md`. States: inactive
   `text-slate-400`; hover `bg-slate-700 text-slate-300`; active
   `bg-slate-700 text-white`.
3. **User block** (`p-4`): divider (xl only), avatar 36px `bg-blue-500`
   initials, name `text-sm font-medium text-white`, email
   `text-xs text-slate-400` (text hidden below `xl`).

Mobile: hamburger (`Menu`, 24px) fixed top-left; tapping opens the sidebar
over a `bg-black/50` backdrop; close button (`X`, 20px) top-right inside.

### Header (`Header.tsx`)

Sticky top, `h-16`, `bg-slate-800`, `border-b border-slate-700`.
Left: page title. Right (`gap-4`):

1. **Search** — `h-10 w-60 rounded-lg`, `bg-slate-900`, `border-slate-700`,
   `Search` icon 16px `text-slate-400`; focus: `border-blue-500` + ring
   `rgba(59,130,246,0.3)`.
2. **Currency toggle** — `Link` to `/?currency=USD|EUR`; active segment
   `text-white`, inactive `text-slate-500`, separator `text-slate-600`;
   hover `bg-slate-700`.
3. **Bell** — 40px button, hover `bg-slate-700`, 8px `bg-red-500` dot
   top-right.
4. **Avatar** — 32px `bg-blue-500` initials + `ChevronDown` 14px
   `text-slate-400`; hover: slight opacity change.

### Currency (`lib/currency.ts`, `CurrencyContext.tsx`)

`app/page.tsx` reads `?currency=USD|EUR` and seeds `CurrencyProvider`.
Components format via `useCurrency().format(usdAmount, { cents? })`.
The rate (`USD_TO_EUR = 0.92`) and formatter live only in `lib/currency.ts`.

### Stat cards (`StatCard.tsx`, data in `Dashboard.tsx`)

Card base (shared by chart + table cards): `rounded-xl border
border-slate-700/70 bg-slate-800 shadow-lg shadow-black/20`, padding `p-6`.

Structure: label (`text-sm font-medium text-slate-400`) left, 40px icon chip
right → value (`text-3xl font-bold tracking-tight text-white`) → change row
(`TrendingUp` 14px + value, both `text-emerald-500`; "vs last month"
`text-xs text-slate-500`).

| Card          | Icon          | Accent  | Value    | Change  |
|---------------|---------------|---------|----------|---------|
| Total Revenue | `DollarSign`  | blue    | $45,231 (formatted via currency) | +20.1% |
| Active Users  | `Users`       | emerald | 2,350    | +180    |
| Conversions   | `ShoppingCart`| amber   | 1,230    | +12.2%  |
| Growth        | `TrendingUp`  | pink    | +25.5%   | +4.5%   |

### Chart placeholder (`ChartPlaceholder.tsx`)

Card base. Header (`px-6 pt-6`): "Revenue Overview" + dropdown button
("Last 7 days", `border-slate-700`, hover `bg-slate-700`, `ChevronDown`
16px). Body (`p-6`): dashed `border-slate-700` box, `bg-slate-900/40`,
`h-80` (`max-md:h-60`), centered `BarChart3` 48px `text-slate-600` +
caption `text-sm text-slate-500`.

### Activity table (`ActivityTable.tsx`)

Card base. Header (`px-6 py-4`, `border-b border-slate-700`): "Recent
Activity" + "View All" (`text-blue-400`, hover underline).

Table wrapped in `overflow-x-auto`. Header row `bg-slate-900/40`, cells
`border-b border-slate-700`. Body rows: zebra `bg-slate-800` /
`bg-slate-800/60`, dividers `border-slate-700/60`, hover `bg-slate-700/40`.

Columns: Name (avatar 32px `bg-slate-700` + `text-sm font-medium
text-white`), Status (badge), Date (`text-sm text-slate-400`), Amount
(right-aligned, `text-sm font-medium text-white`, formatted with cents).

### Status badge (`StatusBadge.tsx`)

`rounded-full border px-2.5 py-0.5 text-xs font-medium` + status tokens
from §4.

## 8. Icons (lucide-react)

| Usage              | Icon              | Size |
|--------------------|-------------------|------|
| Nav items          | `LayoutDashboard`, `BarChart3`, `FileText`, `Settings` | 20px |
| Search             | `Search`          | 16px |
| Notifications      | `Bell`            | 20px |
| Header dropdown    | `ChevronDown`     | 14px |
| Chart dropdown     | `ChevronDown`     | 16px |
| Stat cards         | `DollarSign`, `Users`, `ShoppingCart`, `TrendingUp` | 20px |
| Change indicator   | `TrendingUp`      | 14px |
| Chart placeholder  | `BarChart3`       | 48px |
| Mobile menu        | `Menu`            | 24px |
| Mobile close       | `X`               | 20px |

Icon colors come from Tailwind text classes, not lucide `color` props.

## 9. Z-Index

| Layer               | Value |
|---------------------|-------|
| Sticky header       | 10    |
| Sidebar             | 20    |
| Mobile backdrop     | 29    |
| Mobile hamburger    | 30    |
| Mobile close button | 31    |

Dropdown/modal/toast layers are not yet needed; add above 40 if introduced.
