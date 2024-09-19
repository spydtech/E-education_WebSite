
import React, { useState, useEffect } from "react";
import About from "./About";
import Outcomes from "./Outcomes";
import FullStackWebDevFQACourses from "./FullStackWebDevFQACourses";
import FullStackWebDevelopmentTestimonioals from "./FullStackWebDevelopmentTestimonioals";
import { IoMenu } from "react-icons/io5";

const AboutCourses = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize the first tab
    showTab("tab1");
  }, []);

  function showTab(tabId) {
    // Update active tab
    setActiveTab(tabId);
  }
  return (
    <div className="container mx-auto py-6 ">
      <div className="flex justify-start lg:hidden">
        <button
          className=" font-semibold border rounded-lg text-[#F6AC14] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMenu className="text-2xl " />
        </button>
      </div>

      <div className={`w-full ${menuOpen ? "flex justify-center" : "hidden lg:flex"}  transition-all duration-300`}>
        <div className="flex flex-col lg:justify-between  w-5/6 justify-center lg:pl-20  lg:flex-row  lg:items-start">
          <button
            className={`px-4 py-2 font-semibold text-xl  rounded-r-xl text-[#F6AC14] focus:outline-none tab-button ${
              activeTab === "tab1" ? "bg-[#F6AC14] text-white" : ""
            }`}
            onClick={() => showTab("tab1")}
          >
            About
          </button>
          <button
            className={`px-4 py-2 font-semibold text-xl  rounded-r-xl text-[#F6AC14] focus:outline-none tab-button ${
              activeTab === "tab2" ? "bg-[#F6AC14] text-white" : ""
            }`}
            onClick={() => showTab("tab2")}
          >
            Outcomes
          </button>
          <button
            className={`px-4 py-2 font-semibold text-xl  rounded-r-xl text-[#F6AC14] focus:outline-none tab-button ${
              activeTab === "tab3" ? "bg-[#F6AC14] text-white" : ""
            }`}
            onClick={() => showTab("tab3")}
          >
            Courses
          </button>
          <button
            className={`px-4 py-2 font-semibold text-xl  rounded-r-xl text-[#F6AC14] focus:outline-none tab-button ${
              activeTab === "tab4" ? "bg-[#F6AC14] text-white" : ""
            }`}
            onClick={() => showTab("tab4")}
          >
            Testimonials
          </button>
        </div>
      </div>

      <div className="rounded-lg pb-5 mt-4">
        <div
          id="tab1"
          className={`p-4 tab-content bg-white rounded-lg ${activeTab === "tab1" ? "" : "hidden"}`}
        >
          <About />
        </div>
        <div
          id="tab2"
          className={`p-4 tab-content bg-white rounded-lg ${activeTab === "tab2" ? "" : "hidden"}`}
        >
          <Outcomes />
        </div>
        <div
          id="tab3"
          className={`p-4 tab-content bg-white rounded-lg ${activeTab === "tab3" ? "" : "hidden"}`}
        >
          <FullStackWebDevFQACourses />
        </div>
        <div
          id="tab4"
          className={`p-4 tab-content bg-white rounded-lg ${activeTab === "tab4" ? "" : "hidden"}`}
        >
          <FullStackWebDevelopmentTestimonioals />
        </div>
      </div>
    </div>
  );
};

export default AboutCourses;




// import React, { useState, useEffect } from "react";
// import About from "./About";
// import Outcomes from "./Outcomes";
// import FullStackWebDevFQACourses from "./FullStackWebDevFQACourses";
// import FullStackWebDevelopmentTestimonioals from "./FullStackWebDevelopmentTestimonioals";
// import { IoMenu } from "react-icons/io5";
// const AboutCourses = () => {
//   const [activeTab, setActiveTab] = useState("tab1");
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     // Initialize the first tab
//     showTab("tab1");
//   }, []);

//   function showTab(tabId) {
//     // Update active tab
//     setActiveTab(tabId);
//   }

//   return (
//     <>
//       <div className="w-full  pl-4"></div>
//       <div className="w-full  px-28">
//         {/* Menu Icon */}
//         <div className="block lg:hidden mb-4">
//           <button
//             className="px-4 py-2 font-semibold border rounded-lg text-[#F6AC14]   focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <IoMenu />
//           </button>
//         </div>

//         {/* Tab Buttons */}
//         <div
//           className={`p-2   rounded-t-lg jus pt-8  lg:flex lg:space-x-4 ${
//             menuOpen ? "block" : "hidden"
//           }`}
//         >
//           <div className="flex justify-between  w-3/4 items-center">
//             <button
//               className={`px-4 py-2 font-semibold text-xl rounded-r-lg text-[#F6AC14] focus:outline-none tab-button ${
//                 activeTab === "tab1" ? "active" : ""
//               }`}
//               onClick={() => showTab("tab1")}
//               style={{
//                 backgroundColor: activeTab === "tab1" ? "#F6AC14" : "",
//                 color: activeTab === "tab1" ? "white" : "",
//               }}
//             >
//               About
//             </button>
//             <button
//               className={`px-4 py-2 font-semibold text-xl rounded-r-lg text-[#F6AC14]   focus:outline-none tab-button ${
//                 activeTab === "tab2" ? "active" : ""
//               }`}
//               onClick={() => showTab("tab2")}
//               style={{
//                 backgroundColor: activeTab === "tab2" ? "#F6AC14" : "",
//                 color: activeTab === "tab2" ? "white" : "",
//               }}
//             >
//               Outcomes
//             </button>
//             <button
//               className={`px-4 py-2 font-semibold text-xl rounded-r-lg text-[#F6AC14]   focus:outline-none tab-button ${
//                 activeTab === "tab3" ? "active" : ""
//               }`}
//               onClick={() => showTab("tab3")}
//               style={{
//                 backgroundColor: activeTab === "tab3" ? "#F6AC14" : "",
//                 color: activeTab === "tab3" ? "white" : "",
//               }}
//             >
//               Courses
//             </button>
//             <button
//               className={`px-4 py-2 font-semibold text-xl rounded-r-lg text-[#F6AC14]   focus:outline-none tab-button ${
//                 activeTab === "tab4" ? "active" : ""
//               }`}
//               onClick={() => showTab("tab4")}
//               style={{
//                 backgroundColor: activeTab === "tab4" ? "#F6AC14" : "",
//                 color: activeTab === "tab4" ? "white" : "",
//               }}
//             >
//               Testimonials
//             </button>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="rounded-lg pb-5">
//           <div
//             id="tab1"
//             className={`p-4 tab-content bg-white rounded-lg ${
//               activeTab === "tab1" ? "" : "hidden"
//             }`}
//           >
//             <About />
//           </div>
//           <div
//             id="tab2"
//             className={`p-4 tab-content bg-white rounded-lg ${
//               activeTab === "tab2" ? "" : "hidden"
//             }`}
//           >
//             <Outcomes />
//           </div>
//           <div
//             id="tab3"
//             className={`p-4 tab-content bg-white rounded-lg ${
//               activeTab === "tab3" ? "" : "hidden"
//             }`}
//           >
//             <FullStackWebDevFQACourses />
//           </div>
//           <div
//             id="tab4"
//             className={`p-4 tab-content bg-white rounded-lg ${
//               activeTab === "tab4" ? "" : "hidden"
//             }`}
//           >
//             <FullStackWebDevelopmentTestimonioals />
//           </div>
//           {/* Add more tabs here */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutCourses;

