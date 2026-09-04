# Analytics Dashboard — Design Specification

## 1. Application Overview

Single-page analytics dashboard for a professional SaaS application. Desktop-first design with a fixed left sidebar, top header bar, and scrollable main content area. Clean, modern aesthetic with generous whitespace and a clear visual hierarchy.

**Target resolution:** 1280px minimum, optimal at 1440px+

---

## 2. ASCII Wireframe

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                              FULL PAGE LAYOUT                                │
├────────────┬─────────────────────────────────────────────────────────────────┤
│            │ ┌─────────────────────────────────────────────────────────────┐ │
│   SIDEBAR  │ │  HEADER BAR                                                │ │
│   240px    │ │  Page Title          🔍 Search    🔔 Bell    [Avatar ▼]    │ │
│            │ ├─────────────────────────────────────────────────────────────┤ │
│  ┌──────┐  │ │                                                             │ │
│  │ LOGO │  │ │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │ │
│  └──────┘  │ │  │ Total    │ │ Active   │ │Conver-   │ │ Growth   │      │ │
│            │ │  │ Revenue  │ │ Users    │ │ sions    │ │          │      │ │
│  ◉ Dash-   │ │  │ $45,231  │ │ 2,350    │ │ 1,230    │ │ +25.5%   │      │ │
│    board   │ │  │ +20.1% ↑ │ │ +180 ↑   │ │ +12.2% ↑ │ │ +4.5% ↑  │      │ │
│  ○ Analy-  │ │  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │ │
│    tics    │ │                                                             │ │
│  ○ Reports │ │  ┌─────────────────────────────────────────────────────┐   │ │
│  ○ Settings│ │  │ Revenue Overview               Last 7 days ▼       │   │ │
│            │ │  │                                                     │   │ │
│            │ │  │   ▓▓                                               │   │ │
│            │ │  │   ▓▓  ▓▓                ▓▓                         │   │ │
│            │ │  │   ▓▓  ▓▓  ▓▓      ▓▓    ▓▓  ▓▓                    │   │ │
│            │ │  │   ▓▓  ▓▓  ▓▓  ▓▓  ▓▓    ▓▓  ▓▓  ▓▓               │   │ │
│            │ │  │ ─────────────────────────────────────────────────  │   │ │
│            │ │  │  Mon   Tue   Wed   Thu   Fri   Sat   Sun          │   │ │
│            │ │  └─────────────────────────────────────────────────────┘   │ │
│            │ │                                                             │ │
│            │ │  ┌─────────────────────────────────────────────────────┐   │ │
│            │ │  │ Recent Activity                                    │   │ │
│            │ │  ├─────────────────────────────────────────────────────┤   │ │
│            │ │  │ Name          Status        Date        Amount     │   │ │
│            │ │  ├─────────────────────────────────────────────────────┤   │ │
│            │ │  │ John Smith    Completed     Jan 12      $250.00   │   │ │
│            │ │  │ Jane Doe      Pending       Jan 11      $180.00   │   │ │
│            │ │  │ Bob Wilson    Failed        Jan 10      $320.00   │   │ │
│            │ │  │ Alice Brown   Completed     Jan 09      $410.00   │   │ │
│            │ │  │ Charlie Davis Completed     Jan 08      $95.00    │   │ │
│            │ │  └─────────────────────────────────────────────────────┘   │ │
│            │ │                                                             │ │
│            │ └─────────────────────────────────────────────────────────────┘ │
│  ───────── │                                                                │
│  [Avatar]  │                                                                │
│  User Name │                                                                │
│  user@co   │                                                                │
│            │                                                                │
└────────────┴─────────────────────────────────────────────────────────────────┘
```

---

## 3. Color Palette

### Primary
| Token              | Hex       | Usage                              |
|--------------------|-----------|-------------------------------------|
| `primary`          | `#3B82F6` | Buttons, links, active states       |
| `primary-hover`    | `#2563EB` | Button hover, link hover            |
| `primary-active`   | `#1D4ED8` | Button active/pressed               |
| `primary-light`    | `#EFF6FF` | Active nav background tint          |
| `primary-ring`     | `#93C5FD` | Focus ring color                    |

