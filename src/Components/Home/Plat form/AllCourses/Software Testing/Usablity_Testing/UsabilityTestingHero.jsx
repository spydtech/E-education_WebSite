import React from "react";
// import UsabilityTestingScroller from "./UsabilityTestingScroller";

const UsabilityTestingHero = () => {
  return (
    <>
      {/* First Part */}
      <div>
        <img
          src="https://mouseux.com/wp-content/uploads/2022/10/Yellow-Modern-Creative-Corporate-Social-Media-Strategy-Presentation-46-.png"
          className="md:lg:xl:w-screen md:lg:xl:h-screen md:lg:xl:block hidden"
          alt="Usability Testing background"
        />
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#00509d] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Elevate Your Usability Testing</span>{" "}
            to Create Exceptional User Experiences!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to rigorously test and refine your user interfaces,
            ensuring intuitive and seamless experiences for your users...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-blue-400 rounded-lg md:px-8 hover:bg-blue-500 group"
            >
              <span>Explore More</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=740"
            alt="Usability Testing hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default UsabilityTestingHero;