import digimind from "../img/logo.png";
import "./styles.scss";

export const Title = () => {
  return (
    <>
      <div className="title-container">
        <span> A digital clock react application for </span>
        <img src={digimind} alt="" />
      </div>
    </>
  );
};
