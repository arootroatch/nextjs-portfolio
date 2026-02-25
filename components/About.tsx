import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import SectionHeader from "./SectionHeader";
import {
  motion,
  useTransform,
  MotionValue,
  motionValue,
} from "framer-motion";
import { aboutData } from "@/lib/data";

const markdownComponents: Components = {
  p: ({ children }) => <>{children}</>,
  em: ({ children }) => <span className="italic">{children}</span>,
  strong: ({ children }) => (
    <span className="font-bold tracking-widest">{children}</span>
  ),
  u: ({ children }) => <span className="underline">{children}</span>,
};

const STATIC_ZERO = motionValue(0);

export default function About({
  scrollYProgress,
}: {
  scrollYProgress?: MotionValue<number>;
}) {
  const progress = scrollYProgress ?? STATIC_ZERO;
  const desktopOpacity = useTransform(
    progress,
    [0, 0.082, 0.22, 0.357, 0.385],
    [0, 0, 1, 1, 0]
  );

  const paragraphs = aboutData.map((text, index) => (
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
  ));

  // Desktop: absolute within sticky wrapper, driven by scrollYProgress
  if (scrollYProgress) {
    return (
      <motion.section
        className="sm:pl-5 sm:pr-9 max-w-[50rem] text-center h-full w-full leading-8 absolute top-[68%] -translate-y-1/2 left-1/2 -translate-x-1/2 px-4"
        style={{ opacity: desktopOpacity }}
      >
        <SectionHeader>About Me</SectionHeader>
        {paragraphs}
      </motion.section>
    );
  }

  // Mobile: normal flow, no scroll animations
  return (
    <section className="mb-28 max-w-[50rem] text-center w-full leading-8 px-4">
      <SectionHeader>About Me</SectionHeader>
      {paragraphs}
    </section>
  );
}
