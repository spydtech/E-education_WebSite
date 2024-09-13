import React, { useState, useEffect } from "react";
import WordpressKeyHighlights from "./WordpressKeyHighights";
import WordpressCertificate from "./WordpressCertificate";
import WordpressCareersOutcomes from "./WordpressCareersOutcomes";
import WordpressAbout from "./WordpressAbout";
import WordpressSyllabus from "./WordpressSyallabus";
import WordpressIntroduction from "./WordpressIntroduction";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const WordpressNavigation = () => {
  const sections = [
    "Introduction",
    "Key Highlights",
    "Career Outcomes",
    "About the Program",
    "Certificate",
    "Syllabus",
  ];

  const [currentSection, setCurrentSection] = useState(0);

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

  const handleNextSection = (direction) => {
    if (direction === "next") {
      setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
    } else if (direction === "prev") {
      setCurrentSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-2 bg-[#0098f1] shadow-xl rounded-t-2xl mb-5 lg:px-28">
        {/* Previous Section Button */}
        <button
          className={`text-white ${currentSection === 0 ? "invisible" : ""}`}
          onClick={() => handleNextSection("prev")}
        >
          <FaAngleDoubleLeft size={24} />
        </button>

        {/* Section Navigation */}
        <ul className="text-md flex justify-center items-center w-full md:justify-around">
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

          {/* Show Current and Adjacent Sections on Smaller Screens */}
          <li className="max-md:hidden lg:hidden">
            <button
              className="transition duration-300 text-gray-200 rounded"
              onClick={() => setCurrentSection(currentSection - 1)}
              disabled={currentSection === 0}
            >
              {sections[currentSection - 1]}
            </button>
          </li>

          <li className="lg:hidden">
            <button
              className="transition duration-300 text-white rounded"
              onClick={() => setCurrentSection(currentSection)}
            >
              {sections[currentSection]}
            </button>
          </li>

          <li className="max-md:hidden lg:hidden">
            <button
              className="transition duration-300 text-gray-200 rounded"
              onClick={() => setCurrentSection(currentSection + 1)}
              disabled={currentSection === sections.length - 1}
            >
              {sections[currentSection + 1]}
            </button>
          </li>
        </ul>

        {/* Next Section Button */}
        <button
          className={`text-white ${
            currentSection === sections.length - 1 ? "invisible" : ""
          }`}
          onClick={() => handleNextSection("next")}
        >
          <FaAngleDoubleRight size={24} />
        </button>
      </nav>

      {/* Section Content */}
      <div className="">
        {currentSection === 0 && <WordpressIntroduction />}
        {currentSection === 1 && <WordpressKeyHighlights />}
        {currentSection === 2 && <WordpressCareersOutcomes />}
        {currentSection === 3 && <WordpressAbout />}
        {currentSection === 4 && <WordpressCertificate />}
        {currentSection === 5 && <WordpressSyllabus />}
      </div>
    </>
  );
};

export default WordpressNavigation;
