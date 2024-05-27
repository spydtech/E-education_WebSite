import React, { useState } from "react";

function AdvancedNetworkSecurityKeyHighights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Concepts" },
    { label: "Applications" },
    { label: "Skills Developed" },
    { label: "Target Audience" },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <>
            <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc pl-16  bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-cyan-600 py-4">
                Overview
              </p>
              <li>Advanced modules with Generative AI fusion</li>
              <li>E-education certificate via upGrad collaboration</li>
              <li>
                Access to live training sessions by Meta Blueprint trainers
              </li>
              <li>15+ Case Studies, Live projects</li>
              <li>Earn E-Eduction Executive Alumni Status</li>
              <li>90+ Tool Video Library</li>
              <li>Industry mentor-led fortnightly coaching</li>
              <li>Tailored resume feedback</li>
              <li>Mock Interview by managers</li>
              <li>Explore ChatGPT in digital marketing tutorials</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-cyan-600 py-4">
                Key Concepts
              </p>
              <li>Generative AI in digital marketing</li>
              <li>SEO</li>
              <li>Search and Display advertising</li>
              <li>Social and Display advertising</li>
              <li>Content Marketing</li>
              <li>Branding</li>
              <li>Web Analytics</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-cyan-600">
                Applications
              </p>
              <li>Digital Marketing Manager</li>
              <li>SEM Manager</li>
              <li>SEO Manager</li>
              <li>Social Media and Content Manager</li>
              <li>Associate</li>
              <li>Consultant</li>
              <li>Business Analyst</li>
              <li>(Sr.)Associate-Digital Marketing</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-cyan-600">
                Skills Developed
              </p>
              <li>List of target audience goes here...</li>
              <li>
                Explore 2 tracks & 5 specializations for diverse learning.
              </li>
              <li>Experience seamless integration with Gen AI modules.</li>
              <li>
                Attain E-education Executive Alumni Status for exclusive
                benefits.
              </li>
              <li>Access EMI at RS. 2,879/month for greater flexibility.</li>
              <li>
                A voucher worth $50 for Meta's "Digital Marketing Associate"
                certificate exam, free of cost.
              </li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            {" "}
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium  text-cyan-600">
                Target Audience
              </p>
              <li>
                Utilise ChatGPT to assist in creative unique content,plan
                strategies,build,calenders,and more
              </li>
              <li>Generative SEO-optimised content with chatGPT</li>
              <li>
                Gain insights into your social media analytics by using chatGPT
              </li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        id="main"
        className=" md:lg:xl:px-20  bg-gradient-to-br from-[#480ca8] to-[#350657]"
      >
        <div id="subdiv1" className="pt-4">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-[#07beb8]">
              E-education Course Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96  h-auto"
          >
            <p className="text-5xl font-bold ">What does this</p>
            <p className="text-5xl font-bold text-[#07beb8] inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid  grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start*/}
          <div id="content1" className="">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-cyan-700 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-80 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#07beb8]  text-white hover:text-white border-none"
                    : ""
                }`}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div
            id="content2"
            className="md:lg:w-auto md:lg:h-auto md:lg:xl:w-[400px] h-auto pt-4 md:lg:xl:pl-4 text-xl"
          >
            {renderContent()}
          </div>
          {/* content end */}
        </div>
      </div>
    </>
  );
}

export default AdvancedNetworkSecurityKeyHighights;
