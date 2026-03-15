"use client";
import React from "react";
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
