# Projects Section Redesign — Design Spec

## Overview

Redesign the Projects section from a scroll-linked horizontal carousel to a staggered vertical layout with a large fading header background and scroll-triggered card entrance animations.

## Architecture

### Break Out of HeroSection

The Projects section currently lives inside `HeroSection`'s sticky scroll wrapper alongside Intro and About. It will be extracted into a standalone `<section>` in normal document flow.

- **HeroSection** (`components/HeroSection.tsx`): Remove Projects import and rendering. Reduce `TOTAL_SCROLL` to only cover Intro + About. Update scroll progress thresholds for active section detection (remove Projects range).
- **Projects** (`components/Projects.tsx`): Becomes a self-contained section with its own scroll tracking. No longer receives `scrollYProgress` as a prop.
- **Page** (`app/page.tsx`): Renders `<HeroSection />` followed by `<Projects />` in normal document flow.

### Scroll Tracking

- **Header fade**: Uses Framer Motion `useScroll` targeting the Projects section container. Maps section entry progress to header opacity (1 → ~0.05) and optional slight scale-up.
- **Card entrances**: Each card uses Framer Motion `whileInView` with `viewport={{ once: true, amount: 0.3 }}` for triggering. No shared scroll progress needed.

## Header

### Initial State (before scrolling into section)
- Three-line layout: "Some" / "of My" / "Projects"
- Large, bold, centered text (roughly `text-6xl` to `text-8xl`, `font-extrabold`)
- Full opacity, positioned at center of the section

### Scrolled State (as cards scroll over it)
- Fades to ghost opacity (~5%)
- Stays `sticky` at top of section so it remains visible behind the cards as they scroll past
- `z-index` below cards so they render on top

### Implementation
- Wrap header in a `sticky top-0` container within the section
- Use `useScroll` on the section with `useTransform` to animate opacity from 1 → 0.05 over the first portion of section scroll
- `pointer-events: none` on the faded header so it doesn't interfere with card interactions

## Card Layout

### Desktop (sm and above)
- Staggered offset layout in a vertical column
- Cards retain existing design and dimensions (`w-[42rem]`, `h-[20rem]`, horizontal with image on one side)
- Odd cards (1st, 3rd, 5th): left-aligned (`self-start`)
- Even cards (2nd, 4th): right-aligned (`self-end`)
- Cards at ~85% container width creates visual overlap between the two alignment positions
- Gap between cards: `gap-8` or `gap-10`

### Mobile
- Unchanged: full-width vertical stack, same as current implementation

## Card Entrance Animations

Each card animates in when it scrolls into the viewport:

- **Fade**: opacity 0 → 1
- **Slide**: translate from the card's offset side
  - Left-aligned cards: `translateX(-50px)` → `0`
  - Right-aligned cards: `translateX(50px)` → `0`
- **Trigger**: Framer Motion `whileInView` with `viewport={{ once: true, amount: 0.3 }}`
- **Duration**: ~0.5-0.6s with slight stagger if multiple cards enter simultaneously
- **Easing**: `ease-out` or Framer Motion spring

## GitHub Button

Remains at the bottom of the section after all cards, unchanged in design.

## Files to Modify

1. **`components/Projects.tsx`** — Rewrite: remove carousel logic, add staggered layout, header fade, card entrance animations
2. **`components/HeroSection.tsx`** — Simplify: remove Projects import/rendering, reduce scroll height, update active section thresholds
3. **`components/SectionHeader.tsx`** — May need a variant or the Projects section uses its own header markup (three-line layout with large text)
4. **`app/page.tsx`** — Add `<Projects />` after `<HeroSection />`

## Files Unchanged

- `components/Project.tsx` — Card component stays as-is
- `lib/data/projects.ts` — Project data stays as-is
- Mobile layout — Same vertical stack behavior

## Dark Mode

Header ghost text should respect dark mode. Use `text-gray-900/5` (light mode) and `dark:text-white/5` (dark mode) or equivalent Tailwind opacity utilities.

## Accessibility

- Header text remains in the DOM as a real `<h2>` for screen readers even when visually faded
- Card entrance animations respect `prefers-reduced-motion` — skip slide/fade, render immediately
