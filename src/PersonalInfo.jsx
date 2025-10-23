const PersonalInfo = ({ name, title, location, socials }) => {
  return (
    <div className="personal-info container">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <h3>{location}</h3>
      <div className="socials container">
        {socials.map((social) => {
          const { name, img, href } = social;
          return (
            <a href={href}>
              <img className="social-image" src={img} alt={name} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default PersonalInfo;
