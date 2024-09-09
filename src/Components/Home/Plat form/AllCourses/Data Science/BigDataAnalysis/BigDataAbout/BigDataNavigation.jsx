import React, { useState, useEffect } from "react";
import BigDataKeyHighights from "./BigDataKeyHighights";
import BigDataCertificate from "./BigDataCertificate";
import BigDataCareersOutcomes from "./BigDataCareersOutcomes";
import BigDataAbout from "./BigDataAbout";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
import BigDataSyallabus from "./BigDataSyallabus";
import BigDataIntroduction from "./BigDataIntroduction";

const BigDataNavigation = () => {
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
       <nav className="flex justify-center items-center bg-[#0098F1] rounded-t-2xl px-4 sm:px-6 py-4 ml-5 mr-5">
        <button className="text-black text-2xl sm:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />} 
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex flex-row text-nowrap overflow-x-auto xl:lg:md:text-[22px] text-[16px] text-[#0098f1] font-md space-y-2 sm:space-y-0 sm:space-x-4 md:ml-12 justify-center items-center`}
          style={{ width: '100%', padding: 0, margin: 0 }}
        >
          {sections.map((section, index) => (
            <li key={index} className="text-center">
              <button
                className={`transition duration-300 px-2 py-1 sm:px-4 sm:py-2 rounded ${
                  currentSection === index
                    ? "text-white opacity-100  underline underline-offset-8"
                    : "text-white opacity-50 hover:opacity-100"
                }`}
                onClick={() => handleNextSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className=" ">
        {currentSection === 0 && <BigDataIntroduction />}
        {currentSection === 1 && <BigDataKeyHighights />}
        {currentSection === 2 && <BigDataCareersOutcomes />}
        {currentSection === 3 && <BigDataAbout />}
        {currentSection === 4 && <BigDataCertificate />}
        {currentSection === 5 && <BigDataSyallabus />}
      </div>
    </>
  );
};

export default BigDataNavigation;
