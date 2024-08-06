import React, { useState, useEffect } from "react";
import SecurityTestingKeyHighights from "./SecurityTestingKeyHighights";
import SecurityTestingCertificate from "./SecurityTestingCertificate";
import SecurityTestingCareersOutcomes from "./SecurityTestingCareersOutcomes";
import SecurityTestingAbout from "./SecurityTestingAbout";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
import SecurityTestingSyallabus from "./SecurityTestingSyallabus";
import SecurityTestingIntroduction from "./SecurityTestingIntroduction";

const SecurityTestingNavigation = () => {
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
      <nav className="flex  items-center px-4 sm:px-6 py-4">
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
                className={`text-black hover:text-green-500 transition duration-300 ${
                  currentSection === index
                    ? "text-green-500 hover:text-green-700 underline underline-offset-8"
                    : ""
                } px-2 py-1 sm:px-4 sm:py-2 rounded`}
                onClick={() => handleNextSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="">
        {currentSection === 0 && <SecurityTestingIntroduction />}
        {currentSection === 1 && <SecurityTestingKeyHighights />}
        {currentSection === 2 && <SecurityTestingCareersOutcomes />}
        {currentSection === 3 && <SecurityTestingAbout />}
        {currentSection === 4 && <SecurityTestingCertificate />}
        {currentSection === 5 && <SecurityTestingSyallabus />}
      </div>
    </>
  );
};

export default SecurityTestingNavigation;
