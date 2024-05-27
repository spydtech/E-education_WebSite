// import React from "react";

// const CertifiedEthicalHackingAbout = () => {
//   return (
//     <div
//       className=" mx-auto w-full pl-20 p-1 bg-gradient-to-r from-yellow-400 to-red-500 mb-8
// "
//     >
//       <div className="pt-0">
//         <p className="text-orange-600 text-xl font-medium">
//           About The Ethical Hacking Course
//         </p>
//       </div>
//       <div className="py-2">
//         <p className="text-6xl font-lora">
//           Discover the
//           <p className="text-violet-800 my-2">Ethical Hacking Program</p>
//         </p>
//       </div>

//       <div className="flex flex-wrap  items-center pb-6">
//         <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img
//               className="w-full h-52 object-cover object-center"
//               src="https://img.freepik.com/premium-vector/software-development-programming-language-coding-isometric-pc-computer-with-digital-application-white-background_284092-318.jpg?w=740"
//               alt="career-assistance"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-bold mb-2">Career Assistance</h2>
//               <p className="text-gray-700">
//                 Stay ahead with access to one-on-one career counseling sessions
//                 and mock interviews with industry professionals.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img
//               className="w-full h-52 object-cover"
//               src="https://img.freepik.com/free-vector/flat-design-steal-data-concept_23-2148540682.jpg?t=st=1716561218~exp=1716564818~hmac=3f566c928a6a3c872f9e309bd87769842689cf286f25a26149456a0fe2679eee&w=740"
//               alt="student-support"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-bold mb-2">Student Support</h2>
//               <p className="text-gray-700">
//                 Access student support via support@machinelearning.com or
//                 through the "ask us?" option on our learning platform for urgent
//                 queries.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertifiedEthicalHackingAbout;

import React from "react";

const CertifiedEthicalHackingAbout = () => {
  return (
    <div className=" mx-auto w-full md:lg:xl:pl-20  p-1 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600">
      <div className="pt-0">
        <p className="text-pink-800 text-xl font-medium">
          About The Ethical Hacking Course
        </p>
      </div>
      <div className="py-2">
        <p className="text-6xl font-lora">
          Discover the
          <p className="text-violet-800 my-2">Ethicalhacking Program</p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* <img
              className="w-full h-52 object-cover object-center"
              src={assistance}
              alt="career-assistance"
            /> */}
            <img
              className="w-full h-52 object-cover object-center"
              src="https://img.freepik.com/premium-vector/software-development-programming-language-coding-isometric-pc-computer-with-digital-application-white-background_284092-318.jpg?w=740"
              alt="career-assistance"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Career Assistance</h2>
              <p className="text-gray-700">
                Stay ahead with access to one-on-one career counseling sessions
                and mock interviews with industry professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* <img
              className="w-full h-52 object-cover"
              src={programmer}
              alt="student-support"
            /> */}
            <img
              className="w-full h-52 object-cover"
              src="https://img.freepik.com/free-vector/flat-design-steal-data-concept_23-2148540682.jpg?t=st=1716561218~exp=1716564818~hmac=3f566c928a6a3c872f9e309bd87769842689cf286f25a26149456a0fe2679eee&w=740"
              alt="student-support"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Student Support</h2>
              <p className="text-gray-700">
                Access student support via support@machinelearning.com or
                through the "ask us?" option on our learning platform for urgent
                queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertifiedEthicalHackingAbout;
