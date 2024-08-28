import React, { useState, useEffect } from "react";
import BasicJavaKeyHighights from "./BasicJavaKeyHighights";
import BasicJavaCertificate from "./BasicJavaCertificate";
import BasicJavaCareersOutcomes from "./BasicJavaCareersOutcomes";
import BasicJavaAbout from "./BasicJavaAbout";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
import BasicJavaSyallabus from "./BasicJavaSyallabus";
import BasicJavaIntroduction from "./BasicJavaIntroduction";

const BasicJavaNavigation = () => {
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
      <nav className="relative flex bg-[#0098f1] rounded-t-2xl px-4 sm:px-6  lg:py-4 py-8 mt-4 m-4">
        <button
          className="text-black text-2xl lg:hidden absolute top-4 left-4"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex px-16 md:pl-56 lg:px-12 lg:flex-row flex-col text-nowrap overflow-x-auto xl:lg:md:text-[22px] text-[16px] text-white font-md space-y-2 lg:space-y-0 lg:space-x-4`}
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
      <div>
        {currentSection === 0 && <BasicJavaIntroduction />}
        {currentSection === 1 && <BasicJavaKeyHighights />}
        {currentSection === 2 && <BasicJavaCareersOutcomes />}
        {currentSection === 3 && <BasicJavaAbout />}
        {currentSection === 4 && <BasicJavaCertificate />}
        {currentSection === 5 && <BasicJavaSyallabus />}
      </div>
    </>
  );
};

export default BasicJavaNavigation;
