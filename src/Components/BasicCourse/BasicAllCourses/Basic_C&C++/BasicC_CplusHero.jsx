import React from "react";

const BasicC_CplusHero = () => {
  return (
    <>
      {/* First Part */}
      <div>
        <img
          // src="https://apponix.com/front/images/asset/c-and-c++-interview-questions-and-answers.png"

          src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/09/c-vs-c.jpg"
          className="w-full object-cover md:h-[500px]"
        />
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#25a244] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Master C and C++ Programming</span>
            to Build Efficient Software!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Gain the skills to develop high-performance applications using C and
            C++. Our comprehensive course will guide you from basic programming
            concepts to advanced techniques, ensuring you're prepared to tackle
            complex software development challenges...
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
            src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?t=st=1717053296~exp=1717056896~hmac=964246e2f1c068275c227907b499093098f6ec91514b80b37024c73141a7b6ec&w=900"
            alt="C and C++ Development hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default BasicC_CplusHero;
