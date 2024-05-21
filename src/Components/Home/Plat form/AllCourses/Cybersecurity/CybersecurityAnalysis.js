import React from "react";
import DataHero from "./DataHero";
import DataAbout from "./DataAbout";
import DataAnalaticsNavigation from "./CyberSecurityNavigation";
import Navbar from "../../../../Navbar";
const DataAnalatics = () => {
  return (
    <>
      <Navbar />
      <DataHero />
      <DataAbout />
      <DataAnalaticsNavigation />
    </>
  );
};

export default DataAnalatics;
