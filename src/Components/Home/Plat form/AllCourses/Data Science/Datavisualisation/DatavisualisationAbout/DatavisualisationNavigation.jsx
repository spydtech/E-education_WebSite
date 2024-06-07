import React, { useState, useEffect } from "react";
// import MachineLearningKeyHighights from "./MachineLearningKeyHighights";
import DatavisualisationKeyHighights from "./DatavisualisationKeyHighights";
// import MachineLearningCertificate from "./MachineLearningCertificate";
import DatavisualisationCertificate from "./DatavisualisationCertificate";
// import MachineLearningCareersOutcomes from "./MachineLearningCareersOutcomes";
import DatavisualisationOutcomes from "./DatavisualisationCareersOutcomes";
// import MachineLearningAbout from "./MachineLearningAbout";
import DatavisualisationAbout from "./DatavisualisationAbout";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
// import MachineLearningSyallabus from "./MachineLearningSyallabus";
import DatavisualisationSyallabus from "./DatavisualisationSyallabus";
// import MachineLearningIntroduction from "./MachineLearningIntroduction";
import DatavisualisationIntroduction from "./DatavisualisationIntroduction";

const DatavisualisationNavigation = () => {
  const sections = [
    "Introduction",
    "Key Highlights",
    "Career Outcomes",
    "About the Program",
    "Certificate",
    "Syllabus",
  ];
  const [currentSection, setCurrentSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

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

  const handleNextSection = (index) => {
    if (index === "next") {
      setCurrentSection((prev) =>
        prev === sections.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentSection(index);
    }
    setMenuOpen(true); // Close the menu when a section is selected
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex items-center px-4 sm:px-6 py-4 mx-0">
        <button className="text-black text-2xl sm:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="mb-56" /> : <FaBars />}{" "}
          {/* Toggle between menu and close icon */}
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex sm:flex-row flex-col items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4`}
        >
          {sections.map((section, index) => (
            <li key={index} className="mt-2 sm:mt-0">
              <button
                className={`text-black hover:text-violet-800 transition duration-300 ${
                  currentSection === index
                    ? "text-red-700 hover:text-red-700 underline underline-offset-8"
                    : ""
                } px-2 py-1 sm:px-4 sm:py-2 rounded`}
                onClick={() => handleNextSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
          {/* <li className="mt-2 sm:mt-0">
            <button
              className="text-black text-2xl hover:text-violet-700 transition duration-300"
              onClick={() => handleNextSection("next")}
            >
              <TbPlayerTrackNextFilled />
            </button>
          </li> */}
        </ul>
      </nav>
      <div className="px-4 sm:px-6">
        {currentSection === 0 && <DatavisualisationIntroduction />}
        {currentSection === 1 && <DatavisualisationKeyHighights />}
        {currentSection === 2 && <DatavisualisationOutcomes />}
        {currentSection === 3 && <DatavisualisationAbout />}
        {currentSection === 4 && <DatavisualisationCertificate />}
        {currentSection === 5 && <DatavisualisationSyallabus />}
      </div>
    </>
  );
};

export default DatavisualisationNavigation;
