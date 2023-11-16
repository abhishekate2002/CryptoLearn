import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Body.css";
import RocketImage from "./RocketImage";
function Body() {
  return (
    <div className="landing-container">
      <div className="call-to-action">
        <p className="tagline">
          Boost your knowledge by learning advanced encryption techniques.
        </p>
        <NavLink to="/authenticate" className="signup">
          Sign Up
        </NavLink>
        <NavLink to="/authenticate" className="login">
          Login
        </NavLink>
      </div>
      <RocketImage />
    </div>
  );
}

export default Body;
