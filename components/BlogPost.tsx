"use client";

import { useRef } from "react";
import { blogPostsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type BlogPostProps = (typeof blogPostsData)[number];

export default function BlogPost({
  title,
  description,
  date,
  tags,
  url,
  icon,
  iconHoverClass,
}: BlogPostProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <section
        ref={ref}
        className="bg-gray-100/50 max-w-[42rem] border border-black/5 overflow-hidden relative hover:bg-white/65 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <Link href={url} target="_blank" rel="nofollow noreferrer">
          <div className="py-4 pb-7 px-5 sm:pl-10 sm:pr-8 sm:pt-8 flex flex-col h-full sm:mr-28">
            <p className="text-sm text-gray-500 dark:text-white/50 mb-1">
              {date}
            </p>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase dark:text-white/80 tracking-wider text-white rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <span className={`absolute -right-24 top-1/2 -translate-y-1/2 text-[18rem] opacity-[0.07] group-hover:opacity-[0.12] transition dark:text-white pointer-events-none ${iconHoverClass}`}>
            {icon}
          </span>
        </Link>
      </section>
    </motion.div>
  );
}