### Backgrounds
| Token              | Hex       | Usage                              |
|--------------------|-----------|-------------------------------------|
| `bg-page`          | `#F9FAFB` | Page/main content background        |
| `bg-card`          | `#FFFFFF` | Cards, modals, surfaces             |
| `bg-sidebar`       | `#1E293B` | Sidebar background                  |
| `bg-sidebar-hover` | `#334155` | Sidebar nav item hover              |
| `bg-sidebar-active`| `#334155` | Sidebar active nav item background  |
| `bg-table-alt`     | `#F9FAFB` | Alternating table row               |
| `bg-input`         | `#FFFFFF` | Input field background              |

### Text
| Token              | Hex       | Usage                              |
|--------------------|-----------|-------------------------------------|
| `text-heading`     | `#111827` | Page titles, card values            |
| `text-body`        | `#374151` | Body text, table cell text          |
| `text-muted`       | `#6B7280` | Labels, captions, secondary text    |
| `text-sidebar`     | `#94A3B8` | Sidebar inactive nav text           |
| `text-sidebar-active`| `#FFFFFF`| Sidebar active nav text            |

### Status
| Token              | Hex       | Usage                              |
|--------------------|-----------|-------------------------------------|
| `success`          | `#10B981` | Success badges, positive change     |
| `success-bg`       | `#ECFDF5` | Success badge background            |
| `success-text`     | `#065F46` | Success badge text                  |
| `warning`          | `#F59E0B` | Warning badges, pending status      |
| `warning-bg`       | `#FFFBEB` | Warning badge background            |
| `warning-text`     | `#92400E` | Warning badge text                  |
| `error`            | `#EF4444` | Error badges, failed status, negative change |
| `error-bg`         | `#FEF2F2` | Error badge background              |
| `error-text`       | `#991B1B` | Error badge text                    |

### Borders & Dividers
| Token              | Hex       | Usage                              |
|--------------------|-----------|-------------------------------------|
| `border`           | `#E5E7EB` | Card borders, table borders         |
| `border-focus`     | `#3B82F6` | Focus ring on inputs/buttons        |
| `divider`          | `#F3F4F6` | Horizontal dividers                 |

### Misc
| Token              | Hex       | Usage                              |
|--------------------|-----------|-------------------------------------|
| `icon-muted`       | `#9CA3AF` | Muted icon color (e.g., search)     |
| `shadow-card`      | `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)` | Card shadow |
| `shadow-card-hover`| `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)` | Card hover shadow |

---

## 4. Typography

### Font Stack

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Type Scale

| Token            | Size  | Weight  | Line Height | Letter Spacing | Usage                     |
|------------------|-------|---------|-------------|----------------|---------------------------|
| `page-title`     | 24px  | 700     | 32px        | -0.025em       | Page header title         |
| `section-title`  | 16px  | 600     | 24px        | -0.01em        | Card/section headings     |
| `body`           | 14px  | 400     | 20px        | 0              | Body text, table cells    |
| `body-medium`    | 14px  | 500     | 20px        | 0              | Nav items, button labels  |
| `small`          | 12px  | 400     | 16px        | 0              | Captions, helper text     |
| `small-medium`   | 12px  | 500     | 16px        | 0.01em         | Labels, badge text, uppercase captions |
| `stat-value`     | 30px  | 700     | 36px        | -0.025em       | Stat card large numbers   |

---

## 5. Spacing System

Base unit: **4px**. All spacing values are multiples of 4.

| Token              | Value  | Usage                                    |
|--------------------|--------|------------------------------------------|
| `space-1`          | 4px    | Tight internal spacing                   |
| `space-2`          | 8px    | Icon gaps, small internal padding        |
| `space-3`          | 12px   | Compact element spacing                  |
| `space-4`          | 16px   | Standard padding, gaps between elements  |
| `space-5`          | 20px   | Section internal padding                 |
| `space-6`          | 24px   | Card padding, section margins            |
| `space-8`          | 32px   | Large section margins                    |
| `space-10`         | 40px   | Page horizontal padding                  |
| `space-12`         | 48px   | Major section spacing                    |

### Specific Layout Values

