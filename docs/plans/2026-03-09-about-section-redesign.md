# About Section Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the About section with paragraph-by-paragraph scroll animations, custom animated SVG icons, and a mobile font-size fix for the Intro.

**Architecture:** Desktop uses subdivided scroll progress ranges (one per paragraph) within the existing sticky viewport system, requiring HERO_SCROLL to increase from 1400 to ~4700. Mobile uses Framer Motion `whileInView` for each paragraph block. Icons are custom SVG React components with fade+scale entry and idle float animations.

**Tech Stack:** Next.js, React, TypeScript, Framer Motion, Tailwind CSS, custom SVG components

---

### Task 1: Reduce Intro Font Size on Mobile

**Files:**
- Modify: `components/Intro.tsx:49`

**Step 1: Change font size class**

In `components/Intro.tsx`, line 49, change `text-2xl` to `text-xl`:

```tsx
className="mb-5 mt-2 mr-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl relative bg-white dark:bg-[#491c3d56] bg-opacity-60 rounded-lg"
```

**Step 2: Visual check**

Open on mobile viewport (375px width) and verify the heading text is smaller and fits comfortably.

**Step 3: Commit**

```bash
git add components/Intro.tsx
git commit -m "reduce intro heading font size on mobile from text-2xl to text-xl"
```

---

### Task 2: Port MixerSVG from SoundRoots

**Files:**
- Create: `components/svg/MixerSVG.tsx`

**Step 1: Create the SVG component**

Port `/Users/AlexRoot-Roatch/current-projects/SoundRootsMentorship/components/home/svg/MixerSVG.tsx` into this project. Copy the full component, ensuring:
- It accepts `{ className?: string }` props
- Uses `currentColor` for fill (add `fill="currentColor"` to the SVG element)
- Remove the `enableBackground` attribute (deprecated)
- Keep the viewBox and all path data intact

**Step 2: Commit**

```bash
git add components/svg/MixerSVG.tsx
git commit -m "port MixerSVG component from SoundRoots project"
```

---

### Task 3: Create Custom SVG Icon Components

**Files:**
- Create: `components/svg/GuitarSVG.tsx`
- Create: `components/svg/HandPlaneSVG.tsx`
- Create: `components/svg/DroneSVG.tsx`
- Create: `components/svg/CodeTerminalSVG.tsx`
- Create: `components/svg/DogSVG.tsx`
- Create: `components/svg/CountryHouseSVG.tsx`

**Step 1: Create all 6 SVG components**

Each component follows this pattern:

```tsx
import React from "react";

export default function NameSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 ..."
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* SVG paths */}
    </svg>
  );
}
```

Requirements for each SVG:
- **GuitarSVG**: Classical guitar silhouette — body, neck, headstock, sound hole, strings suggested
- **HandPlaneSVG**: Woodworking hand plane silhouette — body, blade, handle
- **DroneSVG**: Quadcopter drone silhouette — body, 4 arms with rotors
- **CodeTerminalSVG**: Terminal/code window — window frame, prompt line, code lines
- **CountryHouseSVG**: Country house/barn — pitched roof, chimney, door, windows, rustic feel
- **DogSVG**: Dog silhouette — standing or sitting pose, friendly breed

Style guidelines:
- Single-color silhouettes, detailed but clean (similar aesthetic to SoundRoots SVGs)
- Use `fill="currentColor"` on the root SVG
- All components accept `className?: string`

**Step 2: Commit**

```bash
git add components/svg/
git commit -m "add custom SVG icon components for About section"
```

---

### Task 4: Add Float Animation Keyframes

**Files:**
- Modify: `app/globals.css`

**Step 1: Add the float keyframe**

Add to `app/globals.css` after the existing keyframes:

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 3s ease-in-out 1.5s infinite;
}
```

The delayed variant ensures two icons on the same side don't bob in perfect sync.

**Step 2: Commit**

```bash
git add app/globals.css
git commit -m "add float animation keyframes for About section icons"
```

---

### Task 5: Redesign About Section — Mobile (whileInView)

**Files:**
- Modify: `components/About.tsx`

**Step 1: Rewrite the mobile rendering path**

Currently the mobile path (the `else` branch when `scrollYProgress` is falsy) renders all paragraphs statically. Replace it with paragraph blocks that animate in via `whileInView`.

Each paragraph block is a flex row containing:
- The icon(s) on one side (alternating left/right per paragraph)
- The paragraph text on the other side

Structure for each paragraph block:

```tsx
<motion.div
  className="flex flex-row items-center gap-4 max-w-[42rem] mx-auto mb-8"
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {/* Icons on left for P1, P3 */}
  <div className="flex-shrink-0 w-16 flex flex-col gap-2">
    <GuitarSVG className="w-14 h-14 animate-float text-gray-700 dark:text-gray-300" />
    <HandPlaneSVG className="w-12 h-12 animate-float-delayed text-gray-700 dark:text-gray-300" />
  </div>
  {/* Paragraph text */}
  <p className="bg-[rgba(217,199,214,0.34)] dark:bg-transparent rounded-lg">
    <ReactMarkdown ...>{aboutData[0]}</ReactMarkdown>
  </p>
