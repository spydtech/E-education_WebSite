import React from "react";
// import Navbar from "../../../../Navbar";
// import Footer from "../../../footer/Footer";
// import UnitTestingNavigation from "./UnitTestingAbout/UnitTestingNavigation";
import CompatabilityNavigation from "./CompatabilityAbout/CompatabilityNavigation";
// import UnitTestingHero from "./CompatabilityHero";
import CompatabilityHero from "./CompatabilityHero";
// import UnitTestingCard from "./UnitTestingCard";
import CompatabilityCard from "./CompatabilityCard";
// import UnitTestingFoot from "./UnitTestingFoot";
import CompatabilityFoot from "./CompatabilityFoot";
import CompatabilityCareersOutcomes from "./CompatabilityAbout/CompatilityCareersOutcomes";
// import UnitTestingCareersOutcomes from "./UnitTestingAbout/UnitTestingCareersOutcomes";
const CompatabilityTesting = () => {
  return (
    <>
      {/* <Navbar /> */}
      <CompatabilityHero />
      <CompatabilityCard />
      <CompatabilityNavigation />
      <CompatabilityFoot />

      {/* <Footer /> */}
    </>
  );
};

export default CompatabilityTesting;
