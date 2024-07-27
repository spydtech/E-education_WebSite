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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full md:pl-28 py-12 flex md:flex-row flex-col items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="md:w-[600px] pl-8 ">
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
            Explore Full Stack DevOps Course
          </span>
          <h3 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Master Full Stack DevOps
          </h3>
          <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Elevate your technical skills with comprehensive courses focused on
            full stack DevOps development. Master CI/CD, Kubernetes, Docker,
            AWS, and more, covering both front-end and back-end technologies.
            Develop expertise in building scalable, automated environments and
            position yourself for success as a full stack DevOps developer.
          </p>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
            Our courses empower you to dive deep into full stack DevOps
            technologies. Develop practical skills and stand out in a
            competitive job market. Start your full stack DevOps journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
          >
            Enroll Now
          </button>
          <div className="py-4">11,095 already enrolled</div>
        </div>
        <div className="relative pl-12">
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
