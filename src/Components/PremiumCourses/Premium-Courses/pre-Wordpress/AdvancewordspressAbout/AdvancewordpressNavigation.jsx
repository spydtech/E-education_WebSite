import React, { useState, useEffect } from "react";
import AdvancewordpressKeyHighlights from "./AdvancewordpressKeyHighights";
import AdvancewordpressCertificate from "./AdvancewordpressCertificate";
import AdvancewordpressCareersOutcomes from "./AdvancewordpressCareersOutcomes";
import AdvancewordpressAbout from "./AdvancewordpressAbout";
// import AdvancewordpressSyllabus from "./AdvancewordpressSyllabus";
import AdvancewordpressSyllabus from "./AdvancewordpressSyallabus";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
import AdvancewordpressIntroduction from "./AdvancewordpressIntroduction";
const AdvancewordpressNavigation = () => {
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
                className={`text-black hover:text-yellow-500 transition duration-300 ${
                  currentSection === index
                    ? "text-yellow-500 hover:text-yellow-700 underline underline-offset-8"
                    : ""
                } px-2 py-1 sm:px-4 sm:py-2 rounded`}
                onClick={() => handleNextSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
          <li className="mt-2 sm:mt-0">
            <button
              className="text-black text-2xl hover:text-violet-700 transition duration-300"
              onClick={() => handleNextSection("next")}
            >
              <TbPlayerTrackNextFilled />
            </button>
          </li>
        </ul>
      </nav>
      <div className=" ">
        {currentSection === 0 && <AdvancewordpressIntroduction />}
        {currentSection === 1 && <AdvancewordpressKeyHighlights />}
        {currentSection === 2 && <AdvancewordpressCareersOutcomes />}
        {currentSection === 3 && <AdvancewordpressAbout />}
        {currentSection === 4 && <AdvancewordpressCertificate />}
        {currentSection === 5 && <AdvancewordpressSyllabus />}
      </div>
    </>
  );
};

export default AdvancewordpressNavigation;
