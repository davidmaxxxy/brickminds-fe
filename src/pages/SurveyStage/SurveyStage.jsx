import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SurveyStage.scss";
import legoHead1 from "../../assets/icons/lego-head-7.svg";
import image1 from "../../assets/Images/quiz_pictures/build-your-own.jpg";
import image2 from "../../assets/Images/quiz_pictures/favorite-charater.jpg";
import image3 from "../../assets/Images/quiz_pictures/beginner-builder.jpg";
import image4 from "../../assets/Images/quiz_pictures/experienced_builder.jpg";
import image5 from "../../assets/Images/quiz_pictures/master-builder.jpg";
import image6 from "../../assets/Images/quiz_pictures/education.jpg";
import image7 from "../../assets/Images/quiz_pictures/entertainment.jpg";
import leftArrow from "../../assets/icons/direction=left small.svg";
import rightArrow from "../../assets/icons/direction=right.svg";

const SurveyStage = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [age, setAge] = useState(0);
  const [manualAgeInput, setManualAgeInput] = useState("");
  const [likes, setLikes] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [giftAim, setGiftAim] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const navigate = useNavigate();

  const handleChoiceClick = (choiceId) => {
    setSelectedChoice(choiceId);
    // Update states based on current stage
    if (currentStage === 2) setLikes(choiceId);
    if (currentStage === 3) setExperienceLevel(choiceId);
    if (currentStage === 4) setGiftAim(choiceId);
    if (currentStage === 5) {
      setPriceRange(choiceId);
      handleApiCallWithSelectedInformation();
    }
  };

  const handleApiCallWithSelectedInformation = async () => {
    setIsLoading(true);
    try {
      // /api/v1/generate-recommendation-themes ----wrong 
      //  "http://localhost:5001/api/v1/generate-recommendation-themes" ---correct 
      // u didn't add the domain 
      // i changed to axios cox its more easy to use n less code 
      //  and have move the got product api call to the product page con when u get the res from the 
      // api u have to save it to state the loop through to display them 
      const { status, data } = await axios.post(
        "http://localhost:5001/api/v1/generate-recommendation-themes",
        {
          age: age || manualAgeInput,
          priceRange,
          likes,
          experienceLevel,
          giftAim,
        }
      );

      if (status === 301) {
        // when api is 301 then we navigate to results page 
        // and no need for settime out cox the call to the api wil take time to respond so during that time space
        //  loading will be true until res is available from the api 
        const { priceRange, suggested_Themes } = data;

        navigate("/results", {
          state: { priceRange, suggested_Themes },
        });
      } else {
        console.error("Error generating recommendations");
      }
    } catch (error) {
      console.error("API call failed: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextStage = () => {
    if (currentStage < 5) {
      setCurrentStage(currentStage + 1);
      setSelectedChoice(null);
    }
  };

  const handleBack = () => {
    if (currentStage > 1) {
      setCurrentStage(currentStage - 1);
      setSelectedChoice(null);
    }
  };

  const handleSkip = () => {
    if (currentStage < 5) {
      setCurrentStage(currentStage + 1);
      setSelectedChoice(null);
    }
  };

  const handleSliderChange = (event) => {
    const newAge = event.target.value;
    setAge(newAge);
    setSelectedChoice(1);
  };

  const handleManualAgeInput = (event) => {
    const newAge = event.target.value;
    setManualAgeInput(newAge);
    setAge(newAge);
    setSelectedChoice(1);
  };

  if (isLoading) {
    return (
      <div className="survey-stage__loader">
        <h1>
          <span className="span-1">Building</span>{" "}
          <span className="span-2">your</span>{" "}
          <span className="span-3">perfect</span> <br />
          <span className="span-4">set...</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="survey-stage">
      <div className="survey-stage__navigation">
        <button
          className="survey-stage__back-button"
          onClick={handleBack}
          disabled={currentStage === 1}
        >
          <img src={leftArrow} alt="Back" /> Back
        </button>
        <button
          className="survey-stage__skip-button"
          onClick={handleSkip}
          disabled={currentStage === 5}
        >
          Skip <img src={rightArrow} alt="Skip" />
        </button>
      </div>
      <div className="survey-stage__content">
        <div className="survey-stage__indicator">
          <div className="survey-stage__connector"></div>
          {[...Array(5)].map((_, index) => (
            <div
              key={index + 1}
              className={`survey-stage__circle${
                currentStage === index + 1 ? " active" : ""
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {currentStage === 5 ? (
        <div className="survey-stage__price-range">
          <div className="survey-stage__price-question">
            How Much Do You Want to Spend?
          </div>
          <div className="survey-stage__bricks-container">
            {[
              {
                id: 1,
                label: "£0-£20",
                brickClass: "survey-stage__brick--range-1",
              },
              {
                id: 2,
                label: "£20-£50",
                brickClass: "survey-stage__brick--range-2",
              },
              {
                id: 3,
                label: "£50-£100",
                brickClass: "survey-stage__brick--range-3",
              },
              {
                id: 4,
                label: "£100-£200",
                brickClass: "survey-stage__brick--range-4",
              },
              {
                id: 5,
                label: "£200+",
                brickClass: "survey-stage__brick--range-5",
              },
            ].map((choice) => (
              <div
                key={choice.id}
                onClick={() => handleChoiceClick(choice.id)}
                className={`survey-stage__brick ${choice.brickClass} ${
                  selectedChoice === choice.id ? "selected" : ""
                }`}
              >
                {choice.label}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="survey-stage__choices">
          {currentStage === 1 && (
            <div className="survey-stage__choice--first-stage">
              <img
                src={legoHead1}
                alt={`Lego head for age ${age}`}
                className="survey-stage__age-image"
              />
              <input
                type="range"
                min="0"
                max="123"
                value={age}
                onChange={handleSliderChange}
                className="survey-stage__slider"
              />
              <p className="survey-stage__age-display">Enter Age</p>
              <input
                type="number"
                min="0"
                max="123"
                value={manualAgeInput}
                onChange={handleManualAgeInput}
                className="survey-stage__age-input"
                placeholder="Enter age"
              />
            </div>
          )}

          {currentStage === 2 && (
            <div className="survey-stage__choices">
              {[
                { id: 1, image: image1, label: "Build Their Own Stories" },
                {
                  id: 2,
                  image: image2,
                  label: "Play with Their Favorite Character",
                },
              ].map((choice) => (
                <div
                  key={choice.id}
                  className={`survey-stage__choice${
                    selectedChoice === choice.id ? " selected" : ""
                  }`}
                  onClick={() => handleChoiceClick(choice.id)}
                >
                  <img src={choice.image} alt={choice.label} />
                  <div className="survey-stage__choice-label">
                    {choice.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentStage === 3 && (
            <div className="survey-stage__choices">
              {[
                { id: 1, image: image3, label: "A Beginner Builder" },
                { id: 2, image: image4, label: "Builder With Some Experience" },
                { id: 3, image: image5, label: "Master Builder" },
              ].map((choice) => (
                <div
                  key={choice.id}
                  className={`survey-stage__choice${
                    selectedChoice === choice.id ? " selected" : ""
                  }`}
                  onClick={() => handleChoiceClick(choice.id)}
                >
                  <img src={choice.image} alt={choice.label} />
                  <div className="survey-stage__choice-label">
                    {choice.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentStage === 4 && (
            <div className="survey-stage__choices">
              {[
                { id: 1, image: image6, label: "Educational" },
                { id: 2, image: image7, label: "Entertainment" },
              ].map((choice) => (
                <div
                  key={choice.id}
                  className={`survey-stage__choice${
                    selectedChoice === choice.id ? " selected" : ""
                  }`}
                  onClick={() => handleChoiceClick(choice.id)}
                >
                  <img src={choice.image} alt={choice.label} />
                  <div className="survey-stage__choice-label">
                    {choice.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {currentStage !== 5 && (
        <div className="survey-stage__next-button__container">
          <button
            className="survey-stage__next-button"
            onClick={handleNextStage}
            disabled={!selectedChoice}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default SurveyStage;
