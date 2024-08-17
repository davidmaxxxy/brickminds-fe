import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [showSurveyStage, setShowSurveyStage] = useState(false);

  const resetSurvey = () => {
    setShowSurveyStage(false);
  };

  return (
    <Router>
      <main className="App">
        <Header resetSurvey={resetSurvey} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                showSurveyStage={showSurveyStage}
                setShowSurveyStage={setShowSurveyStage}
              />
            }
          />
          {/* Add additional routes here as needed */}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
