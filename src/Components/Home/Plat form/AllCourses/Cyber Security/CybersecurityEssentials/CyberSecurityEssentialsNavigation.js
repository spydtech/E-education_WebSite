import React, { useState, useEffect } from "react";
import Cybersecurityintroduction from "./CybersecurityEssentialsintraduction";
import CybersecurityKeyHighelets from "./CybersecurityEssentialsKeyHighelets";
import Cybersecurityoutcomes from "./CybersecurityEssentialsoutcomes";
import CybersecurityAbout from "./CybersecurityEssentialsAbout";
import Certificate from "./CybersecurityEssentialscertificate";
import CybersecuritySyllabus from "./CybersecurityEssentialssyllabus";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
const CybersecurityNavigation = () => {
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
                className={`text-black hover:text-violet-500 transition duration-300 ${
                  currentSection === index
                    ? "text-violet-500 hover:text-violet-600 underline underline-offset-8"
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
      <div>
        {" "}
        {currentSection === 0 && <Cybersecurityintroduction />}
        {currentSection === 1 && <CybersecurityKeyHighelets />}
        {currentSection === 2 && <Cybersecurityoutcomes />}
        {currentSection === 3 && <CybersecurityAbout />}
        {currentSection === 4 && <Certificate />}
        {currentSection === 5 && <CybersecuritySyllabus />}
      </div>
    </>
  );
};

export default CybersecurityNavigation;
