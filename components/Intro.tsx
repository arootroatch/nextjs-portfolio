"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [0,500],
    [1,0]
  )
 


  return (
    <motion.section className="h-full mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] absolute top-0" style={{opacity}}>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/WeddingSelfie.jpeg"
              alt="Alex Root-Roatch portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Alex.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I especially love developing{" "}
        <span className="italic">engaging UIs</span>. My focus is{" "}
        <span className="underline">React (Next.js) with React-Redux</span>.
      </motion.h1>
      <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.1}}
      >
        <Link className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition" href="#contact" onClick={()=>{setActiveSection("Contact"), setTimeOfLastClick(Date.now())}}>Contact me here <BsArrowRight className="group-hover:translate-x-2 transition opacity-70"/></Link>
        <a href="/CV.pdf" download className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10 dark:bg-white/10">Download CV <HiDownload className="group-hover:translate-y-1 transition opacity-60 cursor-pointer"/></a>
        <a href="https://www.linkedin.com/in/alex-root-roatch-a2b25370/" target="blank" rel="nofollow noreferrer" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black/10 hover:text-gray-950 focus:text-gray-950 dark:bg-white/10 dark:text-white/60"><BsLinkedin/></a>
        <a href="https://github.com/arootroatch" target="blank" rel="nofollow noreferrer" className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.4rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border-black/10 hover:text-gray-950 cursor-pointer focus:text-gray-950 dark:bg-white/10 dark:text-white/60"><FaGithubSquare /></a>
      </motion.div>
    </motion.section>
  );
}
