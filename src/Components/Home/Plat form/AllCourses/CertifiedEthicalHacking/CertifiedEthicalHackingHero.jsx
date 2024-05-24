// import React from "react";

// const CertifiedEthicalHackingHero = () => {
//   return (
//     <>
//       <div
//         className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
//         data-aos="fade-right"
//         data-aos-duration={800}
//       >
//         <div className="pr-2 md:mb-14 py-14 md:py-0 font-lora">
//           <h1 className="text-3xl font-semibold text-violet-800 xl:text-5xl lg:text-3xl">
//             <span className="block w-full">
//               Master the Art of Ethical Hacking
//             </span>{" "}
//             and Secure Your Digital World!
//           </h1>
//           <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
//             Equipping you with cutting-edge techniques and cybersecurity
//             expertise, we stand by your side in safeguarding your digital
//             assets...
//           </p>

//           <div className="mt-4">
//             <a
//               href="#contact"
//               className="px-5 py-3 text-lg tracking-wider text-white bg-violet-500 rounded-lg md:px-8 hover:bg-violet-800 group"
//             >
//               <span>Discover More</span>{" "}
//             </a>
//           </div>
//         </div>

//         <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
//           <img
//             id="heroImg1"
//             className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
//             src="https://img.freepik.com/free-vector/anonymous-hacker-with-flat-design_23-2147880788.jpg?t=st=1716560191~exp=1716563791~hmac=a370c1417437acb9e6e973f5917275e09e5d5eb6040efedddfbad4795780fcc4&w=740"
//             alt="Awesome hero page image"
//             style={{ height: "450px", width: "700px" }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CertifiedEthicalHackingHero;

import React from "react";

const CertifiedEthicalHackingHero = () => {
  return (
    <>
      <div
        className="items-center w-10/12 grid grid-cols-1 md:grid-cols-2 mx-auto overflow-x-hidden lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 md:py-0 font-lora">
          <h1 className="text-3xl font-semibold text-violet-800 xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Master the Art of Ethical Hacking
            </span>{" "}
            and Secure Your Digital World!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Equipping you with cutting-edge techniques and cybersecurity
            expertise, we stand by your side in safeguarding your digital
            assets...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-violet-500 rounded-lg md:px-8 hover:bg-violet-800 group"
            >
              <span>Discover More</span>{" "}
            </a>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 w-full md:w-auto md:max-w-full mx-auto md:mx-0"
            src="https://img.freepik.com/free-vector/anonymous-hacker-with-flat-design_23-2147880788.jpg?t=st=1716560191~exp=1716563791~hmac=a370c1417437acb9e6e973f5917275e09e5d5eb6040efedddfbad4795780fcc4&w=740"
            alt="Awesome hero page image"
            style={{ maxHeight: "400px", width: "700px" }}
          />
        </div>
      </div>
    </>
  );
};

export default CertifiedEthicalHackingHero;
