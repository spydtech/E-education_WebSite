import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ERPHero = () => {
  const [courseName] = useState("Enterprise Resource Planning"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the course details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* First Part */}

      <div>
        <img
          src="https://logosoft.com.tr/uploads/files/23-11-2022/e4056be7.jpg"
          className="w-full object-cover md:h-[500px]"
          alt="Enterprise Resource Planning"
        />
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font md:py-0">
          <h1 className="text-3xl font-semibold text-[#072ac8] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Master Enterprise Resource Planning
            </span>
            with Our Comprehensive Course!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Learn how to optimize your business operations with our detailed ERP
            course. From implementation strategies to core modules, gain the
            skills needed to successfully manage and integrate various business
            processes using ERP systems.
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-blue-400 rounded-lg md:px-8 hover:bg-blue-600 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/premium-vector/erp-enterprise-resource-planning-concept-with-big-word-text-team-people-with-modern-flat-style-vector_65709-339.jpg?w=996"
            alt="Enterprise Resource Planning"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default ERPHero;
