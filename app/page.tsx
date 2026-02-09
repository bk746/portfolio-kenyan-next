import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/hero";
import About from "@/components/section/About";
import Projet from "@/components/section/Projet";
import Skills from "@/components/section/Skills";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projet />
      <Skills />
      <Contact />
    </>
  );
}
