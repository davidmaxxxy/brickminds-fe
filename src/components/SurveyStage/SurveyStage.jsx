import React, { useState } from "react";
import "./SurveyStage.scss";

const SurveyStage = () => {
  const [currentStage, setCurrentStage] = useState(1);

  // Sample choices - we will replace it with dynamic content from the backend
  const choices = [
    {
      id: 1,
      image: "path/to/image1.jpg",
      label: "Choice 1",
    },
    {
      id: 2,
      image: "path/to/image2.jpg",
      label: "Choice 2",
    },
    {
      id: 3,
      image: "path/to/image3.jpg",
      label: "Choice 3",
    },
  ];

  const handleChoiceClick = (choiceId) => {
    console.log(`User has selected choice: ${choiceId}`);

    // we need to add logic to store users choice...
  };

  return (
    <div className="survey-stage">
      <div className="survey-stage__indicator">
        {[1, 2, 3].map((stage) => (
          <div
            key={stage}
            className={`survey-stage__circle ${
              currentStage === stage ? "active" : ""
            }`}
          >
            {stage}
          </div>
        ))}
      </div>

      {/* Container 2: Question */}
      <div className="survey-stage__question">
        Imagine you're going on an adventure. What would you pack in your
        backpack?
      </div>

      {/* Container 3: Choices */}
      <div className="survey-stage__choices">
        {choices.map((choice) => (
          <div
            key={choice.id}
            className="survey-stage__choice"
            onClick={() => handleChoiceClick(choice.id)}
          >
            <img src={choice.image} alt={choice.label} />
            <div className="survey-stage__choice-label">{choice.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveyStage;
