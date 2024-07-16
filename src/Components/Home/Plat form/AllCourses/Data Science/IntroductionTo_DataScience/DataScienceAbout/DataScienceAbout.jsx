import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";

const DataScienceAbout = () => {
  return (
    <div className="mx-auto w-full md:lg:xl:px-10 pl-4 bg-gradient-to-br from-[#4e148c] to-[#613dc1]">
      <div className="pt-0">
        <p className="text-[#ff206e] text-xl font-medium">
          About The Data Science Course
        </p>
      </div>
      <div className="py-2">
        <p className="md:text-5xl text-2xl font">
          Discover the
          <p className="text-[#ff206e] my-2">Data Science Program</p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src={assistance}
              alt="career-assistance"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Career Assistance</h2>
              <p className="text-gray-700">
                Stay ahead with access to one-on-one career counseling sessions
                and mock interviews with industry professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover"
              src={programmer}
              alt="student-support"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Student Support</h2>
              <p className="text-gray-700">
                Access student support via support@datasciencecourse.com or
                through the "ask us?" option on our learning platform for urgent
                queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceAbout;
