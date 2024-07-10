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
      <div className="bg-[#ffdf9f] font-sans h-[625px]   justify-center items-center flex ">
        <div>
          <h1 className="md:lg:xl:text-4xl  text-2xl  font-bold text-center px-[5%] pt-10 font-sans">
            The perfect Platform{" "}
            <span className="inline-block text-[#F6AC14]">To Boost</span> Your
            Technical Skills
          </h1>
          <div className="grid grid-cols-1 md:lg:grid-cols-2 md:p-20 gap-8 ">
            <Link to="/student">
              <div className="shyam w-[438px] h-[406px] bg-white text-center  p-4 font-sans transform hover:-translate-y-2 transition-transform ">
                <div className=" flex justify-center items-center ">
                  <img
                    src={IMG}
                    className="h-[200px] w-[200px]"
                    alt="Student"
                  />
                </div>
                {/* <h2 className="text-3xl font-bold">Students</h2> */}
                <p className="text-gray-500 text-md mb-5">
                  Kickstart your career in tech with industry-relevant skills
                  and certifications that make you stand out to employers.
                </p>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                  <span className="bar-text">Students</span>
                </div>
              </div>
            </Link>

            <Link to="/professional">
              <div className="shyam bg-white w-[438px] h-[406px] text-center  p-4 font-sans transform hover:-translate-y-2 transition-transform">
                <div className="flex justify-center items-center ">
                  <img
                    className="h-[200px] w-[200px]"
                    src="https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-man-seated-using-laptop-character-png-image_11581009.png"
                    alt="Professional"
                  />
                </div>
                {/* <h2 className="text-3xl font-bold">Professionals</h2> */}
                <p className="text-gray-500 text-md   mb-5">
                  Stay ahead of the curve by mastering emerging technologies and
                  techniques that drive innovation.
                </p>
                <div className="bar">
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
          overflow: hidden; /* Ensure text does not overflow */
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
          background: #0098f1;
          transition: width 0.6s ease-out;
          border-radius: 0px 22px 22px 0px;
        }

        .shyam:hover .filledbar {
          width: 100%;
          transition: width 0.4s ease-out;
        }

        .bar-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 18px;
          font-weight: bold;
          pointer-events: none; /* Ensure the text does not interfere with hover effects */
        }
      `}</style>
    </>
  );
}

export default Platform;
