import React from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import BestPracticesNetworkSecurityHero from "./BestPracticesNetworkSecurityHero";
import BestPracticesNetworkSecurityCard from "./BestPracticesNetworkSecurityCard";
import BestPracticesNetworkSecurityNavigation from "./BestPracticesNetworkSecurityAbout/BestPracticesNetworkSecurityNavigation";
import BestPracticesNetworkSecurityFoot from "./BestPracticesNetworkSecurityFoot";
const BestPracticesNetworkSecurity = () => {
  return (
    <>
      <Navbar />
      <BestPracticesNetworkSecurityHero />
      <BestPracticesNetworkSecurityCard />
      <BestPracticesNetworkSecurityNavigation />
      <BestPracticesNetworkSecurityFoot></BestPracticesNetworkSecurityFoot>
      <Footer />
    </>
  );
};

export default BestPracticesNetworkSecurity;