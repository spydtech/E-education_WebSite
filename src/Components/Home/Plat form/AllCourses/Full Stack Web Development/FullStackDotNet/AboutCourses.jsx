import React, { useState, useEffect } from "react";
import About from "./About";
import Outcomes from "./Outcomes";
// import MeanStackDevFQACourses from "./MeanStackDevFQACourses";
import MeanStackDev from "./DotnetDevFQACourses";
import DotnetDevelopmentTestimonioals from "./DotnetDevelopmentTestimonioals";

const AboutCourses = () => {
  const [activeTab, setActiveTab] = useState("tab1");

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
      <div className="w-full px-16  "></div>
      <div className="w-full mt-10 px-16">
        {/* Tab Buttons */}
        <div className="p-2 rounded-t-lg overflow-x-auto">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-800 rounded-lg hover:bg-blue-800 hover:text-white focus:outline-none tab-button ${
                activeTab === "tab1" ? "active" : ""
              }`}
              onClick={() => showTab("tab1")}
              style={{
                backgroundColor: activeTab === "tab1" ? "blue" : "",
                color: activeTab === "tab1" ? "white" : "",
              }}
            >
              About
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-800 rounded-lg hover:bg-blue-800 hover:text-white focus:outline-none tab-button ${
                activeTab === "tab2" ? "active" : ""
              }`}
              onClick={() => showTab("tab2")}
              style={{
                backgroundColor: activeTab === "tab2" ? "blue" : "",
                color: activeTab === "tab2" ? "white" : "",
              }}
            >
              Outcomes
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-800 rounded-lg hover:bg-blue-800 hover:text-white focus:outline-none tab-button ${
                activeTab === "tab3" ? "active" : ""
              }`}
              onClick={() => showTab("tab3")}
              style={{
                backgroundColor: activeTab === "tab3" ? "blue" : "",
                color: activeTab === "tab3" ? "white" : "",
              }}
            >
              Courses
            </button>
            <button
              className={`px-4 py-2 font-semibold border-b-4 border-blue-800 rounded-lg hover:bg-blue-800 hover:text-white focus:outline-none tab-button ${
                activeTab === "tab4" ? "active" : ""
              }`}
              onClick={() => showTab("tab4")}
              style={{
                backgroundColor: activeTab === "tab4" ? "blue" : "",
                color: activeTab === "tab4" ? "white" : "",
              }}
            >
              Testimonials
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className=" rounded-lg  pb-5">
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
            <MeanStackDev />
          </div>
          <div
            id="tab4"
            className={`p-4 tab-content bg-white rounded-lg ${
              activeTab === "tab4" ? "" : "hidden"
            }`}
          >
            <DotnetDevelopmentTestimonioals />
          </div>
          {/* Add more tabs here */}
        </div>
      </div>
    </>
  );
};

export default AboutCourses;
