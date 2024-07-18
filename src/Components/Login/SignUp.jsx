// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import IMG from "../../assets/E- education logo .png";
// import { login } from "../../State/Auth/Action";

// function SignUp() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData = {
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     // Store credentials in local storage
//     localStorage.setItem("userCredentials", JSON.stringify(userData));

//     dispatch(login(userData));
//     navigate("/");
//   };

//   return (
//     <div className="relative min-h-screen flex px-20  items-center justify-center ">
//       <div className="text-gray-900 flex justify-center w-full">
//         <div className="bg-white w-full max-w-[1000px] sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] shadow sm:rounded-lg flex flex-col lg:flex-row lg:gap-8">
//           <div className="p-4 sm:p-6 lg:p-8 flex-1">
//             <img
//               src={IMG}
//               className="w-[300px] sm:w-[350px] md:w-[400px]"
//               alt="Logo"
//             />
//             <div className="flex flex-col items-start mt-4">
//               <div className="mb-2">
//                 <span className="bg-gradient-to-r text-3xl md:text-4xl font-bold pb-2 from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
//                   Sign Up now
//                 </span>
//               </div>
//               <span className="mb-6 text-sm md:text-base">Hi, Welcome 👋</span>
//               <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col items-center"
//               >
//                 <div className="flex flex-col items-start mb-4 w-full sm:w-[400px] md:w-[500px]">
//                   <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                     First Name
//                   </label>
//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     placeholder="First Name"
//                     className="w-full px-4 py-2  h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     value={userData.firstName}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="flex flex-col items-start mb-4 w-full sm:w-[400px] md:w-[500px]">
//                   <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                     Last Name
//                   </label>
//                   <input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     placeholder="Last Name"
//                     className="w-full px-4  h-[50px] py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     value={userData.lastName}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="flex flex-col items-start mb-4 w-full sm:w-[400px] md:w-[500px]">
//                   <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Email"
//                     className="w-full px-4 h-[50px] py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     value={userData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="flex flex-col items-start mb-4 w-full sm:w-[400px] md:w-[500px]">
//                   <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="Password"
//                     className="w-full px-4 py-2 h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     value={userData.password}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="mt-5 w-full sm:w-[400px] md:w-[500px] tracking-wide font-semibold bg-[#0098F1] text-gray-100 py-3 rounded-lg hover:bg-[#007acc] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
//                 >
//                   <span className="ml-3">Send OTP</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="flex-1 mt-32 lg:mt-0 text-center hidden lg:flex">
//             <div
//               className="w-full bg-center bg-no-repeat"
//               style={{
//                 backgroundImage:
//                   "url('https://s3-alpha-sig.figma.com/img/0ba4/acc9/22ae30233428f93ea97ee61bed1f1368?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCbWPiAaKxLjj3vrmZV1zupjmK~2HmElPQywLV9jfz5deFv6mRXEiuFp15TKa4Mlek3c3ctsL9pW~BTsISI5cgjmhN0oatAc3cXcSO5uvTEGxoIcGwbGyOGiTGP9IrnWiMBb~wAZq1P-NB9RsD0IRihA0tCkF~iasBUhxumSJ-QA5Ao0~BfPb8FUp2c2avzIAJO9VkWWStuIbp2C9-4y8t11E9QXJayELfz6MrQhaYdod3W~udjHAFqa-D5Rqp05p9ADjZgDH6FlQE-hTT6y5laBkhisUwEvttRx9cWT9dmBRKB350XtHYq3DsWWE6b0KrYvaBgUNRjLL6X6bT2A0g__')",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import IMG from "../../assets/E- education logo .png";
import { login } from "../../State/Auth/Action";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    // Store credentials in local storage
    localStorage.setItem("userCredentials", JSON.stringify(userData));

    dispatch(login(userData));
    navigate("/");
  };

  return (
    <div className="relative min-h-screen flex px-4 md:px-10 items-center justify-center">
      <div className="text-gray-900 flex justify-center w-full">
        <div className="bg-white w-full max-w-[1000px] sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] shadow sm:rounded-lg flex flex-col lg:flex-row lg:gap-8">
          <div className="p-4 sm:p-6 lg:p-8 flex-1">
            <img
              src={IMG}
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
              alt="Logo"
            />
            <div className="flex flex-col items-start mt-4">
              <div className="mb-2">
                <span className="bg-gradient-to-r text-2xl sm:text-3xl md:text-4xl font-bold pb-2 from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
                  Sign Up now
                </span>
              </div>
              <span className="mb-6 text-xs sm:text-sm md:text-base">
                Hi, Welcome 👋
              </span>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
                  <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    value={userData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
                  <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    value={userData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
                  <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
                  <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    value={userData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-5 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] tracking-wide font-semibold bg-[#0098F1] text-gray-100 py-3 rounded-lg hover:bg-[#007acc] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-3">Send OTP</span>
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1  lg:mt-0 text-center hidden lg:flex">
            <div
              className="w-[550px]  mt-80 h-[478px] bg-center bg-no-repeat right-24 mr-4"
              style={{
                backgroundImage:
                  "url('https://s3-alpha-sig.figma.com/img/0ba4/acc9/22ae30233428f93ea97ee61bed1f1368?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCbWPiAaKxLjj3vrmZV1zupjmK~2HmElPQywLV9jfz5deFv6mRXEiuFp15TKa4Mlek3c3ctsL9pW~BTsISI5cgjmhN0oatAc3cXcSO5uvTEGxoIcGwbGyOGiTGP9IrnWiMBb~wAZq1P-NB9RsD0IRihA0tCkF~iasBUhxumSJ-QA5Ao0~BfPb8FUp2c2avzIAJO9VkWWStuIbp2C9-4y8t11E9QXJayELfz6MrQhaYdod3W~udjHAFqa-D5Rqp05p9ADjZgDH6FlQE-hTT6y5laBkhisUwEvttRx9cWT9dmBRKB350XtHYq3DsWWE6b0KrYvaBgUNRjLL6X6bT2A0g__')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
