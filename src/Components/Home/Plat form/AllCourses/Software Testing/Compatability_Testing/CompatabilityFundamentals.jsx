import React from "react";
import Navbar from "../../../../../Navbar";

import CompatabilityNavigation from "./CompatabilityAbout/CompatabilityNavigation";

import CompatabilityHero from "./CompatabilityHero";

import CompatabilityCard from "./CompatabilityCard";

import CompatabilityFoot from "./CompatabilityFoot";
import Footer from "../../../../footer/Footer";

const CompatabilityTesting = () => {
  return (
    <>
      <Navbar />
      <CompatabilityHero />
      <CompatabilityCard />
      <CompatabilityNavigation />
      <CompatabilityFoot />

      <Footer />
    </>
  );
};

export default CompatabilityTesting;
