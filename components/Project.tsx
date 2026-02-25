"use client";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  return (
    <section className="group flex-shrink-0 w-full sm:w-[42rem] bg-gray-100/50 border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-white/65 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
      <Link href={url} target="_blank" rel="nofollow noreferrer">
        <div className="sm:group-even:ml-[18rem] py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
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
        <Image
          alt={title}
          src={imageUrl}
          quality={90}
          className="absolute hidden sm:block top-10 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 transition group-even:group-hover:rotate-2 group-even:group-hover:translate-x-3"
        />
      </Link>
    </section>
  );
}
