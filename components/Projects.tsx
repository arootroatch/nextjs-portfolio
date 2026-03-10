import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { FaGithubSquare } from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  motionValue,
} from "framer-motion";

const CARD_WIDTH = 672; // 42rem = 672px
const CARD_GAP = 48; // gap-12 = 3rem = 48px
const NUM_CARDS = projectsData.length;
const MAX_TRANSLATE_X = (NUM_CARDS - 1) * (CARD_WIDTH + CARD_GAP);
const SCROLL_PADDING = 400; // extra scroll distance (px) at start and end
const TOTAL_SCROLL_EXTRA = MAX_TRANSLATE_X + 2 * SCROLL_PADDING;
const PAD_FRACTION = SCROLL_PADDING / TOTAL_SCROLL_EXTRA;

function CarouselCard({
  index,
  scrollYProgress,
  children,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
}) {
  const centeredAt = index / (NUM_CARDS - 1);
  const scale = useTransform(scrollYProgress, (p) => {
    const distance = Math.abs(p - centeredAt);
    return 1 - distance * 0.35;
  });
  const opacity = useTransform(scrollYProgress, (p) => {
    const distance = Math.abs(p - centeredAt);
    return 1 - distance * 0.85;
  });

  return (
    <motion.div style={{ scale, opacity }} className="flex-shrink-0 group">
      {children}
    </motion.div>
  );
}

const STATIC_ZERO = motionValue(0);

export default function Projects({
  scrollYProgress,
}: {
  scrollYProgress?: MotionValue<number>;
}) {
  // Mobile sentinel for nav highlighting
  const { ref: inViewRef } = useSectionInView("Projects", 0.2);

  // Standalone carousel scroll (used when no parent scrollYProgress provided)
  const spacerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: localProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end end"],
  });

  const progress = scrollYProgress ?? STATIC_ZERO;

  // Desktop: section opacity fades in from parent progress
  const sectionOpacity = useTransform(
    progress,
    [0, 0.677, 0.72],
    [0, 0, 1]
  );

  // Disable clicks when section is invisible
  const pointerEvents = useTransform(sectionOpacity, (o) =>
    o > 0 ? "auto" : "none"
  );

  // Desktop: remap parent progress [0.72, 1.0] → [0, 1] for carousel
  const carouselRaw = useTransform(progress, [0.72, 1.0], [0, 1], {
    clamp: true,
  });

  // Apply pad fraction dwell to carousel progress
  const innerProgress = useTransform(
    scrollYProgress ? carouselRaw : localProgress,
    [PAD_FRACTION, 1 - PAD_FRACTION],
    [0, 1],
    { clamp: true }
  );

  const x = useTransform(innerProgress, [0, 1], [0, -MAX_TRANSLATE_X]);

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
    <>
      {/* Mobile: vertical stack */}
      <section id="projects" className="sm:hidden scroll-mt-28 mb-28">
        <span ref={inViewRef} />
        <SectionHeader>Some of My Projects</SectionHeader>
        <div className="flex flex-col items-center gap-4">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
        {githubButton}
      </section>

      {/* Desktop: scroll-linked horizontal carousel within HeroSection's sticky wrapper */}
      {scrollYProgress && (
        <motion.div
          className="hidden sm:flex flex-col items-center justify-center h-full pt-20 absolute inset-0"
          style={{ opacity: sectionOpacity, pointerEvents }}
        >
          <SectionHeader>Some of My Projects</SectionHeader>
          <div className="relative w-full sm:h-[20rem]">
            <motion.div
              className="flex gap-12 absolute"
              style={{
                left: `calc(50% - ${CARD_WIDTH / 2}px)`,
                x,
              }}
            >
              {projectsData.map((project, index) => (
                <CarouselCard
                  key={index}
                  index={index}
                  scrollYProgress={innerProgress}
                >
                  <Project {...project} />
                </CarouselCard>
              ))}
            </motion.div>
          </div>
          {githubButton}
        </motion.div>
      )}
    </>
  );
}
