// import React from "react";
// import { IoRemoveOutline } from "react-icons/io5";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { SiGoogleclassroom } from "react-icons/si";
// import { FaLaptopCode } from "react-icons/fa";
// import { LiaChalkboardTeacherSolid } from "react-icons/lia";
// import { MdModelTraining } from "react-icons/md";

// function Delivery_Methods() {
//   return (
//     <div className="mb-32">
//       <div id="heading" className=" py-10 space-y-2 px-32  ">
//         <h1 className="text-center font-bold text-5xl md:lg:sm:w-auto w-96 text-violet-800 font-lora">
//           Our Available Delivery Methods
//         </h1>
//         <h1 className=" flex justify-center md:lg:sm:w-auto w-96 text-cyan-500">
//           <IoRemoveOutline className="text-[40px]" />
//           <IoReorderThreeOutline className="text-[40px]" />{" "}
//           <IoRemoveOutline className="text-[40px]" />
//         </h1>
//         <p className="text-center text-xl md:lg:sm:w-full w-[400px] font-lora">
//           The E-Education is World's Leading Organisation for training
//           professionals.The E-Education provides training is 490+ location is
//           around 221+ countries,covering 3000 subjects with the following
//           delivery methods
//         </p>
//       </div>
//       <div className="flex md:flex-row justify-center items-center gap-24">
//         <div
//           id="submain"
//           className="grid  lg:grid-cols-4  md:grid-cols-2 md:lg:sm:px-0  grid-cols-1  lg:md:xl:gap-16 mx-20 items-center justify-center"
//         >
//           <div id="1" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(https://img.freepik.com/free-photo/interior-designer-working-decoration-project_23-2150334532.jpg?t=st=1715793146~exp=1715796746~hmac=524aa6ea0c33dfb878b5cf16f0cd0f0cc68e284b6261ffd972b327e373693246&w=360)`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[265px] h-24"
//                 id="card"
//               >
//                 <p className=" font-bold pt-2 text-[17px]">Training</p>
//                 <Link>
//                   <p className="font-medium pt-2  hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </p>
//                 </Link>
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <SiGoogleclassroom className="text-[40px] " />
//               </div>
//             </div>
//           </div>

//           <div id="2" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700  h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(https://img.freepik.com/free-photo/young-man-learning-virtual-classroom_23-2149200236.jpg?t=st=1715793370~exp=1715796970~hmac=6bc7b7550bbcfa908f4ecfde2d6242db5d3476ea6e264486a80e4ba4928ee834&w=360)`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[265px] h-24"
//                 id="card"
//               >
//                 <p className=" font-bold pt-2 text-[17px]">Instructor-Led</p>
//                 <Link>
//                   <p className="font-medium pt-2  bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </p>
//                 </Link>
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <FaLaptopCode className="text-[40px] " />
//               </div>
//             </div>
//           </div>

//           <div id="3" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(https://img.freepik.com/free-photo/medium-shot-smiley-woman-working-with-laptop_23-2148929702.jpg?t=st=1715793427~exp=1715797027~hmac=b0a88655771418d86994ca2e9007b6d08f753c4f64b2c86a3bd83b38eaa1eee1&w=740)`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[265px] h-24"
//                 id="card"
//               >
//                 <p className=" font-bold pt-2 text-[17px]">Self-Paced</p>
//                 <Link>
//                   <p className="font-medium pt-2  hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </p>
//                 </Link>
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <LiaChalkboardTeacherSolid className="text-[40px] " />
//               </div>
//             </div>
//           </div>

//           <div id="4" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(https://img.freepik.com/free-photo/female-african-american-speaker-giving-presentation-hall-university-workshop_155003-3580.jpg?t=st=1715793468~exp=1715797068~hmac=50e2e33f1f529d9c2cc46a6f1632334d9d9a0cbc6d3ba402aec753997d37b90b&w=360)`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[275px] h-24"
//                 id="card"
//               >
//                 {/* <div className="flex justify-center items-center flex-row h-24 gap-8"> */}

//                 <div className=" font-bold pt-2 text-[17px]">
//                   Onsite Training
//                 </div>
//                 <Link>
//                   <div className="font-medium  bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </div>
//                 </Link>
//                 {/* </div> */}
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <MdModelTraining className="text-[40px] " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Delivery_Methods;

// import React from "react";
// import { IoRemoveOutline, IoReorderThreeOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { SiGoogleclassroom } from "react-icons/si";
// import { FaLaptopCode } from "react-icons/fa";
// import { LiaChalkboardTeacherSolid } from "react-icons/lia";
// import { MdModelTraining } from "react-icons/md";

// function Delivery_Methods() {
//   return (
//     <div className="mb-32">
//       <div id="heading" className="py-10 space-y-2 px-8 md:px-32">
//         <h1 className="text-center font-bold text-5xl md:text-lg lg:text-xl sm:text-2xl text-violet-800 font-lora">
//           Our Available Delivery Methods
//         </h1>
//         <h1 className="flex justify-center text-cyan-500">
//           <IoRemoveOutline className="text-[40px]" />
//           <IoReorderThreeOutline className="text-[40px]" />{" "}
//           <IoRemoveOutline className="text-[40px]" />
//         </h1>
//         <p className="text-center text-xl md:text-lg lg:text-base sm:text-xl font-lora">
//           The E-Education is World's Leading Organisation for training
//           professionals. The E-Education provides training in 490+ locations
//           around 221+ countries, covering 3000 subjects with the following
//           delivery methods
//         </p>
//       </div>
//       <div className="flex md:flex-row justify-center items-center gap-24">
//         <div
//           id="submain"
//           className="grid  lg:grid-cols-4  md:grid-cols-2 md:lg:sm:px-0  grid-cols-1  lg:md:xl:gap-16 mx-20 items-center justify-center"
//         >
//           <div id="1" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(https://img.freepik.com/free-photo/interior-designer-working-decoration-project_23-2150334532.jpg?t=st=1715793146~exp=1715796746~hmac=524aa6ea0c33dfb878b5cf16f0cd0f0cc68e284b6261ffd972b327e373693246&w=360)`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[265px] h-24"
//                 id="card"
//               >
//                 <p className=" font-bold pt-2 text-[17px]">Training</p>
//                 <Link>
//                   <p className="font-medium pt-2  hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </p>
//                 </Link>
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <SiGoogleclassroom className="text-[40px] " />
//               </div>
//             </div>
//           </div>

