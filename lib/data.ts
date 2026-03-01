import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {FaBucket, FaCubes, FaFlask} from "react-icons/fa6";
import {GiShipWheel} from "react-icons/gi";
import {LuGraduationCap} from "react-icons/lu";
import httpServer from "@/public/httpServer.png";
import giftExchange from "@/public/GiftExchange.png";
import soundRoots from "@/public/Sound Roots Shorter.gif";
import ticTacToe from "@/public/ticTacToe.png";

export enum ImagePlacement {
  Right = "right",
  Left = "left",
}

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
    name: "Blog",
    hash: "#blog",
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
    title: "Full Stack Tic-Tac-Toe",
    description: "Postgres or EDN database? Terminal, desktop, or web? Easy, medium, or hard? 3x3, 4x4, or 3x3x3? It's the most fully-architected Tic-Tac-Toe you've ever seen.",
    tags: ["Clojure"],
    imageUrl: ticTacToe,
    url: "https://arootroatch-blog.vercel.app/ttt/index.html",
    githubUrl: "https://github.com/arootroatch/tic-tac-toe-clojure",
    imagePlacement: ImagePlacement.Right,
  },
  {
    title: "Gift Exchange Generator",
    description:
      "Secret Santa for the digital age. Framework-free; I built my own state-centered, event-driven architecture. Over 70,000 gift exchange participants to date.",
    tags: ["JavaScript", "MongoDB", "PostMark", "Serverless"],
    imageUrl: giftExchange,
    url: "https://giftexchangegenerator.netlify.app/",
    githubUrl: "https://github.com/arootroatch/ChristmasGiftExchange",
    imagePlacement: ImagePlacement.Right,
  },
  {
    title: "Java HTTP Server",
    description:
      "A multi-threaded HTTP Server written with no external dependencies. Includes session management, static file serving, and multipart file uploads. Routes can be added extensibly.",
    tags: ["Java"],
    imageUrl: httpServer,
    url: undefined,
    githubUrl: "https://github.com/arootroatch/http-server-java",
    imagePlacement: ImagePlacement.Right,
  },
  {
    title: "Sound Roots Productions",
    description:
      "Website for my production company. Includes engaging scrolling effects and a custom scrollbar that resembles an audio console fader.",
    tags: ["Vanilla JS", "lax.js", "flickity", "Netlify", "curator.io"],
    imageUrl: soundRoots,
    url: "https://www.soundrootsproductions.com/",
    githubUrl: undefined,
    imagePlacement: ImagePlacement.Left,
  },
] as const;

export const blogPostsData = [
  {
    title: "Kubernetes Crash Course",
    description:
      "If you feel like Kubernetes is some mystical black box where your application disappears into after you push to remote origin, this one's for you.",
    date: "2026-02-28",
    tags: ["Kubernetes", "DevOps", "Clean Coders"],
    url: "https://cleancoders.com/blog/2026-02-28-kubernetes-crash-course",
    icon: React.createElement(GiShipWheel),
    iconHoverClass: "group-hover-spin",
  },
  {
    title: "Introducing ReMemory: The Solution to Your Re-rendering Woes",
    description:
      "Re-renders slowing down your ClojureScript Reagent app? Connor Kilgore and I built ReMemory to fix exactly that. " +
      "Learn how its built-in state management simplifies your front end code and dramatically improves performance, " +
      "plus how to start using it in your own applications.",
    date: "2026-01-30",
    tags: ["ClojureScript", "Reagent", "React", "Clean Coders"],
    url: "https://cleancoders.com/blog/2026-01-30-introducing-rememory-the-solution-to-your-re-rendering-woes",
    icon: React.createElement(FaBucket),
    iconHoverClass: "group-hover-shake",
  },
  {
    title: "Goodbye, Reagent Class Components! Using Reagent's `with-let` Macro",
    description:
      "Class components and lifecycle hooks had their day \u2014 it's time to move on. This guide walks through writing " +
      "ClojureScript Reagent components in a clean, functional style using with-let, after-render, and useEffect interop, " +
      "with React function component examples for comparison.",
    date: "2025-02-01",
    tags: ["ClojureScript", "Reagent", "React", "Clean Coders"],
    url: "https://cleancoders.com/blog/2025-02-01-goodbye-reagent-class-components-using-reagents-with-let-macro",
    icon: React.createElement(FaFlask),
    iconHoverClass: "group-hover-pour",
  },
  {
    title: "Test-Driven ClojureScript: Using Scaffold to Add a Frontend to Your Application",
    description:
      "Setting up a test-driven ClojureScript frontend from scratch can feel daunting. This guide walks through using " +
      "C3Kit Scaffold, Wire, and Speclj to build fully test-driven, behavior-driven applications with Reagent and Garden CSS.",
    date: "2024-11-18",
    tags: ["ClojureScript", "Reagent", "TDD", "BDD", "Clean Coders"],
    url: "https://cleancoders.com/blog/2024-11-18-test-driven-clojurescript-using-scaffold-to-add-a-frontend-to-your-application",
    icon: React.createElement(FaCubes),
    iconHoverClass: "group-hover-scatter",
  },
] as const;

export const introData =
  "**Hello, I'm Alex.** I'm a **full-stack developer** with **4 years** of experience. I especially love developing *engaging UIs*. My focus is <u>React (Next.js) with React-Redux</u>.";

export const aboutData = [
  "As a professional audio engineer, I've always loved technology and problem solving. When the pandemic shut down my *entire industry* for few months, I took the opportunity to **learn how to code.** Since then, I've used my skills to build web pages and automation workflows for my own business. *I'm passionate about coding* because, like audio engineering, it's a perfect three-way intersection of **creativity, problem-solving, and technology.** I <u>love</u> writing code that creatively solves a *real-world problem,* as well as solving the logic puzzle of debugging my code. My core stack is **React, Next.js, Node.js, and MongoDB,** and I'm always looking to learn new things.",
  "*When I'm not coding,* you can find me running sound at live shows or mentoring live audio students. I enjoy playing classical guitar and reading books in both English and Spanish. My wife and I enjoy playing board games and video games, traveling, and going on adventures with our two dogs.",
] as const;

export const skillsData = [
  "Agentic Development",
  "AI Integration",
  "AWS",
  "CI/CD",
  "Clojure",
  "ClojureScript",
  "Datomic",
  "Docker",
  "Express",
  "Framer Motion",
  "Git",
  "GraphQL",
  "JavaScript",
  "Kubernetes",
  "MongoDB",
  "Next.js",
  "PostgreSQL",
  "Pub/Sub",
  "Python",
  "React",
  "Redis",
  "Redux",
  "Ruby",
  "TypeScript",
  "VBA",
] as const;
