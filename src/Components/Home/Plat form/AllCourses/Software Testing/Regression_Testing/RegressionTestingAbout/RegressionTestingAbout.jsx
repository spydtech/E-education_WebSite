import React from "react";

import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";

const RegressionTestingAbout = () => {
  const regressionTestingInfo = [
    {
      title: "Career Assistance",
      description:
        "Stay ahead with access to one-on-one career counseling sessions and mock interviews with industry professionals.",
      imgSrc:
        "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?ga=GA1.2.481732087.1715859514&semt=ais_hybrid",
      imgAlt: "career-assistance",
    },
    {
      title: "Student Support",
      description:
        'Access student support via support@datasciencecourse.com or through the "ask us?" option on our learning platform for urgent queries.',
      imgSrc:
        "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241221.jpg?ga=GA1.1.481732087.1715859514&semt=ais_hybrid",
      imgAlt: "student-support",
    },
  ];

  return (
    <div className="px-3 text-center">
      <div className="">
        <p className="md:text-2xl font-bold text-[#0098F1]">
          Discover The Regression Testing Program
        </p>
      </div>

      <div className="md:flex justify-around ">
        {regressionTestingInfo.map((item, index) => (
          <div
            key={index}
            className="md:w-2/5 md:h-96 bg-white rounded-lg shadow-lg p-3 my-4"
          >
            <img
              className=" md:w-full md:h-64 rounded-md"
              src={item.imgSrc}
              alt={item.imgAlt}
            />
            <div className="my-3">
              <h2 className="md:text-xl font-bold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegressionTestingAbout;
