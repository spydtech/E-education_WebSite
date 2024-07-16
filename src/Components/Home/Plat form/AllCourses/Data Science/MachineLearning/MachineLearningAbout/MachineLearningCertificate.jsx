import React from "react";
import certificate from "../../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

function MachineLearningCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid  grid-cols-1 md:lg:grid-cols-2 pb-16 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-pink-800 text-xl font-medium">
              Machine Learning Certification
            </p>
            <p className="md:text-5xl text-2xl font">
              Achieve{" "}
              <p className="text-violet-800">Credentials and Recognition</p>
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain a Machine
              Learning certification, greatly enhancing career prospects and
              skill development.
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
export default MachineLearningCertificate;
