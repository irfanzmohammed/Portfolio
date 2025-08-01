import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Tech Stack">
        <Parallax type="Tech Stack" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax type="Projects" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      
    </div>
  );
};

export default App;
