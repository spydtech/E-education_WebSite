import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import ERPHero from "./ERPHero";
import ERPCard from "./ERPCard";
import ERPNavigation from "./ERPAbout/ERPNavigation";
import ERPFoot from "./ERPFoot";
const ERP = () => {
  return (
    <>
      <Navbar />
      <ERPHero />
      <ERPCard />
      <ERPNavigation />
      <ERPFoot></ERPFoot>
      <Footer />
    </>
  );
};

export default ERP;
