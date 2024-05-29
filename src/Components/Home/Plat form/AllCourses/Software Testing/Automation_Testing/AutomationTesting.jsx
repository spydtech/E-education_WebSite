import React from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import AutomationTestingHero from "./AutomationTestingHero";
import AutomationTestingCard from "./AutomationTestingCard";
import AutomationTestingNavigation from "./AutomationTestingAbout/AutomationTestingNavigation";
import AutomationTestingFoot from "./AutomationTestingFoot";
const AutomationTesting = () => {
  return (
    <>
      <Navbar />
      <AutomationTestingHero />
      <AutomationTestingCard />
      <AutomationTestingNavigation />
      <AutomationTestingFoot></AutomationTestingFoot>
      <Footer />
    </>
  );
};

export default AutomationTesting;