| Element                          | Value  |
|----------------------------------|--------|
| Sidebar width                    | 240px  |
| Sidebar width (collapsed)        | 64px   |
| Sidebar horizontal padding       | 16px   |
| Sidebar nav item padding         | 10px 16px |
| Sidebar nav item gap (vertical)  | 4px    |
| Sidebar logo area height         | 64px   |
| Sidebar logo padding             | 20px 16px |
| Sidebar bottom section padding   | 16px   |
| Header bar height                | 64px   |
| Header horizontal padding        | 32px   |
| Main content padding             | 32px   |
| Main content max-width           | none   |
| Stat cards row gap               | 24px   |
| Stat card padding                | 24px   |
| Stat card height                 | auto   |
| Stat card min-width              | 200px  |
| Section gap (between chart and table) | 24px |
| Chart card padding               | 24px   |
| Chart height                     | 320px  |
| Table card padding               | 0px (header uses padding) |
| Table header padding             | 16px 24px |
| Table row padding                | 12px 24px |
| Table cell padding               | 12px 16px |
| Badge horizontal padding         | 8px    |
| Badge vertical padding           | 2px     |
| Badge border-radius              | 9999px (full pill) |
| Focus ring width                 | 2px    |
| Focus ring offset                | 2px    |

---

## 6. Border Radius

| Token            | Value  | Usage                                |
|------------------|--------|--------------------------------------|
| `radius-sm`      | 6px    | Input fields, small elements         |
| `radius-md`      | 8px    | Buttons                              |
| `radius-lg`      | 12px   | Cards                                |
| `radius-xl`      | 16px   | Modals (if used)                     |
| `radius-full`    | 9999px | Badges, avatars, icon buttons        |

---

## 7. Component Specifications

### 7.1 Left Sidebar

**Dimensions:** 240px wide, full viewport height, fixed position.

**Background:** `#1E293B`

**Structure (top to bottom):**

1. **Logo Area** (height: 64px, padding: `20px 16px`)
   - App name/logo in white, font-size: 18px, font-weight: 700, color: `#FFFFFF`
   - Letter-spacing: -0.025em

2. **Navigation Items** (padding-top: 8px)
   - Each nav item: height: 40px, border-radius: 8px, margin-bottom: 4px
   - Horizontal padding: 16px
   - Display: flex, align-items: center, gap: 12px
   - Icon size: 20px x 20px
   - Text: font-size: 14px, font-weight: 500
   - **Inactive state:** text color `#94A3B8`, icon color `#94A3B8`
   - **Hover state:** background `#334155`, text color `#CBD5E1`, icon color `#CBD5E1`
   - **Active state:** background `#334155`, text color `#FFFFFF`, icon color `#FFFFFF`

**Nav Items:**
| Label      | Icon (lucide-react) | Active |
|------------|---------------------|--------|
| Dashboard  | `LayoutDashboard`   | Yes    |
| Analytics  | `BarChart3`         | No     |
| Reports    | `FileText`          | No     |
| Settings   | `Settings`          | No     |

3. **Bottom User Section** (positioned at bottom of sidebar, padding: 16px)
   - Horizontal divider: height 1px, background `#334155`, margin-bottom: 16px
   - User avatar: 36px x 36px, border-radius: 9999px, background `#3B82F6`
   - User initials centered in avatar: font-size: 14px, font-weight: 600, color: `#FFFFFF`
   - User name: font-size: 14px, font-weight: 500, color: `#FFFFFF`, margin-top: 8px
   - User email: font-size: 12px, color: `#94A3B8`, margin-top: 2px

---

### 7.2 Top Header Bar

**Height:** 64px (fixed within main content area, does not scroll)

**Background:** `#FFFFFF`

**Border-bottom:** 1px solid `#E5E7EB`

**Padding:** `0 32px`

**Layout:** flexbox, align-items: center, justify-content: space-between

**Left side:**
- Page title: "Dashboard", font-size: 24px, font-weight: 700, color: `#111827`, line-height: 32px

**Right side (flex, align-items: center, gap: 16px):**

1. **Search Input**
   - Width: 240px, height: 40px
   - Border: 1px solid `#E5E7EB`, border-radius: 8px
   - Padding: `0 12px 0 36px`
   - Background: `#F9FAFB`
   - Placeholder text: "Search...", font-size: 14px, color: `#9CA3AF`
   - Search icon (`Search` from lucide-react): 16px, color: `#9CA3AF`, positioned 12px from left, centered vertically
   - **Focus state:** border-color `#3B82F6`, box-shadow: `0 0 0 3px rgba(59,130,246,0.1)`, background: `#FFFFFF`

