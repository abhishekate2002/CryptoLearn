import "./RocketImage.css";
import rocket from "../assets/rocket1.png";
function RocketImage() {
  return (
    <div className="image-container">
      <img src={rocket} alt="Rocket" className="rocket-image" />
    </div>
  );
}

export default RocketImage;
