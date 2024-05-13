import React from "react";
import programmer from "../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../assets/dataAnalatics/assistance.jpg";
// import support from "../../../../../assets/Platform/support.jpg";

const DataAnalyticsProgram = () => {
  return (
    <div className="container mx-auto px-5 pl-20 p-1">
      <div className=" pt-0">
        {" "}
        <p className="text-pink-800 text-xl font-medium">
          About The E-education Data Analytics Course
        </p>
      </div>
      <div className=" py-2">
        <p className="text-6xl font-lora ">
          Insights into the
          <p className="text-violet-800 my-2">
            E-Education Data Analytics Program
          </p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6 ">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52  object-cover object-center"
              src={assistance}
              alt="assist"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Career Assistance</h2>
              <p className="text-gray-700">
                Be one step ahead with access to one on one career counselling
                sessions and mock interviews with Hiring Managers
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52  object-cover"
              src={programmer}
              alt="support"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Student Support</h2>
              <p className="text-gray-700">
                Get access to student support at support@E-education.com or by
                using "ask us?" option on our learning plotform for urgent
                queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsProgram;
