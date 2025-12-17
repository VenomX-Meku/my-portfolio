import Home from "./Home";
import About from "./About";
import Projects from "./Project";
import Contact from "./Contact";

export default function HomeScroll() {
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
