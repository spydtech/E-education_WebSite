import React from "react";
import certificate from "../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

function BasicPhpCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid  grid-cols-1 md:lg:grid-cols-2 pb-16 bg-gradient-to-br  to-[#072ac8] from-[#4f78e1]"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-[#31cb00] text-xl font-medium">
              Php Certification
            </p>
            <p className="text-6xl font-lora">
              Achieve{" "}
              <p className="text-[#31cb00]">Credentials and Recognition</p>
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain a BasicPhp
              Fundamentals certification, greatly enhancing career prospects and
              skill development.
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
export default BasicPhpCertificate;
