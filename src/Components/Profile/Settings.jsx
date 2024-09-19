// import React, { useState } from "react";
// import { FaUserEdit } from "react-icons/fa";
// import { FaRegCreditCard } from "react-icons/fa";
// import { FaMessage } from "react-icons/fa6";
// import { CgNotes } from "react-icons/cg";
// import { FaCalendarCheck } from "react-icons/fa";
// import Account from "./Account/Account";
// import Payment from "./Payment/Payment";
// import Navbar from "../Navbar";
// import Footer from "../Home/footer/Footer";
// import Calendar from "./Calendar Sync/Calendar ";
// import Notes from "./Notes/Notes";
// import Communication from "./Communication Preferences/Communication";

// function Settings({ usernameFirstLetter }) {
//   const [activeTab, setActiveTab] = useState("tab1");

//   const openTab = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div>
//       <Navbar usernameFirstLetter={usernameFirstLetter} />
//       <div className="bg-blue-100 p-10">
//         <div className="w-full max-w-md mx-auto md:max-w-none md:flex md:gap-10 pt-10 ">
//           <div className="grid-fix space-y-5">
//             <button
//               className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
//                 activeTab === "tab1" && "active:bg-blue-200"
//               }`}
//               onClick={() => openTab("tab1")}
//             >
//               <FaUserEdit className="text-xl" />
//               Account
//             </button>
//             <button
//               className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
//                 activeTab === "tab2" && "active:bg-blue-200"
//               }`}
//               onClick={() => openTab("tab2")}
//             >
//               <FaRegCreditCard className="text-xl" />
//               Payment
//             </button>
//             <button
//               className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
//                 activeTab === "tab2" && "active:bg-blue-200"
//               }`}
//               onClick={() => openTab("tab3")}
//             >
//               <FaMessage className="text-xl" />
//               Communication Preferences
//             </button>
//             <button
//               className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
//                 activeTab === "tab2" && "active:bg-blue-200"
//               }`}
//               onClick={() => openTab("tab4")}
//             >
//               <CgNotes className="text-xl" />
//               Notes & Highlights
//             </button>
//             <button
//               className={`flex hover:underline text-start font-medium text-gray-700 ${
//                 activeTab === "tab2" && "active:bg-blue-200"
//               }`}
//               onClick={() => openTab("tab5")}
//             >
//               <FaCalendarCheck className="text-xl" />
//               Calendar Sync
//             </button>
//           </div>
//           <div
//             id="tab1"
//             className={`tabcontent p-4 w-full h-full ${
//               activeTab === "tab1" ? "" : "hidden"
//             }`}
//           >
//             <Account />
//           </div>
//           <div
//             id="tab2"
//             className={`tabcontent py-4 md:py-0 w-full h-full ${
//               activeTab === "tab2" ? "" : "hidden"
//             }`}
//           >
//             <Payment />
//           </div>
//           <div
//             id="tab3"
//             className={`tabcontent p-4 ${activeTab === "tab3" ? "" : "hidden"}`}
//           >
//             <Communication />
//           </div>
//           <div
//             id="tab4"
//             className={`tabcontent p-4  ${
//               activeTab === "tab4" ? "" : "hidden"
//             }`}
//           >
//             <Notes />
//           </div>
//           <div
//             id="tab5"
//             className={`tabcontent p-4 ${activeTab === "tab5" ? "" : "hidden"}`}
//           >
//             <Calendar />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Settings;
import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { FaCalendarCheck } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import Account from "./Account/Account";
import Payment from "./Payment/Payment";
import UpdatePassword from "./updatepassword/Update_Password"
import Navbar from "../Navbar";
import Footer from "../Home/footer/Footer";
import Calendar from "./Calendar Sync/Calendar ";
import Notes from "./Notes/Notes";
import Communication from "./Communication Preferences/Communication";

function Settings({ usernameFirstLetter }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-blue-100">
        <div className="w-full max-w-md mx-auto md:max-w-none md:flex md:gap-10  p-4">
          <div className="grid-fix space-y-5 md:w-1/4 p-10">
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
                activeTab === "tab1" && "active:bg-blue-200"
              }`}
              onClick={() => openTab("tab1")}
            >
              <FaUserEdit className="text-xl" />
              Account
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
                activeTab === "tab2" && "active:bg-blue-200"
              }`}
              onClick={() => openTab("tab2")}
            >
              <FaRegCreditCard className="text-xl" />
              Payment
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
                activeTab === "tab3" && "active:bg-blue-200"
              }`}
              onClick={() => openTab("tab3")}
            >
              <TbPasswordUser className="text-xl" />
              Update Password
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
                activeTab === "tab4" && "active:bg-blue-200"
              }`}
              onClick={() => openTab("tab4")}
            >
              <FaMessage className="text-xl" />
              Communication
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
                activeTab === "tab5" && "active:bg-blue-200"
              }`}
              onClick={() => openTab("tab5")}
            >
              <CgNotes className="text-xl" />
              Notes & Highlights
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium text-gray-700 ${
                activeTab === "tab6" && "active:bg-blue-200"
              }`}
              onClick={() => openTab("tab6")}
            >
              <FaCalendarCheck className="text-xl" />
              Calendar Sync
            </button>
          </div>
          <div className="md:w-3/4">
            <div
              id="tab1"
              className={`tabcontent p-4 w-full h-full ${
                activeTab === "tab1" ? "" : "hidden"
              }`}
            >
              {/* <Account /> */}
            </div>
            <div
              id="tab2"
              className={`tabcontent py-4 md:py-0 w-full h-full ${
                activeTab === "tab2" ? "" : "hidden"
              }`}
            >
              {/* <Payment /> */}
            </div>
            <div
              id="tab3"
              className={`tabcontent py-4 md:py-0 w-full h-full ${
                activeTab === "tab3" ? "" : "hidden"
              }`}
            >
              {/* <UpdatePassword /> */}
            </div>
            <div
              id="tab4"
              className={`tabcontent p-4 ${
                activeTab === "tab4" ? "" : "hidden"
              }`}
            >
              {/* <Communication /> */}
            </div>
            <div
              id="tab5"
              className={`tabcontent p-4  ${
                activeTab === "tab5" ? "" : "hidden"
              }`}
            >
              <Notes />
            </div>
            <div
              id="tab6"
              className={`tabcontent p-4 ${
                activeTab === "tab6" ? "" : "hidden"
              }`}
            >
              {/* <Calendar /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Settings;
