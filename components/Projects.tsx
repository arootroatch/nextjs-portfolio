"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { FaGithubSquare } from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function Projects() {
  const { ref: inViewRef } = useSectionInView("Projects", 0.2);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Header fades in as section enters viewport, holds, fades to ghost as cards scroll over
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.05, 0.15, 0.25, 0.7, 0.8],
    [0, 1, 1, 1, 0.05, 0.05, 0]
  );

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
      className="scroll-mt-[60vh] mb-28 relative w-full"
    >
      <span ref={inViewRef} className="absolute top-0" />

      {/* Fixed header — never scrolls, just fades in/out based on section scroll */}
      <motion.div
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: headerOpacity }}
      >
        <h2 className="text-7xl lg:text-8xl font-extrabold text-center text-gray-900/80 dark:text-white/80 flex flex-col gap-6">
          <span>Some</span>
          <span>of My</span>
          <span>Projects</span>
        </h2>
      </motion.div>

      {/* Spacer so header is visible before cards begin */}
      <div className="h-[30vh]" />

      {/* Cards */}
      <div className="flex flex-col items-center gap-4 sm:gap-8 relative z-10 w-full max-w-[56rem] mx-auto">
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
              viewport={{ amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Project {...project} />
            </motion.div>
          );
        })}
      </div>
      {githubButton}
    </section>
  );
}
