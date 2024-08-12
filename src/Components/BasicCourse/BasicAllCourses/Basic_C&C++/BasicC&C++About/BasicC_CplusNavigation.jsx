import React, { useState, useEffect } from "react";
import BasicC_CplusKeyHighights from "./BasicC_CplusKeyHighights";
import BasicC_CplusCertificate from "./BasicC_CplusCertificate";
import BasicC_CplusCareersOutcomes from "./BasicC_CplusCareersOutcomes";
import BasicC_CplusAbout from "./BasicC_CplusAbout";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
import BasicC_CplusSyallabus from "./BasicC_CplusSyallabus";
import BasicC_CplusIntroduction from "./BasicC_CplusIntroduction";

const BasicC_CplusNavigation = () => {
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
      <nav className="flex bg-[#0098f1] rounded-t-2xl px-4 sm:px-6 py-4 mt-4">
        <button className="text-white text-2xl sm:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex sm:flex-row flex-col text-nowrap overflow-x-auto xl:lg:md:text-[22px] text-16px text-white font-md space-y-2 sm:space-y-0 sm:space-x-4`}
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
              className="text-white text-2xl hover:text-gray-300 transition duration-300"
              onClick={() => handleNextSection("next")}
            >
              <TbPlayerTrackNextFilled />
            </button>
          </li>
        </ul>
      </nav>
      <div className="">
        {currentSection === 0 && <BasicC_CplusIntroduction />}
        {currentSection === 1 && <BasicC_CplusKeyHighights />}
        {currentSection === 2 && <BasicC_CplusCareersOutcomes />}
        {currentSection === 3 && <BasicC_CplusAbout />}
        {currentSection === 4 && <BasicC_CplusCertificate />}
        {currentSection === 5 && <BasicC_CplusSyallabus />}
      </div>
    </>
  );
};

export default BasicC_CplusNavigation;
