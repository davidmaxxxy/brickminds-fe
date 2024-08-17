import React from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/LEGO_logo.svg.webp";

const Header = ({ resetSurvey }) => {
  return (
    <header className="header">
      {/* MOBILE NAVBAR */}
      <nav className="mobile--navbar">
        <div className="mobile--navbar__logo-container">
          <Link to="/" onClick={resetSurvey}>
            <img src={logo} alt="LEGO Logo" className="mobile--navbar__logo" />
          </Link>
        </div>
        {/* Other navigation items */}
      </nav>

      {/* TABLET AND DESKTOP */}
      <nav className="tablet--navbar">
        <div className="tablet--navbar__navigation-container">
          <div className="tablet--navbar__logo-container">
            <Link to="/" onClick={resetSurvey}>
              <img
                src={logo}
                alt="LEGO Logo"
                className="tablet--navbar__logo"
              />
            </Link>
          </div>
          {/* Other navigation items */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
