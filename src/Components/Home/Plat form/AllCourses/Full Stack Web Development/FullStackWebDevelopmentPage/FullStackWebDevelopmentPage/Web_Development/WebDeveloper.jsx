// import React from "react";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { IoRemoveOutline } from "react-icons/io5";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import WebDevelopmentCard from "./WebDevelopmentCard";
// // import skills from "../../../../../../../../assets/WebDeveloper/skills.png";
// // import requirements from "../../../../../../../../assets/WebDeveloper/requirements.png";
// import Skill1 from "../../../../../../../../assets/WebDeveloper/skills1.png";
// import Skill2 from "../../../../../../../../assets/WebDeveloper/skills2.png";

// const softSkills = [
//   { name: "Project Management" },
//   { name: "Interpersonal Skills" },
//   { name: "Communication Skills" },
//   { name: "Critical Thinking Skills" },
//   { name: "Setting Up Projects" },
// ];

// const technicalSkills = [
//   { name: "MongoDB" },
//   { name: "Express.js" },
//   { name: "Angular" },
//   { name: "Node.js" },
//   { name: "RESTful APIs" },
// ];

// const WebDeveloper = () => {
//   return (
//     <>
//       <WebDevelopmentCard />
//       <div className="flex flex-col items-center text-center">
//         <h1 className="text-3xl font-semibold">
//           Full stack <span className="text-[#F6AC14]">Web development</span>{" "}
//           skills
//         </h1>
//         <p>
//           The future of learning The future of learning The future of learning
//           The future of learning The future of <br />
//           learning The future of learning The future of
//         </p>
//       </div>

//       <div
//         id="main"
//         className="gap-10  grid lg:grid-cols-3 grid-cols-1 p-10 justify-center items-center"
//       >
//         <div
//           id="1"
//           className="w-[400px] rounded-lg h-64 bg-[#0098F1]  relative"
//         >
//           <div className=" rounded-lg   flex items-center">
//             <img src={Skill1} className="w-24 h-24 mr-4 my-0 mb-32" />
//             <div>
//               <h2 className="text-base font-extrabold text-white sm:text-xl lg:text-lg xl:text-3xl font-lora">
//                 Soft Skills
//               </h2>
//               <div className="">
//                 {softSkills.map((skill, index) => (
//                   <div key={index} className="flex items-center mr-4 mb-2">
//                     <p className="text-base text-white font-lora">
//                       <FaArrowAltCircleRight className="text-white inline mx-2" />
//                       {skill.name}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id="2" className="rounded-lg w-[400px] h-64 relative">
//           <div className="bg-[#0098F1] rounded-lg shadow-2xl h-64  flex items-center">
//             <img src={Skill2} className="w-24 h-24 mr-4 my-0 mb-40" />
//             <div>
//               <h2 className="text-base font-extrabold text-white sm:text-xl lg:text-lg xl:text-3xl font-lora">
//                 Technical Skills
//               </h2>
//               <div className="">
//                 {technicalSkills.map((skill, index) => (
//                   <div key={index} className="flex items-center mr-4 mb-2">
//                     <p className="text-base text-white font-lora">
//                       <FaArrowAltCircleRight className="text-white inline mx-2" />
//                       {skill.name}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id="3" className="w-[400px] h-40 rounded-lg flex items-center">
//           <div className="p-4 rounded-lg flex items-center"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WebDeveloper;

import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoRemoveOutline, IoReorderThreeOutline } from "react-icons/io5";
import WebDevelopmentCard from "./WebDevelopmentCard";
import Skill1 from "../../../../../../../../assets/WebDeveloper/skills1.png";
import Skill2 from "../../../../../../../../assets/WebDeveloper/skills2.png";

const softSkills = [
  { name: "Project Management" },
  { name: "Interpersonal Skills" },
  { name: "Communication Skills" },
  { name: "Critical Thinking Skills" },
  { name: "Setting Up Projects" },
];

const technicalSkills = [
  { name: "MongoDB" },
  { name: "Express.js" },
  { name: "Angular" },
  { name: "Node.js" },
  { name: "RESTful APIs" },
];

const WebDeveloper = () => {
  return (
    <>
      <WebDevelopmentCard />
      <div className="flex flex-col items-center  mt-28 text-center">
        <h1 className="text-3xl font-semibold">
          Full stack <span className="text-[#F6AC14]">Web development</span>{" "}
          skills
        </h1>
        <p>
          The future of learning The future of learning The future of learning
          The future of learning The future of <br />
          learning The future of learning The future of
        </p>
      </div>

      <div className="flex justify-center">
        <div
          id="main"
          className="gap-10 grid lg:grid-cols-2 grid-cols-1 p-10 justify-center items-center"
        >
          <div
            id="1"
            className="w-[400px] rounded-lg h-64 bg-[#0098F1] relative"
          >
            <div className="rounded-lg flex items-center">
              <img src={Skill1} className="w-24 h-24 mr-4 my-0 mb-32" />
              <div>
                <h2 className="text-base font-extrabold text-white sm:text-xl lg:text-lg xl:text-3xl font-lora">
                  Soft Skills
                </h2>
                <div className="">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center mr-4 mb-2">
                      <p className="text-base text-white font-lora">
                        <FaArrowAltCircleRight className="text-white inline mx-2" />
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div id="2" className="rounded-lg w-[400px] h-64 relative">
            <div className="bg-[#0098F1] rounded-lg shadow-2xl h-64 flex items-center">
              <img src={Skill2} className="w-24 h-24 mr-4 my-0 mb-40" />
              <div>
                <h2 className="text-base font-extrabold text-white sm:text-xl lg:text-lg xl:text-3xl font-lora">
                  Technical Skills
                </h2>
                <div className="">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="flex items-center mr-4 mb-2">
                      <p className="text-base text-white font-lora">
                        <FaArrowAltCircleRight className="text-white inline mx-2" />
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDeveloper;
