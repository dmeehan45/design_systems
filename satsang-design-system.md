# Satsang Design System v3

**Codename: Quiet Authority**

**Version:** 3.0
**Date:** 2026-04-05
**Supersedes:** `docs/satsang-design-system-v2.md`

---

## How to Use This Document

This spec is the single source of truth for all visual, typographic, motion, and copy decisions in the Satsang product. It is written for two audiences:

**Human designers and engineers** — Read Sections 0–2 before touching any UI. Treat the token names as law. When in doubt, return to the voice test in Section 1.

**AI agents generating Satsang UI** — This document is structured for machine consumption. Sections are numbered and self-contained. When generating components, pull token values from Section 3, typeface rules from Section 4, and copy patterns from Section 2. Do not invent new token names, color values, or copy registers. If a decision isn't covered here, flag it rather than guess.

Where this document conflicts with any other file in the codebase, this document wins. Where this document is silent, ask before shipping.

---

## Table of Contents

| # | Section |
|---|---------|
| 0 | [Meta & Quick Reference](#section-0-meta--quick-reference) |
| 1 | [Philosophy & Principles](#section-1-philosophy--principles) |
| 2 | [Voice & Tone](#section-2-voice--tone) |
| 3 | [Design Tokens — Color](#section-3-design-tokens--color) |
| 4 | [Design Tokens — Typography](#section-4-design-tokens--typography) |
| 5 | [Design Tokens — Spacing, Shadows, Motion](#section-5-design-tokens--spacing-shadows-motion) |
| 6 | [Surface Language](#section-6-surface-language) |
| 7 | [Component Catalog](#section-7-component-catalog) |
| 8 | [Page Template Patterns](#section-8-page-template-patterns) |
| 9 | [Conversation UI Spec](#section-9-conversation-ui-spec) |
| 10 | [Navigation Patterns](#section-10-navigation-patterns) |
| 11 | [State Recipes](#section-11-state-recipes) |
| 12 | [Responsive Patterns](#section-12-responsive-patterns) |
| 13 | [Iconography](#section-13-iconography) |
| 14 | [Accessibility](#section-14-accessibility) |
| 15 | [Theme System](#section-15-theme-system) |
| 16 | [Brand Assets](#section-16-brand-assets) |
| 17 | [File Map](#section-17-file-map) |
| 18 | [Migration Notes](#section-18-migration-notes-from-v2) |

---

## Section 0: Meta & Quick Reference

| Field | Value |
|-------|-------|
| System name | Satsang Design System |
| Version | 3.0 |
| Codename | Quiet Authority |
| Release date | 2026-04-05 |
| Supersedes | `docs/satsang-design-system-v2.md` |
| Primary typeface | Fraunces (variable, WONK axis) |
| Body typeface | Instrument Sans |
| Primary accent | `--accent-warmth` (terra cotta) |
| Motion rhythm | 4-second cycles, ease-in-out |
| Voice register | Warm, direct, second-person |

**Quick token file reference:**
- CSS custom properties: `src/index.css`
- Tailwind extensions: `tailwind.config.js`
- Theme logic: `src/lib/theme.ts`

---

## Section 1: Philosophy & Principles

### The Anthropic / Geist Studio Inheritance

Geist Studio's work for Anthropic is a masterclass in what might be called **warm credibility** — the particular quality of a designed thing that feels both authoritative and approachable, never cold, never fussy. The specific moves: typography that has a voice rather than just a size, color used as temperature rather than decoration, surfaces that breathe rather than fill, motion as emotional texture rather than feedback mechanism.

Satsang inherits this sensibility and carries it further into a distinctly nurturing register. Where Anthropic's design communicates confident intelligence, Satsang's design communicates **present companionship**. The user is often a tired parent, frequently in a moment of low resources. Every decision should answer: does this make that person feel held?

The test is simple. For any UI element, ask:

> **"Does this feel like a quiet room you want to sit in?"**

If the answer is no — if it feels busy, loud, clever, or demanding — revise it until it does.

### The 7 Design Principles

1. **Warmth over cleverness.** Every visual choice should make a tired parent feel held, not impressed.

2. **Bespoke neutrals, not Tailwind defaults.** Use our named tokens. If you reach for `stone-500`, stop and find the right Satsang token.

3. **Fraunces is the voice.** Let headlines breathe. Use the `WONK` axis for playful moments (journal prompts, encouragements). Use standard axis for serious content (resources, safety).

4. **Earn your accents.** Terra cotta (`--accent-warmth`) is the primary accent. It appears on CTAs, active states, and trust signals. If you're adding it somewhere new, ask: does this genuinely need emphasis?

5. **Dark mode is 2am mode.** Every evening-theme decision should be tested with screen brightness at 20% in a dark room. If it glares, it fails.

6. **Motion is breath, not bounce.** The app's rhythm should match calm breathing: 4-second cycles, ease-in-out curves, small amplitudes. Nothing should feel urgent except actual alerts.

7. **Surfaces, not decorations.** The content is the design. Cards, shadows, and borders exist to organize — never to ornament.

### The Voice Test

Before shipping any screen, component, or interaction:

A quiet room has:
- No unnecessary noise (no redundant labels, no decorative motion, no accent colors that aren't earning their place)
- A comfortable temperature (warm neutrals, soft transitions, Fraunces doing its work in headlines)
- Breathing room (generous whitespace, unhurried copy, nothing competing for attention)
- A sense of presence without pressure (the app is with you, not performing for you)

If something fails this test, don't reach for a fix — reach for a removal.

---

## Section 2: Voice & Tone

### Register

Satsang's copy voice has one job: make a person in a hard parenting moment feel accompanied, not managed.

| Attribute | Definition |
|-----------|------------|
| Person | Second-person ("you", "your") throughout |
| Sentence length | Short to medium. One idea per sentence. |
| Tense | Present preferred. Past for reflection, future for encouragement only. |
| Tone | Warm, direct. Never clinical, corporate, or performatively cheerful. |
| Punctuation | Periods. Em-dashes for gentle pauses. Ellipses for companion voice only. No exclamation marks. |

### Display Font Personality

Fraunces is a variable font with a `WONK` axis that introduces optical quirks — slightly eccentric letterforms that read as warm and personal. Use it intentionally:

| Context | `WONK` axis | Use for |
|---------|-------------|---------|
| Warm / playful | `WONK=1` | Welcome greetings, journal prompts, encouragements, companion responses |
| Serious / grounded | `WONK=0` (standard) | Resource titles, settings headers, error states, safety content |

The distinction is not size — it is register. A journal prompt at 18px uses `WONK=1`. A crisis resource header at 32px uses `WONK=0`.

### Emotional Copy Hierarchy

Copy register is determined by the emotional context of the moment, not the visual hierarchy of the screen.

**Greeting / Encouragement** — Warm, personal. Use the first name when available. This is `WONK=1` territory.
```
"Good evening, [name]."
"Start with calm support."
"When you have a hard parenting moment, start here and this space will remember it with you."
```

**Guidance** — Clear, calm, instructive. The app knows what it's doing and trusts you to follow.
```
"Breathe in for 4, hold for 4, breathe out for 6."
"A few minutes to breathe and reset."
```

**Companion** — Brief, present. This is the Satsang voice at its most distinctive — never chatty, never distant. Companion copy uses ellipses deliberately, to communicate openness and patience. Use them only here.
```
"I'm here."
"Satsang is with you…"
"What just happened?"
```

**System / Meta** — Minimal, factual. No personality, no warmth.
```
"Please wait..."
"Syncing your latest library..."
"Building your plan…"
```

**Error** — Honest. Next-step-oriented. Never blaming. Structure: **title + brief explanation + next action**.
```
"Could not create plan. Want to try again?"
```

**Empty State** — Encouraging, forward-looking. Show what will be here, not what isn't here yet.
```
"When you chat with Satsang, helpful themes will show up here."
"Save a line from chat and it will appear here for quick reuse."
```

**Safety** — Immediate. Clear. No hedging, no softening, no personality. `WONK=0`. Clarity is the only priority.

### Feature Naming

| Do | Do not |
|----|--------|
| Plans | Your Wellness Dashboard |
| Calm | Mindfulness Center |
| Me | Personal Profile Hub |
| Learn | Educational Resources |

If a feature name requires more than one word to be understood, the feature needs clearer design — not a more descriptive name.

### Forbidden Patterns

| Pattern | Why |
|---------|----|
| Exclamation marks in UI copy | Creates urgency in a space designed for calm |
| "Oops!" or similar | Infantilizing; deflects rather than addresses |
| "Hurry", "Don't miss", "Limited time" | Urgency language is antithetical to the product |
| Passive-blaming error copy | Shifts burden to the user |
| Corporate abstractions ("leverage", "utilize") | Creates distance |
| Redundant affirmations ("Great!", "Perfect!") | Performative; erodes trust |

### Canonical Voice Samples

These lines are extracted from the live app. Use them as calibration when writing new copy.

```
"I'm here."
"What just happened?"
"Satsang is with you…"
"A few minutes to breathe and reset."
"Start with calm support."
"We keep short summaries so you can revisit progress."
"When you have a hard parenting moment, start here and this space will remember it with you."
"Privacy, clearly:"
```

---

## Section 3: Design Tokens — Color

### Philosophy

Color as temperature, not decoration. Where Anthropic's palette reads as "thoughtful study," Satsang should read as "morning light through linen curtains." The entire palette is defined as CSS custom properties on `[data-theme]` — not Tailwind's default scales.

### Neutral Palette

| Token | Tailwind Class | Morning | Evening | Role |
|---|---|---|---|---|
| `--bg-ground` | `bg-ground` | `#FAF8F4` | `#141311` | App background |
| `--bg-surface` | `bg-surface` | `#FFFFFF` | `#1E1D1A` | Card / panel surfaces |
| `--bg-surface-raised` | `bg-surface-raised` | `#FFFFFF` | `#252420` | Elevated surface (modals, sheets) |
| `--bg-surface-sunken` | `bg-surface-sunken` | `#F3F0EB` | `#0F0E0C` | Inset areas, alternating sections |
| `--bg-surface-hover` | (via var) | `#F7F4EF` | `#282723` | Interactive surface hover |
| `--border-default` | (via var) | `#E8E4DD` | `#2E2C28` | Standard borders |
| `--border-subtle` | (via var) | `#EFECE7` | `#232220` | Dividers, internal separators |
| `--text-ink` | `text-ink` | `#1A1814` | `#F5F2ED` | Primary text (headlines, body) |
| `--text-dusk` | `text-dusk` | `#4A4640` | `#C4BFB5` | Secondary text (descriptions) |
| `--text-clay` | `text-clay` | `#8C857B` | `#7D776D` | Tertiary text (captions, meta) |
| `--text-mist` | `text-mist` | `#B8B1A6` | `#4A463F` | Disabled, placeholder |

### Accent Palette

Distribution rule: **< 5% of any screen.**

| Token | Tailwind | Morning | Evening | Semantic Use |
|---|---|---|---|---|
| `--accent-warmth` | `text-warmth` / `bg-warmth` | `#C97B5A` | `#D4916E` | Primary brand. Terra cotta. CTAs, active nav, trust signals. |
| `--accent-warmth-subtle` | (via var) | `rgba(201,123,90,0.1)` | `rgba(212,145,110,0.12)` | Tinted backgrounds for accent containers. |
| `--accent-sage` | `text-sage` / `bg-sage` | `#6B8F6B` | `#82A882` | Growth, progress, completion, positive states. |
| `--accent-sage-subtle` | (via var) | `rgba(107,143,107,0.1)` | `rgba(130,168,130,0.12)` | Success tint backgrounds. |
| `--accent-sky` | `text-sky` / `bg-sky` | `#6B8FB0` | `#84A7C4` | Informational, links, calm emphasis. |
| `--accent-amber` | `text-amber` / `bg-amber` | `#B8923D` | `#CCAA5A` | Warning, attention, time-sensitive. |
| `--accent-rose` | `text-rose` / `bg-rose` | `#B06060` | `#C47878` | Error, destructive, missing. |

### On-Color Tokens

| Token | Morning | Evening |
|---|---|---|
| `--text-on-warmth` | `#FFFFFF` | `#141311` |
| `--text-on-ink` | `#FFFFFF` | `#141311` |

### Shadow System

| Token | Tailwind | Morning | Evening |
|---|---|---|---|
| `--shadow-soft` | `shadow-soft` | `0 1px 3px rgba(26,24,20,0.04), 0 1px 2px rgba(26,24,20,0.02)` | `0 1px 3px rgba(0,0,0,0.20), 0 1px 2px rgba(0,0,0,0.12)` |
| `--shadow-elevated` | `shadow-elevated` | `0 4px 16px rgba(26,24,20,0.06), 0 1px 4px rgba(26,24,20,0.04)` | `0 4px 16px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.15)` |
| `--shadow-modal` | `shadow-modal` | `0 12px 40px rgba(26,24,20,0.10), 0 2px 8px rgba(26,24,20,0.04)` | `0 12px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.18)` |

### Gradient System

Three named gradients layer radial washes over `--bg-ground`. Opacity values are intentionally faint — gradients should be felt, not seen.

**Morning** (`.bg-satsang-morning`):
```css
background:
  radial-gradient(ellipse 80% 60% at 20% 10%, rgba(201, 123, 90, 0.04), transparent 60%),
  radial-gradient(ellipse 60% 50% at 80% 90%, rgba(107, 143, 107, 0.03), transparent 50%),
  var(--bg-ground);
```

**Evening** (`.bg-satsang-evening`):
```css
background:
  radial-gradient(ellipse 80% 60% at 20% 10%, rgba(212, 145, 110, 0.03), transparent 60%),
  radial-gradient(ellipse 60% 50% at 80% 90%, rgba(130, 168, 130, 0.02), transparent 50%),
  var(--bg-ground);
```

**Welcome** (`.bg-satsang-welcome`):
```css
background:
  radial-gradient(ellipse 100% 80% at 50% 0%, rgba(201, 123, 90, 0.06), transparent 50%),
  var(--bg-ground);
```

The `.bg-calm-gradient` utility auto-switches between Morning and Evening based on `data-theme`.

---

## Section 4: Design Tokens — Typography

### Font Palette

| Role | Font | Fallback | Why |
|---|---|---|---|
| Display / Headlines | **Fraunces** | Georgia, serif | Soft-axis optical size, "wonky" alternate forms. Warm, literary, slightly imperfect. |
| Body / UI | **Instrument Sans** | system-ui, sans-serif | Humanist proportions with open apertures. More personality than Inter. |
| Mono (code/data) | **JetBrains Mono** | monospace | Only for timestamps, data readouts. Ligatures off. |

### Font Loading

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:wght@400;500&display=swap');
```

### Tailwind Config

```js
fontFamily: {
  display: ['Fraunces', 'Georgia', 'serif'],
  body:    ['Instrument Sans', 'system-ui', 'sans-serif'],
  mono:    ['JetBrains Mono', 'monospace'],
}
```

### Type Scale

```css
--type-display-1: 2.75rem;   /* 44px — hero headlines */
--type-display-2: 2rem;      /* 32px — section titles */
--type-display-3: 1.5rem;    /* 24px — card headlines, modal titles */
--type-body-lg:   1.125rem;  /* 18px — lead paragraphs */
--type-body:      1rem;      /* 16px — standard body */
--type-body-sm:   0.875rem;  /* 14px — secondary text, captions */
--type-caption:   0.8125rem; /* 13px — eyebrows, meta */
--type-fine:      0.75rem;   /* 12px — footnotes, badges */
```

### Type Recipes

| Element | Tailwind Classes | Notes |
|---|---|---|
| Page title (hero) | `font-display text-3xl text-ink` | Home, Plans, You, Tools |
| Page title (compact) | `font-display text-2xl text-ink` | Calm, Saved |
| Page title (auth, desktop) | `font-display text-4xl font-semibold leading-tight text-ink` | StartAuthShell lg+ |
| Modal / sheet title | `font-display text-xl text-ink` | UpgradeSheet, ResetModal |
| Section heading (in card) | `font-body text-sm text-ink` | Plans, You, Saved |
| Section label (settings) | `text-sm text-clay font-body mb-4` | ProfilePage |
| Eyebrow | `font-body text-xs uppercase tracking-wide text-clay` | Category labels |
| Body | `font-body text-sm text-dusk` | Standard paragraphs |
| Body (emphasis) | `font-body text-sm text-ink` | Key content in cards |
| Caption / meta | `font-body text-xs text-clay` | Timestamps, helper text |
| Fine print | `text-[11px] tracking-wide` | Bottom nav labels |
| Timestamp | `font-mono text-sm text-clay` | Audio player |
| Form label | `mb-2 block font-body text-sm text-dusk` | Auth shell |
| Inline error | `text-center font-body text-sm text-rose` | Form validation |

### Base Typography (index.css)

```css
body { font-family: 'Instrument Sans', system-ui, sans-serif; color: var(--text-dusk); }
h1, h2, h3, h4, h5, h6 { font-family: 'Fraunces', Georgia, serif; color: var(--text-ink); line-height: 1.2; }
p { line-height: 1.65; }
```

---

## Section 5: Design Tokens — Spacing, Shadows, Motion

### Spacing Scale (4px base unit)

| Semantic | Tailwind | px | Use |
|---|---|---|---|
| micro | `gap-1` | 4 | Inline icon-to-label |
| tight | `gap-2` | 8 | Between related elements |
| base | `gap-4` | 16 | Default element spacing |
| comfortable | `gap-6` | 24 | Between card sections, form groups |
| spacious | `gap-8` | 32 | Between major content blocks |
| section | `py-12` | 48 | Between page sections |
| hero | `py-16` | 64 | Top-of-page breathing room |

### Motion Tokens

```css
:root {
  --ease-calm:    cubic-bezier(0.25, 0.1, 0.25, 1);  /* smooth, unhurried */
  --ease-enter:   cubic-bezier(0, 0, 0.2, 1);        /* deceleration */
  --ease-exit:    cubic-bezier(0.4, 0, 1, 1);        /* acceleration */
  --duration-fast:   150ms;
  --duration-base:   250ms;
  --duration-slow:   400ms;
  --duration-breath: 4000ms;
}
```

Tailwind extensions:
```js
transitionTimingFunction: { calm: 'var(--ease-calm)' },
transitionDuration: { fast: 'var(--duration-fast)', base: 'var(--duration-base)', slow: 'var(--duration-slow)' },
```

### Key Animations

**Page entrance** (`animate-enter`):
```css
@keyframes satsang-enter {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-enter { animation: satsang-enter var(--duration-slow) var(--ease-enter) both; }
```

**Breathing ambient** (`animate-breathe`):
```css
@keyframes satsang-breathe {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%      { opacity: 1; transform: scale(1.015); }
}
.animate-breathe { animation: satsang-breathe var(--duration-breath) var(--ease-calm) infinite; }
```

### Interaction Motion Patterns

| Interaction | Implementation | Duration |
|---|---|---|
| Button hover | `hover:opacity-90` | instant |
| Card hover | `hover:bg-[var(--bg-surface-hover)]` | `transition-colors` |
| Input focus | border-color + box-shadow change | `200ms ease` |
| Nav item state | color change | `transition-all duration-base` |
| Content reveal | `transition-all duration-700` with opacity + translateY | 700ms |
| Card stagger | `animationDelay` via style prop | `delay * 50ms` per item |
| Page transition | `animate-enter` on `ShellContent` | 400ms |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Section 6: Surface Language

### 6.1 Card System

Each card type serves a distinct structural role. Use the exact class strings below.

**Standard card** — most common surface (Plans cards, You page sections, Calm library items):
```
rounded-2xl border border-[var(--border-default)] bg-surface p-4 shadow-soft
```

**Elevated card** — auth shell forms and modals:
```
rounded-3xl border border-[var(--border-default)] bg-surface p-6 shadow-elevated
```
Auth variant appends `sm:p-8`.

**Inset area** — sunken backgrounds, tab bar containers:
```
bg-surface-sunken rounded-xl
```

**Interactive tile** — clickable cards that navigate (YouPage Tile):
```
w-full rounded-2xl border border-[var(--border-default)] bg-surface p-4 text-left shadow-soft hover:bg-[var(--bg-surface-hover)]
```

**Status-tinted card** — draft plans section:
```
rounded-2xl border border-amber/20 bg-amber/5 p-4 shadow-soft
```

**Danger zone card** — ProfilePage delete section:
```
rounded-2xl bg-surface p-5 border border-red-100/80
```

**Conversation container** — card layout mode:
```
rounded-3xl border border-[var(--border-default)] bg-surface p-4 sm:p-5 flex flex-col gap-4 min-h-[60vh] shadow-soft
```

### 6.2 Glassmorphism Allowlist

`backdrop-blur` is permitted in exactly **one context**: the bottom navigation bar.

```css
background: color-mix(in srgb, var(--bg-ground) 85%, transparent);
backdrop-filter: blur(16px) saturate(1.5);
```

Everywhere else, use opaque surfaces with the shadow system.

### 6.3 Border Radius Vocabulary

| Radius | Tailwind | Use |
|---|---|---|
| Full circle | `rounded-full` | Pills, chips, buttons, avatar circles, toggle tracks |
| Sheet / modal | `rounded-3xl` | Bottom sheets, auth card, elevated overlays |
| Card | `rounded-2xl` | Standard cards, conversation bubbles, section cards |
| Input / inner | `rounded-xl` | Inputs, inner cards, tab containers |
| Small inner | `rounded-lg` | Small inner elements, modal buttons |

Radius decreases as you move inward. An inner element should never use a larger radius than its parent.

---

## Section 7: Component Catalog

Each entry includes copy-paste Tailwind class strings, variants, and accessibility notes.

### 7.1 Buttons

**Primary CTA** (full-width, auth submit):
```
w-full rounded-full bg-warmth py-3.5 font-body text-base font-medium text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50
```

**Primary compact** (inline actions):
```
h-11 rounded-xl bg-warmth text-white font-body
```

**Secondary dark** (plan review, strong secondary):
```
rounded-full bg-ink px-3 py-1 text-xs font-body text-white transition-opacity hover:opacity-90
```

**Secondary outlined** (form cancel, dismiss):
```
flex-1 h-10 rounded-full border border-[var(--border-default)] text-dusk text-sm font-body hover:bg-surface-sunken transition-colors
```

**Ghost / chip button** (save script, quick actions):
```
rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-dusk hover:text-ink
```

**Quick action chip** (home page):
```
rounded-full border border-[var(--border-default)] bg-surface px-3 py-1.5 text-center font-body text-sm text-ink transition-colors hover:bg-[var(--bg-surface-hover)]
```

**Text-only dismiss** (modals "Not now"):
```
w-full h-10 font-body text-sm text-clay
```

**Danger button**:
```
h-10 px-4 rounded-full bg-red-500 text-white text-sm font-body hover:bg-red-600 transition-colors
```

**Icon button** (close overlay):
```
h-10 w-10 rounded-full border border-[var(--border-default)] bg-surface text-clay transition-colors hover:text-ink
```

**Back button**:
```
inline-flex items-center gap-2 font-body text-clay hover:text-dusk
```
With: `<ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back`

**Inline text action** (copy, view all):
```
inline-flex items-center gap-1 text-xs text-dusk hover:text-ink
```

**Link action**:
```
font-body text-xs text-warmth hover:underline
```

### 7.2 Inputs

**Standard input** (`.satsang-input` CSS class + Tailwind sizing):
```
satsang-input h-12 w-full
```

The `.satsang-input` class is defined in `src/index.css`:
```css
.satsang-input {
  font-family: 'Instrument Sans', system-ui, sans-serif;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border-default);
  background: var(--bg-surface);
  color: var(--text-ink);
  transition: border-color var(--duration-base) var(--ease-calm),
              box-shadow var(--duration-base) var(--ease-calm);
}
.satsang-input:focus {
  outline: none;
  border-color: var(--accent-warmth);
  box-shadow: 0 0 0 3px var(--accent-warmth-subtle);
}
.satsang-input::placeholder {
  color: var(--text-mist);
}
```

**Select dropdown**:
```
w-full h-10 px-3 rounded-lg bg-surface border border-[var(--border-default)] text-sm text-ink outline-none font-body
```

**Textarea**:
```
satsang-input w-full min-h-20
```

**Form label**:
```
mb-2 block font-body text-sm text-dusk
```

**Settings label**:
```
block text-sm text-clay font-body mb-2
```

### 7.3 TalkComposer

Three variants of the conversation input component.

**Boxed** (default):
- Wrapper: `rounded-2xl border border-[var(--border-default)] bg-surface p-3 shadow-soft`
- Input: `satsang-input flex-1 h-11`
- Send button: `h-11 px-4 rounded-xl bg-warmth text-white transition-opacity hover:opacity-90 disabled:opacity-60`

**Journal** (focus-responsive):
- Wrapper unfocused: `rounded-2xl border border-[var(--border-subtle)] bg-transparent px-1 py-1`
- Wrapper focused: `rounded-2xl border border-[var(--accent-warmth)] bg-surface px-3 py-2 shadow-soft`
- Input: `satsang-input flex-1 h-11 border-0 border-b border-[var(--border-subtle)] rounded-none bg-transparent px-0 transition-all duration-200 focus:ring-0`
- Send button: `h-11 px-4 rounded-xl border border-[var(--border-default)] bg-surface text-ink font-body text-sm`

**Mic button** (optional):
```
h-11 w-11 rounded-xl border border-[var(--border-default)] bg-surface text-clay grid place-items-center transition-colors hover:bg-[var(--bg-surface-hover)] hover:text-dusk
```

### 7.4 Conversation Bubbles

**User message**:
```
relative rounded-2xl p-3 bg-surface-sunken ml-8 border border-[var(--border-subtle)]
```

**Assistant message**:
```
relative rounded-2xl p-3 bg-surface mr-8 border border-[var(--border-subtle)]
```

**Script block** (within assistant message, triggered by "try saying:" prefix):
```
rounded-xl border border-[var(--border-default)] bg-surface-sunken px-3 py-2
```

| Element | Classes |
|---|---|
| Message text | `font-body text-sm whitespace-pre-wrap text-ink` |
| Next step text | `font-body text-sm whitespace-pre-wrap text-dusk font-medium` |
| Responding indicator | `pl-2 font-body text-xs text-clay` — "Satsang is with you…" |

**Bookmark button** (on assistant messages):
`absolute -right-1 top-2 p-1 rounded-full transition-colors`
- Unsaved: `text-clay/40 hover:text-dusk`
- Saving: `text-clay animate-pulse`
- Saved: `text-warmth` with `fill="currentColor"`

### 7.5 Chips & Tags

**Filter chip (selected)**:
```
px-3 py-1.5 rounded-full text-sm font-body bg-warmth text-white
```

**Filter chip (unselected)**:
```
px-3 py-1.5 rounded-full text-sm font-body bg-surface-sunken text-clay hover:bg-[var(--bg-surface-hover)]
```

**Quick reset chip**:
```
rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-dusk hover:text-ink
```

**Action chip** (calming action in conversation):
```
rounded-full border border-[var(--border-subtle)] bg-surface-sunken px-3 py-1.5 text-xs text-dusk hover:text-ink
```

### 7.6 Toggle Switch

Track: `relative inline-flex h-7 w-12 items-center rounded-full transition-colors`
- Active: `bg-surface-sunken` — Inactive: `bg-[var(--border-default)]`

Knob: `inline-block h-5 w-5 transform rounded-full bg-surface transition-transform`
- On: `translate-x-6` — Off: `translate-x-1`

Accessibility: `role="switch" aria-checked={value}`

### 7.7 Tab Bar (Segmented Control)

Container: `grid grid-cols-2 gap-2 rounded-2xl bg-surface-sunken p-1`
- `role="group" aria-label="..."`

Tab (active): `rounded-xl px-3 py-2.5 font-body text-sm bg-surface text-ink shadow-soft`
Tab (inactive): `rounded-xl px-3 py-2.5 font-body text-sm text-clay hover:text-ink`
- `aria-pressed={isActive}`
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmth focus-visible:ring-offset-2`

### 7.8 Modal / Sheet Overlays

**Bottom sheet** (UpgradeSheet):
- Scrim: `fixed inset-0 z-50 flex items-end justify-center bg-black/35 p-4 sm:items-center`
- Content: `w-full max-w-md rounded-3xl border border-[var(--border-default)] bg-surface-raised p-5 shadow-modal`

**Centered modal** (reset, delete confirmation):
- Scrim: `fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-5`
- Content: `w-full max-w-md rounded-2xl border border-[var(--border-default)] bg-surface p-5 shadow-soft`

**Immersive overlay** (audio player):
- Scrim: `fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/75`

All modals: `role="dialog" aria-modal="true" aria-label="..."`

### 7.9 Audio Player Elements

**Large play button** (immersive):
```
h-24 w-24 rounded-full bg-warmth text-white transition-transform hover:scale-105
```

**Medium play button** (meditation sheet):
```
h-20 w-20 rounded-full bg-warmth text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50
```

**Small play circle** (card list item):
```
w-12 h-12 rounded-full flex items-center justify-center bg-surface-sunken
```
Active variant (warmth background card): `bg-white/20`

**Progress bar**:
- Track: `h-1 w-64 overflow-hidden rounded-full bg-white/20`
- Fill: `h-full bg-white transition-all`

**Time display**: `font-mono text-sm text-white/70` (overlay) or `font-mono text-sm text-clay` (sheet)

### 7.10 Account List Items

Row container: `bg-surface rounded-2xl divide-y divide-[var(--border-subtle)]`
Single row: `flex items-center gap-3 p-4`
Icon container: `w-9 h-9 rounded-full bg-surface-sunken flex items-center justify-center shrink-0`
Row label: `text-sm text-dusk font-body`
Row meta: `text-xs text-clay font-body`

### 7.11 Plan Generation Banner

Container: `rounded-2xl border border-[var(--border-default)] bg-surface p-3 shadow-soft`

**Idle**: `flex w-full items-center gap-2 rounded-xl bg-surface-sunken px-4 py-3 text-left transition-colors hover:bg-surface`
- Icon: `Sparkles h-4 w-4 text-warmth strokeWidth={1.8}`
- Text: `font-body text-sm text-ink` — "Create a plan from this conversation"

**Generating**: `Loader2 h-4 w-4 text-warmth animate-spin strokeWidth={2}` — "Building your plan…"
- Preview: `rounded-xl border border-[var(--border-subtle)] bg-surface-sunken px-3 py-2`

**Ready**: `Sparkles h-4 w-4 text-sage strokeWidth={1.8}` — "Your plan is ready"
- "Review plan" (secondary dark) + "Dismiss" (ghost chip)

**Error**: `font-body text-sm text-clay` — "Could not create plan. Want to try again?"
- "Retry" + "Dismiss"

### 7.12 Error Banner

```
rounded-2xl border border-rose/20 bg-rose/5 p-4
```
Layout: `flex items-start gap-3`
- Icon: `AlertCircle mt-0.5 h-5 w-5 text-rose strokeWidth={1.8}`
- Title: `font-body text-sm font-semibold text-ink`
- Message: `font-body text-sm text-clay`
- Next step: `font-body text-sm text-ink` — prefixed "Next: "

### 7.13 Empty States

Inline (within card): `font-body text-xs text-clay`
Standalone: `font-body text-sm text-clay text-center py-6`

### 7.14 Privacy / Info Block

Container: `rounded-2xl border border-[var(--border-default)] bg-surface-sunken p-4`
Title: `font-body text-sm font-medium text-ink`
List: `mt-2 list-disc space-y-1.5 pl-5 font-body text-sm leading-relaxed text-dusk marker:text-clay`

---

## Section 8: Page Template Patterns

Six layout archetypes cover the full app. New pages must be assigned to one of these before detailed design begins.

### 8.1 Home / Dashboard (`SatsangHomePage`)

**Shell:** `AppShellV2` (bottom nav visible)

**Content:** `mx-auto flex max-w-2xl flex-col gap-5 px-5 pb-8 pt-12 sm:px-6`

**Structure:**
1. Centered header (`text-center`) — title: `font-display text-3xl text-ink`, subtitle: `mt-2 font-body text-sm text-clay`
2. TalkComposer (journal variant)
3. Quick action chips: `flex flex-wrap justify-center gap-2`

When conversation becomes active, yields entirely to `ConversationPanel layout="immersive"`.

### 8.2 Detail / Content Page (`TalkPage`, `PlanDetailPage`)

**Shell:** `AppShellV2` (bottom nav visible)

**Content:** `max-w-3xl mx-auto px-4 py-6`

**Structure:**
1. Back button: `mb-4 inline-flex items-center gap-2 font-body text-clay hover:text-dusk` with ArrowLeft
2. Content area (ConversationPanel immersive, or card-based plan content)

### 8.3 List Page (`PlansPage`, `YouPage`)

**Shell:** `AppShellV2` (bottom nav visible)

**Content:**
- Plans: `mx-auto max-w-3xl space-y-4 px-5 pb-8 pt-10`
- You: `mx-auto max-w-2xl space-y-3 px-5 pb-8 pt-10`

**Structure:**
1. Page title: `font-display text-3xl text-ink`
2. Stacked cards / tiles via `space-y-*`

### 8.4 Compact Library (`CalmPage`)

**Shell:** `AppShellV2` (bottom nav visible)

**Layout:**
- Outer: `min-h-screen`
- Header: `px-4 py-4` with ArrowLeft icon-only back button
- Content: `mx-auto max-w-md px-6 pb-8 pt-4`

**Structure:**
1. Centered header — title: `font-display text-2xl text-ink`, subtitle: `font-body text-sm text-clay`
2. Stacked audio cards with stagger animation

### 8.5 Auth / Onboarding (`StartAuthShell`)

**Shell:** None — no AppShellV2, no bottom nav.

**Background:** `bg-satsang-welcome`

**Outer:** `min-h-screen px-5 py-8 text-dusk sm:px-8 sm:py-12 lg:px-12 lg:py-16`

**Grid:** `mx-auto grid w-full max-w-5xl items-center gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10`

- Left panel (desktop only, `hidden lg:block`): logo (`mx-auto mb-6 h-auto w-44 xl:w-56`) + display heading + body text
- Right panel: elevated card (`rounded-3xl border border-[var(--border-default)] bg-surface p-6 shadow-elevated sm:p-8`) with mobile-only logo/heading, tab toggle, form, submit, privacy block

### 8.6 Settings (`ProfilePage`)

**Shell:** `SatsangShell` (migration target for AppShellV2)

**Content:** `px-6 pt-6 pb-8 max-w-lg mx-auto`

**Structure:**
1. Back button + title: `text-xl text-dusk font-body`
2. Sections with `text-sm text-clay font-body mb-4` headings
3. Cards with toggle switches and account list rows

---

## Section 9: Conversation UI Spec

### 9.1 Layout Modes

| Mode | Prop | Container class |
|---|---|---|
| Card | `layout="card"` | `rounded-3xl border ... bg-surface p-4 sm:p-5 flex flex-col gap-4 min-h-[60vh] shadow-soft` |
| Immersive | `layout="immersive"` | `flex h-[calc(100vh-180px)] min-h-[520px] flex-col gap-3` |

### 9.2 Header Bar

- Left: `font-body text-sm text-clay` — "I'm here."
- Right: End button — `font-body text-sm text-dusk inline-flex items-center gap-1 hover:text-ink` with X icon

### 9.3 Message List

Container: `flex-1 space-y-3 overflow-y-auto pr-1 pb-28`

- User messages: `relative rounded-2xl p-3 bg-surface-sunken ml-8 border border-[var(--border-subtle)]`
- Assistant messages: `relative rounded-2xl p-3 bg-surface mr-8 border border-[var(--border-subtle)]`

Messages split on double newlines. Each paragraph: `font-body text-sm whitespace-pre-wrap text-ink`

### 9.4 Script Blocks

Detected by "try saying:" or "you can say:" prefix. Rendered as:
```
rounded-xl border border-[var(--border-default)] bg-surface-sunken px-3 py-2
```
Copy button: `mt-2 inline-flex items-center gap-1 text-xs text-dusk hover:text-ink` with Copy `h-3.5 w-3.5 strokeWidth={1.7}`

### 9.5 Bookmark Affordance

Assistant messages only. `absolute -right-1 top-2 p-1 rounded-full`. Bookmark icon `h-4 w-4 strokeWidth={1.5}`.
- Unsaved: `text-clay/40 hover:text-dusk`
- Saving: `text-clay animate-pulse`
- Saved: `text-warmth` with `fill="currentColor"`

### 9.6 Status Indicator

When `status === 'responding'`: `pl-2 font-body text-xs text-clay` — "Satsang is with you…"

### 9.7 Calming Action

On `tool_recommendation` artifact:
```
rounded-full border border-[var(--border-subtle)] bg-surface-sunken px-3 py-1.5 text-xs text-dusk hover:text-ink
```
Text: "Take a 60-second reset" → triggers Reset Modal (§9.11)

### 9.8 Quick Actions Row

Below messages: `flex flex-wrap gap-2` with ghost chip buttons like "Save script"

### 9.9 Composer Placement

- Card layout: inline at bottom of card
- Immersive: `sticky bottom-0 bg-[var(--bg-ground)] pb-1 pt-2`

### 9.10 Voice Draft Overlay

Container: `rounded-2xl border border-[var(--border-default)] bg-surface-sunken p-3`
- Label: `font-body text-xs text-clay mb-2` — "Voice draft (editable)"
- Textarea: `satsang-input w-full min-h-20`
- Buttons: "Send transcript" (primary compact) + "Cancel" (outlined)

### 9.11 60-Second Reset Modal

Scrim: `fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-5`
Content: `w-full max-w-md rounded-2xl border border-[var(--border-default)] bg-surface p-5 shadow-soft`
- Title: `font-display text-xl text-ink` — "60-second reset"
- Instruction: `mt-2 font-body text-sm text-clay` — "Breathe in for 4, hold for 4, breathe out for 6. Stay with your body. Return when you're ready."
- Timer: `mt-4 text-center font-display text-4xl text-ink` — countdown from 60
- Buttons: `mt-5 flex gap-2` — "Skip" (outlined, rounded-lg) + "Continue chat" (dark, rounded-lg)

---

## Section 10: Navigation Patterns

### 10.1 Bottom Navigation

4 items: Home (`Home`), Calm (`Wind`), Plans (`ClipboardList`), Me (`User`)

**Outer container:**
```
fixed bottom-0 left-0 right-0 border-t border-[var(--border-subtle)] pb-[env(safe-area-inset-bottom)]
```
Inline style:
```css
background: color-mix(in srgb, var(--bg-ground) 85%, transparent);
backdrop-filter: blur(16px) saturate(1.5);
```

**Inner:** `flex items-center justify-around h-14 max-w-lg mx-auto px-4`

**Nav item:** `flex flex-col items-center justify-center gap-1 px-4 py-2 font-body transition-all duration-base`
- Active: `text-warmth`
- Inactive: `text-clay hover:text-dusk`

**Icon:** `w-5 h-5 strokeWidth={1.5}`
**Label:** `text-[11px] tracking-wide`

Home link uses `end` prop for exact-path matching.

### 10.2 Back Button

Always `ArrowLeft`. Two variants:
- **With text**: `inline-flex items-center gap-2 font-body text-clay hover:text-dusk` + "Back" (icon `w-4 h-4`)
- **Icon only**: `text-clay transition-colors hover:text-dusk` (icon `w-5 h-5`)

### 10.3 Page Transitions

All content enters via `animate-enter` on `ShellContent`: `main.relative.animate-enter.pb-20`

No slide transitions. Cross-fade only. Slides feel urgent — cross-fades feel inevitable.

### 10.4 Content Bottom Padding

`pb-20` on content when bottom nav is visible (handled by `ShellContent`).

### 10.5 Nav Visibility

| Condition | Nav |
|---|---|
| `AppShellV2` default | Visible |
| `AppShellV2 navMode="hidden"` | Hidden |
| Auth / onboarding (no shell) | Hidden |

---

## Section 11: State Recipes

### 11.1 Loading States

**Full-page**: `min-h-screen bg-calm-gradient flex items-center justify-center` with `text-center text-sm text-clay font-body py-12` — "Loading..."

**Inline spinner**: `Loader2 h-4 w-4 text-warmth animate-spin strokeWidth={2}` + `font-body text-sm text-ink` — e.g., "Building your plan…"

**Skeleton pulse**: `animate-pulse` on placeholder elements matching expected content shape.

**Syncing**: `font-body text-xs text-clay mb-3` — "Syncing your latest library..."

### 11.2 Empty States

**Inline (within card)**: `font-body text-xs text-clay`
Example: "When you chat with Satsang, helpful themes will show up here."

**Standalone**: `font-body text-sm text-clay text-center py-6`
Example: "No recent conversations yet. When you have a hard parenting moment, start here and this space will remember it with you."

Copy guidance: Show what *will* be here, not what *isn't*.

| Avoid | Prefer |
|---|---|
| "Nothing here yet." | "Your saved scripts will appear here." |
| "No items found." | "Start a conversation and this space will fill in." |

### 11.3 Error States

**Inline text** (form validation): `text-center font-body text-sm text-rose`

**Structured banner** (conversation errors):
```
rounded-2xl border border-rose/20 bg-rose/5 p-4
```
Layout: `flex items-start gap-3` — AlertCircle icon + title (semibold ink) + message (clay) + "Next: [action]" (ink) + retry button (secondary dark)

### 11.4 Success States

**Inline**: `text-green-600 text-xs font-body flex items-center gap-1` with Check `w-3 h-3`

> **Migration note:** Should use `text-sage` for consistency.

### 11.5 Disabled States

Buttons: `disabled:opacity-50 disabled:cursor-not-allowed`
Inputs: native `disabled` attribute (greys out via opacity)

### 11.6 Submitting / In-Progress

Button text changes: "Please wait..." / "Updating..." / "Deleting..."
Button receives `disabled`. No spinner inside buttons — text change + opacity reduction is sufficient.

---

## Section 12: Responsive Patterns

### Philosophy

Mobile-first. The app is designed for a parent holding a phone in one hand. Desktop is a bonus, not the target.

### Breakpoints Used

| Breakpoint | Tailwind | Width | Usage |
|---|---|---|---|
| Default | (none) | < 640px | Phone — all base styles |
| Small | `sm:` | 640px | Auth padding (`sm:px-8 sm:py-12`), conversation panel (`sm:p-5`), auth card (`sm:p-8`), bottom sheet centers (`sm:items-center`) |
| Large | `lg:` | 1024px | Auth 2-column grid (`lg:grid-cols-[1fr_1.05fr]`), desktop panel (`hidden lg:block`), auth padding (`lg:px-12 lg:py-16`) |
| XL | `xl:` | 1280px | Auth logo size (`xl:w-56`) |

### Content Max-Widths by Page Type

| Page Type | Max-Width | Example |
|---|---|---|
| Home / Dashboard | `max-w-2xl` | SatsangHomePage |
| Detail / Content | `max-w-3xl` | TalkPage, PlanDetailPage |
| Settings | `max-w-lg` | ProfilePage |
| Compact library | `max-w-md` | CalmPage content |
| Auth outer grid | `max-w-5xl` | StartAuthShell |
| Bottom nav inner | `max-w-lg` | BottomNav |

### Touch Targets

All interactive elements: minimum 44px in any tappable dimension. The codebase uses `h-10` (40px), `h-11` (44px), and `h-12` (48px). Prefer `h-11` or `h-12` for new work.

---

## Section 13: Iconography

### Library

**Lucide React** (`lucide-react`) — line-weight icon library. Use exclusively.

### Conventions

| Property | Default | Notes |
|---|---|---|
| Size | `w-5 h-5` (20px) | Nav and action icons |
| Small | `w-4 h-4` (16px) | Inline, back buttons |
| Fine | `w-3.5 h-3.5` (14px) | Copy button, tiny detail |
| Stroke width | `1.5` | Default — lighter than Lucide's default 2 |
| Emphasis | `1.8` | Sparkles, AlertCircle |
| Strong | `2` | Loader2 spinner |
| Color | `inherit` | Always inherit from parent — never hardcode |

### Common Icon Vocabulary

| Function | Icon |
|---|---|
| Navigate home | `Home` |
| Navigate calm | `Wind` |
| Navigate plans | `ClipboardList` |
| Navigate profile | `User` |
| Go back | `ArrowLeft` |
| Close / dismiss | `X` |
| Play media | `Play` |
| Pause media | `Pause` |
| Copy text | `Copy` |
| Save / bookmark | `Bookmark` |
| Generate / magic | `Sparkles` |
| Loading | `Loader2` (with `animate-spin`) |
| Error | `AlertCircle` |
| Voice input | `Mic` |
| Add item | `Plus` |
| Remove item | `X` or `Trash2` |
| Success | `Check` |
| Email | `Mail` |
| Password | `Lock` |
| Sign out | `LogOut` |
| Billing | `CreditCard` |
| Search | `Search` |

---

## Section 14: Accessibility

### WCAG 2.1 AA Compliance

- **Body text**: 4.5:1 contrast against background
- **Large text** (18px+ or 14px bold): 3:1 contrast
- **UI components**: 3:1 against adjacent colors

The token pairs are designed for this. Verify after any customization.

### Focus Rings

```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warmth focus-visible:ring-offset-2
```

### Touch Targets

Minimum `44px × 44px` on all interactive elements.

### ARIA Patterns

| Pattern | Implementation |
|---|---|
| Modal dialogs | `role="dialog" aria-modal="true" aria-label="..."` |
| Toggle switches | `role="switch" aria-checked={value}` |
| Segmented controls | Container: `role="group" aria-label="..."` — Tabs: `aria-pressed={isActive}` |
| Icon-only buttons | `aria-label="..."` describing the action |
| Bookmark states | `aria-label` changes: "Save response" → "Response saved" |

### Dark Mode Accessibility

Test guidance:
- Set device brightness to 20% in a dark room
- All text must remain legible without squinting
- Accents should feel warm, not glaring
- Surfaces should have clear boundaries without stark contrast

### Native Control Theming

```css
.satsang-native-control { color-scheme: light; }
[data-theme='evening'] .satsang-native-control,
[data-theme='dark'] .satsang-native-control { color-scheme: dark; }
```

Apply to `<select>`, `<input type="date">`, and other native form elements.

### Screen Reader Utilities

```css
.sr-only-focusable:not(:focus):not(:active) {
  position: absolute; width: 1px; height: 1px; padding: 0;
  margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;
}
```

### Keyboard Navigation

- `Escape` closes all modals and sheets
- `Enter` submits forms
- Tab order follows visual order

---

## Section 15: Theme System

### Time-of-Day Resolution

```typescript
type ThemeMode = 'morning' | 'evening';

function resolveTheme(): ThemeMode {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const hour = new Date().getHours();
  const isNight = hour >= 20 || hour < 6;

  if (prefersDark) return 'evening';
  return isNight ? 'evening' : 'morning';
}
```

Priority: system preference overrides time-of-day. Time is a nudge, not an override.

### Application

```typescript
function applyTheme(mode: ThemeMode): void {
  document.documentElement.setAttribute('data-theme', mode);
}
```

Called in `src/main.tsx` on boot: `applyTheme(resolveTheme())`.

### CSS Variable Switching

All tokens are defined under `:root` / `[data-theme='morning']` and `[data-theme='evening']` in `src/index.css`. When `data-theme` changes, every variable resolves to its new value — no JS color switching.

Also supported: `[data-theme='light']` and `[data-theme='dark']` as aliases.

### Gradient Response

`.bg-calm-gradient` auto-switches between Morning and Evening based on `data-theme`.

### Manual Override

Users set theme in Profile Settings → writes to `localStorage('satsang_theme')` and applies `data-theme` directly. Manual selection overrides system preference and time-of-day.

---

## Section 16: Brand Assets

### Logo Files

| File | Type | Dimensions | Location | Use |
|---|---|---|---|---|
| `SATSANG_new_gold_1_(1)_(1).png` | PNG | 6000×6000 | `/public/` | Primary logo. Used in auth shell. |
| `SATSANG_gold.svg` | SVG | Vector | `/public/` | Scalable brand mark |
| `campfire_fav.png` | PNG | 32×32 | `/public/` | Browser favicon |
| `campfire_fav_chrome.png` | PNG | 56×56 | `/public/` | Chrome favicon variant |
| `campfire_logo_tbg.png` | PNG | 612×408 | `/public/` | OG image / social share |

### Current Usage

- **Favicon** (`index.html`): Points to `SATSANG_new_gold_1_(1)_(1).png`
- **Auth shell logo**: `<img src="/SATSANG_new_gold_1_(1)_(1).png" />` at `w-44` (desktop) or `w-36` (mobile)
- **OG image**: `https://assets.storiesforacampfire.com/campfire_logo_tbg.png`

### App Metadata

| Property | Value |
|---|---|
| Title | Satsang |
| Description | "A space for truth, presence, and inner discovery." |
| OG site name | Satsang |
| Twitter card | `summary_large_image` |

> **Migration note:** OG image references legacy "campfire" branding. Favicon should point to `campfire_fav.png`, not the 6000×6000 PNG.

---

## Section 17: File Map

### Token & Style Definitions

| File | Content |
|---|---|
| `src/index.css` | CSS custom properties (color, shadow, motion), gradient utilities, animation keyframes, component classes (`.satsang-input`, `.satsang-card`), reduced motion |
| `tailwind.config.js` | Extended `fontFamily`, `colors` mapped to CSS vars, `boxShadow`, `transitionTimingFunction`, `transitionDuration` |
| `src/lib/theme.ts` | `resolveTheme()` time-of-day detection, `applyTheme()` data-theme setter |

### Shell & Navigation

| File | Content |
|---|---|
| `src/components/shell/AppShellV2.tsx` | Canonical shell: background + content + optional bottom nav |
| `src/components/shell/ShellBackground.tsx` | `div.bg-calm-gradient` — full-bleed background |
| `src/components/shell/ShellContent.tsx` | `main.animate-enter.pb-20` — content wrapper |
| `src/components/satsang/SatsangShell.tsx` | Legacy shell (migration target) |
| `src/components/satsang/BottomNav.tsx` | Glassmorphic fixed bottom nav |

### Core Components

| File | Content |
|---|---|
| `src/components/satsang/ConversationPanel.tsx` | Messages, bubbles, script blocks, plan banner, voice overlay, reset modal, error banner |
| `src/components/satsang/TalkComposer.tsx` | 3-variant input (boxed, journal, minimal) |
| `src/components/satsang/UpgradeSheet.tsx` | Bottom sheet paywall modal |
| `src/components/start/StartAuthShell.tsx` | Auth form with responsive 2-column layout |

### Pages

| File | Template Type |
|---|---|
| `src/pages/SatsangHomePage.tsx` | Home / Dashboard |
| `src/pages/TalkPage.tsx` | Detail / Content |
| `src/pages/PlansPage.tsx` | List |
| `src/pages/YouPage.tsx` | List (tiles) |
| `src/pages/CalmPage.tsx` | Compact Library + Immersive overlay |
| `src/pages/ProfilePage.tsx` | Settings |
| `src/pages/StartPage.tsx` | Auth / Onboarding |
| `src/pages/OnboardingIntroPage.tsx` | Auth / Onboarding (legacy patterns) |
| `src/pages/SavedPage.tsx` | List with tab bar |
| `src/pages/GoalsPage.tsx` | Detail / Content |
| `src/pages/ToolsPage.tsx` | Guided Flow |
| `src/pages/ResourcesPage.tsx` | Compact Library |
| `src/pages/JournalPage.tsx` | List (no AppShellV2 — migration target) |

### Known Inconsistencies

| Issue | Location | Resolution |
|---|---|---|
| `stone-*` Tailwind defaults | `OnboardingIntroPage.tsx` | Replace with Satsang tokens |
| `SatsangShell` instead of `AppShellV2` | `ProfilePage.tsx`, `ResourcesPage.tsx` | Migrate to `AppShellV2` |
| No `AppShellV2` wrapper | `JournalPage.tsx` | Add wrapper |
| `text-red-500` instead of `text-rose` | `ProfilePage.tsx` | Replace with token |
| `text-green-600` instead of `text-sage` | `ProfilePage.tsx` | Replace with token |
| `bg-stone-200` progress bar | `CalmPage.tsx` | Replace with token |
| `bg-surface-sunken0` typo | `ProfilePage.tsx` toggle | Fix to `bg-surface-sunken` |
| OG image references "campfire" | `index.html` | Update branding |
| Oversized favicon source | `index.html` | Point to `campfire_fav.png` |

---

## Section 18: Migration Notes (from v2)

### What Changed Between v2 and v3

| Area | v2 | v3 |
|---|---|---|
| Scope | Token definitions + philosophy | Full component catalog, page templates, conversation UI, state recipes, voice & tone, responsive, navigation |
| Voice & tone | Not documented | Section 2: emotional hierarchy, forbidden patterns, canonical samples |
| Component catalog | Conceptual descriptions | Section 7: exact Tailwind class strings, all variants |
| Page templates | Brief notes | Section 8: 6 named archetypes with exact layout classes |
| Conversation UI | Not documented | Section 9: bubbles, scripts, plan gen, voice overlay, reset modal |
| Navigation | CSS snippet | Section 10: full spec with back buttons, transitions, visibility |
| State recipes | Not documented | Section 11: loading, empty, error, success, disabled, in-progress |
| Responsive | "Phone-first" mention | Section 12: specific breakpoints, max-widths by page type |
| Migration | Phase-based TODO | Section 17: specific inconsistencies with files and resolutions |

### Remaining Migration Targets (Priority Order)

1. **OnboardingIntroPage** — replace `stone-*` with Satsang tokens (high impact: first user experience)
2. **ProfilePage** — fix `bg-surface-sunken0` typo, replace `text-red-500`/`text-green-600`, migrate to `AppShellV2`
3. **JournalPage** — add `AppShellV2` wrapper
4. **CalmPage** — replace `bg-stone-200` progress bar
5. **ResourcesPage** — migrate from `SatsangShell` to `AppShellV2`
6. **Brand assets** — update OG images and favicon references

### v2 Showcase Component

The interactive showcase at `docs/satsang-design-system-v2-showcase.jsx` remains useful for visual reference but is not maintained as part of v3. It may be updated separately.
