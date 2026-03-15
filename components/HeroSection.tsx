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
