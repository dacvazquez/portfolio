import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { BackToTop } from "@/components/common/BackToTop";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { Loader } from "@/components/common/Loader";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Technologies } from "@/components/sections/Technologies";
import { Education } from "@/components/sections/Education";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Loader />
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Technologies />
        <Education />
        <Languages />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
