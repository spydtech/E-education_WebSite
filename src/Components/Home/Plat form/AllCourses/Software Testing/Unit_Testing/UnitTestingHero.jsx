import React from "react";
// import BigDataScroller from "./BigDataScroller";

const UnitTestingHero = () => {
  return (
    <>
      {/* First Part */}
      <div>
        <img
          // src="https://www.extnoc.com/learn/wp-content/uploads/2022/02/Network-Security.jpg"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200514113957/What-is-Unit-Testing-and-Why-Developer-Should-Learn-It.png"
          className="md:lg:xl:w-screen md:lg:xl:h-screen md:lg:xl:block hidden"
          // style={{
          //   width: "900px",
          //   height: "600px",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   marginLeft: "120px",
          //   marginTop: "0px",
          // }}
        />
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#f9ac13] xl:text-5xl lg:text-3xl">
            <span className="block w-full">Master the Art of Unit Testing</span>{" "}
            to Ensure Software Quality!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to write effective unit tests and achieve reliable
            software, we are your trusted partners in ensuring code quality and
            robustness...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-yellow-300 rounded-lg md:px-8 hover:bg-yellow-400 group"
            >
              <span>Learn More</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/flat-safer-internet-day-background_23-2151163157.jpg?t=st=1716534608~exp=1716538208~hmac=09e4c538073b8355fd4ffcbfe01d08ff8411d5109bc8fb5320e4a51009442ee6&w=826"
            alt="Unit Testing Illustration"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default UnitTestingHero;