</motion.div>
```

For P2 and P4 (icons on right), reverse the flex order or use `flex-row-reverse`.

Import all SVG components at the top of the file.

**Step 2: Visual check on mobile**

Verify:
- Each paragraph slides up and fades in as it enters viewport
- Icons appear on alternating sides
- Icons have subtle float animation
- Spacing and alignment look good at 375px width

**Step 3: Commit**

```bash
git add components/About.tsx
git commit -m "add whileInView paragraph animations and icons for mobile About section"
```

---

### Task 6: Extend Desktop Scroll Range for Sequential Paragraphs

**Files:**
- Modify: `components/HeroSection.tsx:9-10`

**Step 1: Increase HERO_SCROLL**

The About section currently gets ~1100px of scroll (progress 0.082–0.385 of 3640px). For 4 sequential paragraph fade cycles, we need ~4x that. Increase HERO_SCROLL from 1400 to 4700:

```tsx
const HERO_SCROLL = 4700;
const PROJECTS_SCROLL = 2240;
const TOTAL_SCROLL = HERO_SCROLL + PROJECTS_SCROLL; // 6940
```

**Step 2: Update nav anchor positions**

In HeroSection.tsx, update the anchor spans to reflect the new scroll distances:

```tsx
<span id="Home" className="absolute top-[200px] scroll-mt-96" />
<span id="About" className="absolute top-[1200px] scroll-mt-96" />
<span id="projects" className="absolute top-[5200px] scroll-mt-28" />
```

**Step 3: Update active section thresholds**

Update the `useMotionValueEvent` callback progress thresholds to reflect the new ranges. The Intro and About occupy a larger fraction now:

With TOTAL_SCROLL = 6940:
- Intro ends at ~300px → progress ~0.043
- About ends at ~4700px → progress ~0.677
- Projects: 0.677–1.0

```tsx
useMotionValueEvent(scrollYProgress, "change", (latest) => {
  if (Date.now() - timeOfLastClick > 1000) {
    if (latest < 0.08) {
      setActiveSection("Home");
    } else if (latest < 0.68) {
      setActiveSection("About");
    } else {
      setActiveSection("Projects");
    }
  }
});
```

**Step 4: Commit**

```bash
git add components/HeroSection.tsx
git commit -m "extend HERO_SCROLL for sequential About paragraph animations"
```

---

### Task 7: Redesign About Section — Desktop (Sequential Scroll Paragraphs)

**Files:**
- Modify: `components/About.tsx`
- Modify: `components/Intro.tsx` (update progress ranges if needed)
- Modify: `components/Projects.tsx` (update progress start range if needed)

**Step 1: Recalculate all scroll progress ranges**

With TOTAL_SCROLL = 6940:

**Intro** (currently uses progress 0–0.082 for opacity, 0.124–0.137 for height):
- Same pixel ranges, new progress values:
  - Opacity: `[0, 300/6940]` = `[0, 0.043]` → `[1, 0]`
  - Height: `[0, 450/6940, 500/6940]` = `[0, 0.065, 0.072]` → `["auto", "auto", 0]`

**About** header (visible across all 4 paragraphs):
- Fade in: progress 0.043–0.10
- Stay visible: 0.10–0.65
- Fade out: 0.65–0.677

**About paragraphs** (each gets ~1100px of scroll = ~0.158 progress):
- P1: fade in 0.06–0.12, hold 0.12–0.20, fade out 0.20–0.22
- P2: fade in 0.22–0.28, hold 0.28–0.36, fade out 0.36–0.38
- P3: fade in 0.38–0.44, hold 0.44–0.52, fade out 0.52–0.54
- P4: fade in 0.54–0.60, hold 0.60–0.65, fade out 0.65–0.677

**Projects** (currently starts at progress 0.44 = `[0.44, 1.0]` remapped to `[0, 1]`):
- New start: 0.677
- Update Projects.tsx progress mapping from `[0.44, 1.0]` to `[0.677, 1.0]`

> **Note:** These values are starting points. Fine-tune by scrolling through and adjusting until transitions feel smooth.

**Step 2: Update Intro.tsx progress ranges**

In `components/Intro.tsx`, update the `useTransform` calls:

```tsx
const desktopOpacity = useTransform(progress, [0, 0.043], [1, 0]);
const desktopHeight = useTransform(
  progress,
  [0, 0.065, 0.072],
  ["auto", "auto", 0]
);
const desktopOverflowY = useTransform(
  progress,
  [0, 0.065, 0.072],
  ["visible", "visible", "hidden"]
);
```

**Step 3: Update About.tsx desktop path**

Replace the single `desktopOpacity` with per-paragraph opacity transforms and a header opacity transform:

```tsx
const headerOpacity = useTransform(
  progress,
  [0, 0.043, 0.10, 0.65, 0.677],
  [0, 0, 1, 1, 0]
);

