import React from "react";

const MachineLearningHero = () => {
  return (
    <>
      {/* first part */}

      <div className="">
        <img
          // src="https://t3.ftcdn.net/jpg/05/90/54/50/240_F_590545034_KBdVwbAy6i5kVQYht1oswK8c8D6oVabA.jpg"
          src="https://images.squarespace-cdn.com/content/v1/5daddb33ee92bf44231c2fef/e163d977-3fe5-42da-b959-5b5319027458/machine-learning-in-healthcare.jpg"
          className="w-full object-cover md:h-[500px]"
        />
      </div>

      <div
        className="items-center font-lora w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Unlock the Power of Machine Learning
            </span>{" "}
            for optimizing your business!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to leverage advanced algorithms and data insights, we
            are your trusted partners in driving business success...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"
            >
              <span>Explore More</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
            alt="Awesome hero page image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second part */}
    </>
  );
};

export default MachineLearningHero;
