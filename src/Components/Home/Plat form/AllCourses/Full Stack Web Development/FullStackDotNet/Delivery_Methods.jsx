import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import istock from "../../../../../../assets/Delivery_MethodsPic/istock.jpg";
import onsite from "../../../../../../assets/Delivery_MethodsPic/onsite.jpg";
import online from "../../../../../../assets/Delivery_MethodsPic/onlineinstrutor.jpg";
import self from "../.././../../../../assets/Delivery_MethodsPic/selfinstrutor.jpg";
import { Link } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdModelTraining } from "react-icons/md";

function Delivery_Methods() {
  return (
    <div className="mb-32">
      <div
        id="heading"
        className=" md:py-10 space-y-2 lg:px-32 flex justify-center items-center flex-col "
      >
        <div className="text-center font-bold text-xl lg:text-5xl md:lg:sm:w-auto md:w-96 text-violet-800 font">
          Our Available Delivery Methods
        </div>
        <div className=" flex justify-center md:lg:sm:w-auto md:w-96 text-cyan-500">
          <IoRemoveOutline className="text-[40px]" />
          <IoReorderThreeOutline className="text-[40px]" />{" "}
          <IoRemoveOutline className="text-[40px]" />
        </div>
        <div className="text-center px-4 text-base md:lg:sm:w-full md:w-[400px] font pb-8">
          The E-education is World's Leading Organisation for training
          professionals. The E-education provides training in 490+ locations
          around 221+ countries, covering 3000 subjects with the following
          delivery methods
        </div>
      </div>
      <div className="flex md:flex-row justify-center items-center ">
        <div
          id="submain"
          className="grid  lg:grid-cols-4  md:grid-cols-2 md:lg:sm:px-0  grid-cols-1 gap-y-28 gap-x-16  md:mx-20 place-items-center"
        >
          <div id="1" className=" relative">
            <div className=" relative" id="mainone">
              <div
                className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
                id="bgimg"
                style={{
                  backgroundImage: `url(${istock})`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-full h-24"
                id="card"
              >
                <p className=" font-bold pt-2 text-[17px]">Training</p>
                <Link>
                  <p className="font-medium pt-2  hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
                    Enquire Now
                  </p>
                </Link>
              </div>
              <div
                className="bg-gray-300  px-3 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
                id="icon"
              >
                <SiGoogleclassroom className="text-[40px] " />
              </div>
            </div>
          </div>

          <div id="2" className=" relative">
            <div className=" relative" id="mainone">
              <div
                className="bg-yellow-700  h-64 w-64 bg-cover bg-center relative rounded-lg"
                id="bgimg"
                style={{
                  backgroundImage: `url(${online})`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-8 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-full h-24"
                id="card"
              >
                <p className=" font-bold pt-2 text-[17px]">Guided</p>
                <Link>
                  <p className="font-medium pt-2  bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
                    Enquire Now
                  </p>
                </Link>
              </div>
              <div
                className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
                id="icon"
              >
                <FaLaptopCode className="text-[40px] " />
              </div>
            </div>
          </div>

          <div id="3" className=" relative">
            <div className=" relative" id="mainone">
              <div
                className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
                id="bgimg"
                style={{
                  backgroundImage: `url(${self})`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-full h-24"
                id="card"
              >
                <p className=" font-bold pt-2 text-[17px]">Autodidactic</p>
                <Link>
                  <p className="font-medium pt-2  hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
                    Enquire Now
                  </p>
                </Link>
              </div>
              <div
                className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
                id="icon"
              >
                <LiaChalkboardTeacherSolid className="text-[40px] " />
              </div>
            </div>
          </div>

          <div id="4" className=" relative">
            <div className=" relative" id="mainone">
              <div
                className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
                id="bgimg"
                style={{
                  backgroundImage: `url(${onsite})`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-full h-24"
                id="card"
              >
                {/* <div className="flex justify-center items-center flex-row h-24 gap-8"> */}

                <div className=" font-bold pt-2 text-[17px]">Clarification</div>
                <Link>
                  <div className="font-medium  bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
                    Enquire Now
                  </div>
                </Link>
                {/* </div> */}
              </div>
              <div
                className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
                id="icon"
              >
                <MdModelTraining className="text-[40px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery_Methods;
