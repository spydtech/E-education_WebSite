// // import React from "react";
// // import IMG1 from "../../../assets/E- education logo .png";
// // import IMG from "../../../assets/Platform/Ai.jpg";
// // import { Link } from "react-router-dom";

// // function Certified() {
// //   const [expandedIndex, setExpandedIndex] = React.useState(null);

// //   // Function to handle card expansion
// //   function expandCard(index) {
// //     setExpandedIndex(null); // Always set expandedIndex to null to prevent expansion
// //   }

// //   // Array of image URLs
// //   const imageUrls = [
// //     "https://miro.medium.com/v2/resize:fit:800/1*WHoAzsTbRrz4HMTdeSEa8w.png",
// //     IMG1,
// //     "https://www.shutterstock.com/image-photo/businessman-holding-showing-best-quality-600nw-2104451759.jpg",
// //   ];

// //   return (
// //     <div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-y-16 place-items-center bg-white py-8 font">
// //         {[1, 2, 3].map((index) => (
// //           <div
// //             key={index}
// //             className={`relative flex border-2 border-[#0ea5e9] flex-col rounded-xl   bg-clip-border text-gray-700 shadow-md transition-all w-80 hover:scale-110`}
// //           >
// //             <div className="relative mx-4 -mt-10 h-44 overflow-hidden  bg-gray-200 rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40">
// //               {/* Dummy image */}
// //               <img
// //                 src={imageUrls[index - 1]}
// //                 alt={`Card ${index}`}
// //                 className="w-full h-full bg-[#006d77] "
// //               />
// //             </div>
// //             <div className="p-6">
// //               <h5 className="mb-2 block font text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased ">
// //                 {index === 1 && "Get Started Learning Quickly With E-education"}
// //                 {index === 2 && "Enhance Your Professional Skills With E-education"}
// //                 {index === 3 && "Get Professionally Certified With E-education Courses"}
// //               </h5>
// //             </div>
// //             <div className="p-6 pt-0">
// //               <Link to="/features">
// //               {/* <Link to="/pricing"> */}
// //                 <button
// //                   onClick={() => expandCard(index)}
// //                   data-ripple-light="true"
// //                   type="button"
// //                   className=" font select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
// //                 >
// //                   Enroll Now
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <style jsx>
// //         {`
// //           /* Add any custom styles here */
// //         `}
// //       </style>
// //     </div>
// //   );
// // }

// // export default Certified;

