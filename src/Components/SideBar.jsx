import React, { useState } from "react";
import RecruitmentTab from "./RecruitmentTab";

function SideBar() {
  const [activeTab, setActiveTab] = useState("");

  const options = [
    { title: "Recruitment", component: "RecruitmentTab" },
    { title: "Employee", component: "" },
    { title: "Website", component: "" },
    { title: "Calendar", component: "" },
    { title: "User", component: "" },
    { title: "Leave", component: "" },
    { title: "PayRoll", component: "" },
    { title: "Check In", component: "" },
  ];

  return (
    <div className="flex">
      <div className="bg-[#0098f1] w-[240px] pt-20 overflow-y-hidden h-screen fixed">
        <div className="flex flex-col py-3 pr-3 text-white">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex transition-all duration-500 hover:bg-white text-white hover:text-[#0098f1] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
              onClick={() => setActiveTab(option.component)}
            >
              <p className="p-3 pl-8 text-xl">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-[240px] flex-1">
        {activeTab === "RecruitmentTab" && <RecruitmentTab />}
        {/* Add more conditional renderings for other components as needed */}
      </div>
    </div>
  );
}

export default SideBar;
