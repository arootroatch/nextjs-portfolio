"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { blogPostsData } from "@/lib/data";
import BlogPost from "./BlogPost";
import { useSectionInView } from "@/lib/hooks";
import { RiQuillPenLine } from "react-icons/ri";

export default function Blog() {
  const { ref } = useSectionInView("Blog", 0.5);

  return (
    <section ref={ref} id="blog" className="scroll-mt-28 mb-28">
      <SectionHeader>Featured Blogs</SectionHeader>
      <div>
        {blogPostsData.map((post, index) => (
          <React.Fragment key={index}>
            <BlogPost {...post} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <a
          href="https://arootroatch-blog.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/70 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
        >
          Read More on My Blog{" "}
          <RiQuillPenLine className="text-xl group-hover:scale-110 transition opacity-60" />
        </a>
      </div>
    </section>
  );
}
