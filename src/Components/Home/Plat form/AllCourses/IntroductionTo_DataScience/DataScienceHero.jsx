import React from "react";

const DataScienceHero = () => {
  return (
    <>
      {/* First Part */}
      <div>
        <img
          // src="https://thumbs.dreamstime.com/b/ascending-arrow-icons-data-science-292911896.jpg?w=992"
          src="https://assets-global.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg"
          className="md:lg:xl:w-screen md:lg:xl:h-screen md:lg:xl:block hidden"
        />
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#ff206e] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Unlock the Potential of Data Science
            </span>{" "}
            to Drive Innovation and Growth!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Discover how Data Science can transform raw data into actionable
            insights, empowering your business to make data-driven decisions and
            stay ahead of the competition...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-pink-500 rounded-lg md:px-8 hover:bg-pink-700 group"
            >
              <span>Learn More</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://media.istockphoto.com/id/1652231460/vector/data-science-concept-infographic-design.jpg?s=612x612&w=0&k=20&c=7H5G1Jw--NKf3NKFgQmBGpL3EDenmZ6I97c2WDuq_IE="
            alt="Data Science Introduction Image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default DataScienceHero;
