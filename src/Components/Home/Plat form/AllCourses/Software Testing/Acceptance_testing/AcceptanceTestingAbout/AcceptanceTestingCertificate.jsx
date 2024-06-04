import React from "react";
// import certificate from "../../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";
// import Certificates from "../../../../Professional Certificates/Certificates";
import certificate from "../../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";
function AcceptanceTestingCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid  grid-cols-1 md:lg:grid-cols-2 pb-16 bg-gradient-to-br  from-[#560bad] to-[#3a0ca3]"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-[#31cb00] text-xl font-medium">
              Acceptance Testing Certification
            </p>
            <p className="md:text-5xl text-2xl font-lora">
              Achieve{" "}
              <p className="text-[#31cb00]">Credentials and Recognition</p>
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain a Acceptance
              Testing Fundamentals certification, greatly enhancing career
              prospects and skill development.
            </p>
          </div>
        </div>
        <div
          id="certificate"
          className="flex justify-center items-center p-10 pt-4"
        >
          <img src={certificate} alt="certificate" className="bg-transparent" />
        </div>
      </div>
    </>
  );
}
export default AcceptanceTestingCertificate;
