import React from "react";

const BasicJavaScriptHero = () => {
  return (
    <>
      {/* First Part */}
      <div>
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto"
          className="w-full object-cover md:h-[500px]"
        />
      </div>

      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#480ca8] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Master JavaScript Development</span>
            to Build Dynamic Websites!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empower yourself with the skills to create dynamic and interactive
            websites using JavaScript. Our comprehensive course will guide you
            from the basics to advanced concepts, ensuring you're ready to build
            robust web applications...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-violet-400 rounded-lg md:px-8 hover:bg-violet-700 group"
            >
              <span>Explore More</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-3454.jpg?t=st=1717044017~exp=1717047617~hmac=eb0d4417ebe9ffc2282521e5aab57d34a0d3fbaf7c9def6f3cab289e10acb29d&w=740"
            alt="JavaScript Development hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default BasicJavaScriptHero;