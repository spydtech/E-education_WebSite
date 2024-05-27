import React from "react";
import certificate from "../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

function DataCertificate() {
  return (
    <>
      <div id="main" className=" grid grid-cols-1 md:lg:grid-cols-2 pb-16">
        <div id="content" className=" flex justify-center items-center  ">
          <div className="p-5 space-y-5  w-[450px] h-96">
            <p className=" text-pink-800 text-xl font-medium ">
              E-Education Data Analyst Certification
            </p>
            <p className="text-6xl font-lora">
              Earn valuable{" "}
              <p className="text-violet-800">credentials and recognition</p>
            </p>
            <p className=" text-xl text-gray-500">
              Successfully fulfill all course modules to obtain an E-Education
              certification, significantly beneficial for career progression and
              skill augmentation
            </p>
          </div>
        </div>
        <div
          id="certificate"
          className=" flex justify-center items-center p-10 pt-14"
        >
          <img src={certificate} alt="certificate" className="bg-transparent" />
        </div>
      </div>
    </>
  );
}
export default DataCertificate;
