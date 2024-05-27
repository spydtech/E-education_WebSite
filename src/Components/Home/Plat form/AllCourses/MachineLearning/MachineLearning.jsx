import React from "react";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
import MachineLearningHero from "./MachineLearningHero";
import MachineLearningCard from "./MachineLearningCard";
import MachineLearningNavigation from "./MachineLearningAbout/MachineLearningNavigation";
import MachineLearningFoot from "./MachineLearningFoot";
const MachineLearning = () => {
  return (
    <>
      <Navbar />
      <MachineLearningHero />
      <MachineLearningCard />
      <MachineLearningNavigation />
      <MachineLearningFoot></MachineLearningFoot>
      <Footer />
    </>
  );
};

export default MachineLearning;
