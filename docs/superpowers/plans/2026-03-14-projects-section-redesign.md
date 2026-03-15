# Projects Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the horizontal carousel Projects section with a staggered vertical layout featuring a large fading header and scroll-triggered card entrance animations.

**Architecture:** Extract Projects from HeroSection's sticky scroll wrapper into a standalone section in normal document flow. The header fades via section-level `useScroll`/`useTransform`. Cards animate in via `whileInView`. Nav highlighting uses intersection observer.

**Tech Stack:** Next.js, React, Framer Motion, Tailwind CSS

**Spec:** `docs/superpowers/specs/2026-03-14-projects-section-redesign-design.md`

---

## Chunk 1: Extract Projects from HeroSection

### Task 1: Simplify HeroSection — remove Projects

**Files:**
- Modify: `components/HeroSection.tsx`

- [ ] **Step 1: Remove Projects import and rendering**

Remove the Projects import and all Projects-related rendering from HeroSection. Remove the `<span id="projects" ...>` anchor. Remove `PROJECTS_SCROLL` constant. Change `TOTAL_SCROLL` to just `HERO_SCROLL`. Remove the Projects branch from `useMotionValueEvent`. Update the About threshold — since progress now spans only Intro + About, About runs from ~0.08 to the end.

```tsx
"use client";
import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import Intro from "./Intro";
import About from "./About";

const HERO_SCROLL = 4700;

export default function HeroSection() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end end"],
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (Date.now() - timeOfLastClick > 1000) {
      if (latest < 0.08) {
        setActiveSection("Home");
      } else {
        setActiveSection("About");
      }
    }
  });

  return (
    <>
      {/* Desktop: unified scroll-driven section */}
      <div
        ref={spacerRef}
        className="hidden sm:block relative w-full"
        style={{ height: `calc(${HERO_SCROLL}px + 100vh)` }}
      >
        {/* Anchor targets for nav hash links */}
        <span id="Home" className="absolute top-[200px] scroll-mt-96" />
        <span id="About" className="absolute top-[1200px] scroll-mt-96" />

        {/* Sticky viewport — all scroll-driven content lives here */}
        <div className="sticky top-0 h-screen overflow-visible">
          <Intro scrollYProgress={scrollYProgress} />
          <About scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Mobile: normal flow */}
      <div className="sm:hidden">
        <Intro />
        <About />
      </div>
    </>
  );
}
```

- [ ] **Step 2: Verify the app builds without errors**

