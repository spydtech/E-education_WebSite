import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompatabilityHero = () => {
  const [courseName] = useState("Compatability Testing"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* First Part 
      <div className="relative">
        <img
          src="https://www.perfomatix.com/wp-content/uploads/2022/07/Perfomatix-blog-featured-image-Compatibility-Testing-Everything-You-Need-to-Know-About.png"
          className="w-full object-cover md:h-[500px]"
          alt="Compatability Testing Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      </div>*/}
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="w-auto h-auto pr-10 md:mb-14 py-14 font md:py-0 mx-auto">
          <h1 className="text-lg font-semibold text-[#f6ac14] xl:text-2xl lg:text-xl">
            <span className="block w-full">
              Master the Art of Compatability Testing
            </span>{" "}
            to Ensure Software Quality!
          </h1>
          <p className="py-4 md:lg:xl:2xl:text-[24px] text-[20px] text-[#101828] md:py-6 leading-10">
            Empowering you to write effective unit tests and achieve reliable
            software, we are your trusted partners in ensuring code quality and
            robustness...
          </p>

          <div className="mt-14 lg:md:w-[250px] lg:md:h-[70px] w-auto h-auto justify-center items-center">
            <button
              onClick={handleEnroll}
              className="px-5 md:lg:w-full w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="pb-10 lg:md:w-[400px] lg:md:h-[380px] mx-auto w-auto h-auto overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="rounded-full lg:h-full object-cover lg:w-full sm:mx-auto sm:w-4/6 sm:h-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/premium-photo/man-working-laptop-restaurant-with-word-code-screen_1152376-1777.jpg?w=740"
            alt="Performance Testing hero image"
            width={488}
            height={488}
            style={{ Height: "400px", width: "700px" }}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default CompatabilityHero;
