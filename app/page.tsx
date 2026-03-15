import HeroSection from "@/components/HeroSection";
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
      <HeroSection />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
    </main>
  );
}
