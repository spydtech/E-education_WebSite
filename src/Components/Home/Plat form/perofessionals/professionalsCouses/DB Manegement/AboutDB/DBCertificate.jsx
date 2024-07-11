

import React from 'react'
import certificate from "../../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

const DBCertificate = () => {
  return (
    <>
      <div
        id="main"
        className="grid grid-cols-1 md:lg:grid-cols-2 pb-16 bg-gradient-to-r from-rose-500 to-red-500"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-[#00509d] text-xl font-medium">
              Database Management Certification
            </p>
            <p className="text-6xl font">
              Master{" "}
              <p className="text-[#00509d]">Essential Concepts</p>
            </p>
            <p className="text-xl text-gray-500">
              Acquire in-depth knowledge and practical skills in database management,
              leading to a certification that boosts career prospects
              and expertise in the field.
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

export default DBCertificate;
