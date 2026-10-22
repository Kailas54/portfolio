import { profile } from "./data/profile";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <div className="mesh-bg">
          <Experience />
        </div>
        <Projects />
        <div className="mesh-bg">
          <Research />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer name={profile.name} />
    </div>
  );
}

export default App;
