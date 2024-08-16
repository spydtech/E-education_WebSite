import React, { useState, useEffect } from "react";
import About from "./About";
import Outcomes from "./Outcomes";
import FullStackPythonDevFQACourses from "./FullStackPythonDevFQACourses";
import FullStackPythonDevelopmentTestimonioals from "./FullStackPythonDevelopmentTestimonioals";
import { IoMenu } from "react-icons/io5";
const AboutCourses = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize the first tab
    showTab("tab1");
  }, []);

  function showTab(tabId) {
    // Update active tab
    setActiveTab(tabId);
  }

  return (
    <>
       <div className="container mx-auto py-6">
      <div className="flex justify-start  lg:hidden">
        <button
          className="px-4 py-2 font-semibold border rounded-lg text-[#F6AC14] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMenu className="text-2xl" />
        </button>
      </div>

      <div className={`w-full ${menuOpen ? "flex justify-center" : "hidden lg:flex"}  transition-all duration-300`}>
      <div className="flex flex-col lg:justify-between lg:pl-20 w-5/6 justify-center  lg:flex-row  lg:items-start">
          <button
            className={`px-4 py-2 font-semibold text-xl lg:rounded-r-xl text-[#F6AC14] focus:outline-none tab-button ${
              activeTab === "tab1" ? "bg-[#F6AC14] text-white" : ""
            }`}
            onClick={() => showTab("tab1")}
          >
            About
          </button>
          <button
            className={`px-4 py-2 font-semibold text-xl  lg:rounded-r-xl text-[#F6AC14] focus:outline-none tab-button ${
              activeTab === "tab2" ? "bg-[#F6AC14] text-white" : ""
            }`}
            onClick={() => showTab("tab2")}
          >
            Outcomes
          </button>
          <button
            className={`px-4 py-2 font-semibold text-xl lg:rounded-r-xl text-[#F6AC14] focus:outline-none tab-button ${
              activeTab === "tab3" ? "bg-[#F6AC14] text-white" : ""
            }`}
            onClick={() => showTab("tab3")}
          >
            Courses
          </button>
          <button
            className={`px-4 py-2 font-semibold text-xl  lg:rounded-r-xl text-[#F6AC14] focus:outline-none tab-button ${
              activeTab === "tab4" ? "bg-[#F6AC14] text-white" : ""
            }`}
            onClick={() => showTab("tab4")}
          >
            Testimonials
          </button>
        </div>
      </div>

        {/* Tab Content */}
        <div className="rounded-lg pb-5">
          <div
            id="tab1"
            className={`p-4 tab-content bg-white rounded-lg ${
              activeTab === "tab1" ? "" : "hidden"
            }`}
          >
            <About />
          </div>
          <div
            id="tab2"
            className={`p-4 tab-content bg-white rounded-lg ${
              activeTab === "tab2" ? "" : "hidden"
            }`}
          >
            <Outcomes />
          </div>
          <div
            id="tab3"
            className={`p-4 tab-content bg-white rounded-lg ${
              activeTab === "tab3" ? "" : "hidden"
            }`}
          >
            <FullStackPythonDevFQACourses />
          </div>
          <div
            id="tab4"
            className={`p-4 tab-content bg-white rounded-lg ${
              activeTab === "tab4" ? "" : "hidden"
            }`}
          >
            <FullStackPythonDevelopmentTestimonioals />
          </div>
          {/* Add more tabs here */}
        </div>
      </div>
    </>
  );
};

export default AboutCourses;
