import React from "react";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
import UsabilityTestingHero from "./UsabilityTestingHero";
import UsabilityTestingCard from "./UsabilityTestingCard";
import UsabilityTestingNavigation from "./UsabilityTestingAbout/UsabilityTestingNavigation";
import UsabilityTestingFoot from "./UsabilityTestingFoot";
const UsabilityTesting = () => {
  return (
    <>
      <Navbar />
      <UsabilityTestingHero />
      <UsabilityTestingCard />
      <UsabilityTestingNavigation />
      <UsabilityTestingFoot></UsabilityTestingFoot>
      <Footer />
    </>
  );
};

export default UsabilityTesting;