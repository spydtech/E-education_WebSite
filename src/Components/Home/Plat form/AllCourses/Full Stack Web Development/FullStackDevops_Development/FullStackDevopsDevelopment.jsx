import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import for navigation
import AboutCourses from "./AboutCourses";
import Community from "./Community/community";
import SuccessStory from "./SuccessStory/successstory";
import Delivery_Methods from "./deliverymethods/Delivery_Methods";
import FullStackDevopsDeveloper from "./Developer/FullStackDevopsDeveloper";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";

const FullStackDevopsDevelopment = () => {
  const [courseName] = useState("Master Full Stack Devops Development"); // Moved inside component
  const [coursePrice] = useState(34999); // Moved inside component
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-[#14213d] md:pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="font-l text-center md:text-left text-white">
          <span className="text-sm font-semibold tracking-wide uppercase sm:text-base lg:text-sm xl:text-base">
            Explore Full Stack DevOps Course
          </span>
          <h3 className="mt-1 text-4xl md:text-5xl lg:text-6xl font-lora font-extrabold leading-10 tracking-tight">
            Master Full Stack DevOps
          </h3>
          <p className="mt-3 text-base md:text-lg lg:text-base xl:text-lg">
            Elevate your technical skills with comprehensive courses focused on
            full stack DevOps development. Master CI/CD, Kubernetes, Docker,
            AWS, and more, covering both front-end and back-end technologies.
            Develop expertise in building scalable, automated environments and
            position yourself for success as a full stack DevOps developer.
          </p>
          <p className="text-base md:text-lg text-white my-4 md:my-6">
            Our courses empower you to dive deep into full stack DevOps
            technologies. Develop practical skills and stand out in a
            competitive job market. Start your full stack DevOps journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="bg-green-400 text-white font-medium py-2 px-4 rounded transition-all hover:bg-green-700 active:scale-95"
          >
            Enroll Now
          </button>
          <div className="py-4">12,345 already enrolled</div>
        </div>
        <div className="relative pl-0 md:pl-12">
          <img
            src="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149373211.jpg?t=st=1717492739~exp=1717496339~hmac=570f64dfbeea56a85587b08b845611a371bdb42116d7c2894b8d9768fbc46f45&w=826"
            className="pr-4 h-[350px]"
          />
        </div>
      </div>
      <FullStackDevopsDeveloper />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      <SuccessStory />
      <Footer />
    </>
  );
};

export default FullStackDevopsDevelopment;