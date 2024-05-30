import React from "react";
// import StressTestingNavigation from "./StressTestingNavigation";
import StressTestingNavigation from "./SystemAbout/StressTestingNavigation";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
// import StressTestingHero from "./StressTestingHero";
import StressTestingHero from "./StressTestingTestingHero";
import StressTestingCard from "./StressTestingCard";
import StressTestingFoot from "./StressTestingFoot";
// import SystemTestingCareersOutcomes from "./SystemAbout/SystemCareersOutcomes";
import StressTestingCareersOutcomes from "./SystemAbout/StressTestingCareersOutcomes";
const StressTestingMain = () => {
  return (
    <>
      <Navbar />
      <StressTestingHero />
      <StressTestingCard />
      <StressTestingNavigation />
      <StressTestingFoot />

      <Footer />
    </>
  );
};

export default StressTestingMain;
