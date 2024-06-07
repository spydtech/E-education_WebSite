import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import AboutCourses from "./AboutCourses";
import Community from "./community";
import SuccessStory from "./successstory";
import Delivery_Methods from "./Delivery_Methods";
import DotnetDeveloperSkills from "./DotnetDeveloperSkills";

const DotNetDevelopment = () => {
  const [courseName] = useState("Master Full Stack .Net Development"); // Placeholder for course name
  const [coursePrice] = useState(14999);

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
      <Navbar />
      <div className="w-full md:pl-28 py-12 flex md:flex-row flex-col items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="md:w-[600px] pl-8 ">
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
            Explore .NET Development
          </span>
          <h3 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Master .NET Programming
          </h3>
          <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Boost your career by mastering .NET, a versatile framework for
            building web, mobile, and desktop applications. Learn everything you
            need to create dynamic and robust applications.
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
            src="https://www.interviewbit.com/blog/wp-content/uploads/2021/08/web-development.jpg"
            className="pr-4 h-[350px]"
          />
        </div>
      </div>
      <DotnetDeveloperSkills />
      <AboutCourses />
      <Delivery_Methods />
      <Community />
      {/* <Award /> */}
      <SuccessStory />
      <Footer />
    </>
  );
};

export default DotNetDevelopment;
