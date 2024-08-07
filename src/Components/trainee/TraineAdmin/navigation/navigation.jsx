import React, { useState } from "react";
import ProfileSection from "../profilesection/ProfileSection";
import TraineForgotPassword from "../ForgotPassword/forgotpassword";
import TraineeUpdatePassword from "../UpdatePassword/updatepassword";

const TraineeNavigation = () => {
  const sections = ["Profile", "Update Password"];
  const [currentSection, setCurrentSection] = useState(0);

  const handleSectionChange = (index) => {
    setCurrentSection(index);
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen  mt-4">
        <div className="flex justify-center  w-auto">
          <nav className="flex flex-col sm:flex-row w-full sm:w-auto max-w-full md:max-w-xl   shadow-lg  overflow-visible">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => handleSectionChange(index)}
                className={`flex-1  sm:flex-none w-56 flex justify-center items-center font-medium  py-4 transition-colors duration-300 ${
                  currentSection === index
                    ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-800 "
                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                } ${
                  index === 0 ? "rounded-t sm:rounded-l sm:rounded-t-none" : ""
                } ${
                  index === sections.length - 1
                    ? "rounded-b sm:rounded-r sm:rounded-b-none"
                    : ""
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
        <div className="container mx-auto p-4 mt-4 bg-gray-200 shadow-lg rounded-lg">
          {currentSection === 0 && <ProfileSection />}
          {/* {currentSection === 1 && <TraineForgotPassword />} */}
          {currentSection === 1 && <TraineeUpdatePassword />}
        </div>
      </div>
    </>
  );
};

export default TraineeNavigation;