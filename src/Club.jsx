const Club = ({ name, role, description, image }) => {
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
      </div>
    </div>
  );
};
export default Club;
