import {
  motion,
  useTransform,
  MotionValue,
  motionValue,
} from "framer-motion";
import Link from "next/link";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { PiArrowSquareOutLight } from "react-icons/pi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { introData } from "@/lib/data";

const markdownComponents: Components = {
  p: ({ children }) => <>{children}</>,
  em: ({ children }) => <span className="italic">{children}</span>,
  strong: ({ children }) => <span className="font-bold">{children}</span>,
  u: ({ children }) => <span className="underline">{children}</span>,
};

const STATIC_ZERO = motionValue(0);

export default function Intro({
  scrollYProgress,
}: {
  scrollYProgress?: MotionValue<number>;
}) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const progress = scrollYProgress ?? STATIC_ZERO;
  const desktopOpacity = useTransform(progress, [0, 0.082], [1, 0]);
  const desktopHeight = useTransform(
    progress,
    [0, 0.124, 0.137],
    ["auto", "auto", 0]
  );
  const desktopOverflowY = useTransform(
    progress,
    [0, 0.124, 0.137],
    ["visible", "visible", "hidden"]
  );

  const content = (
    <>
      <div className="flex items-center justify-center">
        <motion.h1
          className="mb-5 mt-2 mr-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl relative bg-white dark:bg-[#491c3d56] bg-opacity-60 rounded-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={markdownComponents}
          >
            {introData}
          </ReactMarkdown>
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium relative pointer-events-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={
          scrollYProgress
            ? { height: desktopHeight, overflowY: desktopOverflowY }
            : {}
        }
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-2 transition opacity-70" />
        </Link>
        <a
          href="/Root-Roatch-WebDevResume.pdf"
          target="blank"
          className="group bg-white/70 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10 dark:bg-gray-400/50 "
        >
          View my resume{" "}
          <PiArrowSquareOutLight className="group-hover:translate-x-1 text-xl transition  cursor-pointer" />
        </a>
        <div className="flex flex-row">
          <a
            href="https://www.linkedin.com/in/alex-root-roatch-a2b25370/"
            target="blank"
            rel="nofollow noreferrer"
            className="bg-white/70 p-4 mr-2 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black/10 hover:text-gray-950 focus:text-gray-950 dark:bg-gray-400/50 dark:text-white/60 "
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/arootroatch"
            target="blank"
            rel="nofollow noreferrer"
            className="bg-white/70 p-4 text-gray-700 flex items-center gap-2 text-[1.4rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] max-w-[50px] max-h-[50px] active:scale-105 transition border-black/10 hover:text-gray-950 cursor-pointer focus:text-gray-950 dark:bg-gray-400/50  dark:text-white/60 "
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </>
  );

  // Desktop: absolute within sticky wrapper, driven by scrollYProgress
  if (scrollYProgress) {
    return (
      <motion.section
        className="flex flex-col items-center z-10 h-full w-full max-w-[50rem] text-center absolute top-[87%] -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ opacity: desktopOpacity }}
        id="intro"
      >
        {content}
      </motion.section>
    );
  }

  // Mobile: normal flow, no scroll animations
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full min-h-screen text-center"
      id="intro"
    >
      {content}
    </section>
  );
}
