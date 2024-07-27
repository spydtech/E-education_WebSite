// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const CloudComputingHero = () => {
  const [courseName] = useState("Cloud with AWS"); // Placeholder for course name
  const [coursePrice] = useState(34999);

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
          // src="https://media.licdn.com/dms/image/D5612AQGVaF1lK4mV-Q/article-cover_image-shrink_720_1280/0/1681193711231?e=2147483647&v=beta&t=1ZBlS59zaFVhdt5uL-vJvg6p21J8Wg5FHDA3dT4eOuo"
          src="https://cdn.wallpapersafari.com/16/90/ZAQ7sP.png"
          className="w-full object-cover md:h-[500px]"
          alt="Cloud Computing with AWS"
        />
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font md:py-0">
          <h1 className="text-3xl font-semibold text-[#072ac8] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Master Cloud Computing</span> with
            AWS!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Learn how to leverage the power of Amazon Web Services to build
            scalable, reliable, and secure cloud solutions. Our comprehensive
            course will guide you through the essential services and best
            practices for cloud computing with AWS...
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
            src="https://img.freepik.com/premium-vector/flat-concept-isometric-illustration-web-server-cloud-security_18660-3186.jpg?w=740"
            alt="Cloud Computing with AWS"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default CloudComputingHero;
