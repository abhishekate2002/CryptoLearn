import "./Card.css";
import { Link } from "react-router-dom";
function Card({ title, body, imageUrl, bth, btnName }) {
  const parameter = `/learn/${bth}`;
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        <div className="btn">
          <button>
            <Link to={parameter}>{btnName}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
