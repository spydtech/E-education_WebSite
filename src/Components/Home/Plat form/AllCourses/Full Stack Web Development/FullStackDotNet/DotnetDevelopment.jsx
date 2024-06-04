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

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Navbar />
      <div className="w-full bg-gradient-to-r from-pink-500 to-rose-900 md:pl-28 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-8xl mx-auto">
        <div className="font-l">
          <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase sm:text-base lg:text-sm xl:text-base">
            Explore .NET Development
          </span>
          <h3 className="mt-1 text-4xl font-lora font-extrabold leading-10 tracking-tight text-white sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Master .NET Programming
          </h3>
          <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Boost your career by mastering .NET, a versatile framework for
            building web, mobile, and desktop applications. Learn everything you
            need to create dynamic and robust applications.
          </p>
          <p className="text-base md:text-lg text-gray-300 my-4 md:my-6">
            Our courses will guide you through the entire .NET ecosystem,
            covering frameworks like ASP.NET, Entity Framework, and Blazor.
            Develop practical skills and stand out in a competitive job market.
            Start your .NET journey today.
          </p>
          <button
            onClick={handleEnroll}
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-700 active:scale-95"
          >
            Enroll Now
          </button>
          <div className="py-4 text-gray-200">8,765 already enrolled</div>
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
