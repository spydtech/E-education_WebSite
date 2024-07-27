import React, { useState, useEffect } from "react";
import About from "./About";
import Outcomes from "./Outcomes";
import FullStackWebDevFQACourses from "./FullStackWebDevFQACourses";
import FullStackWebDevelopmentTestimonioals from "./FullStackWebDevelopmentTestimonioals";

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
          <div className="flex space-x-4 justify-start items-start md:flex-row flex-col gap-y-2`">
            <div>
              {/* <button
                className={`px-4 py-2 font-semibold border-b-4 border-[#F6AC14] rounde hover:bg-[#F6AC14] hover:text-white focus:outline-none tab-button ${
                  activeTab === "tab1" ? "active" : ""
                }`}
                onClick={() => showTab("tab1")}
                style={{
                  backgroundColor: activeTab === "tab1" ? "orange" : "",
                  color: activeTab === "tab1" ? "white" : "",
                }}
              >
                About
              </button> */}
              <button
                className={`px-4 py-2 font-semibold  text-[#F6AC14]  rounded-tr-3xl   rounded-br-3xl hover:bg-[#F6AC14] hover:text-white focus:outline-none tab-button ${
                  activeTab === "tab1" ? "active" : ""
                }`}
                onClick={() => showTab("tab1")}
                style={{
                  backgroundColor: activeTab === "tab1" ? "#F6AC14" : "",
                  color: activeTab === "tab1" ? "white" : "",
                }}
              >
                About
              </button>
            </div>
            <div>
              <button
                className={`px-4 py-2 font-semibold  text-[#F6AC14] rounded-tr-3xl   rounded-br-3xl hover:bg-[#F6AC14] hover:text-white focus:outline-none tab-button  ${
                  activeTab === "tab3" ? "active" : ""
                }`}
                onClick={() => showTab("tab3")}
                style={{
                  backgroundColor: activeTab === "tab3" ? "orange" : "",
                  color: activeTab === "tab3" ? "white" : "",
                }}
              >
                Courses
              </button>
            </div>
            <div>
              <button
                className={`px-4 py-2 font-semibold  text-[#F6AC14]   rounded-tr-3xl   rounded-br-3xl hover:bg-[#F6AC14] hover:text-white focus:outline-none tab-button ${
                  activeTab === "tab2" ? "active" : ""
                }`}
                onClick={() => showTab("tab2")}
                style={{
                  backgroundColor: activeTab === "tab2" ? "orange" : "",
                  color: activeTab === "tab2" ? "white" : "",
                }}
              >
                Outcomes
              </button>
            </div>

            <div>
              <button
                className={`px-4 py-2 font-semibold  text-[#F6AC14]  rounded-tr-3xl   rounded-br-3xl hover:bg-[#F6AC14] hover:text-white focus:outline-none tab-button ${
                  activeTab === "tab4" ? "active" : ""
                }`}
                onClick={() => showTab("tab4")}
                style={{
                  backgroundColor: activeTab === "tab4" ? "orange" : "",
                  color: activeTab === "tab4" ? "white" : "",
                }}
              >
                Testimonials
              </button>
            </div>
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
            <FullStackWebDevFQACourses />
          </div>
          <div
            id="tab4"
            className={`p-4 tab-content bg-white rounded-lg ${
              activeTab === "tab4" ? "" : "hidden"
            }`}
          >
            <FullStackWebDevelopmentTestimonioals />
          </div>
          {/* Add more tabs here */}
        </div>
      </div>
    </>
  );
};

export default AboutCourses;
