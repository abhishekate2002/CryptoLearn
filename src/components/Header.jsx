import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="logo">CryptoLearn</div>
      <nav className="navigation">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/learning" className="nav-link">
          Learning
        </NavLink>
        <NavLink to="/history" className="nav-link">
          History
        </NavLink>
        <NavLink to="/tools" className="nav-link">
          Tools
        </NavLink>
        <NavLink to="/aboutme" className="nav-link">
          About me
        </NavLink>
      </nav>
      <nav>
        <button className="signup-button">Sign-up</button>
      </nav>
    </header>
    // <header className="header">
    //   <div className="logo">CryptoLearn</div>
    //   <nav className="navigation">
    //     <NavLink href="/" className="nav-link">
    //       Home
    //     </NavLink>
    //     <NavLink href="/history" className="nav-link">
    //       History
    //     </NavLink>
    //     <NavLink href="/learning" className="nav-link">
    //       Learning
    //     </NavLink>
    //     <NavLink href="/convert-tool" className="nav-link">
    //       Convert-tool
    //     </NavLink>
    //   </nav>
    //   <button className="signup-button">Sign Up</button>
    // </header>
  );
}

export default Header;
