import React from "react";
import DataHero from "./DataHero";
import DataAbout from "./DataAbout";
import DataAnalaticsNavigation from "./CyberSecurityNavigation";

import Navbar from "../../../../../Navbar";
import FooterPart from "../../../../footer/Footer";
const DataAnalatics = () => {
  return (
    <>
      <Navbar />
      <DataHero />
      <DataAbout />
      <DataAnalaticsNavigation />
      <FooterPart />
    </>
  );
};

export default DataAnalatics;
