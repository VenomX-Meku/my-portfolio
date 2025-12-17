import Home from "./Home";
import About from "./About";
import Projects from "./Project"; // ✅ FIXED HERE
import Contact from "./Contact";

export default function OnePage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
