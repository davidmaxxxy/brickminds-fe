import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="main-content">
      <h1 className="main-content--title">
        <span className="span-1">Looking</span>{" "}
        <span className="span-2">for</span> <span className="span-3">the</span>
        <br />
        <span className="span-4">perfect</span>{" "}
        <span className="span-5">gift?</span>
      </h1>

      <button className="gift--finder-btn">Launch the Gift Finder</button>
    </div>
  );
};

export default HomePage;
