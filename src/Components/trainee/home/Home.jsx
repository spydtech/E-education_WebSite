import React, { useState } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { RxDoubleArrowRight } from "react-icons/rx";
import CourseCompletionTable from "./CourseCompletionTable";
function HomeTrainee() {
  const filessent = localStorage.getItem("filessent") || 0;
  const Activeusers = localStorage.getItem("Activeusers") || 0;
  const Inactiveusers = localStorage.getItem("Inactiveusers") || 0;
  const [theam, setTheam] = useState(localStorage.getItem("theme"));
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
  const themes = localStorage.getItem("theme");
  //  console.log(themes)
  return (
    <div id="container ">
      {/* Container for the cards */}
      <div
        className={`text-black  grid grid-cols-1     lg:grid-cols-3 gap-4 p-4`}
      >
        <Link to="/traineedashboard" state={{ redirect: "courses" }}>
          <div
            className={`  card1 lg:h-44 bg-white shadow-lg p-4 rounded-lg flex flex-col items-center justify-between`}
          >
            <p
              className={` font-semibold text-sm sm:text-base lg:text-lg text-center`}
            >
              Completed last 30 days
            </p>

            <ul className="list-none pl-4  text-sm sm:text-base lg:text-lg text-center">
              {firstdata.map((data, index) => (
                <li key={index} className={``}>
                  {data.title}: {data.value}
                </li>
              ))}
            </ul>
            <div
              className={` text-xl font-semibold  w-20 h-20 md:w-16 md:h-16   border-4 border-black rounded-full flex items-center justify-center mt-4`}
            >
              {total}
            </div>
          </div>
        </Link>

        <Link to="/traineedashboard" state={{ redirect: "user" }} className="">
          <div
            className={` card2 lg:h-44 bg-white  shadow-lg p-4 rounded-lg flex flex-col items-center justify-between`}
          >
            <p className={`  font-semibold text-sm sm:text-base lg:text-lg`}>
              User Accounts
            </p>
            <ul className=" flex list-none flex-wrap justify-center   ">
              {users.map((data, index) => (
                <li
                  key={index}
                  className={` flex-shrink-0 text-center list-t md:text-left px-2 py-1`}
                >
                  {data.title}: {data.value}
                </li>
              ))}
            </ul>
            <div
              className={`  text-xl  font-semibold  w-20 h-20 md:w-16 md:h-16  border-4 border-black  rounded-full flex items-center justify-center mt-4`}
            >
              {usertotal}
            </div>
          </div>
        </Link>

        <Link to="/traineedashboard" state={{ redirect: "approvals" }}>
          <div
            id="right-card"
            className={`   shadow-lg items-center bg-white justify-center overflow-y-auto h-44   rounded-lg flex flex-col  md:order-1`}
          >
            <p
              className={` text-center   text-nowrap font-semibold text-sm sm:text-base lg:text-md`}
            >
              Submissions to Approve
            </p>
            <div className=" flex md:items-center mt-3 justify-center max-md:items-center gap-2 flex-wrap">
              <TfiArrowTopRight className={`  lg:size-5 `} />
              <p className={` font-semibold text-sm sm:text-base  lg:text-lg`}>
                User Tasks
              </p>
            </div>
            {userTasks.map((data, index) => (
              <p
                className={` mt-3 text-sm text-center  sm:text-base text-nowrap`}
                key={index}
              >
                {data.value} - Submissions to Approve
              </p>
            ))}
          </div>
        </Link>
      </div>

      {/* Container for the two remaining cards */}
      <div
        className={` text-black grid grid-cols-2 gap-2 px-4  max-lg:grid-cols-1`}
      >
        <div className={`card3  bg-white  h-44 p-4  shadow-lg rounded-lg`}>
          <div className={`flex  justify-between  p-2`}>
            <p className={`  font-semibold text-sm sm:text-base lg:text-lg`}>
              Saved Reports
            </p>
            <Link>
              <p className={`   text-sm sm:text-base lg:text-lg`}>
                <RxDoubleArrowRight className="inline w-6 h-6" />
                View All
              </p>
            </Link>
          </div>
          <div className="mt-4  text-sm sm:text-base lg:text-lg">
            <Link>
              <p
                className={`  underline-offset-2 underline text-sm sm:text-base lg:text-lg`}
              >
                <RxDoubleArrowRight className="inline w-6 h-6" />
                Expiring Tasks within 30 days
              </p>
            </Link>
            <Link>
              <p
                className={`  underline-offset-2 underline text-sm sm:text-base lg:text-lg`}
              >
                <RxDoubleArrowRight className="inline w-6 h-6" />
                General Induction Status
              </p>
            </Link>
          </div>
        </div>
        <div className={` card4 bg-white  p-4 h-44 shadow-lg rounded-lg`}>
          <div className="flex  justify-between p-4 ">
            <p className={`   font-semibold text-sm sm:text-base lg:text-lg`}>
              Scheduled Reports
            </p>
            <Link>
              <p className={`   text-sm sm:text-base lg:text-lg`}>
                <RxDoubleArrowRight className="inline w-6 h-6" />
                Manage
              </p>
            </Link>
          </div>
          <div className="mt-4    text-sm sm:text-base lg:text-lg">
            <Link to="/todo">
              <p
                className={`  underline-offset-2 underline text-sm sm:text-base lg:text-lg`}
              >
                <RxDoubleArrowRight className="inline w-6 h-6" />
                Schedule Monthly Tasks
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div
        id="table-card "
        className={` p-4 m-4 bg-white  shadow-lg rounded-lg`}
      >
        <CourseCompletionTable />
      </div>
    </div>
  );
}

export default HomeTrainee;
