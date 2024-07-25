import React from "react";
import img1 from "../../../../assetss/homepageimages/imgstudents.png";
import img2 from "../../../../assetss/homepageimages/img2students.png";
import img3 from "../../../../assetss/homepageimages/img3students.png";
import { Link } from "react-router-dom";

const ImageHomePage = () => {
  return (
    <div className="container mx-auto px-4 py-10 my-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:lg:xl:grid-cols-3 gap-6 justify-items-center">
        <div className="bg-white border-r-2 border-[#f6ac14] border-b-2 border-opacity-20 px-6  shadow-md text-center w-[350px] h-[250px] flex flex-col items-center">
          <img src={img1} alt="Popular" className=" w-[130px] h-[130px]" />
          <h2 className="text-[26px] font-bold mb-2 bg-gradient-to-r from-[#0098f1]  to-[#f6ac14] bg-clip-text text-transparent">
            It's Popular
          </h2>
          <p className="text-sm">
            Helps To Gain Knowledge And Jobs Worldwide Which Requires High
            Technical Skills
          </p>
        </div>
        <div className="bg-white px-6 border-r-2 border-[#f6ac14] border-b-2 border-opacity-20  shadow-md text-center w-[350px] h-[250px] flex flex-col items-center">
          <img src={img2} alt="Promising" className=" w-[130px] h-[130px]" />
          <h2 className="text-[26px] font-bold bg-gradient-to-r from-[#0098f1]  to-[#f6ac14] bg-clip-text text-transparent mb-2 text-gradient">
            It's Promising
          </h2>
          <p className="text-sm">
            Enter With Zero Skills And Gain The Advance Level Skills To Start
            And Having A Dream Career
          </p>
        </div>
        <div className="bg-white border-r-2 border-[#f6ac14] border-b-2 border-opacity-20  px-6  shadow-md text-center w-[350px] h-[250px] flex flex-col items-center">
          <img src={img3} alt="Fun" className="w-[130px] h-[130px]" />
          <h2 className="text-[26px] font-bold bg-gradient-to-r from-[#0098f1]  to-[#f6ac14] bg-clip-text text-transparent mb-2 text-gradient">
            It's Fun
          </h2>
          <p className="text-sm">
            Join With Interest Collaborate Into Passion With Your Creativity And
            Skills To Experience Something New Every Day
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageHomePage;
