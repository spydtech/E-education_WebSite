import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import FooterPart from "../../../../../Home/footer/Footer";

import AdvanceEthicalHackingCard from "./AdvanceEthicalHackingCard";
import AdvancedEthicalHackingNavigation from "./AdvanceEthicalHackingAbout/AdvancedEthicalHackingNavigation";
import AdvanceEthicalHackingHero from "./AdvanceEthicalHackingHero";
const AdvancedEthicalHacking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
