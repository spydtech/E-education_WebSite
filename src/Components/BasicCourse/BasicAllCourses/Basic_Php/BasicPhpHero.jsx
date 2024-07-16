// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const BasicPhpHero = () => {
  const [courseName] = useState("Basic Php"); // Placeholder for course name
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
          // src="https://thumbs.dreamstime.com/b/ascending-arrow-icons-data-science-292911896.jpg?w=992"
          src="https://stimulusupdate.net/wp-content/uploads/2022/09/php-1.png"
          className="w-full object-cover md:h-[500px]"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font md:py-0">
          <h1 className="text-3xl font-semibold text-[#31cb00] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Master PHP Development</span> to
            Build Dynamic Websites!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empower yourself with the skills to create dynamic and interactive
            websites using PHP. Our comprehensive course will guide you from the
            basics to advanced concepts, ensuring you're ready to build robust
            web applications...
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-green-300 rounded-lg md:px-8 hover:bg-green-500 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/premium-vector/software-development-concept-with-people-scene-flat-cartoon-design-man-working-with-php-language-coding-screens-programming-creates-products-vector-illustration-visual-story-web_9209-9498.jpg?w=826"
            alt="PHP Development hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default BasicPhpHero;
