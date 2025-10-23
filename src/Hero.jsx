import Face from "./Face.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import Popout from "./Popout.jsx";

import { jackInfo, starTexts } from "./data.js";

const Hero = () => {
  return (
    // <div className="big-hero">
    <section className="hero container">
      <div className="face-card container">
        <Face img={jackInfo.img} />
        <PersonalInfo {...jackInfo} />
      </div>
      <Popout starTexts={starTexts} />
    </section>
    // </div>
  );
};
export default Hero;
