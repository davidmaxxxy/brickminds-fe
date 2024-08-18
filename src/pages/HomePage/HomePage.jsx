import React, { useEffect } from "react";
import "./HomePage.scss";
import SurveyStage from "../../components/SurveyStage/SurveyStage";

const HomePage = ({ showSurveyStage, setShowSurveyStage }) => {
  const handleLaunchClick = () => {
    setShowSurveyStage(true);
  };

  useEffect(() => {
    setShowSurveyStage(false);
  }, []);

  return (
    <div className="main-content">
      {!showSurveyStage ? (
        <>
          <h1 className="main-content--title">
            <span className="span-1">Looking</span>{" "}
            <span className="span-2">for</span>{" "}
            <span className="span-3">the</span>
            <br />
            <span className="span-4">perfect</span>{" "}
            <span className="span-5">gift?</span>
          </h1>

          <button className="gift--finder-btn" onClick={handleLaunchClick}>
            Launch the Gift Finder
          </button>
        </>
      ) : (
        <SurveyStage />
      )}
    </div>
  );
};

export default HomePage;
