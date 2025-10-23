import { headers } from "./data";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="divider"></div>
      <div className="headers container">
        {headers.map((header, index) => {
          return (
            <div className="header" key={index}>
              <p className="header-text">{header}</p>
            </div>
          );
        })}
      </div>
      <div className="divider"></div>
    </section>
  );
};
export default Navbar;
