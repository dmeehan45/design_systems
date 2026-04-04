# Shipped Work Design System

> **Instant to touch. Calm to use. Obvious to understand.**

ShippedWork is a portfolio platform for builders. It turns shipped projects into proof of taste, judgment, and builder skill. The design system reflects this purpose: professional and trustworthy over playful, more capable than decorative, with minimal motion that never exists without purpose.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Sizing](#spacing--sizing)
5. [Border Radius](#border-radius)
6. [Depth & Texture](#depth--texture)
7. [Motion](#motion)
8. [Surfaces & Cards](#surfaces--cards)
9. [Component Patterns](#component-patterns)
10. [Layout](#layout)
11. [Iconography & Brand](#iconography--brand)
12. [Accessibility](#accessibility)
13. [State Patterns](#state-patterns)

---

## Design Philosophy

| Principle | Description |
|---|---|
| **Professional over playful** | The platform carries someone's career credibility. Every element should feel intentional. |
| **Capable over decorative** | Features earn their place by utility, not visual novelty. |
| **Warm neutrals** | Off-whites and soft grays create approachability without coldness. |
| **Purposeful motion** | Animation exists only to provide feedback or guide attention. |
| **Quiet confirmation** | Success is communicated calmly — toasts and inline signals, not confetti. |
| **Intentional hierarchy** | Editorial serif for display moments, clean sans-serif for everything functional. |

---

## Color System

All colors are defined as CSS custom properties on `:root` (dark) and `:root[data-theme="light"]` (light). The theme is persisted in `localStorage` under the key `shippedwork-theme` and applied via a `data-theme` attribute on `<html>` before hydration to prevent flash.

### Core Palette — Dark Mode (Default)

| Token | Value | Role |
|---|---|---|
| `--background` | `#111417` | Page background |
| `--surface` | `#161b20` | Card / elevated surface background |
| `--foreground` | `#f5f4f2` | Primary text (warm off-white) |
| `--muted` | `#c4beb3` | Secondary text |
| `--muted-foreground` | `#9f978b` | Tertiary / placeholder text |
| `--border` | `#2a3138` | Default borders |
| `--border-strong` | `#3a434c` | Emphasized borders, input borders |
| `--surface-hover` | `#1e252c` | Surface hover state |

### Core Palette — Light Mode

| Token | Value | Role |
|---|---|---|
| `--background` | `#f9f8f6` | Page background (warm off-white) |
| `--surface` | `#f3f1ec` | Card / elevated surface background |
| `--foreground` | `#1a1a1b` | Primary text |
| `--muted` | `#4e4b45` | Secondary text |
| `--muted-foreground` | `#6f6a62` | Tertiary / placeholder text |
| `--border` | `#ebe9e4` | Default borders |
| `--border-strong` | `#d7d2c9` | Emphasized borders |
| `--surface-hover` | `#ece8e1` | Surface hover state |

### Accent Colors

| Token | Dark | Light | Role |
|---|---|---|---|
| `--accent` | `#8ec5b0` (sage green) | `#0f2d22` (dark forest) | Primary interactive color |
| `--accent-hover` | `#a7d4c1` | `#184337` | Accent hover state |
| `--accent-foreground` | `#0f1419` | `#f9f8f6` | Text on accent backgrounds |
| `--accent-muted` | `#1d2b28` | `#e3ebe7` | Subtle accent backgrounds |

### Semantic Colors

| Token | Dark | Light | Role |
|---|---|---|---|
| `--success` | `#34d399` | `#0f766e` | Positive outcomes, verified states |
| `--warning` | `#f59e0b` | `#b45309` | Caution states |
| `--destructive` | `#f87171` | `#b42318` | Errors, destructive actions |
| `--destructive-foreground` | `#140a0a` | `#fff9f9` | Text on destructive backgrounds |

### Derived Aliases

| Token | Value | Role |
|---|---|---|
| `--card` | `var(--surface)` | Card background |
| `--card-foreground` | `var(--foreground)` | Card text |
| `--input` | `var(--surface)` | Input field background |
| `--input-border` | `var(--border-strong)` | Input field border |

---

## Typography

### Font Stacks

| Token | Stack | Usage |
|---|---|---|
| `--font-sans` | `"Manrope", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` | All functional UI: body, buttons, labels, navigation |
| `--font-serif` | `"Instrument Serif", Georgia, "Times New Roman", serif` | Editorial display: section headings, hero text, callouts |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` | Code and technical contexts |

Both Manrope (variable weight) and Instrument Serif (weight 400) are loaded via `next/font/google` with `display: "swap"`.

### Font Rendering

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### Base Body Text

- Font family: `--font-sans` (Manrope)
- Font size: `16px`
- Line height: `1.625`

### Type Hierarchy

| Level | Classes | Description |
|---|---|---|
| **Display / Hero** | `font-editorial text-3xl sm:text-4xl tracking-tight` | Hero headings, page titles. Uses Instrument Serif. |
| **Section Heading** | `font-editorial text-2xl sm:text-3xl` | Major section headings |
| **Card Title** | `font-editorial text-[22px] leading-[30px] font-semibold` | Project card names, sub-section titles |
| **Subtitle** | `text-lg font-semibold` | Card headers, list item headings |
| **Body** | `text-base leading-relaxed` | Default paragraph text |
| **Small / Description** | `text-sm text-muted` | Supporting descriptions |
| **Tiny / Label** | `text-xs font-medium text-muted-foreground` | Metadata labels, timestamps |
| **Editorial Kicker** | `.editorial-kicker` | Category labels above headings |

### Editorial Kicker

```css
.editorial-kicker {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 650;
}
```

### Logo Wordmark

```css
font-weight: 500; /* medium */
text-transform: uppercase;
letter-spacing: 0.22em;
```

### Text Clamping

- `line-clamp-1` — Single-line truncation
- `line-clamp-2` — Two-line truncation (descriptions)

---

## Spacing & Sizing

### Spacing Scale

| Token | Value |
|---|---|
| `--space-xs` | `8px` |
| `--space-sm` | `12px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |
| `--space-xl` | `32px` |
| `--space-2xl` | `48px` |
| `--space-3xl` | `72px` |
| `--space-4xl` | `96px` |

### Container Max-Widths

| Token | Value | Usage |
|---|---|---|
| `--max-width-layout` | `1200px` | Main site grid / page containers |
| `--max-width-dashboard` | `1360px` | Dashboard / wider admin views |
| `--max-width-content` | `720px` | Editorial / narrative content column |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Card surfaces, small elements |
| `--radius-md` | `6px` | Buttons, inputs |
| `--radius-lg` | `8px` | Large cards, containers |
| `--radius-card` | `8px` | Card components |
| `--radius-full` | `9999px` | Pill badges, avatars, toggles |

---

## Depth & Texture

### Shadow Tiers

Three levels of depth using an inset light-edge highlight combined with a subtle drop shadow:

| Tier | Token | CSS Value | Usage |
|---|---|---|---|
| **Level 1** | `--surface-shadow-1` | `0 1px 0 rgba(255,255,255,0.35) inset, 0 10px 24px rgba(18,24,30,0.06)` | Default card surface, `.card-surface` |
| **Level 2** | `--surface-shadow-2` | `0 1px 0 rgba(255,255,255,0.42) inset, 0 14px 28px rgba(18,24,30,0.1)` | Hovered cards, `.card-artifact` |
| **Level 3** | `--surface-shadow-3` | `0 1px 0 rgba(255,255,255,0.5) inset, 0 20px 36px rgba(18,24,30,0.16)` | Elevated / prominent elements |

### Surface Grain Texture

A subtle noise overlay that adds tactile quality to surfaces:

```css
.surface-grain::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: var(--texture-opacity); /* 0.08 dark, 0.06 light */
  background-image: radial-gradient(circle at 1px 1px, currentColor 0.7px, transparent 0.8px);
  background-size: 3px 3px;
  color: color-mix(in srgb, var(--foreground) 18%, transparent);
  mix-blend-mode: multiply;
}
```

Applied selectively (e.g., landing page pillar cards), not globally.

---

## Motion

### Duration Tokens

| Token | Value | Usage |
|---|---|---|
| `--motion-instant` | `120ms` | Button press feedback |
| `--motion-fast` | `160ms` | Hover states, small transitions |
| `--motion-medium` | `200ms` | Component enter/exit |
| `--motion-large` | `280ms` | Larger view transitions |

### Easing

| Token | Value |
|---|---|
| `--ease-standard` | `ease` |

### Utility Classes

```css
.motion-fast {
  transition-duration: var(--motion-fast);
  transition-timing-function: var(--ease-standard);
}

.motion-medium {
  transition-duration: var(--motion-medium);
  transition-timing-function: var(--ease-standard);
}
```

### Button Press

```css
.button-press {
  transition: transform var(--motion-instant) var(--ease-standard);
}
.button-press:active {
  transform: scale(0.98);
}
```

### Card Hover

```css
.card-hover {
  transition: transform var(--motion-fast) var(--ease-standard),
              box-shadow var(--motion-fast) var(--ease-standard),
              border-color var(--motion-fast) var(--ease-standard);
}
.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: var(--surface-shadow-2);
}
```

### Interaction Link

Underline animates in from the left on hover/focus:

```css
.interaction-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--motion-fast) var(--ease-standard);
}
.interaction-link:hover::after,
.interaction-link:focus-visible::after {
  transform: scaleX(1);
}
```

### Keyframe Animations

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
}
```

### Reduced Motion

All animations and transitions collapse to `1ms` when the user prefers reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Surfaces & Cards

### `.card-surface`

The base card treatment. Combines border-radius, background, a blended border, and Level 1 shadow:

```css
.card-surface {
  border-radius: 4px;
  background: var(--surface);
  border: 1px solid color-mix(in srgb, var(--border-strong) 75%, transparent);
  box-shadow: var(--surface-shadow-1);
}
```

### `.card-artifact`

Enhanced shadow for artifact / project cards:

```css
.card-artifact {
  box-shadow: var(--surface-shadow-2);
}
```

### `.card-meta`

Lighter surface for metadata or secondary cards:

```css
.card-meta {
  box-shadow: var(--surface-shadow-1);
  background: color-mix(in srgb, var(--surface) 86%, var(--background));
}
```

### `.card-hover`

Adds lift-on-hover interaction to any card (see [Motion](#motion) section).

### Composition Example

Project cards compose these classes together:

```html
<article class="card-surface card-artifact card-hover group block overflow-hidden">
  <!-- Cover image (aspect-video) with hover scale(1.02) -->
  <!-- Title (font-editorial), description (line-clamp-2) -->
  <!-- Footer: role badge, CTA link -->
</article>
```

---

## Component Patterns

### Buttons

| Variant | Classes |
|---|---|
| **Primary** | `bg-accent px-3.5 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover` |
| **Secondary** | `border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent` |
| **Tertiary / Text** | `text-xs font-medium text-muted hover:text-accent transition-colors` |
| **Accent Ghost** | `bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/20` |
| **Large Primary** | `bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground rounded-sm` |
| **Disabled** | Add `opacity-50 cursor-not-allowed` |

All interactive buttons should include the `.button-press` class for the scale feedback on `:active`.

### Inputs

```
rounded-sm border border-input-border bg-input px-4 py-3 text-foreground
```

- Focus: `border-accent focus:outline-none focus:ring-2 focus:ring-accent/20`
- Placeholder: `text-muted-foreground`

### Badges & Status Indicators

| Variant | Classes |
|---|---|
| **Success** | `rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success` |
| **Accent / Updated** | `border-accent/30 bg-accent-muted px-2.5 py-1 text-xs font-medium text-accent` |
| **Neutral tag** | `rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted` |
| **Verified** | `border-border bg-surface px-2 py-0.5 text-xs font-medium` |
| **Coming Soon** | `border-border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider` |

### Toast Notifications

Positioned fixed at bottom-right (`z-[9999]`). Maximum 3 visible at once, auto-dismiss after 5 seconds.

| Variant | Border / Background |
|---|---|
| **Success** | `border-success/30 bg-success/5` with success text |
| **Error** | `border-destructive/30 bg-destructive/5` with destructive text |
| **Info** | `border-border bg-card` with default text |

- Entry animation: `animate-in slide-in-from-right-5 fade-in`
- ARIA: `role="alert"` for errors, `role="status"` for info
- Container: `aria-live="polite" aria-relevant="additions removals"`

### Navigation

Dashboard nav is sticky top with backdrop blur (`bg-surface/80`):

| Element | Classes |
|---|---|
| **Active nav link** | `bg-accent-muted text-accent` |
| **Inactive nav link** | `text-muted hover:text-foreground hover:bg-accent-muted/50` |
| **Nav item** | Icon always visible; label hidden on mobile (`hidden sm:inline`) |

### Modals / Dialogs

- Overlay: `fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm`
- Dialog: `rounded-2xl border border-border bg-card p-6 max-w-lg`
- Close button top-right with `opacity-50 hover:opacity-100`

### Forms

- Form library: React Hook Form + Zod validation
- Section container: `rounded-xl border border-border bg-card p-4 sm:p-6`
- Label: `block text-sm font-medium`
- Help text: `text-xs text-muted`
- Error: `text-destructive` below the field
- Error banner: `rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive`

### Image Gallery

- Main image: `aspect-video overflow-hidden rounded-lg border border-border bg-background`
- Thumbnails: `flex gap-2 overflow-x-auto pb-1`
- Active thumbnail: `border-accent ring-1 ring-accent/20`
- Inactive thumbnail: `border-border opacity-60 hover:opacity-100`

---

## Layout

### Global Page Structure

```html
<html data-theme="light|dark">
  <body class="min-h-screen bg-background text-foreground antialiased">
    <div class="flex min-h-screen flex-col">
      <a href="#main-content" class="sr-only focus:not-sr-only ...">Skip to main content</a>
      <main id="main-content" class="flex-1">...</main>
      <footer class="border-t border-border/80 bg-background/90">
        <div class="mx-auto max-w-layout px-4 sm:px-6 lg:px-8">...</div>
      </footer>
    </div>
  </body>
</html>
```

### Grid Patterns

| Pattern | Classes |
|---|---|
| **2-column form** | `grid grid-cols-1 gap-3 md:grid-cols-2` |
| **3-column cards** | `grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3` |
| **Responsive stacking** | `flex flex-col lg:flex-row` |

### Responsive Breakpoints

Mobile-first via Tailwind's default breakpoints:

| Breakpoint | Min-width | Usage |
|---|---|---|
| `sm` | `640px` | Tablet — show nav labels, 2-col grids |
| `md` | `768px` | Tablet landscape — form column splits |
| `lg` | `1024px` | Desktop — 3-col grids, row layouts |
| `xl` | `1280px` | Wide desktop — dashboard views |

### Responsive Padding

```
px-4 sm:px-6 lg:px-8
```

### Aspect Ratios

- `aspect-video` — Project cover images, gallery items
- `aspect-square` — Avatar previews

---

## Iconography & Brand

### Logo

Three variants defined in `src/components/brand/Logo.tsx`:

| Variant | Description |
|---|---|
| **`wordmark`** (default) | 24x24 icon + "SHIPPEDWORK" text, inline horizontal |
| **`stacked`** | Icon above text, vertically centered |
| **`icon`** | Icon only (28x28 default) |

The icon is a custom SVG called **UtilityWindowMark**: a 48x48 rounded rectangle with a 2.5px stroke and a filled circle in the bottom-right quadrant. It uses `currentColor` for theme compatibility.

### Icon Library

**Lucide React** for standard UI icons. Icons are sized contextually:

| Context | Size |
|---|---|
| Navigation icons | `w-5 h-5` |
| Inline micro-icons | `w-3 h-3` to `w-4 h-4` |
| Section / feature icons | `w-6 h-6` |
| Trust signal icons | `16x16` custom stroke SVGs |

Icons inherit `currentColor` and change color via text utility classes (e.g., `text-accent`, `text-muted`).

### OAuth Provider Icons

Google, LinkedIn, and GitHub icons are rendered as inline custom SVGs with their brand colors where appropriate.

---

## Accessibility

### Focus Management

Global focus-visible ring on all interactive elements:

```css
*:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

### Skip Navigation

A skip-to-content link is the first element in the DOM, visible only on focus:

```html
<a href="#main-content"
   class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999]
          focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm
          focus:font-semibold focus:text-foreground focus:shadow-lg focus:ring-2 focus:ring-accent">
  Skip to main content
</a>
```

### ARIA Patterns

| Component | ARIA Usage |
|---|---|
| Toast container | `aria-live="polite"`, `aria-relevant="additions removals"` |
| Error toasts | `role="alert"` |
| Info/success toasts | `role="status"` |
| Loading skeletons | `aria-busy="true"`, `role="status"`, `aria-live="polite"` |
| Modals | `role="dialog"`, `aria-label` |
| Form fields | `htmlFor` / `id` pairing on labels and inputs |
| Icon-only links/buttons | `aria-label` for screen reader text |
| Decorative SVGs | `aria-hidden="true"` |

### Color Scheme

```css
html { color-scheme: dark; }
html[data-theme="light"] { color-scheme: light; }
```

Ensures native form controls, scrollbars, and system UI adapt to the active theme.

### Reduced Motion

See [Motion > Reduced Motion](#reduced-motion) — all animations and transitions respect `prefers-reduced-motion: reduce`.

---

## State Patterns

### Loading

- **Pattern:** Skeleton placeholders (not spinners) that mirror the final layout shape
- **Styling:** `animate-pulse` with `bg-border` colored rectangles
- **Accessibility:** `aria-busy="true"` on the container, sr-only status text
- **Purpose:** Preserves layout to avoid visual jump on content load

### Empty States

- **Container:** `rounded-xl border border-dashed border-border py-16 text-center`
- **Content:** Heading, explanatory text, and a primary action button
- **Tone:** Warm, encouraging copy (e.g., "Publish your first artifact")

### Error States

- **Banner:** `rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive`
- **Toast:** Error variant with `role="alert"`
- **Form fields:** Destructive color text below the invalid input
- **Behavior:** User input is always preserved on form failures

### Success States

- **Toast:** Success variant with green border/text
- **Inline:** Green check icon + "Complete" badge: `border-accent bg-success/5 text-success`
- **Behavior:** Quiet confirmation near the action origin, no disruptive celebration

### Disabled States

- `opacity-50` + `cursor-not-allowed`
- No hover or active effects
- Input borders dim to `input-border` color

---

*Source of truth: `src/app/globals.css` and the component files in `src/components/`.*
