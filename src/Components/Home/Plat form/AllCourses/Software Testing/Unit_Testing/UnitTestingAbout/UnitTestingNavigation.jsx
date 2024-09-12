import React, { useState, useEffect } from "react";
import UnitTestingKeyHighights from "./UnitTestingKeyHighights";
import UnitTestingCertificate from "./UnitTestingCertificate";
import UnitTestingCareersOutcomes from "./UnitTestingCareersOutcomes";
import UnitTestingAbout from "./UnitTestingAbout";
import UnitTestingSyallabus from "./UnitTestingSyallabus";
import UnitTestingIntroduction from "./UnitTestingIntroduction";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const UnitTestingNavigation = () => {
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
      setCurrentSection((prev) =>
        prev === sections.length - 1 ? 0 : prev + 1
      );
    } else if (direction === "prev") {
      setCurrentSection((prev) =>
        prev === 0 ? sections.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-2 bg-[#0098f1] shadow-xl rounded-t-2xl mb-5 lg:px-28">
        <button
          className={`text-white ${currentSection === 0 ? "invisible" : ""}`}
          onClick={() => handleNextSection("prev")}
        >
          <FaAngleDoubleLeft size={24} />
        </button>

        <ul className="text-md flex justify-center items-center w-full md:justify-around">
          <li className="max-md:hidden lg:hidden">
            <button
              className="transition duration-300 text-gray-200 rounded"
              onClick={() => setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length)}
            >
              {sections[(currentSection - 1 + sections.length) % sections.length]}
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
              onClick={() => setCurrentSection((prev) => (prev + 1) % sections.length)}
            >
              {sections[(currentSection + 1) % sections.length]}
            </button>
          </li>

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
          className={`text-white ${currentSection === sections.length - 1 ? "invisible" : ""}`}
          onClick={() => handleNextSection("next")}
        >
          <FaAngleDoubleRight size={24} />
        </button>
      </nav>

      <div>
        {currentSection === 0 && <UnitTestingIntroduction />}
        {currentSection === 1 && <UnitTestingKeyHighights />}
        {currentSection === 2 && <UnitTestingCareersOutcomes />}
        {currentSection === 3 && <UnitTestingAbout />}
        {currentSection === 4 && <UnitTestingCertificate />}
        {currentSection === 5 && <UnitTestingSyallabus />}
      </div>
    </>
  );
};

export default UnitTestingNavigation;
