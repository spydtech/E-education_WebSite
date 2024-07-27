import React from "react";
import girl3 from "../../../../../../assets/girl3.png";

function DataAbout() {
  const data = [
    { percentage: "32%", label: "Avg Salary Hike" },
    { percentage: "25+", label: "Live Sessions" },
    { percentage: "100%", label: "Online" },
  ];
  return (
    <>
      <div
        id="main"
        className="grid py-6 grid-cols-1 md:grid-cols-2  min-w-screen min-h-screen pl-4"
      >
        <div
          id="div2"
          className=" lg:md:m-14 m-4 flex items-center justify-center  md:w-96 md:h-[400px] xl:lg:md:w-auto "
        >
          <div className="md:w-80 md:h-[400px]  absolute mb-2">
            <img src={girl3} className=" h-44  md:h-full rounded-full rounded-t-3xl" />
          </div>
          <div className="bg-cyan-800 md:w-96 w-56 h-56 md:h-96 rounded-full rounded-t-3xl ">
            <div className="bg-gray-400 w-8 h-20 md:w-10 md:h-32 ml-10  rounded-full rounded-t-3xl"></div>
          </div>
        </div>
        <div id="div1" className=" p-10 space-y-5">
          <div id="h1" className="">
            <p className="md:lg:w-auto md:w-96 font-semibold text-xl text-pink-900">
              Introduction To Advanced DM course from E-education
            </p>
          </div>
          <div id="h2" className="flex space-x-3 ">
            <p className="text-3xl font-bold inline-block "> Course</p>
            <p className="text-3xl font-bold text-yellow-700 inline ">
              Snapshot
            </p>
          </div>
          <div className="md:h-32 md:w-[360px] lg:md:h-32 lg:md:w-auto gap-y-4 flex md:flex-row flex-col justify-between p-10   border-2  border-opacity-15 rounded  overflow-hidden shadow-lg shadow-gray-400 transition-transform duration-300 transform hover:scale-105 ">
            {data.map((item, index) => (
              <div key={index} className="">
                <div>
                  <p className="text-pink-700 text-3xl">{item.percentage}</p>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div id="content" className="lg:md:w-auto lg:md:h-auto md:w-[360px]">
            <ul
              id="content"
              class="space-y-3 pt-4  font-normal text-[16px] list-disc"
            >
              <li class="">
                Explore 2 tracks & 5 specialisations for diverse learning.
              </li>
              <li class="">
                Experience seamless integration with Gen AI modules.
              </li>
              <li class="">
                Attain MICA Executive Alumni Status for exclusive benefits.
              </li>
              <li class="">
                Access EMI at RS. 2,879/month for greater flexibility.
              </li>
              <li class="text-start">
                A voucher worth $50 for Meta's "Digital Marketing Associate"
                certificate exam, free of cost.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default DataAbout;
