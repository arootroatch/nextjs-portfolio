"use client";
import Image from "next/image";
import { ImagePlacement, projectsData } from "@/lib/data";
import { FaGithub } from "react-icons/fa6";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  githubUrl,
  imagePlacement,
}: ProjectProps) {
  const left = imagePlacement === ImagePlacement.Left;

  const image = (
    <Image
      alt={title}
      src={imageUrl}
      quality={90}
      className={`absolute hidden sm:block top-10 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:translate-y-3 group-hover:scale-105 ${
        left
          ? "-left-40 group-hover:translate-x-3 group-hover:rotate-2"
          : "-right-40 group-hover:-translate-x-3 group-hover:-rotate-2"
      }`}
    />
  );

  return (
    <section className={`group flex-shrink-0 w-full sm:w-[42rem] bg-gray-100/50 border border-black/5 overflow-hidden relative sm:h-[20rem] hover:bg-white/65 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white cursor-default ${
      left ? "sm:pl-8" : "sm:pr-8"
    }`}>
      <div className={`py-4 pb-7 px-5 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ${
        left ? "sm:ml-[18rem] sm:pr-10" : "sm:pl-10"
      }`}>
        <h3 className="text-2xl font-semibold">
          {title}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-block ml-2 align-middle text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-white/90 transition cursor-pointer"
            >
              <FaGithub />
            </a>
          )}
        </h3>
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
      {url ? (
        <a href={url} target="_blank" rel="nofollow noreferrer" className="cursor-pointer">
          {image}
        </a>
      ) : (
        image
      )}
    </section>
  );
}
