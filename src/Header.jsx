import { useEffect, useRef } from "react";
import Hand from "./assets/hand.png";

const Header = ({ header }) => {
  const handRef = useRef(null);

  const handleClick = () => {
    handRef.current.classList.toggle("hand-clicked");

    setTimeout(() => {
      handRef.current.classList.toggle("hand-clicked");
    }, 20);
  };

  return (
    <div className="header">
      <a
        className="header-text"
        href={"#" + header.toLowerCase()}
        onClick={() => handleClick()}
      >
        {header}
      </a>
      <img className="hand" ref={handRef} src={Hand} alt="hand" />
    </div>
  );
};
export default Header;
