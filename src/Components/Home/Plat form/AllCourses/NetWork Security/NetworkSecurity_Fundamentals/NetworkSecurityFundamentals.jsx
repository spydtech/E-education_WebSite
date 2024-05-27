import React from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import NetworkSecurityHero from "./NetworkSecurityHero";
import NetworkSecurityCard from "./NetworkSecurityCard";
import NetworkSecurityNavigation from "./NetworkSecurityAbout/NetworkSecurityNavigation";
import NetworkSecurityFoot from "./NetworkSecurityFoot";
const NetworkSecurityFundamentals = () => {
  return (
    <>
      <Navbar />
      <NetworkSecurityHero />
      <NetworkSecurityCard />
      <br />
      <br />
      <NetworkSecurityNavigation />
      
    
      <NetworkSecurityFoot></NetworkSecurityFoot>
      <Footer />
    </>
  );
};

export default NetworkSecurityFundamentals;
