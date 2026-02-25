"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
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

  const { ref: homeRef } = useSectionInView("Home");
  const { ref: aboutRef } = useSectionInView("About");
  const { ref: projectsRef } = useSectionInView("Projects", 0.2);

  return (
    <>
      {/* Desktop: unified scroll-driven section */}
      <div
        ref={spacerRef}
        className="hidden sm:block relative w-full"
        style={{ height: `calc(${TOTAL_SCROLL}px + 100vh)` }}
      >
        {/* Nav sentinels — absolutely positioned, scroll with document */}
        <span id="Home" ref={homeRef} className="absolute top-[200px] scroll-mt-96" />
        <span id="About" ref={aboutRef} className="absolute top-[1200px] scroll-mt-96" />
        <span id="projects" ref={projectsRef} className="absolute top-[1800px] scroll-mt-28" />

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
