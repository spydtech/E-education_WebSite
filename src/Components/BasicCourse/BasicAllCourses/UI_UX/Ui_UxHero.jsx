// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const Ui_UxHero = () => {
  const [courseName] = useState("Basic UI/UX"); // Placeholder for course name
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
          src="https://www.admecindia.co.in/wp-content/uploads/2019/07/admec-internal-ui-design-future-prospect-1.jpg"
          className="w-full object-cover md:h-[500px]"
          alt="UI/UX Design"
        />
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#0070f3] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Master UI/UX Design</span> and Create
            Exceptional User Experiences!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Dive into the world of UI/UX design. Learn the principles of
            user-centered design, enhance your skills, and create visually
            stunning and user-friendly interfaces. Our resources will take you
            from basics to advanced techniques in UI/UX design.
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-blue-400 rounded-lg md:px-8 hover:bg-blue-600 group"
            >
              <span>Enroll Now</span>
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/gradient-style-ui-ux-background_52683-69621.jpg?t=st=1717074362~exp=1717077962~hmac=4be9bd2f30cf7f810a43327602359318467f522c56ffa620a83315b72296de1b&w=826"
            alt="UI/UX Design hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default Ui_UxHero;
