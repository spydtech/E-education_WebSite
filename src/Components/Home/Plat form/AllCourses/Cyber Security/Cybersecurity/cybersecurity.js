import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../../Home/footer/Footer"
import Cybersecurityimg from "../../../../../../assets/CyberSecurityImages/cybersecurityimg.png";

import CybersecurityNavigation from "./CyberSecurityNavigation";
const Cybersecurity = () => {
  return (
    <>
   
   <Navbar />
   <div>
        <img
          // src="https://thumbs.dreamstime.com/b/ascending-arrow-icons-data-science-292911896.jpg?w=992"
          src="https://media.licdn.com/dms/image/D4D12AQG254VnJBPZrg/article-cover_image-shrink_720_1280/0/1702236740059?e=2147483647&v=beta&t=S9hcQK328TSngJQOqqiUpojTFTz_DFO3ReFn9rhJYyM"
          className="w-full object-cover md:h-[500px]"
        />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      </div>
    <div className="lg:container lg:mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl text-blue-600  mb-6 font-lura font-bold pl-8 pt-4">
            Your Digital World with Cybersecurity
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed pl-8 font-lura">
            In today's interconnected world, cybersecurity stands as the first
            line of defense against an array of digital threats. With cyber
            attacks becoming increasingly sophisticated, protecting sensitive
            data and infrastructure is paramount. Effective cybersecurity
            entails a multi-layered approach, encompassing proactive measures
            such as risk assessment, encryption, and continuous monitoring.
          </p>
          <Link
            to="/explore"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded inline-block mt-4 lg:ml-8 shadow-lg"
          >
            Explore More
          </Link>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-right mr-8">
          <img
            src={Cybersecurityimg}
            alt="cybersecurity"
            className="mx-auto lg:mx-0 mt-8"
          />
        </div>
      </div>

      {/* Course Highlights Section */}
      <div className="flex flex-col lg:flex-row items-center lg:w-full flex justify-between px-8 lg:px-0 mt-12">
        <div className="text-center lg:text-right ml-8">
          <img
            src="https://online.sbu.edu/sites/default/files/field/image/sbu-cybersecurity-job-outlook-feature.jpg"
            alt="learning"
            className="w-80 lg:w-96 h-80 lg:h-96 mx-auto lg:mx-0 ml-8"
          />
        </div>
        <div className="lg:w-1/2 lg:ml-12 lg:mt-0 mt-8">
          <div className="ml-8 lg:ml-0">
            <h2 className="text-3xl lg:text-4xl text-blue-600 font-bold mb-6 font-lura">
              Introduction to Advanced Cybersecurity Course with E-Education
            </h2>
            <h3 className="text-lg lg:text-xl text-green-600 font-semibold mb-6 font-lura">
              Course Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-yellow-400 rounded-lg p-6 flex flex-col justify-center items-center">
                <h4 className="text-xl lg:text-2xl font-bold mb-2">34%</h4>
                <p className="text-sm lg:text-base text-center">
                  Average Salary Hike
                </p>
              </div>
              <div className="bg-pink-400 rounded-lg p-6 flex flex-col justify-center items-center">
                <h4 className="text-xl lg:text-2xl font-bold mb-2">35+</h4>
                <p className="text-sm lg:text-base text-center">
                  Live Sessions
                </p>
              </div>
              <div className="bg-purple-400 rounded-lg p-6 flex flex-col justify-center items-center mr-8">
                <h4 className="text-xl lg:text-2xl font-bold mb-2">100%</h4>
                <p className="text-sm lg:text-base text-center">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List Section */}
      <div style={{ marginLeft: "650px" }}>
        <li>Explore 2 tracks & 5 specializations for diverse learning</li>
        <li>
          Experience seamless integration with Advanced cybersecurity and AI
        </li>
        <li>
          Attain E-learning executive Alumni Status for Exclusive benefits
        </li>
        <li>Access EMI at 2500/- month for greater flexibility</li>
        <li>Explore 2 tracks & 5 specializations for diverse learning</li>
      </div>

    </div>
      <CybersecurityNavigation />

    <Footer/>
    </>
  );
};

export default Cybersecurity;