import React from "react";
import certificate from "../../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

function DataScienceCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid grid-cols-1 md:lg:grid-cols-2 pb-16 bg-gradient-to-br from-[#4e148c] to-[#613dc1] pl-4"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-[#ff206e] text-xl font-medium">
              Data Science Certification
            </p>
            <p className="md:text-5xl text-2xl font">
              Achieve{" "}
              <p className="text-[#ff206e]">Credentials and Recognition</p>
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain a Data Science
              certification, greatly enhancing career prospects and skill
              development.
            </p>
          </div>
        </div>
        <div
          id="certificate"
          className="flex justify-center items-center p-10 pt-8"
        >
          <img src={certificate} alt="certificate" className="bg-transparent" />
        </div>
      </div>
    </>
  );
}

export default DataScienceCertificate;
