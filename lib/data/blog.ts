import React from "react";
import {FaBucket, FaCubes, FaFlask} from "react-icons/fa6";
import {GiShipWheel} from "react-icons/gi";

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
