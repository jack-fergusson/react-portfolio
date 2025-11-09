import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import Clubs from "./Clubs.jsx";
import About from "./About.jsx";
import { useRef } from "react";

const App = () => {
  const watcher = useRef(null);

  return (
    <main className="main container">
      <div ref={watcher}></div>
      <Hero />
      <Navbar watcher={watcher} className="sticking" />
      <Projects />
      <Clubs />
      <About />
    </main>
  );
};
export default App;
