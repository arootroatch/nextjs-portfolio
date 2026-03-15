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
