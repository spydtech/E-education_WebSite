import React from "react";
import { MdNotificationAdd } from "react-icons/md";
import IMG from "../assets/studentcourseicons/hacker.png";
import { FaEdit } from "react-icons/fa";

function RecruitmentTab() {
  return (
    <>
      <div id="main" className=" bg-black h-[240vh] w-auto gap-y-3 ">
        <div
          id="div1"
          className=" flex flex-row justify-between items-center pt-2 mx-2"
        >
          <div id="head" className=" mx-4">
            <h1 className="text-[#e65f2b] text-2xl">Recruitment</h1>
          </div>

          <div id="topoptions" className=" flex flex-row gap-x-4">
            <div className="1 w-[300px] h-[48px] bg-[#0098f1] rounded-xl justify-center items-center flex">
              <input
                className=" placeholder:text-white placeholder:text-start w-[300px] rounded-xl text-white h-[48px] border-none bg-[#0098f1]"
                type="search"
                placeholder="Search Anything here...."
              />
            </div>
            <div className="2 rounded-full flex justify-center items-center bg-[#0098f1] w-[44px] h-[44px]">
              <MdNotificationAdd className=" text-white w-[25px] h-[25px]" />
            </div>
            <div className="3 text-white w-[80px] h-[48px] rounded-2xl flex justify-center items-center bg-[#0098f1]">
              <p>Help</p>
            </div>
            <div className="4   rounded-2xl w-[200px] flex justify-start h-[48px] text-center bg-white">
              <div className=" w-[38px] h-[38px]  m-1">
                <img
                  src={IMG}
                  className="bg-gray-200 rounded-full w-[38px] h-[38px]"
                />
              </div>
              <div className="pl-2 flex justify-center items-center ">
                <p className=" text-[#0098f1]">Alex Blisss</p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2"
          className="flex flex-row justify-end items-center pt-4 mx-2 gap-x-4"
        >
          <div className="w-[212px] bg-white flex justify-center items-center  rounded-xl h-[50px] ">
            <button className="text-[#0098f1] text-[16px]">
              Create Work Space
            </button>
          </div>
          <div className="w-[100px]  flex justify-center items-center  bg-white rounded-xl h-[50px] ">
            <button className=" flex text-[#0098f1] text-[16px]">
              <FaEdit className="text-[#0098f1] w-5 h-5" /> Edit
            </button>
          </div>
        </div>
        <div className=" bg-black mx-2 ">
          <div id="3" className="w-auto h-[382px] bg-white my-2  p-4 ">
            <p className="text-[#e65f2b] text-2xl font-semibold">
              {" "}
              Department Wise Openings
            </p>
            <p>Last Synced Just Now</p>
          </div>
          <div id="4" className="w-auto h-[418px] bg-white my-2 "></div>
          <div id="5" className="w-auto h-[322px] bg-white my-2 "></div>
        </div>
      </div>
    </>
  );
}

export default RecruitmentTab;
