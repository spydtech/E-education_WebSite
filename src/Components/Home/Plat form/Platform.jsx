// import React from "react";
// import IMG from "../../../assets/Platform/student.png";
// import IMG1 from "../../../assets/E- education logo .png";
// import EducationCarousel from "../eductionCarousel/EductionCarousel";
// import Certified from "./Certified";
// import { Link } from "react-router-dom";
// function Platform() {
//   return (
//     <>
//       <Certified />
//       <EducationCarousel />
//       <div className="bg-blue-200 font">
//         <div className="md:lg:ml-96 md:h-92 md:w-96  -mb-16">
//           <img src={IMG1} className=" " />
//         </div>

//         <h1 className="md:lg:xl:text-7xl text-2xl  font-bold text-center p-[5%] font">
//           The perfect platform to boost your technical skills
//         </h1>
//         <div className="grid grid-cols-1 md:lg:grid-cols-2 md:p-20 gap-8 ">
//           <Link to="/student">
//             <div className="shyam text-center shadow-2xl p-4 font transform hover:-translate-y-2 transition-transform ">
//               <div className=" flex justify-center items-center ">
//                 <img src={IMG} className="h-[360px] w-[360px]" />
//               </div>
//               <h2 className="text-3xl font-bold">Students</h2>
//               <p className="text-gray-500 text-md">
//                 Kickstart your career in tech with industry-relevant skills and
//                 certifications that make you stand out to employers.
//               </p>
//               <div class="bar">
//                 <div class="emptybar"></div>
//                 <div class="filledbar"></div>
//               </div>
//             </div>
//           </Link>

//           <style jsx>
//             {`
//               .bar {
//                 position: relative;
//                 // top: 250px;

//                 height: 50px;
//                 width: 100%;
//               }

//               .emptybar {
//                 background-color: #201c29;
//                 width: 100%;
//                 height: 100%;
//               }

//               .filledbar {
//                 position: absolute;
//                 top: 0px;
//                 z-index: 3;
//                 width: 0px;
//                 height: 100%;
//                 background: #d059ff;
//                 background: linear-gradient(90deg, #6831cfab, #0369a1 100%);
//                 transition: 0.6s ease-out;
//               }

//               .shyam:hover .filledbar {
//                 width: 100%;
//                 transition: 0.4s ease-out;
//               }
//             `}
//           </style>
//           <Link to="/professional">
//             <div className="shyam text-center shadow-2xl p-4 font transform hover:-translate-y-2 transition-transform">
//               <div className="flex justify-center items-center ">
//                 <img src="https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-man-seated-using-laptop-character-png-image_11581009.png" />
//               </div>
//               <h2 className="text-3xl font-bold">Professionals</h2>
//               <p className="text-gray-500 text-md">
//                 Stay ahead of the curve by mastering emerging technologies and
//                 techniques that drive innovation in your field.
//               </p>
//               <div class="bar">
//                 <div class="emptybar"></div>
//                 <div class="filledbar"></div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Platform;
import React from "react";
import IMG from "../../../assets/Platform/student.png";
import EducationCarousel from "../eductionCarousel/EductionCarousel";
import Certified from "./Certified";
import { Link } from "react-router-dom";

function Platform() {
  return (
    <>
      <Certified />
      <EducationCarousel />
      <div className=" font-sans h-auto md:h-[625px] justify-center items-center flex py-10 md:py-0">
        <div>
          <h1 className="md:lg:xl:text-4xl text-2xl font-bold text-center px-6 md:px-[5%] pt-10 font-sans">
            The perfect Platform{" "}
            <span className="inline-block text-[#F6AC14]">To Boost</span> Your
            Technical Skills
          </h1>
          <div className="grid grid-cols-1 md:lg:grid-cols-2 md:p-20 gap-8 p-4 ">
            <Link to="/student">
              <div className="shyam w-full md:w-[438px] h-[406px] shadow-2xl bg-white text-center p-4 font-sans transform hover:-translate-y-2 transition-transform">
                <div className="flex justify-center items-center">
                  <img
                    src={IMG}
                    className="h-[200px] w-[200px]"
                    alt="Student"
                  />
                </div>
                <p className="text-black text-md mb-5">
                  Kickstart your career in tech with industry-relevant skills
                  and certifications that make you stand out to employers.
                </p>
                <div className="bar hover:bg-[#f6ac14]">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                  <span className="bar-text">Students</span>
                </div>
              </div>
            </Link>

            <Link to="/professional">
              <div className="shyam w-full md:w-[438px] h-[406px] shadow-2xl text-center p-4 font-sans transform hover:-translate-y-2 transition-transform">
                <div className="flex justify-center items-center">
                  <img
                    className="h-[200px] w-[200px]"
                    src="https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-man-seated-using-laptop-character-png-image_11581009.png"
                    alt="Professional"
                  />
                </div>
                <p className="text-black text-md mb-5">
                  Stay ahead of the curve by mastering emerging technologies and
                  techniques that drive innovation.
                </p>
                <div className="bar  hover:bg-[#f6ac14]">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                  <span className="bar-text">Professionals</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bar {
          position: relative;
          left: -16px;
          height: 60px;
          width: 259px;
          border-radius: 0px 22px 22px 0px;
          overflow: hidden;
          transition: height 0.4s ease-out, border-radius 0.4s ease-out,
            width 1s ease-out;
        }
        .bar:hover {
          height: 122px;
          width: 100%;
          border-radius: 0px 22px 0px 0px;
        }
        .emptybar:hover {
          height: 122px;
          width: 100%;
          border-radius: 0px 22px 0px 0px;
        }
        .filledbar:hover {
          height: 122px;
          width: 100%;
          border-radius: 0px 22px 0px 0px;
        }
        .emptybar {
          background-color: #f6ac14;
          width: 100%;
          height: 100%;
          border-radius: 0px 22px 22px 0px;
        }
        .filledbar {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 3;
          width: 0%;
          height: 100%;
          transition: width 1s ease-out;
          border-radius: 0px 22px 22px 0px;
        }
        .shyam:hover .filledbar {
          width: 100%;
        }
        .bar-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 18px;
          font-weight: bold;
          pointer-events: none;
        }
      `}</style>
    </>
  );
}

export default Platform;