Run: `npm run build` (or `npm run dev` and check browser console)
Expected: No build errors. Intro and About sections render and scroll correctly. Projects section is missing (expected — we'll add it back in Task 2).

- [ ] **Step 3: Commit**

```bash
git add components/HeroSection.tsx
git commit -m "remove Projects from HeroSection sticky scroll wrapper"
```

### Task 2: Add Projects to page.tsx in normal document flow

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Import and render Projects after HeroSection**

```tsx
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Background />
      <HeroSection />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 2: Verify Projects section appears after About**

Run: Check browser. The Projects section should appear in normal document flow after the HeroSection. It will still have the old carousel layout — that's fine, we're just confirming it renders in the right place. The mobile layout should work unchanged since it was already a standalone vertical stack.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "add Projects to page in normal document flow"
```

## Chunk 2: Rewrite Projects Component

### Task 3: Strip Projects.tsx down to a clean standalone section

**Files:**
- Modify: `components/Projects.tsx`

- [ ] **Step 1: Remove all carousel and HeroSection scroll logic**

Replace the entire file with a minimal standalone section. This removes the carousel constants, `CarouselCard`, the `scrollYProgress` prop, and the desktop carousel rendering. Keep the mobile layout and GitHub button. Add `id="projects"` and `useSectionInView` for nav highlighting on both mobile and desktop.

```tsx
"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { FaGithubSquare } from "react-icons/fa";

export default function Projects() {
  const { ref: inViewRef } = useSectionInView("Projects", 0.2);

  const githubButton = (
    <div className="flex justify-center align-middle mt-5">
      <a
        href="https://github.com/arootroatch"
        target="blank"
        rel="nofollow noreferrer"
        className="group bg-white/70 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10 dark:bg-white/10"
      >
        See More on GitHub{" "}
        <FaGithubSquare className="text-xl group-hover:scale-110 transition opacity-60" />
      </a>
    </div>
  );

  return (
    <section
      id="projects"
      ref={inViewRef}
      className="scroll-mt-28 mb-28"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Some of My Projects
      </h2>
      <div className="flex flex-col items-center gap-4">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      {githubButton}
    </section>
  );
}
```

- [ ] **Step 2: Verify it renders as a simple vertical list**

Run: Check browser on both mobile and desktop viewports. Projects should appear as a plain vertical stack of cards. Nav highlighting should work (clicking "Projects" in nav scrolls to section, and scrolling to section highlights "Projects").

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx
git commit -m "strip Projects to minimal standalone section"
```

### Task 4: Add the large sticky fading header

**Files:**
- Modify: `components/Projects.tsx`

- [ ] **Step 1: Add sticky header with scroll-driven opacity fade**

Replace the simple `<h2>` with the three-line sticky header. Add `useScroll` targeting the section ref, and `useTransform` to fade opacity from 1 to 0.05 over the first ~30% of section scroll. The header needs to be `sticky top-0` with a low `z-index` so cards scroll over it. Add a leading `min-h-screen` wrapper so the header starts centered on screen.

Note: we need a separate ref for the section (for `useScroll` target) vs the inView sentinel. Use the section element itself for `useScroll` and a `<span>` for the inView ref. `SectionHeader` is no longer used by Projects — the three-line header uses custom markup instead. `SectionHeader.tsx` remains unchanged for use by other sections.

```tsx
"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { FaGithubSquare } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const { ref: inViewRef } = useSectionInView("Projects", 0.2);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Fade header from full opacity to ghost over the first 30% of section scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.05]);

  const githubButton = (
    <div className="flex justify-center align-middle mt-5">
      <a
        href="https://github.com/arootroatch"
        target="blank"
        rel="nofollow noreferrer"
        className="group bg-white/70 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10 dark:bg-white/10"
      >
        See More on GitHub{" "}
        <FaGithubSquare className="text-xl group-hover:scale-110 transition opacity-60" />
      </a>
    </div>
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-mt-28 mb-28 relative"
    >
      <span ref={inViewRef} className="absolute top-0" />

      {/* Sticky fading header */}
      <div className="sticky top-0 z-0 flex items-center justify-center min-h-screen pointer-events-none">
        <motion.h2
          style={{ opacity: headerOpacity }}
          className="text-7xl lg:text-8xl font-extrabold text-center text-gray-900/80 dark:text-white/80 leading-tight"
        >
          Some
          <br />
          of My
          <br />
          Projects
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-4 relative z-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      {githubButton}
    </section>
  );
}
```

- [ ] **Step 2: Verify header behavior in browser**

Run: Check browser. Scroll to the Projects section. The header "Some / of My / Projects" should:
- Appear large and centered on screen
- Fade to near-invisible as you scroll down through the cards
- Stay sticky behind the cards (cards render on top)

**Important tuning note:** The `useScroll` offset `["start end", "end start"]` means progress=0 when the section top reaches the viewport bottom. The `[0, 0.3]` input range will likely need tuning based on actual section height. If the header fades too early (before the user sees it), try adjusting the offset to `["start start", "end end"]` or shifting the input range (e.g., `[0.15, 0.35]`). Tune the `min-h-screen` if the initial centering isn't right.

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx
git commit -m "add large sticky fading header to Projects section"
```

### Task 5: Add staggered card layout (desktop)

**Files:**
- Modify: `components/Projects.tsx`

- [ ] **Step 1: Add staggered left/right alignment for desktop**

