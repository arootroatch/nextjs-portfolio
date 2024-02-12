"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [0, 300, 800, 1300, 1400],
    [0, 0, 1, 1, 0]
  );
  return (
    <motion.section
      className="mb-28 mt-[800px] sm:pl-5 sm:pr-9 sm:mt-0 max-w-[50rem] text-center sm:h-full w-full leading-8 sm:mb-40 sm:fixed sm:top-[68%] sm:-translate-y-1/2"
      style={{ opacity }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3 max-w-[42rem] mx-auto backdrop-blur-xl">
        As a professional audio engineer, I’ve always loved technology and
        problem solving. When the pandemic shut down my{" "}
        <span className="italic">entire industry</span> for few months, I took
        the opportunity to{" "}
        <span className="font-bold tracking-widest">learn how to code.</span>{" "}
        Since then, I’ve used my skills to build web pages and automation
        workflows for my own business.{" "}
        <span className="italic">I'm passionate about coding</span> because,
        like audio engineering, it’s a perfect three-way intersection of
        <span className="font-bold tracking-widest">
          {" "}
          creativity, problem-solving, and technology.
        </span>{" "}
        I <span className="underline">love</span> writing code that creatively
        solves a <span className="italic">real-world problem,</span> as well as
        solving the logic puzzle of debugging my code. My core stack is{" "}
        <span className="font-bold tracking-widest">
          React, Next.js, Node.js, and MongoDB,
        </span>{" "}
        and I'm always looking to learn new things.
      </p>
      <p className="max-w-[42rem] mx-auto backdrop-blur-xl ">
        <span className="italic">When I’m not coding,</span> you can find me
        running sound at live shows or mentoring live audio students. I enjoy
        playing classical guitar and reading books in both English and Spanish.
        My wife and I enjoy playing board games and video games, traveling, and
        going on adventures with our two dogs.
      </p>
    </motion.section>
  );
}
