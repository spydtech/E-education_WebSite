import React from "react";
import Navbar from '../../../../../Navbar'
// import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
// import Footer from "../../../../footer/Footer";
import AcceptanceTestingHero from "./AcceptanceTestingHero";
import AcceptanceTestingCard from "./AcceptanceTestingCard";
import AcceptanceTestingNavigation from "./AcceptanceTestingAbout/AcceptanceTestingNavigation";
import AcceptanceTestingFoot from "./AcceptanceTestingFoot";
const AcceptanceTesting = () => {
  return (
    <>
    <Navbar />
      <AcceptanceTestingHero />
      <AcceptanceTestingCard />
      <AcceptanceTestingNavigation />
      <AcceptanceTestingFoot></AcceptanceTestingFoot>
      <Footer />
    </>
  );
};

export default AcceptanceTesting;
