import React from "react";
import certificate from "../../../../../../../assetss/certficate.png";

function EthicalHackingCertificate() {
  return (
    <div className="bg-white mb-20 pt-10">
      <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-center items-center">
        {/* Certificate Image */}
        <div className="flex justify-center items-center">
          <img
            src={certificate}
            alt="certificate"
            className="max-w-full h-auto"
          />
        </div>
        
        {/* Text Content */}
        <div className="space-y-5 text-center md:text-left p-5">
          <p className="text-2xl font-bold text-[#f6ac14]">
            Achieve Credentials and Recognition
          </p>
          <p className="text-xl text-gray-500">
            Successfully complete all course modules to obtain an Ethical Hacking
            Fundamentals certification, greatly enhancing career prospects and
            skill development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EthicalHackingCertificate;
