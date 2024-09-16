import React from "react";
import sales from "../../assetss/admindashboard/analysis.png";
import revenue from "../../assetss/admindashboard/revenue.png";
import students from "../../assetss/admindashboard/students.png";
import courses from "../../assetss/admindashboard/courses.png";
import { TfiStatsUp } from "react-icons/tfi";
import PaymentData from "./PaymentData";
import adminimg from "../../assetss/Home/Admin.png";

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
    
      <div id="main" className="grid  items-center mx-2">
       <span className="flex p-4  top-3 left-4">
        <img className="w-[60px]  h-[60px] rounded-full" src={adminimg} />
        <span className="bg-gradient-to-r from-[#00BF8F] to-[#001510] text-transparent  bg-clip-text text-2xl  font-medium pt-4 pl-1">
          Admin Name
        </span>
      </span>
        <div
          id="div1"
          className="h-auto bg-gradient-to-r from-[#00BF8F] to-[#001510] rounded-lg m-3 p-3 w-full max-w-6xl"
        >
          <p className="text-xl text-white px-3">Monthly Overview</p>
          <span className="text-[14px] text-white px-3 pt-4 flex items-center">
            Total 25% <TfiStatsUp className=" text-green-400 px-2" /> this month
          </span>
          <div id="subdiv1" className="flex flex-wrap justify-around mt-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="p-4 flex items-center w-full md:w-[225px] h-auto md:h-[100px] lg:w-[180px] lg:h-[100px] text-white space-x-2"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-14 h-14 md:w-16 md:h-16 border-white border-2 rounded-full"
                />
                <div>
                  <p className="text-sm md:text-lg text-white">{item.text}</p>
                  <p className="text-sm md:text-lg text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="div2"
          className="flex flex-wrap justify-between w-full max-w-6xl pl-3 mt-3"
        >
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center rounded-lg  w-full xl:w-64 lg:w-[180px] md:w-[260px] h-[100px] sm:h-[130px] mb-4 ${stat.bgColor}`}
            >
              <p className="text-white text-base sm:text-lg font-semibold">{stat.title}</p>
              <p className="text-white text-lg sm:text-xl">{stat.value}</p>
            </div>
          ))}
         
        </div>
        <PaymentData  className="w-full"/>
      </div>
      
    
  );
};

export default AdminDashBoard;
