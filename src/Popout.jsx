import Star from "./assets/star.svg";

const Popout = () => {
  const text = "Hire me!";

  return (
    <div className="popout">
      <img className="star" src={Star} />
      <p className="popout-text">{text}</p>
    </div>
  );
};
export default Popout;
