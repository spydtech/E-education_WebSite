import React from "react";
import Cybersecuritycertificate from "../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

function CybersecurityBiginersCertificate() {
  return (
    <div
      id="main"
      className="grid grid-cols-1 md:grid-cols-2 pb-16 mb-16  bg-gradient-to-r from-amber-400 to-red-500"
    >
      <div id="content" className="flex justify-center items-center">
        <div className="p-5 space-y-5 w-[450px] h-96">
          <p className="text-white text-2xl font-semibold">
            Cybersecurity Certification
          </p>
          <p className="text-5xl font-lora text-white">
            Achieve{" "}
            <span className="text-yellow-300 block">
              Credentials and Recognition
            </span>
          </p>
          <p className="text-lg text-white">
            Successfully complete all course modules to obtain a Cybersecurity
            certification, greatly enhancing career prospects and skill
            development.
          </p>
        </div>
      </div>
      <div
        id="certificate"
        className="flex justify-center items-center p-10 pt-14"
      >
        <img
          src={Cybersecuritycertificate}
          alt="certificate"
          className="w-full h-auto max-w-xs lg:max-w-md bg-transparent"
        />
      </div>
    </div>
  );
}

export default CybersecurityBiginersCertificate;
