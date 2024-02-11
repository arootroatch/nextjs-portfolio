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
    title: "Began learning how to code",
    location: "Nashville, TN",
    description:
      "I began learning web development using freeCodeCamp and Udemy courses. I earned the Responsive Web Design and Javascript Algorithms and Data Structures certificates from freeCodeCamp.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Nashville, TN",
    description:
      "Developed and maintained all web pages and was the domain administrator for Sound Roots Productions. I also developed multiple Excel VBA Macros to automate payroll, invoicing, and accounting workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Nashville, TN",
    description:
      "I upskilled to full-stack to be able to bring more features Sound Roots' online presence. I earned the Front-End Frameworks and Backend Development certifications from freeCodeCamp, as well as completing an online full-stack Next.js class.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
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
