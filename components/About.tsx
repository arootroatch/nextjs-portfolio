"use client";
import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import SectionHeader from "./SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutData } from "@/lib/data";

const markdownComponents: Components = {
  p: ({ children }) => <>{children}</>,
  em: ({ children }) => <span className="italic">{children}</span>,
  strong: ({ children }) => (
    <span className="font-bold tracking-widest">{children}</span>
  ),
  u: ({ children }) => <span className="underline">{children}</span>,
};

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
      {aboutData.map((text, index) => (
        <p
          key={index}
          className={`max-w-[42rem] mx-auto bg-[rgba(217,199,214,0.34)] dark:bg-transparent rounded-lg${index < aboutData.length - 1 ? " mb-3" : ""}`}
        >
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={markdownComponents}
          >
            {text}
          </ReactMarkdown>
        </p>
      ))}
    </motion.section>
  );
}
