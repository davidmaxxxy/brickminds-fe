import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../ResultsPage/ResultsPage.scss";
import heartIcon from "../../assets/icons/icons8-love-24.png";
import ageIcon from "../../assets/icons/birthday-icon 48x48.svg";
import piecesIcon from "../../assets/icons/size=Default.svg";
import starIcon from "../../assets/icons/carbon_star-filled.svg";
import basketIcon from "../../assets/icons/icons8-cart-48.png";
import legoGiftCardImage from "../../assets/Images/gift_cards/Gift_Card 2.png";
import axios from "axios";

const ResultsPage = () => {
  const location = useLocation();
  const { priceRange, suggested_Themes } = location.state || {};
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:5001/api/v1/products",
          {
            priceRange,
            suggested_Themes,
          }
        );
        setProducts(data.lego_products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (priceRange && suggested_Themes) {
      fetchProducts();
    } else {
      setLoading(false); // Stop loading if there's no priceRange or suggested_Themes
    }
  }, [priceRange, suggested_Themes]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="results-page">
      <div className="results-page__top-container">
        <h1>These should be perfect</h1>
        <p>Nothing suits your criteria?</p>
        <button className="results-page__top-container--restart-button">
          Restart Survey
        </button>
      </div>

      <div className="results-page__main-container">
        <div className="results-page__suggestions-container">
          {products.length === 0 ? (
            <div>No products found based on your criteria.</div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="results-page__product-card">
                <div className="results-page__product-card--product-card-top">
                  <div className="results-page__product-card--heart-icon">
                    <img src={heartIcon} alt="Heart" />
                  </div>
                  <div className="results-page__product-card--new-box">
                    {product.isNew ? "NEW" : ""}
                  </div>
                </div>
                <div className="results-page__product-card--image-container">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = legoGiftCardImage; // Fallback image
                    }}
                  />
                </div>
                <div className="results-page__product-card--details">
                  <div className="results-page__product-card--details--icons">
                    <div className="results-page__product-card--details--icons--icon">
                      <img src={ageIcon} alt="Age" />
                      <span>{product.ageRange}</span>
                    </div>
                    <div className="results-page__product-card--details--icons--icon">
                      <img src={piecesIcon} alt="Pieces" />
                      <span>{product.pieces} pcs</span>
                    </div>
                    <div className="results-page__product-card--details--icons--icon">
                      <img src={starIcon} alt="Rating" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <div className="results-page__product-card--details--product-name">
                    {product.name}
                  </div>
                  <div className="results-page__product-card--details--product-price">
                    £{product.price}
                  </div>
                  <div className="results-page__product-card--details--buttons">
                    <button className="results-page__product-card--details--buttons-add-to-bag">
                      <img src={basketIcon} alt="Add to Bag" /> Add To Bag
                    </button>
                    <button className="results-page__product-card--details--buttons-buy-now">
                      <img src={starIcon} alt="Buy Now" /> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="results-page__button-container">
          <button className="results-page__button-container--copy-share-button">
            Copy / Share Results
          </button>
        </div>

        <div className="results-page__gift-card-container">
          <div className="results-page__gift-card-container--gift-card-image">
            <img src={legoGiftCardImage} alt="LEGO Gift Card" />
          </div>
          <div className="results-page__gift-card-container--gift-card-info">
            <div className="results-page__gift-card-container--gift-card-title">
              Not sure? Get LEGO® Gift Card
            </div>
            <div className="results-page__gift-card-container--gift-card-description">
              The cheat code to always giving the perfect gift? A LEGO® Gift
              Card! They get to do the choosing, and you get to look like a gift
              boss. Available in e-card or physical card.
            </div>
            <button className="results-page__gift-card-container--buy-gift-card-button">
              Buy Gift Cards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
