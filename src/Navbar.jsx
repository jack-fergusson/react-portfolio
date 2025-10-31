import { headers } from "./data";
import { useEffect, useRef } from "react";
import Header from "./Header";

const Navbar = ({ watcher }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    watcher.current.setAttribute("data-scroll-watcher", "");
    navbarRef.current.before(watcher.current);
    navObserever.observe(watcher.current);
  }, []);

  const navObserever = new IntersectionObserver((entries) => {
    // console.log("Hello!");
    navbarRef.current.classList.toggle("sticking", !entries[0].isIntersecting);
  });

  return (
    <section className="navbar" ref={navbarRef}>
      <div className="divider"></div>
      <div className="headers container">
        {headers.map((header, index) => {
          return <Header key={index} header={header} />;
        })}
      </div>
      <div className="divider"></div>
    </section>
  );
};
export default Navbar;
