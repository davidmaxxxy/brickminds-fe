import React, { useState } from "react";
import "./SurveyStage.scss";
import image1 from "../../assets/images/lego-img-round-1.jpeg";
import image2 from "../../assets/images/lego-img-round-2.jpg";
import image3 from "../../assets/images/lego-img-round-3.jpg";

const SurveyStage = () => {
  const [currentStage, setCurrentStage] = useState(1);

  const stages = [
    {
      question:
        "Imagine you're going on an adventure. What would you pack in your backpack?",
      choices: [
        { id: 1, image: image1, label: "Map" },
        { id: 2, image: image2, label: "Compass" },
        { id: 3, image: image3, label: "Torch" },
      ],
    },
    {
      question: "What is your favorite color?",
      choices: [
        { id: 1, image: image1, label: "Red" },
        { id: 2, image: image2, label: "Green" },
        { id: 3, image: image3, label: "Blue" },
      ],
    },
    {
      question: "Choose a hobby:",
      choices: [
        { id: 1, image: image1, label: "Reading" },
        { id: 2, image: image2, label: "Hiking" },
        { id: 3, image: image3, label: "Swimming" },
      ],
    },
  ];

  const handleChoiceClick = (choiceId) => {
    console.log(
      `User has selected choice: ${choiceId} for stage ${currentStage}`
    );

    if (currentStage < stages.length) {
      setCurrentStage(currentStage + 1);
    } else {
      console.log(`Survey complete!`);
    }
  };

  return (
    <div className="survey-stage">
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

      <div className="survey-stage__question">
        {stages[currentStage - 1].question}
      </div>

      <div className="survey-stage__choices">
        {stages[currentStage - 1].choices.map((choice) => (
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
