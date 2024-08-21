import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
const About = () => {
  return (
    <>
      <div className=" lg:pl-20  w-5/6"> 
      <div className="lg:text-4xl font-bold text-2xl text-[#0098F1] ">About this Course</div>
        <div className="pt-4 w-full text-[#0098F1] pb-8 font">
        Mastering .NET Full Stack Development involves becoming proficient in
          both front-end and back-end technologies, enabling developers to build
          scalable and dynamic web applications. Here's a breakdown of the
          essential skills:
        </div>         
        <div className="py-2 gap-4 leading-2 pb-8 ">
          <div className="mt-1 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl pb-2 lg:text-2xl font-bold"> Front-End Development:</div>
          <div className="  text-[#0098F1] leading-2 lg:text-lg text-base">
            <span className="mt-3 text-[#F6AC14] sm:mt-5 text-lg font-medium">ASP.NET Core:
            </span>{" "}
            Mastery of ASP.NET Core is essential for building interactive user
            interfaces and single-page applications, leveraging component-based
            architecture.
          </div>
          <div className="text-[#0098F1] leading-2 lg:text-lg text-base">
            <span className="mt-3 text-xl  text-[#F6AC14] sm:mt-5 font-medium ">  HTML/CSS:
            </span>{" "}
            Proficiency in HTML and CSS is necessary for structuring web pages
            and styling them to create visually appealing designs.
          </div>
          <div className="  text-[#0098F1] leading-2 lg:text-lg text-base">
            <span className="mt-3  font-lg text-[#F6AC14]  sm:mt-5 text-lg font-medium">
            JavaScript:
            </span>{" "}
            A strong understanding of JavaScript is fundamental for implementing
            client-side logic and enhancing user experiences.
          </div>
        </div>
        <div className="py-2 gap-4 pb-8 ">
          <div className="mt-1  tracking-tight leading-2 sm:leading-none sm:text-xl pb-2 lg:text-2xl font-bold text-[#0098F1]"> Back-End Development:</div>
          <div className="  text-[#0098F1] leading-2 lg:text-lg text-base">
            <span className="mt-3   text-[#F6AC14] sm:mt-5 text-lg font-medium">
            .NET Core:
            </span>{" "}
            Proficiency in .NET Core is crucial for building scalable
            server-side applications, facilitating seamless communication
            between the front-end and back-end.
            <div className="  text-[#0098F1] leading-2 lg:text-lg font"> 
              <span className="mt-3 sm:mt-5 text-[#F6AC14] text-lg font-medium">
             Entity Framework:
             </span>{" "}
             Understanding Entity Framework is essential for creating robust APIs
             and handling database operations efficiently in .NET applications.
          </div>
          <div className="  text-[#0098F1] leading-2 lg:text-lg text-base">
            <span className="mt-3  text-lg text-[#F6AC14] sm:mt-5 font-medium font">
               Database Management:
            </span>{" "}
            Knowledge of databases like SQL Server or other relational databases
            and their integration with .NET is essential for managing data and
            performing CRUD operations.
        </div>
        <div className="mt-3  text-[#0098F1] sm:mt-5 sm:text-xl pb-2 lg:text-2xl font-bold">What you'll learn</div>
        <div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]" />
            </div>
            <div className="  text-[#0098F1] text-lg font-medium" > Master the skills needed for .NET Full Stack Development.</div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]" />
            </div>
            <div className=" text-base  text-[#0098F1] lg:text-lg font">
            Build scalable and dynamic web applications from scratch.
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="  text-base  text-[#0098F1] lg:text-lg ">
            Gain proficiency in both front-end and back-end technologies for
            comprehensive development expertise.
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default About;




// import React from "react";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// const About = () => {
//   return (
//     <>
//       <div>
//       <div className="fone-bold text-[#0098F1] md:text-5xl font text-2xl font-bold">
//           About this Course
//         </div>
//         <div className="pt-4 text-[#0098F1] font">
         
//         </div>
//         <div className="py-2 gap-4">
//           <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl lg:text-2xl font">
           
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 text-base font-bold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               ASP.NET Core:
//             </span>{" "}
//             Mastery of ASP.NET Core is essential for building interactive user
//             interfaces and single-page applications, leveraging component-based
//             architecture.
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 text-base font-bold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               HTML/CSS:
//             </span>{" "}
//             Proficiency in HTML and CSS is necessary for structuring web pages
//             and styling them to create visually appealing designs.
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 text-base font-bold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               JavaScript:
//             </span>{" "}
//             A strong understanding of JavaScript is fundamental for implementing
//             client-side logic and enhancing user experiences.
//           </div>
//         </div>
//         <div className="py-2 gap-4">
//           <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl lg:text-2xl font">
//             Back-End Development
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 font-bold text-base text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               .NET Core:
//             </span>{" "}
//             Proficiency in .NET Core is crucial for building scalable
//             server-side applications, facilitating seamless communication
//             between the front-end and back-end.
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 font-bold text-base text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               Entity Framework:
//             </span>{" "}
//             Understanding Entity Framework is essential for creating robust APIs
//             and handling database operations efficiently in .NET applications.
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 font-bold text-base text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               Database Management:
//             </span>{" "}
//             Knowledge of databases like SQL Server or other relational databases
//             and their integration with .NET is essential for managing data and
//             performing CRUD operations.
//           </div>
//         </div>

//         <div className="py-8">
//           <hr className="border-t border-[#0098F1]" />
//         </div>
//         <div className="mt-3 font-extrabold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           What you'll learn
//         </div>
//         <div>
//           <div className="flex justify-start items-center font mt-2">
//             <div>
//             <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
//             </div>
//             <div className="text-[#0098F1] text-lg font">
//               Master the skills needed for .NET Full Stack Development.
//             </div>
//           </div>
//           <div className="flex justify-start items-center font mt-2">
//             <div>
//             <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
//             </div>
//             <div className="text-[#0098F1] text-lg font">
//               Build scalable and dynamic web applications from scratch.
//             </div>
//           </div>
//           <div className="flex justify-start items-center font mt-2">
//             <div>
//             <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
//             </div>
//             <div className="text-[#0098F1] text-lg font">
//               Gain proficiency in both front-end and back-end technologies for
//               comprehensive development expertise.
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About; */}
