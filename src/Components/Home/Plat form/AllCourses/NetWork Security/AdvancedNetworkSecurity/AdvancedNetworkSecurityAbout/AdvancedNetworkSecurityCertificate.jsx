import React from "react";
import certificate from "../../../../../../../assetss/certficate.png";

// ERROR in ./src/Components/Home/Plat form/AllCourses/CertifiedEthicalHacking/CertifiedEthicalHackingAbout/CertifiedEthicalHackingCertificate.jsx 43:0-86
// Module not found: Error: Can't resolve '../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png' in 'D:\E-education_Frontend\E-education_WebSite\src\Components\Home\Plat form\AllCourses\CertifiedEthicalHacking\CertifiedEthicalHackingAbout'
// ERROR in ./src/Components/Home/Plat form/AllCourses/CertifiedEthicalHacking/certifiedEthicalHacking.jsx 6:0-47
// Module not found: Error: Can't resolve '../../../ooter/Footer' in 'D:\E-education_Frontend\E-education_WebSite\src\Components\Home\Plat form\AllCourses\CertifiedEthicalHacking'
function AdvancedNetworkSecurityCertificate() {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-center items-center md:px-10 md:gap-8">
        {/* Certificate Image */}
        <div className="flex justify-center items-center">
          <img src={certificate} alt="certificate" className="" />
        </div>

        {/* Text Content */}
        <div className="space-y-3 text-center md:text-left">
          <p className="md:text-2xl font-bold text-[#0098F1]">
            Achieve Credentials and Recognition
          </p>
          <p className="md:text-xl text-gray-500">
            Successfully complete all course modules to obtain a Network
            Security certification, greatly enhancing career prospects and skill
            development.
          </p>
        </div>
      </div>
    </>
  );
}
export default AdvancedNetworkSecurityCertificate;
