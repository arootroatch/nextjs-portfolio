"use client";
import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";

const HERO_SCROLL = 1400;
const PROJECTS_SCROLL = 2240; // TOTAL_SCROLL_EXTRA from Projects
const TOTAL_SCROLL = HERO_SCROLL + PROJECTS_SCROLL;

export default function HeroSection() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end end"],
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // Derive active section from scroll progress instead of intersection observers.
  // Intro visible: progress 0–0.082, About: 0.082–0.385, Projects: 0.385–1.0
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (Date.now() - timeOfLastClick > 1000) {
      if (latest < 0.15) {
        setActiveSection("Home");
      } else if (latest < 0.4) {
        setActiveSection("About");
      } else {
        setActiveSection("Projects");
      }
    }
  });

  return (
    <>
      {/* Desktop: unified scroll-driven section */}
      <div
        ref={spacerRef}
        className="hidden sm:block relative w-full"
        style={{ height: `calc(${TOTAL_SCROLL}px + 100vh)` }}
      >
        {/* Anchor targets for nav hash links */}
        <span id="Home" className="absolute top-[200px] scroll-mt-96" />
        <span id="About" className="absolute top-[1200px] scroll-mt-96" />
        <span id="projects" className="absolute top-[1800px] scroll-mt-28" />

        {/* Sticky viewport — all scroll-driven content lives here */}
        <div className="sticky top-0 h-screen overflow-visible">
          <Intro scrollYProgress={scrollYProgress} />
          <About scrollYProgress={scrollYProgress} />
          <Projects scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Mobile: normal flow */}
      <div className="sm:hidden">
        <Intro />
        <About />
        <Projects />
      </div>
    </>
  );
}
