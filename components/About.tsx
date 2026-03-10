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

  const headerOpacity = useTransform(
    progress,
    [0, 0.043, 0.10, 0.65, 0.677],
    [0, 0, 1, 1, 0]
  );

  const p1Opacity = useTransform(progress, [0.06, 0.12, 0.20, 0.22], [0, 1, 1, 0]);
  const p2Opacity = useTransform(progress, [0.22, 0.28, 0.36, 0.38], [0, 1, 1, 0]);
  const p3Opacity = useTransform(progress, [0.38, 0.44, 0.52, 0.54], [0, 1, 1, 0]);
  const p4Opacity = useTransform(progress, [0.54, 0.60, 0.65, 0.677], [0, 1, 1, 0]);

  const paragraphOpacities = [p1Opacity, p2Opacity, p3Opacity, p4Opacity];

  const p3PointerEvents = useTransform(p3Opacity, (o) =>
    o > 0.1 ? "auto" : "none"
  );

  // P3 entrance animations — line arrays from sides, audience from bottom
  const p3LeftX = useTransform(progress, [0.38, 0.44], [-200, 0]);
  const p3RightX = useTransform(progress, [0.38, 0.44], [200, 0]);
  const p3AudienceY = useTransform(progress, [0.38, 0.44], [100, 0]);

  // Desktop icons: [leftIcon, rightIcon] per paragraph — each in its own motion.div
  const desktopIcons: [React.ReactNode, React.ReactNode][] = [
    [<GuitarSVG key="guitar" className="w-32 h-32 animate-float text-gray-700 dark:text-gray-300" />, <HandPlaneSVG key="plane" className="w-32 h-32 animate-float-delayed text-gray-700 dark:text-gray-300" />],
    [<DroneSVG key="drone" className="w-32 h-32 animate-float text-gray-700 dark:text-gray-300" />, <CodeTerminalSVG key="terminal" className="w-32 h-32 animate-float-delayed text-gray-700 dark:text-gray-300" />],
    [<img key="linearray-l" src="/line array vector svg.svg" alt="" className="w-52 h-52 -mt-40 dark:invert opacity-50" />, <img key="linearray-r" src="/line array vector svg.svg" alt="" className="w-52 h-52 -mt-40 dark:invert opacity-50 scale-x-[-1]" />],
    [<DogSVG key="dog" className="w-32 h-32 animate-float text-gray-700 dark:text-gray-300" />, <CountryHouseSVG key="house" className="w-32 h-32 animate-float-delayed text-gray-700 dark:text-gray-300" />],
  ];

  // Desktop: absolute within sticky wrapper, driven by scrollYProgress
  if (scrollYProgress) {
    return (
      <section className="text-center h-full w-full leading-8 absolute inset-0">
        {/* Header above center */}
        <motion.div className="absolute top-[30%] left-0 right-0" style={{ opacity: headerOpacity }}>
          <SectionHeader>About Me</SectionHeader>
        </motion.div>

        {/* Paragraphs centered, icons independently positioned on each side */}
        <div className="absolute top-[55%] -translate-y-1/2 left-0 right-0 px-4">
          <div className="relative h-[16rem]">
            {aboutData.map((text, index) => (
              <motion.div
                key={index}
                className="max-w-[40rem] mx-auto absolute top-0 left-1/2 -translate-x-1/2"
                style={{ opacity: paragraphOpacities[index] }}
              >
                <p className="bg-[rgba(217,199,214,0.34)] dark:bg-transparent rounded-lg text-left">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
                    {text}
                  </ReactMarkdown>
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audience photo — bottom of screen during audio engineering paragraph (P3) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 flex justify-center"
          style={{ opacity: paragraphOpacities[2], pointerEvents: p3PointerEvents, y: p3AudienceY }}
        >
          <div className="relative w-full">
            <img src="/audience.png" alt="" className="w-full max-h-[30vh] object-cover opacity-10" />
            <a href="https://pngtree.com/freepng/audiences-in-club-musical_8485712.html" className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] opacity-30 hover:opacity-60 transition ">png image from pngtree.com</a>
          </div>
        </motion.div>

        {/* Icons — each in its own motion.div, positioned to the sides */}
        {desktopIcons.map(([leftIcon, rightIcon], index) => (
          <React.Fragment key={`icons-${index}`}>
            {leftIcon && (
              <motion.div
                className="absolute left-[12%] top-[50%] -translate-y-1/2"
                style={{ opacity: paragraphOpacities[index], x: index === 2 ? p3LeftX : 0 }}
              >
                {leftIcon}
              </motion.div>
            )}
            {rightIcon && (
              <motion.div
                className="absolute right-[12%] top-[50%] -translate-y-1/2"
                style={{ opacity: paragraphOpacities[index], x: index === 2 ? p3RightX : 0 }}
              >
                {rightIcon}
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </section>
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
