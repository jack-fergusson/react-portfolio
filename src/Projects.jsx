import { projects } from "./data.js";
import Project from "./Project.jsx";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="title">Projects</h1>
      {projects.map((project, index) => {
        return <Project key={index} {...project} />;
      })}
    </section>
  );
};
export default Projects;
