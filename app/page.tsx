import HeroSection from "@/components/HeroSection";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Background />

      {/* Desktop: unified scroll-driven section */}
      <HeroSection />

      {/* Mobile: normal flow (hidden on desktop via HeroSection's sm:block) */}
      <div className="sm:hidden">
        <Intro />
        <About />
        <Projects />
      </div>

      <Skills />
      <Experience />
      <Blog />
      <Contact />
    </main>
  );
}
