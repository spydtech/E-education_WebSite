import React from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import CloudComputingHero from "./CloudComputingHero";
import CloudComputingCard from "./CloudComputingCard";
import CloudComputingNavigation from "./CloudComputingAbout/CloudComputingNavigation";
import CloudComputingFoot from "./CloudComputingFoot";
const CloudComputing = () => {
  return (
    <>
      <Navbar />
      <CloudComputingHero />
      <CloudComputingCard />
      <CloudComputingNavigation />
      <CloudComputingFoot></CloudComputingFoot>
      <Footer />
    </>
  );
};

export default CloudComputing;
