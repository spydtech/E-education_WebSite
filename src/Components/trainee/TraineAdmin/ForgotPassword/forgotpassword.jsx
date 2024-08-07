// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import forgotpassword from "../../../../assets/forgotpassword1.png";
// import "animate.css";

// function TraineForgotPassword() {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const inputRefs = useRef([]);
//   const [email, setEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     setEmail("");
//     setOtp(["", "", "", "", "", ""]);
//     setPassword("");

//     localStorage.clear();
//   }, []);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleOTPEnter = (e, index) => {
//     const value = e.target.value;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (index < 5 && value) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleSendOtp = () => {
//     if (validateEmail()) {
//       setOtpSent(true);
//       localStorage.setItem("email", email);
//       setEmail("");
//     }
//   };

//   const handleVerifyOtp = () => {
//     if (otp.join("").length === 6) {
//       setOtpVerified(true);
//       localStorage.setItem("otp", otp.join(""));
//       setOtp(["", "", "", "", "", ""]);
//     }
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleUpdatePassword = () => {
//     if (validatePassword()) {
//       localStorage.setItem("password", password);
//       alert("Password updated successfully!");
//       setPassword("");
//     }
//   };

//   const validateEmail = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       newErrors.email = "Invalid email address.";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validatePassword = () => {
//     const newErrors = {};
//     if (!password) {
//       newErrors.password = "Password is required.";
//     } else if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long.";
//     } else if (
//       !/[A-Z]/.test(password) ||
//       !/[0-9]/.test(password) ||
//       !/[!@#$%^&*]/.test(password)
//     ) {
//       newErrors.password =
//         "Password must include letters, numbers, and special characters.";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   return (
//     <>
//       <div className="bg-[#4287f5]">
//         <div
//           id="main"
//           className=" grid md:lg:xl:grid-cols-2 grid-cols-1 justify-center items-center"
//         >
//           <div className="flex justify-center items-center" id="image">
//             <img
//               src={forgotpassword}
//               className="w-auto mx-auto"
//               alt="Forgot Password"
//             />
//           </div>
//           <div className="p-5" id="forgot-password">
//             <div className="text-center">
//               {/* <img
//                 src={IMG}
//                 className="flex  justify-center items-center w-56 mx-auto "
//                 alt="Logo"
//               /> */}
//               <div className="p-2 animate_animated animate_backInDown mb-10 text-4xl text-center font font-bold text-white">
//                 Forgot Your Password?
//               </div>

//               <div id="email-here">
//                 {!otpSent ? (
//                   <>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={handleEmailChange}
//                       className="p-4 border border-gray-400 rounded w-full mb-3"
//                       placeholder="Enter your email"
//                     />
//                     {errors.email && (
//                       <p className="text-red-500">{errors.email}</p>
//                     )}
//                     <button
//                       onClick={handleSendOtp}
//                       className={`p-2 w-auto rounded ${email
//                           ? "bg-blue-500 text-white"
//                           : "bg-white text-gray-500 cursor-not-allowed"
//                         }`}
//                       disabled={!email}
//                     >
//                       Send OTP
//                     </button>
//                   </>
//                 ) : !otpVerified ? (
//                   <>
//                     <div className="mt-4">
//                       <p>Enter OTP:</p>
//                       {Array.from({ length: 6 }).map((_, index) => (
//                         <input
//                           key={index}
//                           type="text"
//                           maxLength="1"
//                           className="w-12 h-12 mb-4 text-2xl border border-gray-300 rounded-md shadow-sm text-center"
//                           value={otp[index] || ""}
//                           onChange={(e) => handleOTPEnter(e, index)}
//                           ref={(el) => (inputRefs.current[index] = el)}
//                         />
//                       ))}
//                     </div>
//                     <button
//                       onClick={handleVerifyOtp}
//                       className={`p-2 w-auto rounded ${otp.join("").length === 6
//                           ? "bg-blue-500 text-white"
//                           : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                         }`}
//                       disabled={otp.join("").length !== 6}
//                     >
//                       Verify OTP
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <div className="mt-4">
//                       <input
//                         type="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                         className="p-4 border border-gray-400 rounded w-full mb-3"
//                         placeholder="Enter new password"
//                       />
//                       {errors.password && (
//                         <p className="text-red-500">{errors.password}</p>
//                       )}
//                       <button
//                         onClick={handleUpdatePassword}
//                         className={`p-2 w-auto rounded ${password
//                             ? "bg-blue-500 text-white"
//                             : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                           }`}
//                         disabled={!password}
//                       >
//                         <Link to="/login">Update Password</Link>
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TraineForgotPassword;
import React, { useState, useEffect } from "react";
import forgotpassword from "../../../../assets/forgotpassword1.png";
import "animate.css";

function TraineForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setEmail("");
    localStorage.clear();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = () => {
    if (validateEmail()) {
      alert("Mail sent successfully!");
      setEmail("");
    }
  };

  const validateEmail = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <div className="bg-[#4287f5]">
        <div
          id="main"
          className="grid md:lg:xl:grid-cols-2 grid-cols-1 justify-center items-center"
        >
          <div className="flex justify-center items-center" id="image">
            <img
              src={forgotpassword}
              className="w-auto mx-auto"
              alt="Forgot Password"
            />
          </div>
          <div className="p-5" id="forgot-password">
            <div className="text-center">
              <div className="p-2 animate__animated animate__backInDown mb-10 text-4xl text-center font font-bold text-white">
                Forgot Your Password?
              </div>
              <div id="email-here">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="p-4 border border-gray-400 rounded w-full mb-3"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <div className="mt-4">
                  <button
                    onClick={handleSendEmail}
                    className={`p-3 w-[200px] rounded-lg text-white font-semibold shadow-lg transition-transform transform hover:scale-105 ${
                      email
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!email}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TraineForgotPassword;
