import React from "react";
// import PerformanceTestingScroller from "./PerformanceTestingScroller";

const SecurityTestingHero = () => {
  return (
    <>
      {/* First Part */}
 

      <div>
        <img
          // src="https://thumbs.dreamstime.com/b/ascending-arrow-icons-data-science-292911896.jpg?w=992"
          src="https://media.licdn.com/dms/image/D4E12AQFaTWK5tGnszg/article-cover_image-shrink_720_1280/0/1696577081709?e=2147483647&v=beta&t=jm1_WO36lQXpHX2tD9tvdLqHtQio3D1aUBqvhJeG00Y"
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
          <h1 className="text-3xl font-semibold text-[#31cb00] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Optimize Your Performance Testing
            </span>{" "}
            to Achieve Unmatched Reliability!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to rigorously test and optimize your systems,
            ensuring unparalleled performance and reliability for your
            business...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-green-300 rounded-lg md:px-8 hover:bg-green-500 group"
            >
              <span>Explore More</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/premium-vector/two-individuals-sitting-table-focused-typing-their-laptops-two-people-are-inputting-data-simple-minimalist-flat-vector-illustration_538213-53758.jpg?w=826"
            alt="Performance Testing hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default SecurityTestingHero;
