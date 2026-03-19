# Strattegys Landing Page Style Guide

Extracted from [strattegys.com](https://www.strattegys.com/) and the Strattegys brand logo.

---

## Brand Colors

### Primary Palette (from logo)

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Amber/Orange** | `#E8922F` | `rgb(232, 146, 47)` | Primary accent, CTAs, highlighted text, logo sunset gradient |
| **Teal** | `#008080` | `rgb(0, 128, 128)` | Secondary accent, tags, category labels, subscribe button on site |
| **Deep Navy** | `#0B1622` | `rgb(11, 22, 34)` | Dark backgrounds (landing page mode) |
| **Charcoal** | `#222222` | `rgb(34, 34, 34)` | Primary text color on light backgrounds |
| **Off-White** | `#FAF9F5` | `rgb(250, 249, 245)` | Warm light background (site uses this, slightly cream) |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Card backgrounds, nav background |

### Extended Palette

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| Light Gray BG | `#F5F5F5` | `rgb(245, 245, 245)` | Alternate section backgrounds |
| Divider Gray | `#E0E0E0` | `rgb(224, 224, 224)` | Horizontal rules, separators |
| Dark Card | `#303030` | `rgb(48, 48, 46)` | Dark mode card backgrounds |
| Overlay | `rgba(31,30,29,0.15)` | — | Subtle overlays, shadows |

### Landing Page Dark Mode Palette

For dark-themed landing pages (like the BCA funnel page), derive from the brand:

| Role | Hex | Usage |
|------|-----|-------|
| `--bg-primary` | `#0B1622` | Page background |
| `--bg-secondary` | `#0F1D2E` | Alternate section background |
| `--bg-card` | `#132436` | Card backgrounds |
| `--bg-card-hover` | `#183044` | Card hover state |
| `--accent` | `#E8922F` | Primary accent (amber) |
| `--accent-glow` | `rgba(232,146,47,0.15)` | Glow effects behind CTAs |
| `--accent-warm` | `#3BBFB2` | Secondary accent (teal) |
| `--text-primary` | `#EEF0F2` | Headings, primary text |
| `--text-secondary` | `#8A9BB0` | Body text, descriptions |
| `--text-muted` | `#506478` | Meta text, captions |
| `--border` | `#1E3248` | Card borders, dividers |
| `--border-accent` | `rgba(232,146,47,0.35)` | Active/hover borders |

---

## Typography

### Font Stack

| Role | Font | Fallback | Weight(s) | Usage |
|------|------|----------|-----------|-------|
| **Headings** | Montserrat | system-ui, sans-serif | 700, 800 | Article titles, hero headlines, brand name |
| **Body** | Inter | ui-sans-serif, system-ui | 400, 500 | Body text, descriptions, excerpts |
| **Tags/Meta** | Source Sans 3 | system-ui | 600 | Category tags, labels |
| **Code/Mono** | Space Mono | Consolas, monospace | 400, 700 | Section labels, technical text (landing pages) |

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Notes |
|---------|------|--------|-------------|----------------|-------|
| Hero Headline (landing) | 42-72px | 700 | 1.1 | normal | Montserrat, scales with `clamp()` or breakpoints |
| Featured Article Title | 42px | 700 | 46.2px (1.1) | normal | Montserrat |
| Section Heading | 32-40px | 700 | 1.2 | normal | |
| Section Label | 14-16px | 800 | 1.2 | 2-3px | Uppercase, mono font on landing pages |
| Card Title | 16-20px | 700 | 1.1 | normal | |
| Body Text | 16px | 400 | 24px (1.5) | normal | |
| Excerpt Text | 16px | 400 | 24px (1.5) | normal | Slightly muted color |
| Button Text | 16px | 500 | 24px | normal | Montserrat |
| Tag/Label | 14px | 600 | 16.8px | normal | Source Sans 3, teal color |
| Meta/Caption | 12-14px | 400 | 1.4 | normal | Muted color |

---

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Section padding | `6rem 2rem` (desktop), `4rem 1.25rem` (mobile) | Vertical rhythm between sections |
| Max content width | `1280px` | Main container |
| Card padding | `1.5rem` (24px) | Internal card spacing |
| Card gap | `1.25rem` (20px) | Grid gap between cards |
| Component gap | `1rem` (16px) | Between related elements |
| Text stack gap | `0.5-1rem` | Between heading/subheading/body |

---

## Components

### Buttons

**Primary CTA (Subscribe style)**
- Background: `#E8922F` (amber) or `#008080` (teal, used on strattegys.com)
- Text: `#FFFFFF`
- Font: Montserrat, 16px, weight 500
- Padding: `1rem 2.5rem` (landing), `8px 12px` (site nav)
- Border-radius: `5px`
- Border: `1px solid rgba(255,255,255,0.2)`
- Hover: `translateY(-2px)`, increased box-shadow glow

**Secondary CTA (Outline)**
- Background: transparent
- Text: `#E8922F` (amber accent)
- Border: `1px solid rgba(232,146,47,0.35)`
- Same padding and radius as primary
- Hover: fill with `rgba(232,146,47,0.15)`

### Cards

**Light mode (site)**
- Background: `#FFFFFF`
- Border: none (clean, minimal)
- Image at top, full bleed
- Subtle shadow on hover

**Dark mode (landing pages)**
- Background: `#132436`
- Border: `1px solid #1E3248`
- Top gradient line on hover: `linear-gradient(90deg, #E8922F, #3BBFB2)`
- Hover: border transitions to `rgba(232,146,47,0.35)`, `translateY(-3px)`
- Border-radius: `0.75rem` (12px)

### Tags / Category Labels

- Font: Source Sans 3, 14px, weight 600
- Color: `#008080` (teal)
- No background, no border (inline text)
- On dark landing pages: use `#3BBFB2` (lighter teal) or `#E8922F` (amber)

### Section Labels (Landing Pages)

- Font: Space Mono, 12-14px, weight 400
- Letter-spacing: `3px`
- Text-transform: uppercase
- Color: `#E8922F` (amber accent)

### Dividers

- Background: `#E0E0E0` (light mode)
- Background: `#1E3248` (dark mode)
- Height: `1px`
- Full-width within content container

---

## Layout Patterns

### Navigation

- Fixed top, full-width
- Background: white (light) or `rgba(11,22,34,0.85)` with `backdrop-filter: blur(20px)` (dark)
- Logo left, CTA right
- Border-bottom: `1px solid #E0E0E0` (light) or `1px solid #1E3248` (dark)
- Brand name: Montserrat, uppercase on landing pages; logo mark + wordmark on site

### Hero Section

- Full viewport height (`min-height: 100vh`)
- Centered text, max-width `48rem` (768px)
- Background gradient: `linear-gradient(135deg, #0B1622 0%, #0E1A2A 50%, #0B1825 100%)`
- Decorative: blurred radial gradient orbs (amber top-right, teal bottom-left)
- Staggered fade-up animations on load (100-700ms delays)

### Content Grid

- Max width: `1280px`, centered
- Featured post: 2-column (image left, text right) on desktop, stacked on mobile
- Post grid: 2-column on desktop, single column on mobile
- Gap: `1.5rem`

### Footer

- Light gray background (site) or dark with border-top (landing)
- Logo + wordmark left
- Navigation links in columns right
- Copyright bar at bottom
- Clean, minimal

---

## Logo Usage

The Strattegys logo is a circular mark featuring:
- **Outer ring**: Warm amber/orange gradient (sunset tones)
- **Middle**: Cream/light horizon
- **Lower half**: Teal/dark teal ocean waves
- **Center silhouette**: Dark navy figure + faucet/bridge motif

**Colors extracted from logo:**
- Sunset orange: `#E8922F` to `#D4771E`
- Warm amber: `#F0A84A`
- Teal water: `#3BBFB2` to `#008080`
- Dark navy silhouette: `#0B1622`
- Cream/light: `#FAF9F5`

**Minimum size**: 32px height for digital use
**Clear space**: Half the logo height on all sides

---

## Animation Guidelines

### Scroll Reveals
- Trigger: IntersectionObserver, threshold 0.1
- Animation: `opacity 0->1`, `translateY(30px->0)`
- Duration: `0.7s`
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Stagger: `0.08-0.1s` between siblings
- Fire once only

### Hero Load Animations
- Timer-based (not scroll), staggered `0.1-0.7s` delays
- Same easing and transform as scroll reveals
- Duration: `0.8s`

### Hover Transitions
- Duration: `0.3s`
- Cards: `translateY(-3px)` + border color change
- Buttons: `translateY(-2px)` + glow box-shadow increase
- Links: `opacity 0.8`

### Pulse Dot (badge indicator)
- `scale(1) -> scale(1.5) -> scale(1)` with opacity fade
- Duration: `2s`, infinite loop

---

## Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | `< 640px` | Single column, stacked CTAs, reduced padding, smaller headings |
| Tablet | `640-768px` | 2-column grid starts, medium headings |
| Desktop | `768px+` | Full layout, side-by-side sections, large headings |
| Wide | `1280px` | Max content width reached |

### Key Responsive Changes
- Hero headline: `text-4xl` (mobile) -> `text-7xl` (desktop)
- Section padding: `4rem 1.25rem` (mobile) -> `6rem 2rem` (desktop)
- Card grids: 1 col -> 2 col -> 3 col
- CTA buttons: stack vertically on mobile, row on desktop
- Process timeline: always left-aligned vertical (works at all sizes)
