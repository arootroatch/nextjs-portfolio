"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const height = useTransform(scrollY, [0, 450, 500], ["auto", "auto", 0]);
  const overflowY = useTransform(
    scrollY,
    [0, 499, 500],
    ["visible", "visible", "hidden"]
  );

  return (
    <motion.section
      className="flex flex-col items-center z-10 h-full max-w-[50rem] text-center sm:mb-0 fixed sm:top-[87%] sm:-translate-y-1/2 translate-y-[20vh]"
      style={{ opacity }}
      id="intro"
    >
      <div
        id="intro-background"
        className=" absolute -top-[45%] sm:-top-[37%] -left-4 w-screen h-[130vh] dark:bg-[radial-gradient(circle, #30012800 0%,#36012d83 55%,#3001285d 95%) bg-[radial-gradient(#30012800_0%,#36012d83_55%,#300128bd_95%)"
        style={{ backgroundPositionY: "-200px" }}
      ></div>
      <div className="flex items-center justify-center">
        <motion.h1
          className="mb-5 mt-2 mr-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl relative bg-white dark:bg-[#491c3d56] bg-opacity-60 rounded-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Alex.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">4 years</span> of experience. I especially
          love developing <span className="italic">engaging UIs</span>. My focus
          is <span className="underline">React (Next.js) with React-Redux</span>
          .
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium relative"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ height, overflowY }}
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
          onClick={() => {
            setActiveSection("Contact"), setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-2 transition opacity-70" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-white/70 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10 dark:bg-gray-400/50 "
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition opacity-60 cursor-pointer" />
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
    </motion.section>
  );
}
