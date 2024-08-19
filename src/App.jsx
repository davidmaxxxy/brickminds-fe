import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SurveyStage from "./pages/SurveyStage/SurveyStage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/survey" element={<SurveyStage />} />
          <Route path="/products" element={<ProductPage />} />
          {/* Add additional routes here as needed */}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
