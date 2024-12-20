import React from "react";
import mans from "../../../assetss/profile/man.png";

const LeftSide = () => {
  const profileDetails = [
    { label: "Name", value: "Cameron Williamson", isHighlighted: true },
    { label: "Email", value: "Cameronwilliamson@gmail.com" },
  ];

  const profileStats = [
    { label: "Who viewed your profile", value: 90 },
    { label: "Views of your posts", value: 627 },
  ];

  return (
    <div className="w-[250px] xl:w-[300px] pt-10 pb-6 p-4 h-[320px] bg-[#0098F1] rounded-md">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <img
          src={mans}
          alt="Profile"
          className="h-[80px] w-[80px] rounded-full mb-2 border-4 border-white"
        />

        {profileDetails.map((detail, index) => (
          <div
            key={index}
            className={`text-white ${
              detail.isHighlighted ? "font-semibold text-lg" : ""
            }`}
          >
            {detail.value}
          </div>
        ))}

        <hr className="border-t-2 border-white my-4 w-1/2 mx-8" />

        <div className="gap-4">
          {profileStats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-white gap-16 mt-2"
            >
              <div>{stat.label}</div>
              <div>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
