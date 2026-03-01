import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {LuGraduationCap} from "react-icons/lu";

export const experiencesData = [
  {
    title: "Began learning how to code",
    location: "Nashville, TN",
    description:
      "Earned four freeCodeCamp certificates in Responsive Web Design, JavaScript, Front End Frameworks, and Backend Development. " +
      "Built the Sound Roots Productions homepage and the first iteration of the Gift Exchange Generator, hosted on Netlify with continuous integration.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Web Developer",
    location: "Sound Roots Productions",
    description:
      "Built a dynamic feedback form and job application form encompassing 4 venues across 3 cities. " +
      "Created an internal resources page using NFC tags for quick reference by personnel. " +
      "Built 3 VBA macros that automated invoice and paystub generation and email sending, saving roughly 8 hours of work per month.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2024",
  },
  {
    title: "Software Craftsman",
    location: "Clean Coders, LLC",
    description:
      "Built desktop and full-stack web applications in the UAS, payroll, education, and mobile commerce industries, mostly written in Clojure and ClojureScript. " +
      "Maintained internal planning and development tools." +
      "Managed AWS EC2 and EKS infrastructure with GitHub Actions. " +
      "Integrated AI into applications and leveraged agentic orchestration in development workflows." +
      "Built a state-management library that increased front end performance by a factor of 6.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;
