import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdModelTraining } from "react-icons/md";

function Delivery_Methods() {
  return (
    <div className="mb-32">
      <div id="heading" className=" py-10 space-y-2 px-32  ">
        <h1 className="text-center font-bold text-5xl md:lg:sm:w-auto w-96 text-[#f3a916]  font-lora">
          Our Available Delivery Methods
        </h1>
        <h1 className=" flex justify-center md:lg:sm:w-auto w-96 text-[#f3a916] ">
          <IoRemoveOutline className="text-[40px]" />
          <IoReorderThreeOutline className="text-[40px]" />{" "}
          <IoRemoveOutline className="text-[40px]" />
        </h1>
        <p className="text-center text-xl md:lg:sm:w-full w-[400px] font-lora">
          The E-Education is World's Leading Organisation for training
          professionals.The E-Education provides training is 490+ location is
          around 221+ countries,covering 3000 subjects with the following
          delivery methods
        </p>
      </div>
      <div className="flex md:flex-row justify-center items-center gap-24">
        <div
          id="submain"
          className="grid  lg:grid-cols-4  md:grid-cols-2 md:lg:sm:px-0  grid-cols-1  lg:md:xl:gap-16 mx-20 items-center justify-center"
        >
          <div id="1" className=" relative">
            <div className=" relative" id="mainone">
              <div
                className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
                id="bgimg"
                style={{
                  backgroundImage: `url(https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=0&k=20&c=yvFDnYMNEJ6WEDYrAaOOLXv-Jhtv6ViBRXSzJhL9S_k=)`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[265px] h-24"
                id="card"
              >
                <p className=" font-bold pt-2 text-[17px]">Training</p>
                <Link>
                  <p className="font-medium pt-2  hover:text-white bg-violet-400 hover:bg-violet-800 rounded p-2">
                    Enquire Now
                  </p>
                </Link>
              </div>
              <div
                className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
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
                  backgroundImage: `url(https://media.istockphoto.com/id/962475722/photo/in-the-classroom-multi-ethnic-students-listening-to-a-lecturer-and-writing-in-notebooks-smart.jpg?s=612x612&w=0&k=20&c=38ErkFjyefylmvNQ5QR5fTHFKFZrr3-vWn5E4toX2Ng=)`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[265px] h-24"
                id="card"
              >
                <p className=" font-bold pt-2 text-[17px]">Instructor-Led</p>
                <Link>
                  <p className="font-medium pt-2  bg-violet-400 hover:bg-violet-800 hover:text-white rounded p-2">
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
                  backgroundImage: `url(https://media.istockphoto.com/id/637874086/photo/we-have-everything-we-need-to-pass.jpg?s=612x612&w=0&k=20&c=TA25BjZfpE2I7s6kxYmkoXwN8F_H7rlgqKSV1Rv7kD4=)`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[265px] h-24"
                id="card"
              >
                <p className=" font-bold pt-2 text-[17px]">Self-Paced</p>
                <Link>
                  <p className="font-medium pt-2  hover:text-white bg-violet-400 hover:bg-violet-800rounded p-2">
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
                  backgroundImage: `url(https://media.istockphoto.com/id/1342231337/photo/group-of-international-people-listening-to-teacher-at-classroom.jpg?s=612x612&w=0&k=20&c=u0Iy6IBCNivBF394ijilQnlsPtqpJg9nCKUhtj9J65M=)`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[275px] h-24"
                id="card"
              >
                {/* <div className="flex justify-center items-center flex-row h-24 gap-8"> */}

                <div className=" font-bold pt-2 text-[17px]">
                  Onsite Training
                </div>
                <Link>
                  <div className="font-medium  bg-violet-400 hover:bg-violet-800 hover:text-white  rounded p-2">
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
