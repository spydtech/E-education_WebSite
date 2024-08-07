import React from "react";
// import { FaLocationArrow } from "react-icons/fa";
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
    <>
      <div id="container" className="px-2 bg-white">
        <div className="ml-4 md:ml-10">
          <p className="text-black font-bold pt-4 text-xl">DASHBOARD</p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <div
            id="4cards"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-40"
          >
            {/* <Link to="/tabs"> */}
            <Link to="/traineedashboard" state={{redirect: "courses"}}>
              <div className="card1 w-72 h-44 border p-4 bg-gray-200 rounded-lg">
                <p className="text-black font-bold">Completed last 30 days</p>
                <ul className="list-disc pl-4">
                  {firstdata.map((data, index) => (
                    <li key={index}>
                      {data.title}: {data.value}
                    </li>
                  ))}
                </ul>
                <div className="text-xl bg-gray-200 font font-bold text-green-600 w-24 h-24 border-4 border-green-400 rounded-full relative bottom-6 left-3/4 transform -translate-x-1/2 flex items-center justify-center">
                  {total}
                </div>
              </div>
            </Link>
            <Link to="/traineedashboard" state={{redirect: "user"}}>
              <div className="card2 w-72 h-44 border p-4 bg-gray-200 rounded-lg">
                <p className="text-black font-bold">User Accounts</p>
                <ul className="list-disc pl-4">
                  {users.map((data, index) => (
                    <li key={index}>
                      {data.title}: {data.value}
                    </li>
                  ))}
                </ul>
                <div className="text-xl bg-gray-200 font font-bold text-blue-600 w-24 h-24 border-4 border-blue-600 rounded-full relative bottom-12 left-3/4 transform -translate-x-1/2 flex items-center justify-center">
                  {usertotal}
                </div>
              </div>
            </Link>
            <div className="card3 w-72 h-44 border p-4 bg-gray-200 rounded-lg">
              <div className="flex justify-between">
                <p className="text-black font-bold">Saved Reports</p>
                <Link>
                  <p className="text-blue-700">
                    <RxDoubleArrowRight className="float-start w-6 h-6" />
                    View All
                  </p>
                </Link>
              </div>
              <div className="mt-4 text-blue-700">
                <Link>
                  <p className="underline-offset-2 underline">
                    <RxDoubleArrowRight className="float-start w-6 h-6" />
                    Expiring Tasks within 30 days
                  </p>
                </Link>
                <Link>
                  <p className="underline-offset-2 underline">
                    <RxDoubleArrowRight className="float-start w-6 h-6" />
                    General Induction Status
                  </p>
                </Link>
              </div>
            </div>
            <div className="card4 w-72 h-44 border p-4 bg-gray-200 rounded-lg">
              <div className="flex justify-between">
                <p className="text-black font-bold">Scheduled Reports</p>
                <Link>
                  <p className="text-blue-700">
                    <RxDoubleArrowRight className="float-start w-6 h-6" />
                    Manage
                  </p>
                </Link>
              </div>
              <div className="mt-4 text-blue-700">
                <Link to = "/todo">
                  <p className="underline-offset-2 underline">
                    <RxDoubleArrowRight className="float-start w-6 h-6" />
                   Schedule Monthly Tasks 
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/traineedashboard" state={{redirect: "approvals"}} >
            <div
              id="right-card"
              className="border bg-gray-200 p-4 w-80 sm:ml-36 rounded-lg h-[370px]"
            >
              <p className="text-black font-bold">Submissions to Approve</p>
              <div className="p-4 flex gap-2 flex-wrap">
                <TfiArrowTopRight className="text-green-600 w-8 h-8" />
                <p className="font-bold">User Tasks</p>
                {userTasks.map((data, index) => (
                  <p className="pl-10 w-full" key={index}>
                    {data.value} - Submissions to Approve
                  </p>
                ))}
              </div>
            </div>
          </Link>
        </div>
        <div id="table-card" className="border bg-gray-200 p-4 my-4 rounded-lg">
          <CourseCompletionTable />
        </div>
      </div>
    </>
  );
}

export default HomeTrainee;
