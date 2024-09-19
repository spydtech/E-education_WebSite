import React from "react";
import CommunityImg from "../../../../../../../../assetss/fullstackwebdev/community.png";

const Community = () => {
  return (
    <div className="relative flex justify-center  mb-4 max-w-full">
      <div
        className="absolute inset-0 bg-cover bg-center  h-full "
        style={{
          backgroundImage: `url(${CommunityImg})`,
        }}
      ></div>
      <div className="relative text-center z-10 flex flex-col items-center justify-center min-h-[300px] md:min-h-[500px] lg:min-h-[800px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0098F1] mb-6 pb-8 pt-4">
          Join Our Thriving Community
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0098F1] pb-6 mb-8">
          7,05,07,278
        </p>
        <button className="px-6 py-3 bg-[#0098F1] text-white font-semibold rounded-full w-48 shadow-md">
          Join Today
        </button>
      </div>
    </div>
  );
};

export default Community;


