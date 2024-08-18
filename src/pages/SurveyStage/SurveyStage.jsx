import React, { useState } from "react";
import "./SurveyStage.scss";
import legoHead1 from "../../assets/Images/lego_head-SVG.png";
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
  const [age, setAge] = useState(0);
  const [manualAgeInput, setManualAgeInput] = useState("");

  const stages = [
    {
      question: "How old are they?",
      choices: [
        {
          id: 1,
          image: legoHead1,
          type: "slider",
        },
      ],
    },
    {
      question: "Do they like to?",
      choices: [
        { id: 1, image: image1, label: "Build Their Own Stories" },
        { id: 2, image: image2, label: "Play with Their Favorites Character" },
      ],
    },
    {
      question: "Is It A Gift for",
      choices: [
        { id: 1, image: image3, label: "A Beginner Builder" },
        { id: 2, image: image4, label: "Builder With Some Experience" },
        { id: 3, image: image5, label: "Master Builder" },
      ],
    },
    {
      question: "What's The Aim Of The Gift?",
      choices: [
        { id: 1, image: image6, label: "Educational" },
        { id: 2, image: image7, label: "Entertainment" },
      ],
    },
    {
      question: "How Much Do You Want to Spend?",
      choices: [
        { id: 1, label: "£0-£20", brickClass: "survey-stage__brick--range-1" },
        { id: 2, label: "£20-£50", brickClass: "survey-stage__brick--range-2" },
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
        { id: 5, label: "£200+", brickClass: "survey-stage__brick--range-5" },
      ],
    },
  ];

  const handleChoiceClick = (choiceId) => {
    setSelectedChoice(choiceId);
  };

  const handleNextStage = () => {
    if (currentStage < stages.length) {
      setCurrentStage(currentStage + 1);
      setSelectedChoice(null);
    } else {
      console.log(`Survey complete!`);
    }
  };

  const handleBack = () => {
    if (currentStage > 1) {
      setCurrentStage(currentStage - 1);
      setSelectedChoice(null);
    }
  };

  const handleSkip = () => {
    if (currentStage < stages.length) {
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
          disabled={currentStage === stages.length}
        >
          Skip <img src={rightArrow} alt="Skip" />
        </button>
      </div>
      <div className="survey-stage__content">
        <div className="survey-stage__indicator">
          <div className="survey-stage__connector"></div>
          {stages.map((_, index) => (
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

      {currentStage === stages.length ? (
        <div className="survey-stage__price-range">
          <div className="survey-stage__price-question">
            {stages[currentStage - 1].question}
          </div>
          <div className="survey-stage__bricks-container">
            {stages[currentStage - 1].choices.map((choice) => (
              <div
                key={choice.id}
                className={`survey-stage__brick ${choice.brickClass} ${
                  selectedChoice === choice.id ? "selected" : ""
                }`}
                onClick={() => handleChoiceClick(choice.id)}
              >
                {choice.label}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="survey-stage__choices">
          {stages[currentStage - 1].choices.map((choice) => {
            if (choice.type === "slider") {
              return (
                <div
                  key={choice.id}
                  className="survey-stage__choice--first-stage"
                >
                  <img
                    src={choice.image}
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
              );
            } else {
              return (
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
              );
            }
          })}
        </div>
      )}

      <button
        className="survey-stage__next-button"
        onClick={handleNextStage}
        disabled={!selectedChoice}
      >
        Next Question
      </button>
    </div>
  );
};

export default SurveyStage;
