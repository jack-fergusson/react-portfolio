import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import Clubs from "./Clubs.jsx";
import More from "./More.jsx";
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
      <More />
      <More />
      <More />
      <More />
      <More />
      <More />
      <More />
      <More />
    </main>
  );
};
export default App;
