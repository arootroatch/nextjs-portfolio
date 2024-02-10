import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import giftExchange from "@/public/GiftExchange.png";
import soundRoots from "@/public/Sound Roots Shorter.gif";
import calculator from "@/public/Calculator.png";

export const links = [
  {
    name: "Home",
    hash: "#Home",
  },
  {
    name: "About",
    hash: "#About",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Gift Exchange Generator",
    description:
      "An app I created to randomly pick names for gift exchanges. Includes Secret Santa mode with email sending, database lookup, and the ability to set exclusions.",
    tags: ["Vanilla JS", "MongoDB", "PostMark", "Serverless"],
    imageUrl: giftExchange,
  },
  {
    title: "Sound Roots Productions",
    description:
      "Website for my production company. Includes engaging scrolling effects and a custom scrollbar that resembles an audio console fader.",
    tags: ["Vanilla JS", "lax.js", "flickity", "Netlify", 'curator.io'],
    imageUrl: soundRoots,
  },
  {
    title: "Calculator",
    description:
      "A calculator built in React that uses Redux to control which components re-render.",
    tags: ["React", "Redux", "SCSS"],
    imageUrl: calculator,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Tailwind",
  "Styled Components",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "VBA",
  "Git",
  "MongoDB",
  "GraphQL",
  "Express",
] as const;
