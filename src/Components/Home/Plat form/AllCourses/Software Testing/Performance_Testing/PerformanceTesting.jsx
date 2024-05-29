import React from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import PerformanceTestingHero from "./PerformanceTestingHero";
import PerformanceTestingCard from "./PerformanceTestingCard";
import PerformanceTestingNavigation from "./PerformanceTestingAbout/PerformanceTestingNavigation";
import PerformanceTestingFoot from "./PerformanceTestingFoot";
const PerformanceTesting = () => {
  return (
    <>
      <Navbar />
      <PerformanceTestingHero />
      <PerformanceTestingCard />
      <PerformanceTestingNavigation />
      <PerformanceTestingFoot></PerformanceTestingFoot>
      <Footer />
    </>
  );
};

export default PerformanceTesting;
