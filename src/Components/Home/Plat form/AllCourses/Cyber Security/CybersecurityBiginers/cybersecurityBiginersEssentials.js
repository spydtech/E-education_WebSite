import React from "react";
import { Link } from "react-router-dom";

import CybersecurityNavigation from "./CyberSecurityEssentialsNavigation";
import Navbar from "../../../../../Navbar";
import FooterPart from "../../../../footer/Footer";
const CybersecurityBeginners = () => {
  return (
    <>
    <Navbar />
    <div>
        <img
          // src="https://thumbs.dreamstime.com/b/ascending-arrow-icons-data-science-292911896.jpg?w=992"
          src="https://media.licdn.com/dms/image/C5612AQFdCSO2X1NjOA/article-cover_image-shrink_720_1280/0/1618174438027?e=2147483647&v=beta&t=eCGSEs-YGSEt5h6SoVpv1Sg645J3iTnKD_fvTd7RZ5Y"
          className="w-full object-cover md:h-[500px]"
        />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      </div>
    <div className="lg:container lg:mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-lora text-blue-600 mb-6 font-bold font-lura pl-8 pt-4">
            Cybersecurity for Beginners: Safeguard Your Digital World
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed pl-8 font-lura">
            In today's interconnected world, cybersecurity stands as the first
            line of defense against an array of digital threats. With cyber
            attacks becoming increasingly sophisticated, protecting sensitive
            data and infrastructure is paramount. Effective cybersecurity
            entails a multi-layered approach, encompassing proactive measures
            such as risk assessment, encryption, and continuous monitoring.
          </p>
          <Link
            to="/explore"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded inline-block mt-6 lg:ml-8 shadow-lg transition-transform transform hover:-translate-y-1"
          >
            Explore More
          </Link>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-right">
          <img
            src="https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2023-12-22/cyber-security-certifications-thumbnail.jpg"
            alt="cybersecurity"
            className="mx-auto lg:mx-0 mt-8 rounded-lg shadow-lg"
            style={{ height: "370px", width: "800px" }}
          />
        </div>
      </div>

      {/* Course Highlights Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-0 mt-12">
        <div className="text-center lg:text-right">
          <img
            src="https://d2ds8yldqp7gxv.cloudfront.net/Blog+Explanatory+Images/Which+Certification+is+best+for+Cybersecurity+1.webp"
            alt="learning"
            className="w-80 ml-64 lg:w-[450px] h-80 lg:h-96 mx-auto lg:mx-0 "
          />
        </div>
        <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
          <h2 className="text-3xl lg:text-4xl text-blue-600 font-bold mb-6 font-lura">
            Introduction to Advanced Cybersecurity Course with E-Education
          </h2>
          <h3 className="text-lg lg:text-xl text-green-600 font-semibold mb-6 font-lura">
            Course Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-400 rounded-lg p-6 flex flex-col justify-center items-center shadow-lg">
              <h4 className="text-xl lg:text-2xl font-bold mb-2">34%</h4>
              <p className="text-sm lg:text-base text-center">
                Average Salary Hike
              </p>
            </div>
            <div className="bg-pink-400 rounded-lg p-6 flex flex-col justify-center items-center shadow-lg">
              <h4 className="text-xl lg:text-2xl font-bold mb-2">35+</h4>
              <p className="text-sm lg:text-base text-center">Live Sessions</p>
            </div>
            <div className="bg-purple-400 rounded-lg p-6 flex flex-col justify-center items-center shadow-lg">
              <h4 className="text-xl lg:text-2xl font-bold mb-2">100%</h4>
              <p className="text-sm lg:text-base text-center">Online</p>
            </div>
          </div>
        </div>
      </div>

    </div>
      <CybersecurityNavigation />
      <FooterPart />
    </>
  );
};

export default CybersecurityBeginners;