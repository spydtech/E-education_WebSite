import React from "react";
// import certificate from "../../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";
// import Certificates from "../../../../Professional Certificates/Certificates";
import certificate from "../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";
function WordpressCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid  grid-cols-1 md:lg:grid-cols-2 pb-16 bg-[#9e0059]"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-[#31cb00] text-xl font-medium">
              Wordpress Certification
            </p>
            <p className="text-6xl font-lora">
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
          className="flex justify-center items-center p-10 pt-32"
        >
          <img src={certificate} alt="certificate" className="bg-transparent" />
        </div>
      </div>
    </>
  );
}
export default WordpressCertificate;
