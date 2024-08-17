import React from "react";
import "./Footer.scss";
import legoLogo from "../../assets/logo/LEGO_logo.svg.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section footer__section--info">
        <div className="footer__container footer__container--logo-links">
          <div className="footer__item">
            <img src={legoLogo} alt="LEGO Logo" className="footer__logo" />
          </div>
          <div className="footer__item">Gift Cards</div>
          <div className="footer__item">Sitemap</div>
          <div className="footer__item">Find inspiration</div>
          <div className="footer__item">LEGO Catalogues</div>
          <div className="footer__item">Find a LEGO Store</div>
        </div>

        <div className="footer__container footer__container--sections">
          <div className="footer__container footer__container--about">
            <h4 className="footer__item footer__title">ABOUT US</h4>
            <div className="footer__item">About the LEGO Group</div>
            <div className="footer__item">LEGO® news</div>
            <div className="footer__item">Sustainability</div>
            <div className="footer__item">LEGO product certification</div>
            <div className="footer__item">LEGO Jobs</div>
            <div className="footer__item">LEGO Compliance Line</div>
          </div>

          <div className="footer__container footer__container--support">
            <h4 className="footer__item footer__title">SUPPORT</h4>
            <div className="footer__item">Contact us</div>
            <div className="footer__item">Find building instructions</div>
            <div className="footer__item">Replacement parts</div>
            <div className="footer__item">Deliveries and returns</div>
            <div className="footer__item">Payment methods</div>
            <div className="footer__item">Terms & Conditions</div>
            <div className="footer__item">Product recalls</div>
          </div>

          <div className="footer__container footer__container--attractions">
            <h4 className="footer__item footer__title">ATTRACTIONS</h4>
            <div className="footer__item">LEGO® House</div>
            <div className="footer__item">LEGOLAND® Parks</div>
            <div className="footer__item">LEGOLAND Discovery Centers</div>
          </div>

          <div className="footer__container footer__container--more">
            <h4 className="footer__item footer__title">MORE FROM US</h4>
            <div className="footer__item">LEGO® Magazine (FREE)</div>
            <div className="footer__item">LEGO Education</div>
            <div className="footer__item">LEGO Ideas</div>
            <div className="footer__item">LEGO Foundation</div>
            <div className="footer__item">Affiliate Program</div>
            <div className="footer__item">Student Offers</div>
            <div className="footer__item">LEGO Braille Bricks</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