//           <div id="2" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700  h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(https://img.freepik.com/free-photo/young-man-learning-virtual-classroom_23-2149200236.jpg?t=st=1715793370~exp=1715796970~hmac=6bc7b7550bbcfa908f4ecfde2d6242db5d3476ea6e264486a80e4ba4928ee834&w=360)`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[265px] h-24"
//                 id="card"
//               >
//                 <p className=" font-bold pt-2 text-[17px]">Instructor-Led</p>
//                 <Link>
//                   <p className="font-medium pt-2  bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </p>
//                 </Link>
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <FaLaptopCode className="text-[40px] " />
//               </div>
//             </div>
//           </div>

//           <div id="3" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(https://img.freepik.com/free-photo/medium-shot-smiley-woman-working-with-laptop_23-2148929702.jpg?t=st=1715793427~exp=1715797027~hmac=b0a88655771418d86994ca2e9007b6d08f753c4f64b2c86a3bd83b38eaa1eee1&w=740)`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[265px] h-24"
//                 id="card"
//               >
//                 <p className=" font-bold pt-2 text-[17px]">Self-Paced</p>
//                 <Link>
//                   <p className="font-medium pt-2  hover:text-white bg-blue-300 hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </p>
//                 </Link>
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <LiaChalkboardTeacherSolid className="text-[40px] " />
//               </div>
//             </div>
//           </div>

//           <div id="4" className=" relative">
//             <div className=" relative" id="mainone">
//               <div
//                 className="bg-yellow-700 h-64 w-64 bg-cover bg-center relative rounded-lg"
//                 id="bgimg"
//                 style={{
//                   backgroundImage: `url(https://img.freepik.com/free-photo/female-african-american-speaker-giving-presentation-hall-university-workshop_155003-3580.jpg?t=st=1715793468~exp=1715797068~hmac=50e2e33f1f529d9c2cc46a6f1632334d9d9a0cbc6d3ba402aec753997d37b90b&w=360)`,
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 bg-black opacity-50 rounded-lg"
//                   style={{ zIndex: 1 }}
//                 ></div>
//               </div>
//               <div
//                 className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-4 shadow-2xl absolute text-black -bottom-11 left-4 z-10 w-[275px] h-24"
//                 id="card"
//               >
//                 {/* <div className="flex justify-center items-center flex-row h-24 gap-8"> */}

//                 <div className=" font-bold pt-2 text-[17px]">
//                   Onsite Training
//                 </div>
//                 <Link>
//                   <div className="font-medium  bg-blue-300 hover:text-white hover:bg-blue-600 rounded p-2">
//                     Enquire Now
//                   </div>
//                 </Link>
//                 {/* </div> */}
//               </div>
//               <div
//                 className="bg-gray-300 bottom-[25px] left-8 w-16 flex items-center justify-center h-16 rounded-full absolute z-20"
//                 id="icon"
//               >
//                 <MdModelTraining className="text-[40px] " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Delivery_Methods;

import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import istock from "../../../../../../../../assets/Delivery_MethodsPic/istock.jpg";
import onsite from "../../../../../../../../assets/Delivery_MethodsPic/onsite.jpg";
import online from "../../../../../../../../assets/Delivery_MethodsPic/onlineinstrutor.jpg";
import self from "../.././../../../../../../assets/Delivery_MethodsPic/selfinstrutor.jpg";
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
        <div className="text-center font-bold text-xl lg:text-5xl md:lg:sm:w-auto md:w-96 text-violet-800 font-lora">
          Our Available Delivery Methods
        </div>
        <div className=" flex justify-center md:lg:sm:w-auto md:w-96 text-cyan-500">
          <IoRemoveOutline className="text-[40px]" />
          <IoReorderThreeOutline className="text-[40px]" />{" "}
          <IoRemoveOutline className="text-[40px]" />
        </div>
        <div className="text-center text-base md:lg:sm:w-full md:w-[400px] font-lora pb-8">
          The E-Education is World's Leading Organisation for training
          professionals. The E-Education provides training in 490+ locations
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
                  backgroundImage: `url(${online})`,
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
              <div
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-8 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-[200px] h-24"
                id="card"
              >
                <p className=" font-bold pt-2 text-[17px]">Instructor-Led</p>
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
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row gap-8 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-[200px] h-24"
                id="card"
              >
                <p className=" font-bold pt-2 text-[17px]">Self-Paced</p>
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
                className="bg-white px-3 rounded-lg flex justify-center items-center md:flex-row  gap-8 shadow-2xl absolute text-black -bottom-11 left-4 z-10 md:w-[288px] w-[200px] h-24"
                id="card"
              >
                {/* <div className="flex justify-center items-center flex-row h-24 gap-8"> */}

                <div className=" font-bold pt-2 text-[17px]">
                  Onsite Training
                </div>
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
