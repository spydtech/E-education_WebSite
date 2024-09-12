// import React from "react";
// import { TfiArrowTopRight } from "react-icons/tfi";
// import { Link } from "react-router-dom";
// import { RxDoubleArrowRight } from "react-icons/rx";
// import CourseCompletionTable from "./CourseCompletionTable";

// function HomeTrainee() {
//   const filessent = localStorage.getItem("filessent") || 0;
//   const Activeusers = localStorage.getItem("Activeusers") || 0;
//   const Inactiveusers = localStorage.getItem("Inactiveusers") || 0;

//   const firstdata = [
//     {
//       title: "Courses",
//       value: "1",
//     },
//   ];
//   const users = [
//     {
//       title: "Active",
//       value: Activeusers.toString(),
//     },
//     {
//       title: "Inactive",
//       value: Inactiveusers.toString(),
//     },
//   ];
//   const userTasks = [
//     {
//       value: filessent.toString(),
//     },
//   ];

//   // Calculate the total value
//   const total = firstdata.reduce((acc, item) => acc + parseInt(item.value), 0);
//   const usertotal = users.reduce((acc, item) => acc + parseInt(item.value), 0);

//   return (
//     <div id="container" className="px-2 sm:px-4 lg:px-6 bg-white">
//       <div className="ml-2 sm:ml-4 md:ml-6 lg:ml-10">
//         <p className="text-[#FF9B26] font-bold pt-4 text-lg sm:text-xl lg:text-2xl">DASHBOARD</p>
//       </div>

//       {/* Container for the three cards in one row */}
//       <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
//   <Link to="/traineedashboard" state={{ redirect: "courses" }} className="w-full">
//     <div className="card1 w-full h-44 shadow-lg p-4 rounded-lg flex flex-col items-center justify-between">
//       <p className="text-[#FF9B26] font-bold text-sm sm:text-base md:text-lg text-center">Completed last 30 days</p>
//       <ul className="list-disc pl-4 text-[#FF9B26] text-sm sm:text-base md:text-lg text-center">
//         {firstdata.map((data, index) => (
//           <li key={index}>
//             {data.title}: {data.value}
//           </li>
//         ))}
//       </ul>
//       <div className="text-xl bg-gray-200 font-bold text-green-600 w-20 h-20 md:w-24 md:h-24 border-4 border-green-400 rounded-full flex items-center justify-center mt-4">
//         {total}
//       </div>
//     </div>
//   </Link>

//   <Link to="/traineedashboard" state={{ redirect: "user" }} className="w-full">
//     <div className="card2 w-full h-44 shadow-lg p-4 rounded-lg flex flex-col items-center justify-between">
//       <p className="text-[#FF9B26] font-bold text-sm sm:text-base md:text-lg">User Accounts</p>
//       <ul className="list-disc flex flex-wrap justify-center md:justify-start gap-4 pl-0 text-[#FF9B26] text-sm sm:text-base md:text-lg">
//   {users.map((data, index) => (
//     <li key={index} className="flex-shrink-0 text-center md:text-left px-2 py-1">
//       {data.title}: {data.value}
//     </li>
//   ))}
// </ul>

//       <div className="text-xl bg-gray-200 font-bold text-[#FF9B26] w-20 h-20 md:w-24 md:h-24 border-4 border-blue-600 rounded-full flex items-center justify-center mt-4">
//         {usertotal}
//       </div>
//     </div>
//   </Link>

//   <Link to="/traineedashboard" state={{ redirect: "approvals" }} className="w-full">
//     <div id="right-card" className="shadow-lg text-white bg-[#FF9B26] p-4 rounded-lg flex flex-col h-full">
//       <p className="text-white font-bold text-sm sm:text-base md:text-lg">Submissions to Approve</p>
//       <div className="p-4 flex items-center gap-2 flex-wrap">
//         <TfiArrowTopRight className="text-white w-8 h-8" />
//         <p className="font-bold text-sm sm:text-base md:text-lg">User Tasks</p>
//         {userTasks.map((data, index) => (
//           <p className="pl-4 text-sm sm:text-base md:text-lg w-full" key={index}>
//             {data.value} - Submissions to Approve
//           </p>
//         ))}
//       </div>
//     </div>
//   </Link>
// </div>

