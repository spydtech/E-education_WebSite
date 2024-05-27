import React from "react";
import Navbar from "../../../../Navbar";
import FooterPart from "../../../footer/Footer";

import CertifiedEthicalHackingCard from "./CertifiedEthicalHackingCard";
// import CertifiedEthicalHackingNavigation from "./CertifiedEthicalHackingAbout/CertifiedEthicalHackingNavigation";
import CertifiedEthicalHackingHero from "./CertifiedEthicalHackingHero";
import CertifiedEthicalHackingNavigation from "./CertifiedEthicalHackingAbout/certifiedEthicalHackingNavigation";
const CertifiedEthicalHacking = () => {
  return (
    <>
      <Navbar />
      <CertifiedEthicalHackingHero />
      <CertifiedEthicalHackingCard />
      <CertifiedEthicalHackingNavigation />
      {/* <EthicalHackingHero /> */}
      <FooterPart />
    </>
  );
};

export default CertifiedEthicalHacking;
