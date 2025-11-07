const Project = ({ name, role, description, image, stack, link }) => {
  return (
    <div className="project container">
      <div className="project-left container">
        <p>{name}</p>
        <p>{role}</p>
        <p>{description}</p>
      </div>
      <div className="project-right container">
        <img className="project-image" src={image} alt={name} />
        <div className="tech-and-link container">
          <div className="tech-container container">
            {stack.map((stackItem, index) => {
              return (
                <img
                  className="tech-image"
                  key={index}
                  src={stackItem.image}
                  alt={stackItem.name}
                />
              );
            })}
          </div>
          <div className="link">
            <a href={link} target="_blank">
              Click
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
