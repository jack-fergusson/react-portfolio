import Tech from "./Tech";
import Link from "./assets/link.png";

const Project = ({ name, role, description, image, stack, link }) => {
  return (
    <div className="project container">
      <div className="project-left container">
        <div>
          <p className="project-title">{name}</p>
        </div>
        <div>
          <p className="project-role">{role}</p>
        </div>
        <div>
          <p className="project-description">{description}</p>
        </div>
      </div>
      <div className="project-right container">
        <img className="project-image" src={image} alt={name} />
        <div className="tech-and-link container">
          <div className="tech-container container">
            {stack.map((stackItem, index) => {
              return <Tech key={index} {...stackItem} />;
            })}
          </div>
          <div className="link">
            <a href={link} target="_blank">
              <img className="link-image" src={Link} alt="link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
