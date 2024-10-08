import React from "react";
import mans from "../../../assetss/profile/man.png";
const LeftSide = () => {
  return (
    <div className="  w-[250px] xl:w-[300px] pt-10 pb-6 p-4 h-[300px] bg-[#0098F1] rounded-md">
      <div className=" flex flex-col items-center justify-center w-full h-full">
        <img
          src={mans}
          alt="Profile"
          className="h-[80px] w-[80px] rounded-full mb-2 border-4 border-white "
        />
        <div className="text-white font-semibold text-lg">
          Cameron Williamson
        </div>
        <div className="text-white">Cameronwilliamson@gmail.com</div>
        <hr className="border-t-2 border-white my-4 w-1/2  mx-8" />
        <div className="gap-4 ">
          <div className="flex justify-center items-center flex-row text-white gap-16">
            <div>Who viewed your profile</div>
            <div>90</div>
          </div>
          <div className="flex justify-between items-center flex-row text-white gap-24 mt-2">
            <div>Views of your post</div>
            <div>627</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
