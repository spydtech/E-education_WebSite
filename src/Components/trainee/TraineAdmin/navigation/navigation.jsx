// import React, { useState } from "react";
// // import ProfileSection from "./ProfileSection";
// import ProfileSection from "../profilesection/ProfileSection";
// // import ForgotPassword from "./ForgotPassword";
// import TraineForgotPassword from "../ForgotPassword/forgotpassword";
// // import UpdatePassword from "./UpdatePassword";
// import TraineeUpdatePassword from "../UpdatePassword/updatepassword";

// const TraineeNavigation = () => {
//   const sections = ["Profile", "Forgot Password", "Update Password"];
//   const [currentSection, setCurrentSection] = useState(0);

//   const handleSectionChange = (index) => {
//     setCurrentSection(index);
//   };

//   return (
//     <>
//       <nav className="bg-blue-600 p-4 shadow-lg">
//         <div className="container mx-auto flex items-center justify-center">
//           <div className="flex space-x-4">
//             {sections.map((section, index) => (
//               <button
//                 key={index}
//                 className={`text-white hover:text-gray-200 ${
//                   currentSection === index ? "text-gray-200" : ""
//                 }`}
//                 onClick={() => handleSectionChange(index)}
//               >
//                 {section}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>
//       <div className="container mx-auto p-4">
//         {currentSection === 0 && <ProfileSection />}
//         {currentSection === 1 && <TraineForgotPassword />}
//         {currentSection === 2 && <TraineeUpdatePassword />}
//       </div>
//     </>
//   );
// };

// export default TraineeNavigation;
import React, { useState } from "react";
import ProfileSection from "../profilesection/ProfileSection";
import TraineForgotPassword from "../ForgotPassword/forgotpassword";
import TraineeUpdatePassword from "../UpdatePassword/updatepassword";

const TraineeNavigation = () => {
  const sections = ["Profile", "Forgot Password", "Update Password"];
  const [currentSection, setCurrentSection] = useState(0);

  const handleSectionChange = (index) => {
    setCurrentSection(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {" "}
      {/* Full screen centering */}
      <div>
        <nav className="flex w-full md:max-w-xl mx-auto rounded shadow">
          {" "}
          {/* Horizontal centering */}
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleSectionChange(index)}
              className={`w-full flex justify-center font-medium px-5 py-2 border ${
                currentSection === index
                  ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
              } ${index === 0 ? "rounded-l" : ""} ${
                index === sections.length - 1 ? "rounded-r" : ""
              }`}
            >
              {section}
              {section === "Trending" && (
                <svg
                  className="w-5 h-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  ></path>
                </svg>
              )}
            </button>
          ))}
        </nav>
        <div className="container mx-auto p-4">
          {currentSection === 0 && <ProfileSection />}
          {currentSection === 1 && <TraineForgotPassword />}
          {currentSection === 2 && <TraineeUpdatePassword />}
        </div>
      </div>
    </div>
  );
};

export default TraineeNavigation;