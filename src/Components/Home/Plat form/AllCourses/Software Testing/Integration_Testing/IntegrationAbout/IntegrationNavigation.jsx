import React, { useState, useEffect } from "react";

import IntigrationKeyHighlights from "./IntegrationKeyHighights";
import IntigrationCertificate from "./IntegrationCertificate";
import IntigrationAbout from "./IntegrationAbout";
import CompatabilityCareersOutcomes from "./IntegrationCareersOutcomes";
import IntigrationIntroduction from "./IntegrationIntroduction";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import IntigrationSyllabus from "./IntigrationSyllabus";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
const IntigrationNavigation = () => {
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
       <nav className="flex  bg-[#0098f1] rounded-t-2xl  px-4 sm:px-6 py-4">
        <button className="text-black text-2xl sm:hidden " onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="mb-56" /> : <FaBars />}{" "}
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex px-12 sm:flex-row flex-col text-nowrap overflow-x-auto xl:lg:md:text-[22px] text-16px text-white font-md space-y-2 sm:space-y-0 sm:space-x-4`}
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
        </ul>
      </nav>
      <div className=" ">
        {currentSection === 0 && <IntigrationIntroduction />}
        {currentSection === 1 && <IntigrationKeyHighlights />}
        {currentSection === 2 && <CompatabilityCareersOutcomes />}
        {currentSection === 3 && <IntigrationAbout />}
        {currentSection === 4 && <IntigrationCertificate />}
        {currentSection === 5 && <IntigrationSyllabus />}
      </div>
    </>
  );
};

export default IntigrationNavigation;
