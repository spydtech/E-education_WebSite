import React, { useState, useEffect } from "react";
import PerformanceTestingIntroduction from "./PerformanceTestingIntroduction";
import PerformanceTestingKeyHighights from "./PerformanceTestingKeyHighights";
import PerformanceTestingCareersOutcomes from "./PerformanceTestingCareersOutcomes";
import PerformanceTestingAbout from "./PerformanceTestingAbout";
import PerformanceTestingCertificate from "./PerformanceTestingCertificate";
import PerformanceTestingSyallabus from "./PerformanceTestingSyallabus";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa";

const PerformanceTestingNavigation = () => {
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
    setMenuOpen(false); // Close the menu when a section is selected
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex md:bg-[#0098f1] bg-white shadow-xl rounded-t-2xl px-4 sm:px-6 py-4">
        <button className="text-[#0098f1] text-2xl sm:hidden md:text-black" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="mb-56" /> : <FaBars />} 
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex px-20 sm:flex-row flex-col text-nowrap overflow-x-auto xl:lg:md:text-[22px] text-[16px] text-white font-md space-y-2 sm:space-y-0 sm:space-x-4`}
        >
          {sections.map((section, index) => (
            <li key={index} className="mt-2 text-center sm:mt-0">
              <button
                className={`md:text-white text-[#0098f1] transition duration-300 ${
                  currentSection === index
                    ? "text-white underline underline-offset-8"
                    : ""
                } px-2 py-1 sm:px-4 sm:py-2 rounded`}
                onClick={() => handleNextSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
          {/* Optional: Uncomment if you need a next section button */}
          {/* <li className="mt-2 sm:mt-0">
            <button
              className="text-white text-2xl hover:text-violet-700 transition duration-300"
              onClick={() => handleNextSection("next")}
            >
              <TbPlayerTrackNextFilled />
            </button>
          </li> */}
        </ul>
      </nav>
      <div className="px-4 sm:px-6">
        {currentSection === 0 && <PerformanceTestingIntroduction />}
        {currentSection === 1 && <PerformanceTestingKeyHighights />}
        {currentSection === 2 && <PerformanceTestingCareersOutcomes />}
        {currentSection === 3 && <PerformanceTestingAbout />}
        {currentSection === 4 && <PerformanceTestingCertificate />}
        {currentSection === 5 && <PerformanceTestingSyallabus />}
      </div>
    </>
  );
};

export default PerformanceTestingNavigation;
