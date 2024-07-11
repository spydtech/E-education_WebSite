import React from "react";
import certificate from "../../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";

// ERROR in ./src/Components/Home/Plat form/AllCourses/CertifiedEthicalHacking/CertifiedEthicalHackingAbout/CertifiedEthicalHackingCertificate.jsx 43:0-86
// Module not found: Error: Can't resolve '../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png' in 'D:\E-education_Frontend\E-education_WebSite\src\Components\Home\Plat form\AllCourses\CertifiedEthicalHacking\CertifiedEthicalHackingAbout'
// ERROR in ./src/Components/Home/Plat form/AllCourses/CertifiedEthicalHacking/certifiedEthicalHacking.jsx 6:0-47
// Module not found: Error: Can't resolve '../../../ooter/Footer' in 'D:\E-education_Frontend\E-education_WebSite\src\Components\Home\Plat form\AllCourses\CertifiedEthicalHacking'
function AdvancedNetworkSecurityCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid  grid-cols-1 md:lg:grid-cols-2 pb-16 bg-gradient-to-br from-[#480ca8] to-[#350657]"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-[#07beb8] text-xl font-medium">
              Advanced Network Security Certification
            </p>
            <p className="text-6xl font">
              Achieve{" "}
              <p className="text-[#07beb8]">Credentials and Recognition</p>
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain a Advanced
              Network Security certification, greatly enhancing career prospects
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
export default AdvancedNetworkSecurityCertificate;
