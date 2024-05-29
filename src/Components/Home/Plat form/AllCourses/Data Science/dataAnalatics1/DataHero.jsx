import React from "react";
import { IoMdShare } from "react-icons/io";
const DataHero = () => {
  return (
    <>
      {/* First Part */}
      <div className="">
        <img
          // src="https://t3.ftcdn.net/jpg/05/90/54/50/240_F_590545034_KBdVwbAy6i5kVQYht1oswK8c8D6oVabA.jpg"
          src="https://simandhareducation-files.s3.ap-south-1.amazonaws.com/img/DA-Landing-Page_Opt2.jpg"
          className="w-full object-cover md:h-[500px]"
        />
      </div>

      {/* first card */}

      <>
      <div className="flex md:flex-row justify-center items-center font-lora flex-col">
        <div>
          <div className="rounded-r-3xl p-8 z-10 md:w-[700px]">
         
            <h1 className="text-3xl font-bold mb-4 font-lora">
              <span className="text-blue-500">EonlineCourse</span>{" "}
              <span className="text-purple-700">Advanced Certificate</span>{" "}
              <span className="text-pink-500">in</span>{" "}
              <span className="text-orange-700">Data Analytics</span>{" "}
              <span className="text-blue-500">and</span>{" "}
              <span className="text-purple-700">Communication</span>
            </h1>
            <p className="mb-8 text-lg font-lora">
              Dive deep into data analytics, a multifaceted field encompassing
              data cleaning, visualization, statistical analysis, and predictive
              modeling. With a focus on practical skills and real-world
              applications, this course equips you with the tools to extract
              valuable insights from data, driving informed decision-making and
              strategic planning. Whether you're a novice or an experienced
              professional, this program empowers you to harness the power of
              data for business growth and innovation.
            </p>
            <div>
              <button className="font-lora bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4 mr-4">
               Explore Now
              </button>
             
              <p className="text-sm text-gray-700 font-lora">
                Enroll now and embark on a journey towards mastering data
                analytics.
              </p>
            </div>
          </div>
        </div>

        <div className=" h-full mb-8 rounded-r-3xl ">
          <img src="https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites/images/seo_content__1665728539142.png" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      </div>
    </>




      {/* 2nd card */}
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5 md:gap-20"
        data-aos="fade-right"
        data-aos-duration={800}
      >
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
      
      </div>

    
    </>
  );
};

export default DataHero;
