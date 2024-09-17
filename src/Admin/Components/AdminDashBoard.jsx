import React from "react";
import sales from "../../assetss/admindashboard/analysis.png";
import revenue from "../../assetss/admindashboard/revenue.png";
import students from "../../assetss/admindashboard/students.png";
import courses from "../../assetss/admindashboard/courses.png";
import { TfiStatsUp } from "react-icons/tfi";
import PaymentData from "./PaymentData";
const data = [
  { img: sales, alt: "Sales", value: "2,42,000", text: "Sales" },
  { img: courses, alt: "Courses", value: "90", text: "Courses" },
  { img: students, alt: "Students", value: "3,00,000", text: "Students" },
  { img: revenue, alt: "Revenue", value: "2,42,000", text: "Revenue" },
];

const statistics = [
  { title: "New Students", value: "5060", bgColor: "bg-[#ff560E]" },
  { title: "No.Of Students", value: "305060", bgColor: "bg-[#ff259d]" },
  { title: "No.Of Trainees", value: "450", bgColor: "bg-[#ff256a]" },
  { title: "No.Of Employees", value: "250", bgColor: "bg-[#ff0e12]" },
];

const AdminDashBoard = () => {
  return (
    <>
      <div id="main" className="flex flex-col items-center mx-2">
        <div
          id="div1"
          className="h-[250px] bg-[#f53555] rounded-lg m-3 p-3 w-full max-w-6xl"
        >
          <p className="text-xl text-white px-3">Monthly Overview</p>
          <span className="text-[14px] text-white px-3 pt-4 flex">
            Total 25% <TfiStatsUp className=" text-green-400 px-2" /> this month
          </span>
          <div id="subdiv1" className="flex flex-wrap justify-around mt-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="p-4 flex items-center w-[225px] h-[100px]  text-white "
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-16 h-16 border-white border-2 rounded-full"
                />
                <div className="pl-4">
                  <p className="text-lg text-white">{item.text}</p>
                  <p className="text-lg text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="div2"
          className="flex flex-wrap justify-between w-full max-w-6xl p-2 mt-3"
        >
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center rounded-lg p-4 w-[240px] h-[130px] ${stat.bgColor}`}
            >
              <p className="text-white text-lg font-semibold">{stat.title}</p>
              <p className="text-white text-xl">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      <PaymentData />
    </>
  );
};

export default AdminDashBoard;
