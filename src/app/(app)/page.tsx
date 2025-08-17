import Contact from "@/components/profile/Contact";
import Education from "@/components/profile/Education";
import About from "@/components/profile/About";
import Projects from "@/components/profile/Projects";
import Skills from "@/components/profile/Skills";

export default function Home() {
  return (
    <main className="max-w-screen overflow-hidden main-layout font-mono">
      <About />

      <Skills />

      <Projects />

      <Education />

      <Contact />
    </main>
  );
}
