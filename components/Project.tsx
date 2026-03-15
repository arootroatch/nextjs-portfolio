"use client";
import Image from "next/image";
import { ImagePlacement, projectsData } from "@/lib/data";
import { FaGithub, FaArrowUpRightFromSquare, FaCirclePlay } from "react-icons/fa6";
import { useState, useCallback, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type ProjectProps = (typeof projectsData)[number];

function VideoModal({
  videoUrl,
  hidden,
  onClose,
  onPipChange,
}: {
  videoUrl: string;
  hidden: boolean;
  onClose: () => void;
  onPipChange: (active: boolean) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnter = () => onPipChange(true);
    const handleLeave = () => onPipChange(false);
    video.addEventListener("enterpictureinpicture", handleEnter);
    video.addEventListener("leavepictureinpicture", handleLeave);
    return () => {
      video.removeEventListener("enterpictureinpicture", handleEnter);
      video.removeEventListener("leavepictureinpicture", handleLeave);
    };
  }, [onPipChange]);

  useEffect(() => {
    if (!hidden) closeButtonRef.current?.focus();
  }, [hidden]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !hidden) onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, hidden]);

  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [hidden]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm ${hidden ? "invisible" : ""}`}
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition cursor-pointer"
          aria-label="Close video"
        >
          ✕
        </button>
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  githubUrl,
  videoUrl,
  imagePlacement,
}: ProjectProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [pipActive, setPipActive] = useState(false);
  const left = imagePlacement === ImagePlacement.Left;

  const openVideo = useCallback(() => setShowVideo(true), []);

  const handleClose = useCallback(() => {
    setShowVideo(false);
    setPipActive(false);
  }, []);

  const handlePipChange = useCallback((active: boolean) => {
    setPipActive(active);
  }, []);

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

  const playOverlay = videoUrl ? (
    <div
      role="button"
      tabIndex={0}
      className={`absolute hidden sm:flex top-10 w-[28.25rem] h-[calc(100%-2.5rem)] items-center rounded-t-lg bg-black/0 hover:bg-black/30 transition cursor-pointer group/play group-hover:translate-y-3 group-hover:scale-105 ${
        left
          ? "-left-40 group-hover:translate-x-3 group-hover:rotate-2 justify-end pr-[8rem]"
          : "-right-40 group-hover:-translate-x-3 group-hover:-rotate-2 justify-start pl-[8rem]"
      }`}
      onClick={openVideo}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openVideo(); } }}
      aria-label="Play video"
    >
      <FaCirclePlay className="text-5xl text-white/70 group-hover/play:text-white/90 drop-shadow-lg transition group-hover/play:scale-110" />
    </div>
  ) : null;

  return (
    <>
      <section
        className={`group flex-shrink-0 w-full sm:w-[42rem] bg-gray-100/50 border border-black/5 overflow-hidden relative sm:h-[20rem] hover:bg-white/65 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white cursor-default ${
          left ? "sm:pl-8" : "sm:pr-8"
        }`}
      >
        <div
          className={`py-4 pb-7 px-5 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ${
            left ? "sm:ml-[18rem] sm:pr-10" : "sm:pl-10"
          }`}
        >
          <h3 className="text-2xl font-semibold">
            {title}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-block ml-2 align-middle text-lg text-gray-400 hover:text-gray-700 dark:hover:text-white/90 transition cursor-pointer"
                aria-label={`Open ${title} in new tab`}
              >
                <FaArrowUpRightFromSquare />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-block ml-2 align-middle text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-white/90 transition cursor-pointer"
                aria-label={`View ${title} on GitHub`}
              >
                <FaGithub />
              </a>
            )}
            {videoUrl && (
              <button
                onClick={openVideo}
                className="sm:hidden inline-block ml-2 align-middle text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-white/90 transition cursor-pointer"
                aria-label="Play video"
              >
                <FaCirclePlay />
              </button>
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
          <a
            href={url}
            target="_blank"
            rel="nofollow noreferrer"
            className="cursor-pointer"
          >
            {image}
          </a>
        ) : (
          image
        )}
        {playOverlay}
      </section>
      {(showVideo || pipActive) && videoUrl && createPortal(
        <VideoModal
          videoUrl={videoUrl}
          hidden={pipActive}
          onClose={handleClose}
          onPipChange={handlePipChange}
        />,
        document.body
      )}
    </>
  );
}
