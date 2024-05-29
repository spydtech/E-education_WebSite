import React from "react";
import Navbar from "../Navbar";
import Main from "../Main";
import Aurora from "./aurora/Aurora";
import Footer from "./footer/Footer";
import FinalTestimonials from "./testimonials/FinalTestimonials";
import Platform from "./Plat form/Platform";
import Pricing from "./Pricing/Pricing";
import SlideInTimer from "./Timer/SlideInTimer";
import ImageHomePage from "../Home/Plat form/AllCourses/ImageHomepage";
import SingupHome from "../Home/SingUpHome/SignUpHome";
import StartNewCarrer from "./StartNewCarrer/StartNewCarrer";
import { useSelector } from "react-redux";
function Home() {

  const { auth } = useSelector((store) => store);

  return (
    <>
      <Navbar />
      <Main />
      <StartNewCarrer />
      <Platform />

      <ImageHomePage />
      <Aurora />

      <Pricing />
      <SlideInTimer />
      {!auth.user && <SingupHome />}
      <FinalTestimonials />
      <Footer />
    </>
  );
}

export default Home;

