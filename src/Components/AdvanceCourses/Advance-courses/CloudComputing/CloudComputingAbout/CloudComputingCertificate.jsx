import React from "react";
import certificate from "../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

function CloudComputingCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid  grid-cols-1 md:lg:grid-cols-2 pb-16 bg-gradient-to-br  from-[#04e761] to-[#00916e]"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-[#072ac8] text-xl font-medium">
              CloudComputing with AWS Certification
            </p>
            <p className="text-6xl font">
              Achieve{" "}
              <p className="text-[#072ac8]">Credentials and Recognition</p>
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain a
              CloudComputing with AWS Fundamentals certification, greatly
              enhancing career prospects and skill development.
            </p>
          </div>
        </div>
        <div
          id="certificate"
          className="flex justify-center items-center p-10 pt-32"
        >
          <img src={certificate} alt="certificate" className="bg-transparent" />
        </div>
      </div>
    </>
  );
}
export default CloudComputingCertificate;
