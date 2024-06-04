
import React from "react";

import certificate from "../../../../../../../assets//dataAnalatics/Certificate-PNG-Pic.png";

function CertifiedEthicalHackingCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid grid-cols-1 md:grid-cols-2 pb-16 bg-gradient-to-r from-yellow-400 to-red-500 mb-8"
      >
        <div
          id="content"
          className="flex justify-center items-center p-4 md:p-10"
        >
          <div className="space-y-5 w-full max-w-md">
            <p className="text-orange-600 text-lg md:text-xl font-medium">
              Ethical Hacking Certification
            </p>
            <p className="md:md:text-5xl text-2xl font-lora">
              Achieve{" "}
              <span className="text-violet-800 block md:inline">
                Credentials and Recognition
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-500">
              Successfully complete all course modules to obtain an Ethical
              Hacking certification, greatly enhancing career prospects and
              skill development.
            </p>
          </div>
        </div>
        <div
          id="certificate"
          className="flex justify-center items-center p-4 md:p-10 pt-4 md:pt-14"
        >
          <img
            src={certificate}
            alt="certificate"
            className="bg-transparent w-full max-w-md"
          />
        </div>
      </div>
    </>
  );
}

export default CertifiedEthicalHackingCertificate;
