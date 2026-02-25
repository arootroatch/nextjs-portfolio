import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {LuGraduationCap} from "react-icons/lu";
import giftExchange from "@/public/GiftExchange.png";
import soundRoots from "@/public/Sound Roots Shorter.gif";
import ticTacToe from "@/public/ticTacToe.png";

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
    title: "Gift Exchange Generator",
    description:
      "An app I created to randomly pick names for gift exchanges. Includes Secret Santa mode with email sending, database lookup, and the ability to set exclusions.",
    tags: ["Vanilla JS", "MongoDB", "PostMark", "Serverless"],
    imageUrl: giftExchange,
    url: "https://giftexchangegenerator.netlify.app/",
  },
  {
    title: "Sound Roots Productions",
    description:
      "Website for my production company. Includes engaging scrolling effects and a custom scrollbar that resembles an audio console fader.",
    tags: ["Vanilla JS", "lax.js", "flickity", "Netlify", "curator.io"],
    imageUrl: soundRoots,
    url: "https://www.soundrootsproductions.com/",
  },
  {
    title: "Unwinnable Tic-Tac-Toe",
    description: "Play against the computer... and lose! ",
    tags: ["HTML", "CSS", "Vanilla JS"],
    imageUrl: ticTacToe,
    url: "https://unwinnable-tic-tac-toe.netlify.app/",
  },
] as const;

export const blogPostsData = [
  {
    title: "Introducing ReMemory: The Solution to Your Re-rendering Woes",
    description:
      "To solve performance problems in our ClojureScript Reagent front ends, Connor Kilgore and I wrote the ReMemory " +
      "implementation of the C3Kit Bucket database API. This blog details how the built-in state management vastly " +
      "improves front end performance and simplifies front end code, as well as how to use it in your applications.",
    date: "2026-01-30",
    tags: ["ClojureScript", "Reagent", "React", "Clean Coders"],
    url: "https://cleancoders.com/blog/2026-01-30-introducing-rememory-the-solution-to-your-re-rendering-woes",
  },
  {
    title: "Goodbye, Reagent Class Components! Using Reagent's `with-let` Macro",
    description:
      "A guide for modernizing ClojureScript Reagent components to be written in a functional style rather than " +
      "resorting to antiquated class component lifecycle hooks. Covers with-let, after-render, and useEffect interop." +
      " Includes React function component examples for comparison.",
    date: "2025-02-01",
    tags: ["ClojureScript", "Reagent", "React", "Clean Coders"],
    url: "https://cleancoders.com/blog/2025-02-01-goodbye-reagent-class-components-using-reagents-with-let-macro",
  },
  {
    title: "Test-Driven ClojureScript: Using Scaffold to Add a Frontend to Your Application",
    description:
      "A guide for using C3Kit Scaffold, C3Kit Wire, and Speclj to create fully Test-Driven, Behavior-Driven front " +
      "end applications in ClojureScript, using Reagent for application code and Garden for CSS styling.",
    date: "2024-11-18",
    tags: ["ClojureScript", "Reagent", "TDD", "BDD", "Clean Coders"],
    url: "https://cleancoders.com/blog/2024-11-18-test-driven-clojurescript-using-scaffold-to-add-a-frontend-to-your-application",
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