Replace the cards container with a staggered layout. Even-indexed cards (0, 2, 4 — the 1st, 3rd, 5th cards) align left via `sm:self-start`, odd-indexed cards (1, 3 — the 2nd, 4th cards) align right via `sm:self-end`. Cards keep their fixed width (`sm:w-[42rem]`). Increase the gap to `gap-8`. The container should be `max-w-[56rem]` or similar so the stagger offset is visible but cards still overlap.

Update the cards section in the return JSX:

```tsx
      {/* Cards */}
      <div className="flex flex-col items-center sm:items-stretch gap-4 sm:gap-8 relative z-10 max-w-[56rem] mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? "sm:self-start" : "sm:self-end"}`}
          >
            <Project {...project} />
          </div>
        ))}
      </div>
```

- [ ] **Step 2: Verify staggered layout in browser**

Run: Check browser at desktop width. Cards should alternate left and right with visible offset. On mobile, cards should stack centered as before. Adjust `max-w-[56rem]` if the overlap is too much or too little — the goal is that the left-aligned and right-aligned cards visually overlap in the center.

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx
git commit -m "add staggered left/right card layout for desktop"
```

### Task 6: Add card entrance animations

**Files:**
- Modify: `components/Projects.tsx`

- [ ] **Step 1: Wrap each card in a motion.div with whileInView animation**

Each card fades in and slides from its offset side. Left-aligned cards slide from the left (`x: -50`), right-aligned from the right (`x: 50`). Use `whileInView` with `viewport={{ once: true, amount: 0.3 }}`. Respect `prefers-reduced-motion` by checking the Framer Motion `useReducedMotion` hook.

Replace the cards section:

```tsx
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// Inside the component:
  const prefersReducedMotion = useReducedMotion();

// In the return JSX, replace the cards div:
      {/* Cards */}
      <div className="flex flex-col items-center sm:items-stretch gap-4 sm:gap-8 relative z-10 max-w-[56rem] mx-auto">
        {projectsData.map((project, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`${isLeft ? "sm:self-start" : "sm:self-end"}`}
              initial={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 0, x: isLeft ? -50 : 50 }
              }
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, x: 0 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Project {...project} />
            </motion.div>
          );
        })}
      </div>
```

- [ ] **Step 2: Verify animations in browser**

Run: Check browser. Scroll down to the Projects section. Each card should:
- Start invisible and offset to its side
- Fade in and slide to its final position as it enters the viewport
- Only animate once (scrolling back up doesn't re-trigger)

Left-aligned cards should slide in from the left, right-aligned from the right.

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx
git commit -m "add scroll-triggered card entrance animations"
```

## Chunk 3: Polish and Verify

### Task 7: Final visual tuning and dark mode check

**Files:**
- Modify: `components/Projects.tsx` (if needed)

- [ ] **Step 1: Check dark mode header text**

Verify the header text looks good in both light and dark mode. The current classes use `text-gray-900/80 dark:text-white/80` at full opacity, which will fade to effective ~4% via the `useTransform` opacity. If the ghost text is too visible or invisible in either mode, adjust the base opacity classes.

- [ ] **Step 2: Test all interactive elements on cards**

Verify that on the staggered layout:
- GitHub links on cards are clickable
- External links work
- Video play button works (Clean Coders' Odyssey)
- Video modal opens and PIP works
- Hover effects on card images work correctly
- The `pointer-events: none` on the sticky header doesn't block card interactions

- [ ] **Step 3: Test nav highlighting**

Verify:
- Scrolling to Projects section highlights "Projects" in nav
- Clicking "Projects" in nav scrolls to the section
- Scrolling past Projects to Skills correctly switches nav highlight
- Nav highlighting works on both mobile and desktop viewports

- [ ] **Step 4: Test responsive breakpoints**

Check at these widths:
- Mobile (<640px): Cards stack full-width, no stagger, simple vertical list
- Desktop (>=640px): Staggered layout with entrance animations and fading header

- [ ] **Step 5: Commit any adjustments**

```bash
git add -A
git commit -m "polish Projects section: dark mode, responsive, and interaction fixes"
```

(Skip this commit if no adjustments were needed.)
