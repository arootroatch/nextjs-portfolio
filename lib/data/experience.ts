import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {LuGraduationCap} from "react-icons/lu";

export const experiencesData = [
  {
    title: "B.M. Recording Technology / B.A. Spanish",
    location: "University of Wisconsin Oshkosh",
    description:
      "- Dual degree in Recording Technology and Spanish Language & Literature.\n" +
      "- Studied abroad at the University of Salamanca, Spain.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Audio Quality Control Technician",
    location: "VER/PRG — Nashville, TN",
    description:
      "- Configured redundant Dante audio-over-ethernet and fiber-optic networks, wireless access points, and production LANs for large-scale live events.\n" +
      "- Progressed from entry-level to go-to resource for system prep and troubleshooting within the first year.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Owner / Web Developer",
    location: "Sound Roots Productions — Nashville, TN",
    description:
      "- Owned and operated a live-event production company providing audio and lighting technical staff to venues and nightclubs.\n" +
      "- Built web applications that managed job applications and feedback for 4 venues across 3 cities.\n" +
      "- Developed 3 VBA automations for payroll and invoicing that saved ~$2,000/year in labor and software costs.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2025",
  },
  {
    title: "Software Apprentice",
    location: "Clean Coders, LLC — Remote",
    description:
      "- Completed a rigorous apprenticeship covering SOLID principles, TDD, design patterns, clean architecture, data structures, and Agile.\n" +
      "- Promoted to Senior Software Engineer after 6 months.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2024 - Nov 2024",
  },
  {
    title: "Senior Software Engineer",
    location: "Clean Coders, LLC — Remote",
    description:
      "- Led technical delivery of Odyssey, an online education platform — served as primary client contact, extracted acceptance criteria, and drove architecture decisions.\n" +
      "- Onboarded developers through pairing sessions and architectural walkthroughs, accelerating their time to first contribution.\n" +
      "- Co-authored ReMemory, a state-management addition to the open-source C3kit Bucket library that increased front-end performance 6x.\n" +
      "- Delivered a production-ready mobile commerce backend in Clojure in 3 weeks with full test coverage.\n" +
      "- Unblocked a stalled team by authoring a 40-test e2e suite that surfaced hard-to-reproduce bugs in a local-first PWA.\n" +
      "- Provisioned a dedicated AWS staging environment (EC2, IAM, DynamoDB, S3), isolating staging from production.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - present",
  },
] as const;
