import React from "react";

const AcceptanceTestingHero = () => {
  return (
    <>
    
        {/* First Part */}
        <div>
        <img
          src="https://assets-global.website-files.com/6470768de8327f36a7ae11a5/64e5de2679a0e1c704747ce6_User%2520acceptance%2520testing%2520featured%2520image.png"
          className="w-full object-cover md:h-[500px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#31cb00] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Achieve Seamless Acceptance Testing
            </span>{" "}
            for Your Software Projects!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empower your team with efficient acceptance testing procedures,
            ensuring your software meets stakeholder requirements and
            expectations...
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
            alt="Acceptance Testing hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default AcceptanceTestingHero;