2. **Notification Bell**
   - Size: 40px x 40px, border-radius: 8px
   - Background: transparent
   - Icon: `Bell` from lucide-react, 20px, color: `#6B7280`
   - **Hover state:** background `#F3F4F6`
   - Notification dot: 8px x 8px circle, background `#EF4444`, positioned top-right (2px from top, 2px from right relative to icon bounds)

3. **User Avatar Dropdown**
   - Avatar: 32px x 32px, border-radius: 9999px, background `#3B82F6`
   - Initials: font-size: 12px, font-weight: 600, color: `#FFFFFF`
   - Chevron down icon (`ChevronDown`): 14px, color: `#6B7280`, margin-left: 4px
   - **Hover state:** slight opacity change on avatar

---

### 7.3 Stat Cards Row

**Layout:** CSS Grid or Flexbox, 4 columns, gap: 24px

**Each Stat Card:**
- Background: `#FFFFFF`
- Border-radius: 12px
- Padding: 24px
- Border: 1px solid `#E5E7EB`
- Box-shadow: `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)`
- Min-width: 200px
- **Hover state:** box-shadow: `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`, transition: box-shadow 150ms ease

**Card internal structure (flex column, gap: 16px):**

**Row 1: Icon + Label**
- Flex row, align-items: center, justify-content: space-between
- Left: Label text, font-size: 14px, font-weight: 500, color: `#6B7280`
- Right: Icon container — 40px x 40px, border-radius: 10px, display: flex, align-items: center, justify-content: center
  - Icon size: 20px

**Row 2: Value**
- Font-size: 30px, font-weight: 700, color: `#111827`, line-height: 36px

**Row 3: Change Indicator**
- Flex row, align-items: center, gap: 4px
- Arrow icon: `TrendingUp` from lucide-react, 14px
- Percentage text: font-size: 12px, font-weight: 500
- "vs last month" text: font-size: 12px, color: `#9CA3AF`, margin-left: 4px

**Card Variants:**

| Card           | Icon       | Icon BG       | Icon Color | Value    | Change  | Change Color |
|----------------|------------|---------------|------------|----------|---------|--------------|
| Total Revenue  | `DollarSign` | `#EFF6FF`   | `#3B82F6`  | $45,231  | +20.1%  | `#10B981`    |
| Active Users   | `Users`    | `#F0FDF4`     | `#10B981`  | 2,350    | +180    | `#10B981`    |
| Conversions    | `ShoppingCart` | `#FFF7ED` | `#F59E0B`  | 1,230    | +12.2%  | `#10B981`    |
| Growth         | `TrendingUp` | `#FDF2F8`   | `#EC4899`  | +25.5%   | +4.5%   | `#10B981`    |

---

### 7.4 Chart Area (Revenue Overview)

**Container:** Same card styling as stat cards
- Background: `#FFFFFF`
- Border-radius: 12px
- Border: 1px solid `#E5E7EB`
- Box-shadow: `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)`

**Header row (padding: 24px 24px 0 24px, flex, align-items: center, justify-content: space-between):**
- Left: Title "Revenue Overview", font-size: 16px, font-weight: 600, color: `#111827`
- Right: Dropdown button
  - Text: "Last 7 days", font-size: 14px, font-weight: 500, color: `#374151`
  - ChevronDown icon: 16px, color: `#6B7280`
  - Background: `#FFFFFF`
  - Border: 1px solid `#E5E7EB`
  - Border-radius: 8px
  - Padding: `8px 12px`
  - **Hover state:** background `#F9FAFB`

**Chart placeholder area (padding: 24px):**
- Height: 320px
- Border-radius: 8px
- Background: `#F9FAFB`
- Border: 1px dashed `#E5E7EB`
- Display: flex, flex-direction: column, align-items: center, justify-content: center
- Placeholder icon: `BarChart3` from lucide-react, 48px, color: `#D1D5DB`
- Placeholder text: "Chart placeholder", font-size: 14px, color: `#9CA3AF`, margin-top: 16px

**Bottom padding:** 24px (applied to the card, separate from header)

---

### 7.5 Data Table (Recent Activity)

**Container:** Same card styling
- Background: `#FFFFFF`
- Border-radius: 12px
- Border: 1px solid `#E5E7EB`
- Box-shadow: `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)`

