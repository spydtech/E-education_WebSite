import React from "react";

const DatavisualisationHero = () => {
  // return (
  //   <>
  //     {/* First part */}
  //     <div className="w-full flex flex-col items-center py-16 px-4 md:px-10 lg:px-24 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
  //       {/* <div className="max-w-full mx-auto">
  //         <img
  //           id="heroImg1"
  //           className="transition-all duration-300 ease-in-out hover:scale-105 w-full max-w-full rounded-lg shadow-lg"
  //           alt="Awesome hero page image"
  //           src="https://media.istockphoto.com/id/947667368/video/motion-infographic-hud-colorful-infographics-interface-with-alpha-channel.jpg?s=640x640&k=20&c=DkiArZn2wrkfqCoII7kOPvYGEdU4LycuGFGkWPR_EyY="
  //         />
  //       </div> */}
  //       <div>
  //         <img
  //           // src="https://t3.ftcdn.net/jpg/05/90/54/50/240_F_590545034_KBdVwbAy6i5kVQYht1oswK8c8D6oVabA.jpg"
  //           src="https://media.istockphoto.com/id/947667368/video/motion-infographic-hud-colorful-infographics-interface-with-alpha-channel.jpg?s=640x640&k=20&c=DkiArZn2wrkfqCoII7kOPvYGEdU4LycuGFGkWPR_EyY="
  //           className="md:lg:xl:w-screen md:lg:xl:h-screen md:lg:xl:block hidden"
  //         />
  //       </div>
  //       <div className="mt-8 text-center lg:text-left max-w-2xl">
  //         <h1 className="text-4xl font-bold font-lora text-blue-900 lg:text-5xl xl:text-6xl">
  //           <span className="block w-full">Data Visualization</span> for
  //           <span className="text-purple-700"> optimizing your business!</span>
  //         </h1>
  //         <p className="py-4 text-lg text-white md:py-6 xl:py-8">
  //           Empowering you to leverage advanced visualizations and data
  //           insights, we are your trusted partners in driving business success.
  //           Our state-of-the-art data visualization tools transform complex
  //           datasets into intuitive, interactive visual narratives. By making
  //           data more accessible and understandable, we help you uncover hidden
  //           patterns, trends, and correlations that can inform strategic
  //           decisions. Whether you're looking to optimize operations, enhance
  //           customer experiences, or identify new market opportunities, our
  //           solutions empower you to make data-driven decisions with confidence.
  //         </p>

  //         <div className="mt-6">
  //           <a
  //             href="#contact"
  //             className="inline-block px-8 py-4 text-lg font-medium tracking-wider text-white bg-purple-600 rounded-lg md:px-10 hover:bg-purple-700 shadow-md transition-transform transform hover:-translate-y-1"
  //           >
  //             <span>Explore More</span>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <>
      {/* First Part */}
      <div>
        <img
          // src="https://t3.ftcdn.net/jpg/05/90/54/50/240_F_590545034_KBdVwbAy6i5kVQYht1oswK8c8D6oVabA.jpg"
          src="https://media.istockphoto.com/id/947667368/video/motion-infographic-hud-colorful-infographics-interface-with-alpha-channel.jpg?s=640x640&k=20&c=DkiArZn2wrkfqCoII7kOPvYGEdU4LycuGFGkWPR_EyY="
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
              Unlock the Potential of Data Visualisation
            </span>{" "}
            to Drive Innovation and Growth!
          </h1>
          <p className="py-4 text-lg text-gray-500 md:py-6 2xl:py-8 2xl:pr-5">
            Explore the power of data visualization in transforming complex
            datasets into intuitive visual narratives. Our data visualization
            solutions empower your business to uncover hidden patterns, trends,
            and correlations, enabling data-driven decisions that drive success
            and keep you ahead of the competition.
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
            alt="Data Science Introduction Image"
            src="https://img.freepik.com/premium-vector/business-vector-elements-data-visualization-infographics-colorful-chart-design_412608-2041.jpg?w=1060"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default DatavisualisationHero;
