import React from "react";
import certificate from "../../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

function ManualTestingCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid  grid-cols-1 md:lg:grid-cols-2 pb-16 bg-gradient-to-br   from-[#0077b6] to-[#00b4d8]"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-[#fca311] text-xl font-medium">
              Manual Testing Certification
            </p>
            <p className="text-6xl font-lora">
              Achieve{" "}
              <p className="text-[#fca311]">Credentials and Recognition</p>
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain a Manual
              Testing Fundamentals certification, greatly enhancing career
              prospects and skill development.
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
export default ManualTestingCertificate;