**Card header (padding: 24px, border-bottom: 1px solid #E5E7EB):**
- Flex row, align-items: center, justify-content: space-between
- Left: Title "Recent Activity", font-size: 16px, font-weight: 600, color: `#111827`
- Right: "View All" link, font-size: 14px, font-weight: 500, color: `#3B82F6`, text-decoration: none
  - **Hover state:** text-decoration: underline

**Table structure:**
- Full width (100%)
- Border-collapse: separate, border-spacing: 0

**Table header row:**
- Background: `#F9FAFB`
- Border-bottom: 1px solid `#E5E7EB`
- Cells: padding `12px 24px`, font-size 12px, font-weight 500, color `#6B7280`, text-transform uppercase, letter-spacing 0.05em, text-align left

**Table body rows:**
- Border-bottom: 1px solid `#F3F4F6` (subtle divider between rows)
- **Alternating row background:** even rows `#FFFFFF`, odd rows `#F9FAFB` (optional — can use only bottom border approach)
- Cells: padding `12px 24px`, font-size 14px, color `#374151`, vertical-align middle
- **Hover state:** background `#F9FAFB`

**Column specifications:**

| Column   | Width   | Align    | Font-weight |
|----------|---------|----------|-------------|
| Name     | 30%     | left     | 500 (medium)|
| Status   | auto    | left     | 400 (regular)|
| Date     | auto    | left     | 400 (regular)|
| Amount   | auto    | right    | 500 (medium)|

**Name column cell content:**
- Flex row, align-items: center, gap: 12px
- User avatar: 32px x 32px, border-radius: 9999px, background `#E5E7EB`
- Initials: font-size: 12px, font-weight: 600, color `#6B7280`
- Name text: font-size: 14px, font-weight: 500, color: `#111827`

**Status column cell content:**
- Badge component (pill shape)
- Border-radius: 9999px
- Padding: `2px 10px`
- Font-size: 12px, font-weight: 500

| Status    | Background | Text Color | Border              |
|-----------|------------|------------|---------------------|
| Completed | `#ECFDF5`  | `#065F46`  | 1px solid `#D1FAE5` |
| Pending   | `#FFFBEB`  | `#92400E`  | 1px solid `#FEF3C7` |
| Failed    | `#FEF2F2`  | `#991B1B`  | 1px solid `#FECACA` |

**Date column:** font-size: 14px, color: `#6B7280`

**Amount column:** font-size: 14px, font-weight: 500, color: `#111827`, text-align: right

**Table sample data:**

| Name           | Status    | Date     | Amount  |
|----------------|-----------|----------|---------|
| John Smith     | Completed | Jan 12   | $250.00 |
| Jane Doe       | Pending   | Jan 11   | $180.00 |
| Bob Wilson     | Failed    | Jan 10   | $320.00 |
| Alice Brown    | Completed | Jan 09   | $410.00 |
| Charlie Davis  | Completed | Jan 08   | $95.00  |

---

### 7.6 Buttons

**Primary Button:**
- Height: 40px
- Padding: `0 16px`
- Background: `#3B82F6`
- Color: `#FFFFFF`
- Font-size: 14px, font-weight: 500
- Border-radius: 8px
- Border: none
- Cursor: pointer
- **Hover state:** background `#2563EB`
- **Active state:** background `#1D4ED8`
- **Focus state:** box-shadow: `0 0 0 3px rgba(59,130,246,0.3)`
- **Disabled state:** background `#93C5FD`, cursor: not-allowed

**Secondary Button:**
- Same dimensions as primary
- Background: `#FFFFFF`
- Color: `#374151`
- Border: 1px solid `#E5E7EB`
- **Hover state:** background `#F9FAFB`
- **Active state:** background `#F3F4F6`

---

### 7.7 Input Fields

**Default state:**
- Height: 40px
- Padding: `0 12px`
- Background: `#FFFFFF`
- Border: 1px solid `#E5E7EB`
- Border-radius: 8px
- Font-size: 14px, color: `#111827`
- Placeholder color: `#9CA3AF`

**Focus state:**
- Border-color: `#3B82F6`
- Box-shadow: `0 0 0 3px rgba(59,130,246,0.1)`
- Outline: none

**Error state:**
- Border-color: `#EF4444`
- Box-shadow: `0 0 0 3px rgba(239,68,68,0.1)`

---

### 7.8 Avatars

| Size   | Dimensions | Font Size | Border Radius |
|--------|------------|-----------|---------------|
| `sm`   | 24px       | 10px      | 9999px        |
| `md`   | 32px       | 12px      | 9999px        |
| `lg`   | 36px       | 14px      | 9999px        |
| `xl`   | 48px       | 18px      | 9999px        |

Default background: `#3B82F6`, text color: `#FFFFFF`, font-weight: 600

---

## 8. Shadows

| Token            | Value                                                        |
|------------------|--------------------------------------------------------------|
| `shadow-sm`      | `0 1px 2px 0 rgba(0,0,0,0.05)`                              |
| `shadow-card`    | `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)` |
| `shadow-card-hover` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)` |
| `shadow-dropdown`| `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` |

---

## 9. Transitions & Animations

| Element              | Property        | Duration | Easing              |
|----------------------|-----------------|----------|----------------------|
| Button hover         | background-color| 150ms    | ease-in-out          |
| Card hover (shadow)  | box-shadow      | 150ms    | ease-in-out          |
| Sidebar nav hover    | background-color| 150ms    | ease-in-out          |
| Input focus ring     | box-shadow      | 150ms    | ease-in-out          |
| Sidebar collapse     | width           | 200ms    | ease-in-out          |
| Table row hover      | background-color| 100ms    | ease-in-out          |

---

## 10. Responsive Breakpoints

| Breakpoint | Width        | Sidebar              | Content Adjustments                    |
|------------|--------------|----------------------|----------------------------------------|
| Desktop    | 1280px+      | Full 240px           | Full layout as specified               |
| Tablet     | 768px–1279px | Collapsed to 64px    | Stat cards: 2x2 grid, reduce padding to 16px |
| Mobile     | <768px       | Hidden (off-screen)  | Stat cards: single column, full width  |

### Tablet Adjustments (768px–1279px)
- Sidebar width: 64px
- Sidebar nav: icons only (no labels), centered
- Sidebar logo: show icon only (no text)
- Sidebar user section: show avatar only (no name/email)
- Main content padding: 16px
- Header bar padding: `0 16px`
- Stat cards: CSS Grid, 2 columns, gap: 16px
- Chart: full width
- Table: horizontal scroll on overflow

### Mobile Adjustments (<768px)
- Sidebar: hidden off-screen to the left
- Hamburger menu button in header bar (left side): `Menu` icon from lucide-react, 24px, color `#374151`
- Tapping hamburger slides sidebar in as overlay with backdrop
- Header bar: hamburger on left, title hidden or truncated, avatar only on right
- Stat cards: single column, full width
- Chart: full width, reduced height to 240px
- Table: horizontal scroll with fixed first column