//       {/* Container for the two remaining cards in another row */}
//       <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//         <div className="card3 w-full h-44 text-[#FF9B26] p-4 shadow-lg rounded-lg">
//           <div className="flex justify-between p-2">
//             <p className="text-[#FF9B26] font-bold text-sm sm:text-base lg:text-lg">Saved Reports</p>
//             <Link>
//               <p className="text-[#FF9B26] text-sm sm:text-base lg:text-lg">
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 View All
//               </p>
//             </Link>
//           </div>
//           <div className="mt-4 text-[#FF9B26] text-sm sm:text-base lg:text-lg">
//             <Link>
//               <p className="underline-offset-2 underline text-sm sm:text-base lg:text-lg">
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 Expiring Tasks within 30 days
//               </p>
//             </Link>
//             <Link>
//               <p className="underline-offset-2 underline text-sm sm:text-base lg:text-lg">
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 General Induction Status
//               </p>
//             </Link>
//           </div>
//         </div>
//         <div className="card4 w-full h-44 shadow-lg p-4 rounded-lg">
//           <div className="flex justify-between text-[#FF9B26]">
//             <p className="text-[#FF9B26] font-bold text-sm sm:text-base lg:text-lg">Scheduled Reports</p>
//             <Link>
//               <p className="text-[#FF9B26] text-sm sm:text-base lg:text-lg">
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 Manage
//               </p>
//             </Link>
//           </div>
//           <div className="mt-4 text-[#FF9B26] text-sm sm:text-base lg:text-lg">
//             <Link to="/todo">
//               <p className="underline-offset-2 underline text-sm sm:text-base lg:text-lg">
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 Schedule Monthly Tasks
//               </p>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div id="table-card" className="shadow-lg p-4 my-4 rounded-lg">
//         <CourseCompletionTable />
//       </div>
//     </div>
//   );
// }

// export default HomeTrainee;

import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { RxDoubleArrowRight } from "react-icons/rx";
import CourseCompletionTable from "./CourseCompletionTable";

