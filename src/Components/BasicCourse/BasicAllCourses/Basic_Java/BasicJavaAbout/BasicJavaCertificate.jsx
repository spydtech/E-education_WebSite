import React from "react";
import certificate from "../../../../../assetss/certficate.png";

function BasicJavaCertificate() {
  return (
    <div className="bg-white mb-20 pt-10">
      <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src={certificate}
            alt="certificate"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="space-y-5 text-center md:text-left p-5">
            <p className="text-2xl font-bold text-[#f6ac14]">
              Basic Java Certification
            </p>
            <p className="text-xl font-semibold text-[#f6ac14]">
              Achieve{" "}
              <span className="text-[#f6ac14]">Credentials and Recognition</span>
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain a Basic Java
              Fundamentals certification, greatly enhancing career prospects and
              skill development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicJavaCertificate;
