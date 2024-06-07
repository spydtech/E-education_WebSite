import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import UnitTestingNavigation from "./UnitTestingAbout/UnitTestingNavigation";
import UnitTestingHero from "./UnitTestingHero";
import UnitTestingCard from "./UnitTestingCard";
import UnitTestingFoot from "./UnitTestingFoot";
import UnitTestingCareersOutcomes from "./UnitTestingAbout/UnitTestingCareersOutcomes";
const UnitTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <UnitTestingHero />
      <UnitTestingCard />
      <UnitTestingNavigation />
      <UnitTestingFoot />
      {/* <UnitTestingCareersOutcomes /> */}
      <Footer />
    </>
  );
};

export default UnitTesting;