---

## 11. Icon Reference (lucide-react)

| Usage              | Icon Name        | Size  |
|--------------------|------------------|-------|
| Dashboard nav      | `LayoutDashboard`| 20px  |
| Analytics nav      | `BarChart3`      | 20px  |
| Reports nav        | `FileText`       | 20px  |
| Settings nav       | `Settings`       | 20px  |
| Search (header)    | `Search`         | 16px  |
| Notifications      | `Bell`           | 20px  |
| User dropdown      | `ChevronDown`    | 14px  |
| Stat: Revenue      | `DollarSign`     | 20px  |
| Stat: Users        | `Users`          | 20px  |
| Stat: Conversions  | `ShoppingCart`   | 20px  |
| Stat: Growth       | `TrendingUp`     | 20px  |
| Chart placeholder  | `BarChart3`      | 48px  |
| Positive change    | `TrendingUp`     | 14px  |
| Negative change    | `TrendingDown`   | 14px  |
| Mobile menu        | `Menu`           | 24px  |
| Close mobile menu  | `X`              | 24px  |

---

## 12. Z-Index Scale

| Layer             | Z-Index |
|-------------------|---------|
| Page content      | 0       |
| Sticky header     | 10      |
| Sidebar           | 20      |
| Mobile sidebar overlay | 30 |
| Dropdowns         | 40      |
| Modals            | 50      |
| Notifications/toasts | 60  |

---

## 13. CSS Implementation Notes

### Sidebar positioning
```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  z-index: 20;
  overflow-y: auto;
}
```

### Main content offset
```css
.main-content {
  margin-left: 240px;
  min-height: 100vh;
}
```

### Sticky header
```css
.header-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  height: 64px;
}
```

### Table overflow
```css
.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```
