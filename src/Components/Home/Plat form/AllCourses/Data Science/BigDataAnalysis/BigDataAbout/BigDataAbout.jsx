import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";
// import support from "../../../../../assets/Platform/support.jpg";

const BigDataAbout = () => {
    const dataScienceInfo = [
      {
        title: "Career Assistance",
        description:
          "  Stay ahead with access to one-on-one career counseling sessions and mock interviews with industry professionals.",
        imgSrc: assistance,
        imgAlt: "career-assistance",
      },
      {
        title: "Student Support",
        description:
          'Access student support via support@bigdataanalysis.com or through the "ask us?" option on our learning platform for urgent queries.',
        imgSrc: programmer,
        imgAlt: "student-support",
      },
    ];
  
    return (
      <div className="mx-auto h-auto w-full mb-20 px-4 md:px-10 bg-white">
        <div className="py-2 my-10">
          <p className="text-2xl text-center font-bold text-[#f6ac14]">
           Stay ahead with access to one-on-one career counseling sessions
                and mock interviews with industry professionals.
          </p>
        </div>
  
        <div className="flex flex-wrap justify-center items-center pb-6">
          {dataScienceInfo.map((item, index) => (
            <div key={index} className="w-full  md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white h-[400px] rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-52 object-cover object-center"
                  src={item.imgSrc}
                  alt={item.imgAlt}
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default BigDataAbout;
