import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Header />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
