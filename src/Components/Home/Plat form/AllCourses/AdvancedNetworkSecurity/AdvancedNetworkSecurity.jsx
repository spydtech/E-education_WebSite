import React from "react";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
import AdvancedNetworkSecurityHero from "./AdvancedNetworkSecurityHero";
import AdvancedNetworkSecurityCard from "./AdvancedNetworkSecurityCard";
import AdvancedNetworkSecurityNavigation from "./AdvancedNetworkSecurityAbout/AdvancedNetworkSecurityNavigation";
import AdvancedNetworkSecurityFoot from "./AdvancedNetworkSecurityFoot";
const AdvancedNetworkSecurity = () => {
  return (
    <>
      <Navbar />
      <AdvancedNetworkSecurityHero />
      <AdvancedNetworkSecurityCard />
      <AdvancedNetworkSecurityNavigation />
      <AdvancedNetworkSecurityFoot></AdvancedNetworkSecurityFoot>
      <Footer />
    </>
  );
};

export default AdvancedNetworkSecurity;
