import React from "react";
import SurveyStage from "../SurveyStage/SurveyStage";
import "../HomePage/HomePage.scss";

const HomePage = () => {
  return (
    <div className="main-content">
      <div className="option-buttons">
        <button className="option-buttons__button">Option 1</button>
        <button className="option-buttons__button">Option 2</button>
      </div>
      <SurveyStage />
      <div className="api-results">{/* Space to render API results */}</div>
    </div>
  );
};

export default HomePage;
