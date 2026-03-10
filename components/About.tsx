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
import GuitarSVG from "./svg/GuitarSVG";
import HandPlaneSVG from "./svg/HandPlaneSVG";
import DroneSVG from "./svg/DroneSVG";
import CodeTerminalSVG from "./svg/CodeTerminalSVG";
import MixerSVG from "./svg/MixerSVG";
import DogSVG from "./svg/DogSVG";
import CountryHouseSVG from "./svg/CountryHouseSVG";

const markdownComponents: Components = {
  p: ({ children }) => <>{children}</>,
  em: ({ children }) => <span className="italic">{children}</span>,
  strong: ({ children }) => (
    <span className="font-bold tracking-widest">{children}</span>
  ),
  u: ({ children }) => <span className="underline">{children}</span>,
};

const STATIC_ZERO = motionValue(0);

const mobileIconGroups = [
  // P1 (index 0): left icons — craft/guitar hobbies
  <div key="icons-0" className="flex-shrink-0 w-16 flex flex-col gap-2">
    <GuitarSVG className="w-14 h-14 animate-float text-gray-700 dark:text-gray-300" />
    <HandPlaneSVG className="w-12 h-12 animate-float-delayed text-gray-700 dark:text-gray-300" />
  </div>,
  // P2 (index 1): right icons — tech work
  <div key="icons-1" className="flex-shrink-0 w-16 flex flex-col gap-2">
    <DroneSVG className="w-14 h-14 animate-float text-gray-700 dark:text-gray-300" />
    <CodeTerminalSVG className="w-12 h-12 animate-float-delayed text-gray-700 dark:text-gray-300" />
  </div>,
  // P3 (index 2): left icon — audio engineering (single, larger)
  <div key="icons-2" className="flex-shrink-0 w-16 flex flex-col gap-2">
    <MixerSVG className="w-16 h-16 animate-float text-gray-700 dark:text-gray-300" />
  </div>,
  // P4 (index 3): right icons — personal life
  <div key="icons-3" className="flex-shrink-0 w-16 flex flex-col gap-2">
    <DogSVG className="w-14 h-14 animate-float text-gray-700 dark:text-gray-300" />
    <CountryHouseSVG className="w-12 h-12 animate-float-delayed text-gray-700 dark:text-gray-300" />
  </div>,
];

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

  // Mobile: normal flow, paragraphs animate in via whileInView with icons
  return (
    <section className="mb-28 max-w-[50rem] text-center w-full leading-8 px-4">
      <SectionHeader>About Me</SectionHeader>
      {aboutData.map((text, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={index}
            className={`flex ${isEven ? "flex-row" : "flex-row-reverse"} items-center gap-4 max-w-[42rem] mx-auto mb-8`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {mobileIconGroups[index]}
            <p className="bg-[rgba(217,199,214,0.34)] dark:bg-transparent rounded-lg">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={markdownComponents}
              >
                {text}
              </ReactMarkdown>
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}