function HomeTrainee() {
  const filessent = localStorage.getItem("filessent") || 0;
  const Activeusers = localStorage.getItem("Activeusers") || 0;
  const Inactiveusers = localStorage.getItem("Inactiveusers") || 0;

  const firstdata = [
    {
      title: "Courses",
      value: "1",
    },
  ];
  const users = [
    {
      title: "Active",
      value: Activeusers.toString(),
    },
    {
      title: "Inactive",
      value: Inactiveusers.toString(),
    },
  ];
  const userTasks = [
    {
      value: filessent.toString(),
    },
  ];

  // Calculate the total value
  const total = firstdata.reduce((acc, item) => acc + parseInt(item.value), 0);
  const usertotal = users.reduce((acc, item) => acc + parseInt(item.value), 0);

  return (
    <div id="container" className="  bg-white">
      <div className="ml-2  ">
        {/* <p className="text-[#FF9B26] font-bold pt-4 text-lg sm:text-xl lg:text-2xl">
          DASHBOARD
        </p> */}
      </div>

      {/* Container for the cards */}
      <div className=" grid grid-cols-1  lg:grid-cols-3 gap-4 p-4">
        <Link to="/traineedashboard" state={{ redirect: "courses" }}>
          <div className="card1 lg:h-44   shadow-lg p-4 rounded-lg flex flex-col items-center justify-between">
            <p className="text-[#FF9B26] text-nowrap font-bold text-sm sm:text-base lg:text-lg text-center">
              Completed last 30 days
            </p>
            <ul className="list-none pl-4 text-[#FF9B26] text-sm sm:text-base lg:text-lg text-center">
              {firstdata.map((data, index) => (
                <li key={index}>
                  {data.title}: {data.value}
                </li>
              ))}
            </ul>
            <div className="text-xl bg-gray-200 font-bold text-[#FF9B26] w-20 h-20 md:w-16 md:h-16   border-4 border-[#FF9B26] rounded-full flex items-center justify-center mt-4">
              {total}
            </div>
          </div>
        </Link>

        <Link to="/traineedashboard" state={{ redirect: "user" }} className="">
          <div className="card2 lg:h-44   shadow-lg p-4 rounded-lg flex flex-col items-center justify-between">
            <p className="text-[#FF9B26] font-bold text-sm sm:text-base lg:text-lg">
              User Accounts
            </p>
            <ul className=" flex list-none flex-wrap justify-center  text-[#FF9B26] ">
              {users.map((data, index) => (
                <li
                  key={index}
                  className="flex-shrink-0 text-center list-t md:text-left px-2 py-1"
                >
                  {data.title}: {data.value}
                </li>
              ))}
            </ul>
            <div className="text-xl bg-gray-200 font-bold text-[#FF9B26] w-20 h-20 md:w-16 md:h-16  border-4 border-[#FF9B26] rounded-full flex items-center justify-center mt-4">
              {usertotal}
            </div>
          </div>
        </Link>

        <Link to="/traineedashboard" state={{ redirect: "approvals" }}>
          <div
            id="right-card"
            className="shadow-lg text-white items-center  justify-center h-44 bg-[#FF9B26]  rounded-lg flex flex-col  md:order-1"
          >
            <p className="text-white text-center text-nowrap font-bold text-sm sm:text-base lg:text-md">
              Submissions to Approve
            </p>
            <div className=" flex md:items-center mt-3 justify-center max-md:items-center gap-2 flex-wrap">
              <TfiArrowTopRight className="text-white lg:size-5 " />
              <p className="font-bold text-sm sm:text-base lg:text-lg">
                User Tasks
              </p>
              {/* {userTasks.map((data, index) => (
                <p className=" text-sm sm:text-base text-nowrap" key={index}>
                  {data.value} - Submissions to Approve
                </p>
              ))} */}
            </div>
            {userTasks.map((data, index) => (
                <p className=" mt-3 text-sm text-center sm:text-base text-nowrap" key={index}>
                  {data.value} - Submissions to Approve
                </p>
              ))}
          </div>
        </Link>
      </div>

      {/* Container for the two remaining cards */}
      <div className="  grid grid-cols-2 gap-2 px-4  max-lg:grid-cols-1">
        <div className="card3   h-44 p-4 text-[#FF9B26] shadow-lg rounded-lg">
          <div className="flex justify-between  p-2">
            <p className="text-[#FF9B26] font-bold text-sm sm:text-base lg:text-lg">
              Saved Reports
            </p>
            <Link>
              <p className="text-[#FF9B26] text-sm sm:text-base lg:text-lg">
                <RxDoubleArrowRight className="inline w-6 h-6" />
                View All
              </p>
            </Link>
          </div>
          <div className="mt-4 text-[#FF9B26] text-sm sm:text-base lg:text-lg">
            <Link>
              <p className="underline-offset-2 underline text-sm sm:text-base lg:text-lg">
                <RxDoubleArrowRight className="inline w-6 h-6" />
                Expiring Tasks within 30 days
              </p>
            </Link>
            <Link>
              <p className="underline-offset-2 underline text-sm sm:text-base lg:text-lg">
                <RxDoubleArrowRight className="inline w-6 h-6" />
                General Induction Status
              </p>
            </Link>
          </div>
        </div>
        <div className="card4  p-4 h-44 shadow-lg rounded-lg">
          <div className="flex  justify-between p-4 text-[#FF9B26]">
            <p className="text-[#FF9B26] font-bold text-sm sm:text-base lg:text-lg">
              Scheduled Reports
            </p>
            <Link>
              <p className="text-[#FF9B26] text-sm sm:text-base lg:text-lg">
                <RxDoubleArrowRight className="inline w-6 h-6" />
                Manage
              </p>
            </Link>
          </div>
          <div className="mt-4 text-[#FF9B26] text-sm sm:text-base lg:text-lg">
            <Link to="/todo">
              <p className="underline-offset-2 underline text-sm sm:text-base lg:text-lg">
                <RxDoubleArrowRight className="inline w-6 h-6" />
                Schedule Monthly Tasks
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div id="table-card" className="shadow-lg p-4 my-4   rounded-lg">
        <CourseCompletionTable />
      </div>
    </div>
  );
}

export default HomeTrainee;
