import React from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import menuSvg from "../../assets/icons/icons8-menu.svg";
import searchSvg from "../../assets/icons/icons8-search.svg";
import lego_head from "../../assets/logo/lego_head-SVG.png";
import favorite from "../../assets/icons/icons8-love-24.png";
import cart from "../../assets/icons/icons8-cart-48.png";

import logo from "../../assets/logo/LEGO_logo.svg.webp";

const Header = () => {
  return (
    <header className="header">
      {/* MOBILE NAVBAR */}
      <nav className="mobile--navbar">
        <div className="mobile--navbar__logo-container">
          <img
            src={menuSvg}
            alt="mobile-svg"
            className="mobile--navbar__menuSvg"
          />
          <img src={logo} alt="" className="mobile--navbar__logo" />
        </div>
        <div className="mobile--navbar__CTA-container">
          <button className="mobile--navbar__CTA-button">
            <img
              src={searchSvg}
              alt="mobile-svg"
              className="mobile--navbar__CTA-button--svg"
            />
          </button>
          <button className="mobile--navbar__CTA-button">
            <img
              src={lego_head}
              alt="mobile-svg"
              className="mobile--navbar__CTA-button--svg"
            />
          </button>
          <button className="mobile--navbar__CTA-button">
            <img
              src={favorite}
              alt="mobile-svg"
              className="mobile--navbar__CTA-button--svg"
            />
          </button>
          <button className="mobile--navbar__CTA-button">
            <img
              src={cart}
              alt="mobile-svg"
              className="mobile--navbar__CTA-button--svg"
            />
            0
          </button>
        </div>
      </nav>

      {/* TABLET AND DESKTOP */}
      <nav className="tablet--navbar">
        <div className="tablet--navbar__navigation-container">
          <div className="tablet--navbar__logo-container">
            <img src={logo} alt="" className="tablet--navbar__logo" />
          </div>
          <div className="tablet--navbar__navigation-links--container">
            <ul className="tablet--navbar__navigation-links">
              <li  className="tablet--navbar__navigation-links-item">
                <Link to={""}>SHOP</Link>
              </li>
              <li className="tablet--navbar__navigation-links-item">
                <Link to={""}>DISCOVER</Link>
              </li>
              <li className="tablet--navbar__navigation-links-item">
                <Link to={""}>HELP</Link>
              </li>
              <li className="tablet--navbar__navigation-links-item--bgWhite">
                <Link to={""}>DREAMZZZ</Link>
              </li>
            </ul>
          </div>
        </div>


        <div className="tablet--navbar__CTA-container">
          <button className="tablet--navbar__CTA-button">
            <img
              src={searchSvg}
              alt="tablet-svg"
              className="tablet--navbar__CTA-button--svg"
            />
          </button>
        
          <button className="tablet--navbar__CTA-button">
            <img
              src={favorite}
              alt="tablet-svg"
              className="tablet--navbar__CTA-button--svg"
            />
          </button>
          <button className="tablet--navbar__CTA-button">
            <img
              src={cart}
              alt="tablet-svg"
              className="tablet--navbar__CTA-button--svg"
            />
            0
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
