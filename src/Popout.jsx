import { useState } from "react";
import Star from "./assets/star.svg";

const Popout = ({ starTexts }) => {
  const [textIndex, setTextIndex] = useState(0);

  return (
    <button
      className="popout"
      onClick={() =>
        setTextIndex(textIndex + 1 >= starTexts.length ? 0 : textIndex + 1)
      }
    >
      <img className="star" src={Star} />
      <p className="popout-text">{starTexts[textIndex]}</p>
    </button>
  );
};
export default Popout;
