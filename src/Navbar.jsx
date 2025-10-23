import { headers } from "./data";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="divider"></div>
      <div className="headers container">
        {headers.map((header, index) => {
          return (
            <div className="header" key={index}>
              <a className="header-text" href={"#" + header.toLowerCase()}>
                {header}
              </a>
            </div>
          );
        })}
      </div>
      <div className="divider"></div>
    </section>
  );
};
export default Navbar;
