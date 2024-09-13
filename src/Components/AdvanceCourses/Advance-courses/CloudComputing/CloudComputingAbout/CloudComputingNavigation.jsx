import React, { useState, useEffect } from "react";
import CloudComputingKeyHighights from "./CloudComputingKeyHighights";
import CloudComputingCertificate from "./CloudComputingCertificate";
import CloudComputingCareersOutcomes from "./CloudComputingCareersOutcomes";
import CloudComputingAbout from "./CloudComputingAbout";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
import CloudComputingSyallabus from "./CloudComputingSyallabus";
import CloudComputingIntroduction from "./CloudComputingIntroduction";

const CloudComputingNavigation = () => {
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
      <nav className="relative flex bg-[#0098f1] rounded-t-2xl px-4 sm:px-6 lg:py-4 py-6 mt-4 m-4">
        <button
          className="text-black text-2xl lg:hidden absolute top-4 left-4"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex px-12 md:pl-56 lg:px-12 lg:flex-row flex-col text-nowrap overflow-x-auto xl:lg:md:text-[22px] text-[16px] text-white font-md space-y-2 lg:space-y-0 lg:space-x-4`}
        >
          {sections.map((section, index) => (
            <li key={index} className="mt-2 text-center sm:mt-0">
              <button
                className={`text-white transition duration-300 ${
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
          <li className="mt-2 sm:mt-0 flex items-center justify-center">
            <button
              className="text-white text-2xl hover:text-violet-700 transition duration-300"
              onClick={() => handleNextSection("next")}
            >
              <TbPlayerTrackNextFilled />
            </button>
          </li>
        </ul>
      </nav>
      <div>
        {currentSection === 0 && <CloudComputingIntroduction />}
        {currentSection === 1 && <CloudComputingKeyHighights />}
        {currentSection === 2 && <CloudComputingCareersOutcomes />}
        {currentSection === 3 && <CloudComputingAbout />}
        {currentSection === 4 && <CloudComputingCertificate />}
        {currentSection === 5 && <CloudComputingSyallabus />}
      </div>
    </>
  );
};

export default CloudComputingNavigation;