import React from "react";
import { MdImportantDevices } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { IoWoman } from "react-icons/io5";
import { AuditOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

function Certified() {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  // Function to handle card expansion
  function expandCard(index) {
    setExpandedIndex(null); // Always set expandedIndex to null to prevent expansion
  }

  // Array of image URLs

  return (
    <div className="flex justify-center items-center">
      <div className="hover:bg-white mr-12 w-[350px] h-[250px] shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 bg-blue-600 group">
        <div className="flex items-start justify-start mb-4">
          <MdImportantDevices className="h-[60px] w-[60px] bg-white text-[#0098F1] group-hover:text-white group-hover:bg-[#0098F1]  rounded-full p-2 transition-colors" />
        </div>
        <h1 className=" text-white group-hover:text-[#0098F1] text-xl font-semibold mb-2">
          Get Started Learning Quickly with E-education
        </h1>
        <p className="flex items-center text-white group-hover:text-[#0098F1]  text-lg font-medium">
        <Link to="/features">
          <span>Enroll Now</span>
          </Link>
          <FaGreaterThan className="ml-2" />
        </p>
      </div>

      <div className="bg-white w-[350px] mr-12 h-[250px] shadow-lg rounded-lg p-6 transform transition-transform group-:scale-105 hover:bg-blue-600 group">
        <div className="flex items-start justify-start mb-4">
          <IoWoman className="h-[60px] w-[60px] group-hover:text-[#0098F1] bg-[#0098F1] group-hover:bg-white text-white rounded-full p-2 transition-colors" />
        </div>
        <h1 className="text-[#0098F1] group-hover:text-white text-xl font-semibold mb-2">
          Get Started Learning Quickly with E-education
        </h1>
        <p className="flex items-center text-[#0098F1] group-hover:text-white text-lg font-medium">
        <Link to="/features">
          <span>Enroll Now</span>
          </Link>
          <FaGreaterThan className="ml-2" />
        </p>
      </div>
      <div className="bg-white w-[350px] h-[250px] shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:bg-blue-600 group">
        <div className="flex items-start justify-start mb-4">
          <AuditOutlined className="h-[60px] w-[60px] pl-5 group-hover:text-[#0098F1] bg-[#0098F1] group-hover:bg-white text-white rounded-full p-2 transition-colors" />
        </div>
        <h1 className="text-[#0098F1] group-hover:text-white text-xl font-semibold mb-2">
          Get Started Learning Quickly with E-education
        </h1>
        <p className="flex items-center text-[#0098F1] group-hover:text-white text-lg font-medium">
        <Link to="/features">
          <span>Enroll Now</span>
          </Link>
          <FaGreaterThan className="ml-2" />
        </p>
      </div>
    </div>
  );
}

export default Certified;




// import React from "react";
// import { MdImportantDevices } from "react-icons/md";
// import { FaGreaterThan } from "react-icons/fa6";
// import { IoWoman } from "react-icons/io5";
// import { AuditOutlined } from "@ant-design/icons";

// import { Link } from "react-router-dom";

// function Certified() {
//   return (
//     <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 py-8">
//       <div className="bg-white mb-8 lg:mb-0 lg:mr-8 w-full max-w-xs md:max-w-sm lg:max-w-md h-[250px] shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:bg-blue-600 group">
//         <div className="flex items-start justify-start mb-4">
//           <MdImportantDevices className="h-[60px] w-[60px] text-[#0098F1] group-hover:bg-white group-hover:text-blue-600 rounded-full p-2 transition-colors" />
//         </div>
//         <h1 className="text-[#0098F1] group-hover:text-white text-lg md:text-xl font-semibold mb-2">
//           Get Started Learning Quickly with E-education
//         </h1>
//         <p className="flex items-center text-[#0098F1] group-hover:text-white text-md md:text-lg font-medium">
//           <span>Enroll Now</span>
//           <FaGreaterThan className="ml-2" />
//         </p>
//       </div>

//       <div className="bg-white mb-8 lg:mb-0 lg:mr-8 w-full max-w-xs md:max-w-sm lg:max-w-md h-[250px] shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:bg-blue-600 group">
//         <div className="flex items-start justify-start mb-4">
//           <IoWoman className="h-[60px] w-[60px] text-[#0098F1] group-hover:bg-white group-hover:text-blue-600 rounded-full p-2 transition-colors" />
//         </div>
//         <h1 className="text-[#0098F1] group-hover:text-white text-lg md:text-xl font-semibold mb-2">
//           Get Started Learning Quickly with E-education
//         </h1>
//         <p className="flex items-center text-[#0098F1] group-hover:text-white text-md md:text-lg font-medium">
//           <span>Enroll Now</span>
//           <FaGreaterThan className="ml-2" />
//         </p>
//       </div>

//       <div className="bg-white mb-8 lg:mb-0 w-full max-w-xs md:max-w-sm lg:max-w-md h-[250px] shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:bg-blue-600 group">
//         <div className="flex items-start justify-start mb-4">
//           <AuditOutlined className="h-[60px] w-[60px] pl-5 text-[#0098F1] group-hover:bg-white group-hover:text-blue-600 rounded-full p-2 transition-colors" />
//         </div>
//         <h1 className="text-[#0098F1] group-hover:text-white text-lg md:text-xl font-semibold mb-2">
//           Get Started Learning Quickly with E-education
//         </h1>
//         <p className="flex items-center text-[#0098F1] group-hover:text-white text-md md:text-lg font-medium">
//           <span>Enroll Now</span>
//           <FaGreaterThan className="ml-2" />
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Certified;
