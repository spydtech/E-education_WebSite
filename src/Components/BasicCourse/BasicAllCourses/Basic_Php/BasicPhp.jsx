import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import BasicPhpHero from "./BasicPhpHero";
import BasicPhpCard from "./BasicPhpCard";
import BasicPhpNavigation from "./BasicPhpAbout/BasicPhpNavigation";
import BasicPhpFoot from "./BasicPhpFoot";
const BasicPhp = () => {
  return (
    <>
      <Navbar />
      <BasicPhpHero />
      <BasicPhpCard />
      <BasicPhpNavigation />
      <BasicPhpFoot></BasicPhpFoot>
      <Footer />
    </>
  );
};

export default BasicPhp;
