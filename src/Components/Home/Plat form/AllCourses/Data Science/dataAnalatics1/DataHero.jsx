import React from "react";

const DataHero = () => {
  return (
    <>
      {/* First Part */}
      <div>
        <img
          src="https://media.licdn.com/dms/image/D5612AQEP2Vet_G0V2Q/article-cover_image-shrink_720_1280/0/1695469845723?e=2147483647&v=beta&t=H-5CGkubpBhhZ0vtTZAL5dHdNH_Zq22yT8YQT-rXlcE"
          className="md:lg:xl:w-screen md:lg:xl:h-screen md:lg:xl:block hidden"
        />
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#30c5ff] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Transform Your Data into Insights
            </span>{" "}
            with Cutting-Edge Analytics!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Harness the power of data analytics to drive informed decisions and
            strategic growth. Elevate your business intelligence with advanced
            analytics techniques and tools...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-sky-300 rounded-lg md:px-8 hover:bg-sky-500 group"
            >
              <span>Explore More</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?t=st=1716817959~exp=1716821559~hmac=fb896688a844be5e4acc6e98d9d0e9d4790abf0ddce1791d5a0f725f1886a900&w=826"
            alt="Data Analytics hero image"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default DataHero;
