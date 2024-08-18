import React from "react";
import "../ResultsPage/ResultsPage.scss";
import heartIcon from "../../assets/icons/icons8-love-24.png";
import ageIcon from "../../assets/icons/birthday-icon 48x48.svg";
import piecesIcon from "../../assets/icons/size=Default.svg";
import starIcon from "../../assets/icons/carbon_star-filled.svg";
import basketIcon from "../../assets/icons/icons8-cart-48.png";
import legoGiftCardImage from "../../assets/Images/product_images/image 16.jpg";

const ResultsPage = () => {
  return (
    <div className="results-page">
      <div className="results-page__top-container">
        <h1>These should be perfect</h1>
        <p>Nothing suits your criteria?</p>
        <button className="results-page__restart-button">Restart Survey</button>
      </div>

      <div className="results-page__main-container">
        <div className="results-page__suggestions-container">
          {/* Example of three product cards */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="results-page__product-card">
              <div className="results-page__product-top">
                <div className="results-page__heart-icon">
                  <img src={heartIcon} alt="Heart" />
                </div>
                <div className="results-page__new-box">NEW</div>
              </div>
              <div className="results-page__image-container">
                <img src={legoGiftCardImage} alt="Product" />
              </div>
              <div className="results-page__details">
                <div className="results-page__icons">
                  <div className="results-page__icon">
                    <img src={ageIcon} alt="Age" />
                    <span>7+</span>
                  </div>
                  <div className="results-page__icon">
                    <img src={piecesIcon} alt="Pieces" />
                    <span>1000 pcs</span>
                  </div>
                  <div className="results-page__icon">
                    <img src={starIcon} alt="Rating" />
                    <span>4.5</span>
                  </div>
                </div>
                <div className="results-page__product-name">LEGO® Set Name</div>
                <div className="results-page__product-price">£99.99</div>
                <div className="results-page__buttons">
                  <button className="results-page__add-to-bag">
                    <img src={basketIcon} alt="Add to Bag" /> Add To Bag
                  </button>
                  <button className="results-page__buy-now">
                    <img src={starIcon} alt="Buy Now" /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="results-page__copy-share-button">
            Copy / Share Results
          </button>
        </div>

        <div className="results-page__gift-card-container">
          <div className="results-page__gift-card-image">
            {/* <img src={legoGiftCardImage} alt="LEGO Gift Card" /> */}
          </div>
          <div className="results-page__gift-card-info">
            <div className="results-page__gift-card-title">
              Not sure? Get LEGO® Gift Card
            </div>
            <div className="results-page__gift-card-description">
              The cheat code to always giving the perfect gift? A LEGO® Gift
              Card! They get to do the choosing, and you get to look like a gift
              boss. Available in e-card or physical card.
            </div>
            <button className="results-page__buy-gift-card-button">
              Buy Gift Cards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
