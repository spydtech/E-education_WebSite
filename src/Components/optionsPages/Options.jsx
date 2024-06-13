import React from "react";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
const Options = () => {
  return (
    <>
      <div className="bg-blue-800 w-full h-screen flex justify-center items-center gap-x-16">
        <div className="flex justify-center items-center flex-col shadow-2xl p-8 rounded-md border border-gray-200">
          <div className="text-[100px] font-semibold font-lora text-gray-400 ">
            <MdOutlineSettingsSuggest />
          </div>
          <div className="text-[30px] text-gray-300">Admin</div>
        </div>
        <div className="flex justify-center items-center flex-col shadow-2xl p-8 rounded-md border border-gray-200">
          <div className="text-[100px]  font-semibold font-lora text-gray-400">
            <FaUserAlt />
          </div>
          <div className="text-[30px] text-gray-300">User</div>
        </div>
        {/* <div className="flex justify-center items-center flex-col shadow-2xl p-5 rounded-md">
          <div className="text-[100px]">
            <GiTeacher />
          </div>
          <div className="text-[30px]">Teacher</div>
        </div> */}
      </div>
    </>
  );
};

export default Options;
