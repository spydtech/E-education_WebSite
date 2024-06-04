// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const AutomationTestingHero = () => {
  const [courseName] = useState("Automation Testing"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* First Part */}

      <div>
        <img
          src="https://media.licdn.com/dms/image/D4D12AQFo6tCpkWUB_A/article-inline_image-shrink_1500_2232/0/1689154233524?e=1721260800&v=beta&t=GsPeYaiX8s_AkyKmLT37wn0z1nAavXOuR1DlcIZ09wg"
          className="w-full object-cover md:h-[500px]"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#7400b8] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Automate Your Testing Processes
            </span>{" "}
            to Enhance Efficiency and Accuracy!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Learn how to leverage automation tools and techniques to streamline
            your testing workflow, ensuring faster releases and higher quality
            software...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-violet-400 rounded-lg md:px-8 hover:bg-violet-600 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/premium-vector/microchip-manufacturing-illustration-concept-white-background_701961-1706.jpg?w=826"
            alt="Automation Testing hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default AutomationTestingHero;
