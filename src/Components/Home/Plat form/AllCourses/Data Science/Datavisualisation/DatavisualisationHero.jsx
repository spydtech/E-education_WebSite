// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const DatavisualisationHero = () => {
  const [courseName] = useState("Data Visualization"); // Placeholder for course name
  const [coursePrice] = useState(199);
  const navigate = useNavigate();

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* First Part */}
      <div className="">
        <img
          // src="https://t3.ftcdn.net/jpg/05/90/54/50/240_F_590545034_KBdVwbAy6i5kVQYht1oswK8c8D6oVabA.jpg"
          src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_04_Understanding-Break-Statement-in-C-35.jpg"
          className="w-full object-cover md:h-[500px]"
        />
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5 md:gap-24"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#ff206e] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Unlock the Potential of Data Visualisation
            </span>{" "}
            to Drive Innovation and Growth!
          </h1>
          <p className="py-4 text-lg text-gray-500 md:py-6 2xl:py-8 2xl:pr-5">
            Explore the power of data visualization in transforming complex
            datasets into intuitive visual narratives. Our data visualization
            solutions empower your business to uncover hidden patterns, trends,
            and correlations, enabling data-driven decisions that drive success
            and keep you ahead of the competition.
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-pink-500 rounded-lg md:px-8 hover:bg-pink-700 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            alt="Data Science Introduction Image"
            src="https://img.freepik.com/premium-vector/business-vector-elements-data-visualization-infographics-colorful-chart-design_412608-2041.jpg?w=1060"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default DatavisualisationHero;
