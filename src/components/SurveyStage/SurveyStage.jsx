import React, { useState } from "react";
import "./SurveyStage.scss";
import image1 from "../../assets/images/lego-img-round-1.jpeg";
import image2 from "../../assets/images/lego-img-round-2.jpg";
import image3 from "../../assets/images/lego-img-round-3.jpg";

const SurveyStage = () => {
  const [currentStage, setCurrentStage] = useState(1);

  // Sample choices - we will replace it with dynamic content from the backend
  const choices = [
    {
      id: 1,
      image: image1,
      // label: "Choice 1",
    },
    {
      id: 2,
      image: image2,
      // label: "Choice 2",
    },
    {
      id: 3,
      image: image3,
      // label: "Choice 3",
    },
  ];

  const handleChoiceClick = (choiceId) => {
    console.log(`User has selected choice: ${choiceId}`);

    // we need to add logic to store users choice...
  };

  return (
    <div className="survey-stage">
      <div className="survey-stage__indicator">
        <div className="survey-stage__connector"></div>
        {[1, 2, 3, 4].map((stage) => (
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
