import React from "react";
import certificate from "../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

function DatavisualisationCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid  grid-cols-1 md:lg:grid-cols-2 pb-16 mb-8 bg-gradient-to-br from-blue-300 via-purple-500 to-pink-600"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-pink-800 text-xl font-medium font-lora">
              Machine Learning Certification
            </p>
            <p className="text-6xl font-lora">
              Achieve{" "}
              <p className="text-violet-800 font-lora">
                Credentials and Recognition
              </p>
            </p>
            <p className="text-xl text-white filter brightness-125">
              Successfully complete all course modules to obtain a Data
              Visualisation certification, greatly enhancing career prospects
              and skill development.
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
export default DatavisualisationCertificate;
