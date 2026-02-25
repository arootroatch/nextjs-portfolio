import HeroSection from "@/components/HeroSection";
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
      <Skills />
      <Experience />
      <Blog />
      <Contact />
    </main>
  );
}
