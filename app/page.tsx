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
      <div
        id="scroll-container"
        className="w-full max-w-[50rem] h-[2200px] relative"
      >
        <SectionSpan id="Home" className="absolute top-[200px] scroll-mt-96" />
        <SectionSpan id="About" className="absolute top-[68%] scroll-mt-96" />
        <div className="-z-10 fixed w-full h-full">
          <div className="bg-[#fbe2e3] absolute left-1/2 sm:left-auto sm:top-[-6rem] h-[28.25rem] w-1/2 rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#dbd7fb] absolute  top-[-1rem] sm:left-[-35rem] h-[28.25rem] w-1/2 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        </div>
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
