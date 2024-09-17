import React, { useState, useEffect } from "react";
import Cybersecurityintroduction from "./CybersecurityEssentialsintraduction";
import CybersecurityKeyHighelets from "./CybersecurityEssentialsKeyHighelets";
import Cybersecurityoutcomes from "./CybersecurityEssentialsoutcomes";
import CybersecurityAbout from "./CybersecurityEssentialsAbout";
import Certificate from "./CybersecurityEssentialscertificate";
import CybersecuritySyllabus from "./CybersecurityEssentialssyllabus";
// import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
const CybersecurityEssentialsNavigation = () => {
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
        <nav className="flex justify-between items-center p-2 bg-[#0098f1] shadow-xl rounded-t-2xl mb-5 lg:px-28 lg:py-3">
        <button
          className={` text-white ${currentSection === 0 ? "invisible" : ""}`}
          onClick={() => handleNextSection("prev")}
        >
          <FaAngleDoubleLeft size={24} />
        </button>

        <ul className="text-md flex justify-center items-center w-full md:justify-around">
          <li className=" max-md:hidden lg:hidden">
            <button
              className=" transition duration-300 text-gray-200  rounded"
              onClick={() => setCurrentSection(currentSection)}
            >
              {sections[currentSection - 1]}
            </button>
          </li>

          <li className="lg:hidden">
            <button
              className=" transition duration-300 text-white  rounded"
              onClick={() => setCurrentSection(currentSection)}
            >
              {sections[currentSection]}
            </button>
          </li>

          <li className=" max-md:hidden lg:hidden">
            <button
              className=" transition duration-300 text-gray-200   rounded"
              onClick={() => setCurrentSection(currentSection)}
            >
              {sections[currentSection + 1]}
            </button>
          </li>

          {/* Show All Sections in Large Screens */}
          {sections.map((section, index) => (
            <li key={index} className="hidden lg:block">
              <button
                className={`transition duration-300 text-white ${
                  currentSection === index ? "underline underline-offset-8" : ""
                } rounded`}
                onClick={() => setCurrentSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={` text-white ${
            currentSection === sections.length - 1 ? "invisible" : ""
          }`}
          onClick={() => handleNextSection("next")}
        >
          <FaAngleDoubleRight size={24} />
        </button>
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

export default CybersecurityEssentialsNavigation;
