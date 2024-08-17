import React from "react";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">Footer Item 1</div>
        <div className="footer__item">Footer Item 2</div>
        <div className="footer__item">Footer Item 3</div>
      </div>
      <div className="footer__container">
        <h1 className="footer__item">Footer Item 4</h1>
        <h3 className="footer__item">Footer Item 5</h3>
        <p className="footer__item">Footer Item 6</p>
      </div>
    </footer>
  );
};
export default Footer;

