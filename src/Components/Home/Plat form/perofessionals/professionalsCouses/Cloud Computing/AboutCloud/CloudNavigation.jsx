// import React, { useState, useEffect } from "react";
// import { TbPlayerTrackNextFilled } from "react-icons/tb";
// import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
// import CloudAbout from "./CloudAbout";
// import CloudIntroduction from "./CloudIntroduction";
// import CloudCareersOutcomes from "./CloudCareersOutcomes";
// import CloudKeyHighights from "./CloudKeyHighights";
// import CloudSyallabus from "./CloudSyallabus";
// import CloudCertificate from "./CloudCertificate";
// const CloudNavigation = () => {
//   const sections = [
//     "Introduction",
//     "Key Highlights",
//     "Career Outcomes",
//     "About the Program",
//     "Certificate",
//     "Syllabus",
//   ];
//   const [currentSection, setCurrentSection] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

//   useEffect(() => {
//     const sectionId = sections[currentSection];
//     const sectionElement = document.getElementById(sectionId);
//     if (sectionElement) {
//       sectionElement.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "start",
//       });
//     }
//   }, [currentSection, sections]);

//   const handleNextSection = (index) => {
//     if (index === "next") {
//       setCurrentSection((prev) =>
//         prev === sections.length - 1 ? 0 : prev + 1
//       );
//     } else {
//       setCurrentSection(index);
//     }
//     setMenuOpen(true); // Close the menu when a section is selected
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <>
//       <nav className="flex  items-center px-4 sm:px-6 py-4">
//         <button className="text-black text-2xl sm:hidden" onClick={toggleMenu}>
//           {menuOpen ? <FaTimes className="mb-56" /> : <FaBars />}{" "}
//           {/* Toggle between menu and close icon */}
//         </button>
//         <ul
//           className={`${
//             menuOpen ? "block" : "hidden"
//           } sm:flex sm:flex-row flex-col items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4`}
//         >
//           {sections.map((section, index) => (
//             <li key={index} className="mt-2 sm:mt-0">
//               <button
//                 className={`text-black hover:text-yellow-500 transition duration-300 ${
//                   currentSection === index
//                     ? "text-yellow-500 hover:text-yellow-700 underline underline-offset-8"
//                     : ""
//                 } px-2 py-1 sm:px-4 sm:py-2 rounded`}
//                 onClick={() => handleNextSection(index)}
//               >
//                 {section}
//               </button>
//             </li>
//           ))}
//           <li className="mt-2 sm:mt-0">
//             <button
//               className="text-black text-2xl hover:text-violet-700 transition duration-300"
//               onClick={() => handleNextSection("next")}
//             >
//               <TbPlayerTrackNextFilled />
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div className=" ">
//         {currentSection === 0 && <CloudIntroduction />}
//         {currentSection === 1 && <CloudKeyHighights />}
//         {currentSection === 2 && <CloudCareersOutcomes />}
//         {currentSection === 3 && <CloudAbout />}
//         {currentSection === 4 && <CloudCertificate />}
//         {currentSection === 5 && <CloudSyallabus />}
//       </div>
//     </>
//   );
// };

// export default CloudNavigation;

import React, { useState, useEffect } from "react";
import CloudAbout from "./CloudAbout";
import CloudIntroduction from "./CloudIntroduction";
import CloudCareersOutcomes from "./CloudCareersOutcomes";
import CloudKeyHighights from "./CloudKeyHighights";
import CloudSyallabus from "./CloudSyallabus";
import CloudCertificate from "./CloudCertificate";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const CloudNavigation = () => {
  const sections = [
    "Introduction",
    "Key Highlights",
    "Career Outcomes",
    "About the Program",
    "Certificate",
    "Syllabus",
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sectionId = sections[currentSection];
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [currentSection, sections]);

  const handleNextSection = (direction) => {
    if (direction === "next") {
      setCurrentSection((prev) =>
        prev === sections.length - 1 ? 0 : prev + 1
      );
    } else if (direction === "prev") {
      setCurrentSection((prev) =>
        prev === 0 ? sections.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-2 bg-[#0098f1] shadow-xl rounded-t-2xl mb-5 lg:px-28 lg:py-3">
        <button
          className={` text-white ${currentSection === 0 ? "invisible" : ""}`}
          onClick={() => handleNextSection("prev")}
        >
          <FaAngleDoubleLeft size={24} />
        </button>

        <ul className="text-md flex justify-center items-center w-full md:justify-around">
          <li className=" max-md:hidden lg:hidden">
            <button
              className=" transition duration-300 text-gray-200  rounded"
              onClick={() => setCurrentSection(currentSection)}
            >
              {sections[currentSection - 1]}
            </button>
          </li>

          <li className="lg:hidden">
            <button
              className=" transition duration-300 text-white  rounded"
              onClick={() => setCurrentSection(currentSection)}
            >
              {sections[currentSection]}
            </button>
          </li>

          <li className=" max-md:hidden lg:hidden">
            <button
              className=" transition duration-300 text-gray-200   rounded"
              onClick={() => setCurrentSection(currentSection)}
            >
              {sections[currentSection + 1]}
            </button>
          </li>

          {/* Show All Sections in Large Screens */}
          {sections.map((section, index) => (
            <li key={index} className="hidden lg:block">
              <button
                className={`transition duration-300 text-white ${
                  currentSection === index ? "underline underline-offset-8" : ""
                } rounded`}
                onClick={() => setCurrentSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={` text-white ${
            currentSection === sections.length - 1 ? "invisible" : ""
          }`}
          onClick={() => handleNextSection("next")}
        >
          <FaAngleDoubleRight size={24} />
        </button>
      </nav>
      <div className=" ">
        {currentSection === 0 && <CloudIntroduction />}
        {currentSection === 1 && <CloudKeyHighights />}
        {currentSection === 2 && <CloudCareersOutcomes />}
        {currentSection === 3 && <CloudAbout />}
        {currentSection === 4 && <CloudCertificate />}
        {currentSection === 5 && <CloudSyallabus />}
      </div>
    </>
  );
};

export default CloudNavigation;
