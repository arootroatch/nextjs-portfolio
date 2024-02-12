"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Background() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 20, 200], [0, 0.5, 1]);
  return (
    <motion.div
      className="-z-10 fixed top-0 left-0  w-screen h-screen bg-gradient-radial dark:to-[rgba(17,24,39)] dark:from-[#410537d7] from-[rgba(216,187,212,0.86)] to-[rgba(216,236,255,0.93)] backdrop-blur-sm "
      style={{ opacity }}
    ></motion.div>
  );
}
