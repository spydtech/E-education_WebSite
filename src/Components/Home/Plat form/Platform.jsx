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
      <div className="bg-[#ffdf9f] font-sans h-auto md:h-[625px] flex justify-center items-center py-10 md:py-0">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center pt-10">
            The perfect Platform{" "}
            <span className="inline-block text-[#F19E22]">To Boost</span> Your
            Technical Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-10 justify-center items-center">
            <Link to="/student">
              <div className="shyam overflow-hidden w-full lg:w-[420px] h-[385px] bg-white text-center p-4 transform hover:-translate-y-2 transition-transform">
                <div className="flex justify-center items-center">
                  <img
                    src={IMG}
                    className="h-[180px] w-[180px]"
                    alt="Student"
                  />
                </div>
                <p className="text-black text-md mb-5">
                  Kickstart your career in tech with industry-relevant skills
                  that make you stand out to employers.
                </p>
                <div className="bar hover:bg-[#F19E22]">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                  <span className="bar-text">Students</span>
                </div>
              </div>
            </Link>
            <Link to="/professional">
              <div className="shyam overflow-hidden w-full lg:w-[420px] h-[385px] bg-white text-center p-4 transform hover:-translate-y-2 transition-transform">
                <div className="flex justify-center items-center">
                  <img
                    className="h-[180px] w-[180px]"
                    src="https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-man-seated-using-laptop-character-png-image_11581009.png"
                    alt="Professional"
                  />
                </div>
                <p className="text-black text-md mb-5">
                  Stay ahead of the curve by mastering emerging technologies and
                  techniques that drive innovation.
                </p>
                <div className="bar hover:bg-[#F19E22] ">
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
