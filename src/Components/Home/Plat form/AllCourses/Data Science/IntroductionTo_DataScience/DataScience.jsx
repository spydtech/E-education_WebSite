import React from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import DataScienceHero from "./DataScienceHero";
import DataScienceCard from "./DataScienceCard";
import DataScienceNavigation from "./DataScienceAbout/DataScienceNavigation";
import DataScienceFoot from "./DataScienceFoot";
const DataScience = () => {
  return (
    <>
      <Navbar />
      <DataScienceHero />
      <DataScienceCard />
      <DataScienceNavigation />
      <DataScienceFoot></DataScienceFoot>
      <Footer />
    </>
  );
};

export default DataScience;
