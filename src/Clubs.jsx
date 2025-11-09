import { clubs } from "./data.js";
import Club from "./Club.jsx";

const Clubs = () => {
  return (
    <section id="clubs">
      <h1 className="title">Clubs</h1>
      {clubs.map((club, index) => {
        return <Club key={index} {...club} />;
      })}
    </section>
  );
};
export default Clubs;
