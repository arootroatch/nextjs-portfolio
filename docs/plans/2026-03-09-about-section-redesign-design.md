# About Section Redesign — Design Document

## Overview

Redesign the About section to show paragraphs one at a time with scroll animations, add custom SVG icons with subtle animations to each paragraph, and reduce the Intro section font size on mobile.

## 1. Intro Font Size

Reduce mobile heading from `text-2xl` (1.5rem) to `text-xl` (1.25rem). Desktop stays `sm:text-3xl`.

## 2. About Section — Paragraph-by-Paragraph Scroll Animations

### Desktop (scroll-driven sticky layout)

Subdivide the About section's scroll progress range into 4 sub-ranges, one per paragraph. Each paragraph fades in, stays visible, then fades out before the next one appears. This requires extending the total scroll distance (HERO_SCROLL or equivalent) to accommodate the additional animation time.

### Mobile (normal flow)

Use Framer Motion's `whileInView` on each paragraph to animate it in (fade + slide up from below) as the user scrolls. Each paragraph block includes its icon(s) alongside it.

## 3. Custom SVG Icons

### Layout

Icons float to alternating sides of each paragraph:
- P1: icons on the left
- P2: icons on the right
- P3: icon on the left
- P4: icons on the right

### Icon Assignments

| Paragraph | Theme | Icons | Count |
|-----------|-------|-------|-------|
| P1 | Craft/craftsmanship | Classical guitar, hand plane | 2 |
| P2 | Tech work | Drone, code/terminal | 2 |
| P3 | Audio engineering | MixerSVG (ported from SoundRoots) | 1 |
| P4 | Personal/countryside | Dog, country house/barn | 2 |

### Icon Style

- Custom SVG React components, single-color silhouette style (matching SoundRoots SVGs)
- Use `currentColor` for fill to respect light/dark mode
- Each component accepts a `className` prop for sizing/positioning

### Icon Animations

- **Entry**: Fade in + scale from 0.8 to 1.0, triggered when parent paragraph becomes visible
- **Idle**: Subtle float/bob (translateY oscillation via CSS keyframes or Framer Motion)

## 4. Color/Theming

Icons inherit text color via `currentColor`, adapting to light and dark mode automatically.

## 5. Files to Create/Modify

- `components/Intro.tsx` — font size change
- `components/About.tsx` — paragraph-by-paragraph animation, icon integration, layout changes
- `components/HeroSection.tsx` — extend scroll distance for desktop sub-ranges
- `components/svg/GuitarSVG.tsx` — new
- `components/svg/HandPlaneSVG.tsx` — new
- `components/svg/DroneSVG.tsx` — new
- `components/svg/CodeTerminalSVG.tsx` — new
- `components/svg/MixerSVG.tsx` — ported from SoundRoots
- `components/svg/DogSVG.tsx` — new
- `components/svg/CountryHouseSVG.tsx` — new
