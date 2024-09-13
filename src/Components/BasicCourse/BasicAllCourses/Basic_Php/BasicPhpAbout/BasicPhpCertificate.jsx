// import React from "react";
// import certificate from "../../../../../assetss/certficate.png";

// function BasicPhpCertificate() {
//   return (
//     <div className="bg-white mb-20 pt-10">
//       <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-center items-center">
//         <div className="flex justify-center items-center">
//           <img
//             src={certificate}
//             alt="certificate"
//             className="max-w-full h-auto"
//           />
//         </div>
//         <div className="flex justify-center items-center">
//           <div className="space-y-5 text-center md:text-left p-5">
//             <p className="text-2xl font-bold text-[#f6ac14]">
//               Php Certification
//             </p>
//             <p className="text-xl text-gray-500">
//               Successfully complete all course modules to obtain a Basic Php
//               Fundamentals certification, greatly enhancing career prospects and
//               skill development.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BasicPhpCertificate;


import React from "react";
import certificate from "../../../../../assetss/certficate.png";

function BasicPhpCertificate() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-center items-center">
      {/* Certificate Image */}
      <div className="flex justify-center items-center">
        <img src={certificate} alt="certificate" className="" />
      </div>

      {/* Text Content */}
      <div className="space-y-3 text-center md:text-left lg:self-start lg:mt-5">
        <p className="md:text-2xl font-bold text-[#0098F1]">Achieve Credentials and Recognition</p>
        <p className="md:text-xl text-gray-500">
          Successfully complete all course modules to obtain a Basic PHP Fundamentals certification, greatly enhancing career prospects and skill development.
        </p>
      </div>
    </div>
  );
}

export default BasicPhpCertificate;
