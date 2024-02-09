import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SectionSpan from "@/components/SectionSpan";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <div className="-z-10 fixed top-0 left-0 w-full h-full bg-gradient-radial dark:to-[rgba(17,24,39)] dark:from-[#410537d7] from-[#ff8dec52] to-[rgba(249,250,251)]"></div>
      <div
        id="scroll-container"
        className="w-full max-w-[50rem] min-h-[1400px] sm:h-[1800px] relative "
      >
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