const p1Opacity = useTransform(progress, [0.06, 0.12, 0.20, 0.22], [0, 1, 1, 0]);
const p2Opacity = useTransform(progress, [0.22, 0.28, 0.36, 0.38], [0, 1, 1, 0]);
const p3Opacity = useTransform(progress, [0.38, 0.44, 0.52, 0.54], [0, 1, 1, 0]);
const p4Opacity = useTransform(progress, [0.54, 0.60, 0.65, 0.677], [0, 1, 1, 0]);

const paragraphOpacities = [p1Opacity, p2Opacity, p3Opacity, p4Opacity];
```

Then render each paragraph as its own `motion.div` with its opacity transform, including the icons:

```tsx
if (scrollYProgress) {
  return (
    <section className="sm:pl-5 sm:pr-9 max-w-[50rem] text-center h-full w-full leading-8 absolute top-[68%] -translate-y-1/2 left-1/2 -translate-x-1/2 px-4">
      <motion.div style={{ opacity: headerOpacity }}>
        <SectionHeader>About Me</SectionHeader>
      </motion.div>

      {aboutData.map((text, index) => (
        <motion.div
          key={index}
          className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-4 max-w-[42rem] mx-auto absolute top-[40%] left-1/2 -translate-x-1/2`}
          style={{ opacity: paragraphOpacities[index] }}
        >
          <div className="flex-shrink-0 w-20 flex flex-col items-center gap-3">
            {/* Render icons for this paragraph */}
          </div>
          <p className="bg-[rgba(217,199,214,0.34)] dark:bg-transparent rounded-lg">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
              {text}
            </ReactMarkdown>
          </p>
        </motion.div>
      ))}
    </section>
  );
}
```

Create a helper array or map for which icons belong to which paragraph index:
```tsx
const paragraphIcons = [
  [<GuitarSVG className="w-16 h-16 animate-float" />, <HandPlaneSVG className="w-14 h-14 animate-float-delayed" />],
  [<DroneSVG className="w-16 h-16 animate-float" />, <CodeTerminalSVG className="w-14 h-14 animate-float-delayed" />],
  [<MixerSVG className="w-20 h-20 animate-float" />],
  [<DogSVG className="w-16 h-16 animate-float" />, <CountryHouseSVG className="w-14 h-14 animate-float-delayed" />],
];
```

**Step 4: Update Projects.tsx progress start**

In `components/Projects.tsx`, find where the scroll progress is remapped (likely a `useTransform` that maps `[0.44, 1.0]` to `[0, 1]`). Update `0.44` to `0.677`.

**Step 5: Visual check on desktop**

Scroll through the entire page and verify:
- Intro fades out smoothly
- "About Me" header fades in and stays visible across all paragraphs
- Each paragraph fades in one at a time with icons
- Icons alternate sides (left, right, left, right)
- Icons float/bob while visible
- Smooth transition from last paragraph fade-out to Projects section
- Projects carousel still works correctly
- Nav pill tracks sections correctly

**Step 6: Fine-tune timing**

Adjust the progress range values in the useTransform calls until:
- Transitions between paragraphs feel natural (not too fast, not too slow)
- There's a brief "empty" moment between paragraphs for visual breathing room
- The header stays visible throughout all paragraphs

**Step 7: Commit**

```bash
git add components/About.tsx components/Intro.tsx components/Projects.tsx
git commit -m "add sequential paragraph scroll animations with icons for desktop About section"
```

---

### Task 8: Visual Polish and Final Adjustments

**Files:**
- Possibly: `components/About.tsx`, `components/HeroSection.tsx`, `app/globals.css`

**Step 1: Test dark mode**

Verify icons and text look good in both light and dark modes.

**Step 2: Test responsive breakpoints**

Check the transition point at `sm:` (640px) — ensure mobile and desktop paths both look correct near the breakpoint.

**Step 3: Test icon sizing**

Ensure icons are proportional to the text. Adjust `w-*` and `h-*` classes if icons feel too large or small. The MixerSVG is more complex so it may need to be larger than the simpler icons.

**Step 4: Commit any polish changes**

```bash
git add -A
git commit -m "polish About section icon sizing, spacing, and dark mode"
```
