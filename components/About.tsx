"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [0, 300, 800, 1100, 1300],
    [0, 0, 1, 1, 0]
  );
  return (
    <motion.section
      className="mb-28 mt-[800px] sm:pl-5 sm:pr-9 sm:mt-0 max-w-[50rem] text-center sm:h-full w-full leading-8 sm:mb-40 sm:fixed sm:top-[74%] sm:-translate-y-1/2"
      style={{ opacity }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3 max-w-[42rem] mx-auto">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p className="max-w-[42rem] mx-auto">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
