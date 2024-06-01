import React, { useState } from "react";

function MobileAppKeyHighlights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Features" },
    { label: "Functionality" },
    { label: "User Experience" },
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
            <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl mb-12">
              <p className="text-2xl font-medium text-orange-600 py-4">
                Overview
              </p>
              <li>Introduction to the mobile app and its significance.</li>
              <li>Understanding modern mobile app development practices.</li>
              <li>
                Exploring latest mobile app development frameworks and tools.
              </li>
              <li>Utilizing mobile app development in various domains.</li>
              <li>Integration with backend services and APIs.</li>
              <li>Introduction to cross-platform development tools.</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600 py-4">
                Key Features
              </p>
              <li>Responsive UI Design</li>
              <li>Offline Functionality with Data Sync</li>
              <li>Push Notifications and Alerts</li>
              <li>Integration with Device Features (Camera, GPS, etc.)</li>
              <li>Security Measures and Data Encryption</li>
              <li>Scalability and Performance Optimization</li>
              <li>Analytics and User Engagement</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Functionality
              </p>
              <li>User Authentication and Authorization</li>
              <li>Data Storage and Management</li>
              <li>Real-time Communication</li>
              <li>Location-based Services</li>
              <li>Payment Gateway Integration</li>
              <li>Social Media Integration</li>
              <li>Customizable Settings and Preferences</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                User Experience
              </p>
              <li>Intuitive and User-friendly Interface</li>
              <li>Smooth Navigation and Gestures</li>
              <li>Optimized Performance and Loading Times</li>
              <li>Personalization and Customization Options</li>
              <li>Accessibility and Inclusivity</li>
              <li>Feedback Mechanisms and Support Channels</li>
              <li>Continuous Improvement and Updates</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl">
              <p className="text-2xl font-medium text-orange-600">
                Target Audience
              </p>
              <li>Mobile App Developers seeking advanced skills.</li>
              <li>
                UI/UX Designers interested in mobile app design principles.
              </li>
              <li>Product Managers overseeing mobile app projects.</li>
              <li>
                Entrepreneurs and Startups building mobile-first solutions.
              </li>
              <li>Students aspiring to enter the mobile app industry.</li>
              <li>Freelancers offering mobile app development services.</li>
              <li>Business Owners aiming to expand their digital presence.</li>
              <li>Tech Enthusiasts exploring mobile technology trends.</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div id="main" className="md:lg:xl:px-20 bg-[#00296b] mb-12">
        <div id="subdiv1" className="pt-4">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-[#f9ac13]">
              Mobile App Key Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96 h-auto"
          >
            <p className="text-5xl font-bold">What does this</p>
            <p className="text-5xl font-bold text-[#f9ac13] inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start */}
          <div id="content1" className="">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-yellow-500 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-80 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#f9ac13] text-white hover:text-white border-none"
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

export default MobileAppKeyHighlights;
