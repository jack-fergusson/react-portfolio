import { useEffect, useState } from "react";
import Star from "./assets/star.svg";

const Popout = ({ starTexts }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setTextIndex(textIndex + 1 >= starTexts.length ? 0 : textIndex + 1);
    }, 6000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="popout-holder">
      <button
        className="popout"
        onClick={() =>
          setTextIndex(textIndex + 1 >= starTexts.length ? 0 : textIndex + 1)
        }
      >
        <img className="star" src={Star} />
        <p className="popout-text">{starTexts[textIndex]}</p>
      </button>
    </div>
  );
};
export default Popout;
