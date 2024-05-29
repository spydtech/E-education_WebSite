import React from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import ManualTestingHero from "./ManualTestingHero";
import ManualTestingCard from "./ManualTestingCard";
import ManualTestingNavigation from "./ManualTestingAbout/ManualTestingNavigation";
import ManualTestingFoot from "./ManualTestingFoot";
const ManualTesting = () => {
  return (
    <>
      <Navbar />
      <ManualTestingHero />
      <ManualTestingCard />
      <ManualTestingNavigation />
      <ManualTestingFoot></ManualTestingFoot>
      <Footer />
    </>
  );
};

export default ManualTesting;
