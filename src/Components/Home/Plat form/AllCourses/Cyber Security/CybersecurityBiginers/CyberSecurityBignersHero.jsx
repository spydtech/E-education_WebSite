import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import CybersecurityNavigation from "./CyberSecurityBiginersNavigation";
// import Navbar from "../../../../../Navbar";
// import Footer from "../../../../footer/Footer";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";

const CybersecurityBeginnersHero = () => {
  const [courseName] = useState("Cyber Security for Beginners"); // Placeholder for course name
  const [coursePrice] = useState(34999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  
       <>
    
    <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1725874356/image_13_oi7qfs.png")' }}>
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-center text-white text-[20px] font-medium px-4">
    In today's interconnected world, cybersecurity stands as the first <br/>
              line of defense against an array of digital threats. With cyber <br/>
              attacks becoming increasingly sophisticated 
    </p>
  </div>
  <div className="absolute inset-0 flex items-end justify-center pb-10">
    <button
      onClick={handleEnroll}
      className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
    >
      Enroll Now
    </button>
  </div>
</div>
    </>
    
  );
};

export default CybersecurityBeginnersHero;
