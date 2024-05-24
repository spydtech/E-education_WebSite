import React from "react";
import Navbar from "../../../Navbar";
import FooterPart from "../../footer/Footer";

import AdvanceEthicalHackingCard from "./AdvanceEthicalHackingCard";
import AdvancedEthicalHackingNavigation from "./AdvanceEthicalHackingAbout/AdvancedEthicalHackingNavigation";
import AdvanceEthicalHackingHero from "./AdvanceEthicalHackingHero";
const AdvancedEthicalHacking = () => {
  return (
    <>
      <Navbar />
      <AdvanceEthicalHackingHero />
      <AdvanceEthicalHackingCard />
      <AdvancedEthicalHackingNavigation />
      {/* <EthicalHackingHero /> */}
      <FooterPart />
    </>
  );
};

export default AdvancedEthicalHacking;
