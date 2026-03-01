import httpServer from "@/public/httpServer.png";
import giftExchange from "@/public/GiftExchange.png";
import soundRoots from "@/public/Sound Roots Shorter.gif";
import ticTacToe from "@/public/ticTacToe.png";

export enum ImagePlacement {
  Right = "right",
  Left = "left",
}

export const projectsData = [
  {
    title: "Full Stack Tic-Tac-Toe",
    description: "Postgres or EDN database? Terminal, desktop, or web? Easy, medium, or hard? 3x3, 4x4, or 3x3x3? It's the most fully-architected Tic-Tac-Toe you've ever seen.",
    tags: ["Clojure", "Speclj", "TDD", "SQL"],
    imageUrl: ticTacToe,
    url: "https://arootroatch-blog.vercel.app/ttt/index.html",
    githubUrl: "https://github.com/arootroatch/tic-tac-toe-clojure",
    imagePlacement: ImagePlacement.Right,
  },
  {
    title: "Gift Exchange Generator",
    description:
      "Secret Santa for the digital age. Framework-free; I built my own state-centered, event-driven architecture. Over 70,000 gift exchange participants to date.",
    tags: ["JS", "MongoDB", "PostMark", "Serverless", "Vitest"],
    imageUrl: giftExchange,
    url: "https://giftexchangegenerator.netlify.app/",
    githubUrl: "https://github.com/arootroatch/ChristmasGiftExchange",
    imagePlacement: ImagePlacement.Right,
  },
  {
    title: "Java HTTP Server",
    description:
      "A multi-threaded HTTP Server written with no external dependencies. Includes session management, static file serving, and multipart file uploads. Routes can be added extensibly.",
    tags: ["Java", "JUnit"],
    imageUrl: httpServer,
    url: undefined,
    githubUrl: "https://github.com/arootroatch/http-server-java",
    imagePlacement: ImagePlacement.Right,
  },
  {
    title: "Sound Roots Productions",
    description:
      "Website for my production company. Includes engaging scrolling effects and a custom scrollbar that resembles an audio console fader.",
    tags: ["JavaScript", "lax.js", "Netlify"],
    imageUrl: soundRoots,
    url: "https://www.soundrootsproductions.com/",
    githubUrl: undefined,
    imagePlacement: ImagePlacement.Left,
  },
] as const;
