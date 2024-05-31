import React from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import BlockChainHero from "./BlockChainHero";
import BlockChainCard from "./BlockChainCard";
import BlockChainNavigation from "./BlockChainAbout/BlockChainNavigation";
import BlockChainFoot from "./BlockChainFoot";
const BlockChain = () => {
  return (
    <>
      <Navbar />
      <BlockChainHero />
      <BlockChainCard />
      <BlockChainNavigation />
      <BlockChainFoot></BlockChainFoot>
      <Footer />
    </>
  );
};

export default BlockChain;
