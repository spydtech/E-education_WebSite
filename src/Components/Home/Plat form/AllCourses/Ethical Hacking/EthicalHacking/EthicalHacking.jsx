import React from "react";
import Navbar from '../../../../Navbar'
import Footer from '../../../footer/Footer'
// import MachineLearningHero from "./EthicalHackingHero";
// import MachineLearningCard from "./EthicalHackingCard";
// import MachineLearningNavigation from "./MachineLearningAbout/MachineLearningNavigation";
import EthicalHackingHero from "./EthicalHackingHero";
import EthicalHackingCard from "./EthicalHackingCard";
import EthicalHackingNavigation from "./EthicalHackingAbout/EthicalHackingNavigation";
import EthicalHackingCard2 from "./EthicalHackingCard2";
const EthicalHacking = () => {
  return (
    <>
      <Navbar />
      <EthicalHackingCard2 />
      <EthicalHackingCard />
      <EthicalHackingNavigation />
      <EthicalHackingHero />
      <Footer />
    </>
  );
};

export default EthicalHacking;
