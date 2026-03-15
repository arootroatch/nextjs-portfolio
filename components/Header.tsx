"use client";
import { motion, useScroll, useMotionValueEvent, useMotionValue, useAnimate } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const { scrollY } = useScroll();
  const lastScrollY = useMotionValue(0);
  const [scope, animate] = useAnimate();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = lastScrollY.get();
    const delta = current - previous;
    lastScrollY.set(current);

    // Only hide/show on mobile
    if (window.innerWidth >= 640) return;

    // Ignore micro-scrolls (< 10px) to prevent flicker
    if (Math.abs(delta) < 10) return;

    if (delta > 0 && current > 80) {
      // Scrolling down — slide up and hide
      animate(scope.current, { y: -100, pointerEvents: "none" }, { duration: 0.15, ease: "easeIn" });
    } else if (delta < 0) {
      // Scrolling up — slide down and show
      animate(scope.current, { y: 0, pointerEvents: "auto" }, { duration: 0.15, ease: "easeOut" });
    }
  });

  return (
    <header ref={scope} className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-screen rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-65"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                className={clsx(
                  "justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-300":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={(e) => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  // On mobile, Home/About anchors use different IDs
                  if (window.innerWidth < 640 && (link.name === "Home" || link.name === "About")) {
                    e.preventDefault();
                    document.getElementById(`mobile${link.name}`)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
