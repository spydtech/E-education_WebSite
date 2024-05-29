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
      <div id="heading" className="py-10 space-y-2 px-32">
        <h1 className="text-center font-bold text-5xl md:lg:sm:w-auto w-96 text-violet-800 font-lora">
          Our Available Delivery Methods
        </h1>
        <h1 className="flex justify-center md:lg:sm:w-auto w-96 text-cyan-500">
          <IoRemoveOutline className="text-[40px]" />
          <IoReorderThreeOutline className="text-[40px]" />{" "}
          <IoRemoveOutline className="text-[40px]" />
        </h1>
        <p className="text-center text-xl md:lg:sm:w-full w-[400px] font-lora">
          E-Education is the world's leading organization for training
          professionals. E-Education provides training in 490+ locations across
          221+ countries, covering 3000 subjects with the following delivery
          methods.
        </p>
      </div>
      <div className="flex md:flex-row justify-center items-center gap-24">
        <div
          id="submain"
          className="grid lg:grid-cols-4 md:grid-cols-2 md:lg:sm:px-0 grid-cols-1 lg:md:xl:gap-16 mx-20 items-center justify-center"
        >
          <div id="1" className="relative">
            <div className="relative" id="mainone">
              <div
                className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
                id="bgimg"
                style={{
                  backgroundImage: `url(https://media.istockphoto.com/id/1494535091/video/asian-student-using-laptop.jpg?s=640x640&k=20&c=5GFI5-T32Ss_2mhXYoLoaqJ32dHFVG1uu4EMB0Sg54s=)`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-8 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[288px] h-24"
                id="card"
              >
                <p className="font-bold pt-2 text-[17px]">Training</p>
                <Link>
                  <p className="font-medium pt-2 hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
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

          <div id="2" className="relative">
            <div className="relative" id="mainone">
              <div
                className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
                id="bgimg"
                style={{
                  backgroundImage: `url(https://media.istockphoto.com/id/1472503770/video/education-laptop-and-study-with-girl-in-library-for-homework-elearning-or-internet-exam.jpg?s=640x640&k=20&c=lSTQKMNEuuYqJ04th8iMdj_wuR6ffBuc-Qr4Iwdx0xo=)`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-8 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[288px] h-24"
                id="card"
              >
                <p className="font-bold pt-2 text-[17px]">Instructor-Led</p>
                <Link>
                  <p className="font-medium pt-2 bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
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

          <div id="3" className="relative">
            <div className="relative" id="mainone">
              <div
                className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
                id="bgimg"
                style={{
                  backgroundImage: `url(https://media.istockphoto.com/id/2107384736/video/girl-and-boy-typing-on-laptop-searching-material-for-a-joint-school-project.jpg?s=640x640&k=20&c=7btrnE4iKd2w8iGejqKMqOQgoOVX2eN43Wc9KCqcteE=)`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-8 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[288px] h-24"
                id="card"
              >
                <p className="font-bold pt-2 text-[17px]">Self-Paced</p>
                <Link>
                  <p className="font-medium pt-2 hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
                    Enquire Now
                  </p>
                </Link>
              </div>
              <div
                className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
                id="icon"
              >
                <LiaChalkboardTeacherSolid
                  className="
text-[40px] "
                />
              </div>
            </div>
          </div>

          <div id="4" className="relative">
            <div className="relative" id="mainone">
              <div
                className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
                id="bgimg"
                style={{
                  backgroundImage: `url(https://media.istockphoto.com/id/1473668785/video/mother-talking-with-her-kids-when-working-from-home.jpg?s=640x640&k=20&c=Th9amVrd_Kk93ZSJxnQiRfAq9xW8gMR0Cku-pGbr5wA=)`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-8 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[288px] h-24"
                id="card"
              >
                <div className="font-bold pt-2 text-[17px]">
                  Onsite Training
                </div>
                <Link>
                  <div className="font-medium bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
                    Enquire Now
                  </div>
                </Link>
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
