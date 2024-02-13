import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SectionSpan from "@/components/SectionSpan";
import { url } from "inspector";
import Background from "@/components/Background";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">

      <BackgroundImage/>
      <div
        id="scroll-container"
        className="w-full max-w-[50rem] min-h-[1400px] sm:h-[2000px] relative "
        >
        <Background/>
        <SectionSpan id="Home" className="absolute top-[200px] scroll-mt-96" />
        <SectionSpan id="About" className="absolute top-[68%] scroll-mt-96" />
        <Intro />
        <About />
      </div>
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
