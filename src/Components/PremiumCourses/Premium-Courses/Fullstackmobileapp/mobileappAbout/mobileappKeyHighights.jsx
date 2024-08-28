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
          <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Overview</p>
            <li>Introduction to the mobile app and its significance.</li>
            <li>Understanding modern mobile app development practices.</li>
            <li>Exploring latest mobile app development frameworks and tools.</li>
            <li>Utilizing mobile app development in various domains.</li>
            <li>Integration with backend services and APIs.</li>
            <li>Introduction to cross-platform development tools.</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Key Features</p>
            <li>Responsive UI Design</li>
            <li>Offline Functionality with Data Sync</li>
            <li>Push Notifications and Alerts</li>
            <li>Integration with Device Features (Camera, GPS, etc.)</li>
            <li>Security Measures and Data Encryption</li>
            <li>Scalability and Performance Optimization</li>
            <li>Analytics and User Engagement</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Functionality</p>
            <li>User Authentication and Authorization</li>
            <li>Data Storage and Management</li>
            <li>Real-time Communication</li>
            <li>Location-based Services</li>
            <li>Payment Gateway Integration</li>
            <li>Social Media Integration</li>
            <li>Customizable Settings and Preferences</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">User Experience</p>
            <li>Intuitive and User-friendly Interface</li>
            <li>Smooth Navigation and Gestures</li>
            <li>Optimized Performance and Loading Times</li>
            <li>Personalization and Customization Options</li>
            <li>Accessibility and Inclusivity</li>
            <li>Feedback Mechanisms and Support Channels</li>
            <li>Continuous Improvement and Updates</li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-[#f6ac14] py-4">Target Audience</p>
            <li>Mobile App Developers seeking advanced skills.</li>
            <li>UI/UX Designers interested in mobile app design principles.</li>
            <li>Product Managers overseeing mobile app projects.</li>
            <li>Entrepreneurs and Startups building mobile-first solutions.</li>
            <li>Students aspiring to enter the mobile app industry.</li>
            <li>Freelancers offering mobile app development services.</li>
            <li>Business Owners aiming to expand their digital presence.</li>
            <li>Tech Enthusiasts exploring mobile technology trends.</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-10 md:px-20 mb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-center">
        <div className="w-auto h-auto md:lg:w-[500px] md:lg:h-[420px] mt-10 md:lg:pl-10 pl-0 text-xl">
          {renderContent()}
        </div>
        <div className="md:lg:pl-20 pl-0">
          <div className="pt-4">
            <p className="font-bold inline-flex  underline-offset-2 underline text-xl  text-[#f6ac14]">
              Mobile App Key Highlights
            </p>
          </div>
          <div className="pt-4 ">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`p-5 text-center hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-[210px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#0098f1] text-white border-none"
                    : ""
                }`}
              >
                <p className="text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppKeyHighlights;
