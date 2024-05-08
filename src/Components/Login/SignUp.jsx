



import React, { useState } from "react";

import React, { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import IMG from "../../assets/E- education logo .png";
import student from "../../assets/singup1.svg";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../State/Auth/Action";
import { getUser, sendOtp, verifyOtp } from "../../State/Auth/Action";

function generateOTP() {
  // Generate a random 6-digit number
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString(); // Convert to string
}


function SignUp() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showOTP, setShowOTP] = useState(false);
 
  const [otp, setOTP] = useState(['', '', '', '', '', '']);


  const handleSendOTP = async () => {
    try {
      
      const enteredOTP = otp.join('');
    // Process registration and OTP verification here
    console.log(`Entered OTP: ${enteredOTP}`);

        // Generate OTP

        const otp = generateOTP();
        

        // Make an API call to send OTP
        const response = await fetch('/api/sendOTP', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp }),
        });

        if (!response.ok) {
            throw new Error('Failed to send OTP');
        }

        // If OTP is sent successfully, set showOTP to true
        setShowOTP(true);
        alert(`OTP sent to ${email}. Please check your email for the OTP.`);
    } catch (error) {
        console.error('Error sending OTP:', error.message);
        // Handle error (e.g., show error message to the user)
    }
};


const handleOTPEnter = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Auto focus next input
    if (index < 5 && value !== '') {
        document.getElementById(`otpInput${index + 1}`).focus();
    }
};



  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:3465/api/v1/user/save",
        {
          employeename: username,
          email: email,
          password: password,
        }
      );
      alert("Employee Registration Successfully");

      // Handle success response
      console.log("Response:", response.data);
      // Redirect to login page upon successful signup
      navigate("/Login");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }


  const [otp, setOtp] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const jwt = localStorage.getItem('jwt');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, otpStatus } = useSelector(store => store)
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSendOtp = async () => {
  //   try {
  //     // Send a request to your backend to generate and send OTP to the provided email
  //     const response = await axios.post(
  //       "http://localhost:3465/api/v1/user/send-otp",
  //       {
  //         email: email,
  //       }
  //     );
  //     console.log("OTP sent:", response.data);
  //     setOtpSent(true);
  //     setShowOtpPopup(true); // Show the OTP popup after sending OTP
  //   } catch (error) {
  //     console.error("Error sending OTP:", error);
  //   }
  // };

  const handleSendOtp = () => {
    dispatch(sendOtp(formData.email));// Dispatch sendOtp action with email
    setShowOtpPopup(true);
  };

  // const handleVerifyOtp = async () => {
  //   try {
  //     // Send a request to your backend to verify the OTP
  //     const response = await axios.post(
  //       "http://localhost:3465/api/v1/user/verify-otp",
  //       {
  //         email: email,
  //         otp: otp,
  //       }
  //     );
  //     console.log("OTP verified:", response.data);
  //     // Close the OTP popup after successful verification
  //     setShowOtpPopup(false);
  //     // Now you can proceed with the signup
  //     await handleSubmit();
  //   } catch (error) {
  //     console.error("Error verifying OTP:", error);
  //     // Handle error
  //   }
  // };


  const handleVerifyOtp = () => {
    dispatch(verifyOtp(formData.email, otp));// Dispatch verifyOtp action with email and otp
    handleSubmit();
  };


  // const handleSubmit = async () => {
  //   try {
  //     const userData =
  //     {
  //       userName: username,
  //       email: email,
  //       password: password,
  //       otp: otp,
  //     }

  //     alert("Employee Registration Successfully");
  //     console.log("user Data", userData);
  //     dispatch(register(userData));
  //     navigate("/Login");
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dispatch the register action with form data
    dispatch(register(formData));
    alert("user registered successfully")
    navigate("/"); // Navigate to Home Page

  };

  return (
    <>
      <Navbar />
      <div className="grid  grid-cols-1 md:grid-cols-2 font-poppins min-w-screen min-h-screen dark:bg-gray-900">
        <div className=" py-2   flex justify-center ">
          <img
            src={student}
            className=" md:w-auto md:h-auto lg:w-auto lg:h-auto w-96 h-96"
            alt="Student"
          />
        </div>

        <div className="flex justify-center ">
          <div className="max-w-md  ">
            {/*  */}
            <div id="back-div" className=" rounded-lg ">
              <div className="bg-white  border-[20px] border-transparent rounded-[20px] dark:bg-gray-900  shadow-lg xl:p-10 2xl:p-10 lg:px-10 lg:py-0  md:p-10 sm:p-0 ">
                <div className=" ">
                  <img src={IMG} className="w-56 mx-auto " alt="Logo" />
                </div>
                <h1 className="font-Calistoga  pb-6 text-violet-600  text-4xl dark:text-gray-400 text-center cursor-default">
                  Sign Up
                </h1>
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="post"
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 dark:text-gray-400 text-lg font-NotoSans"
                    >
                      User Name
                    </label>
                    <input
                      id='userName'
                      className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
                      name='userName'
                      label='UserName'
                      placeholder='User'
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 dark:text-gray-400 text-lg font-NotoSans"
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
                      name='email'
                      label='Email'
                      placeholder='Email'
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 dark:text-gray-400 text-lg font-NotoSans"
                    >
                      Password
                    </label>
                    <input
                      id='password'
                      className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
                      name='password'
                      label='Password'
                      placeholder='password'
                      type="password"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="font-Calistoga bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                    type="submit"
                    onClick={handleSendOTP}
                  >
                    SignUp
                  </button>

                  {showOTP && (
                    <div className="mt-4">
                        <p>Enter OTP:</p>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otpInput${index}`}
                                type="text"
                                maxLength="1"
                                className="inline-block w-10 p-2 mb-4 mr-2 text-center border rounded"
                                value={digit}
                                onChange={(e) => handleOTPEnter(index, e.target.value)}
                            />
                        ))}
                    </div>
                )}

                {showOTP && (
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-4 rounded">
                        Verify OTP & Register
                    </button>
                )}
                </form>
                <div className="flex flex-col mt-4 items-center justify-center text-sm">
                  <h3>
                    <span className="cursor-default dark:text-gray-300">
                      Have an account?
                    </span>
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="/Login"
                    >
                      <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Log In
                      </span>
                    </a>
                  </h3>
                </div>

                <div
                  id="third-party-auth"
                  className="flex items-center justify-center mt-5 flex-wrap"
                >
                  <button
                    href="#"
                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                  >
                    <img
                      className="max-w-[25px]"
                      src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                      alt="Google"
                    />
                  </button>
                </div>

                <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                  <p className="cursor-default">
                    By signing in, you agree to our
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span className="mx-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Terms
                      </span>
                    </a>
                    and
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span className="ml-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Privacy Policy
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>


      {/* OTP Popup */}
      {otpStatus === true && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
            <button
              onClick={handleVerifyOtp}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}

    </>
  );
}

export default SignUp;



// import React, { useState } from 'react';

// function generateOTP() {
//   // Generate a random 6-digit number
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   return otp.toString(); // Convert to string
// }


// const SignUp = () => {
//     const [userName, setUserName] = useState('');
    
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showOTP, setShowOTP] = useState(false);
//     const [otp, setOTP] = useState(['', '', '', '', '', '']);
//     const handleSendOTP = async () => {
//       try {
//           // Generate OTP
//           const otp = generateOTP();
  
//           // Make an API call to send OTP
//           const response = await fetch('/api/sendOTP', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ email, otp }),
//           });
  
//           if (!response.ok) {
//               throw new Error('Failed to send OTP');
//           }
  
//           // If OTP is sent successfully, set showOTP to true
//           setShowOTP(true);
//           alert(`OTP sent to ${email}. Please check your email for the OTP.`);
//       } catch (error) {
//           console.error('Error sending OTP:', error.message);
//           // Handle error (e.g., show error message to the user)
//       }
//   };
  

//     const handleOTPEnter = (index, value) => {
//         const newOTP = [...otp];
//         newOTP[index] = value;
//         setOTP(newOTP);

//         // Auto focus next input
//         if (index < 5 && value !== '') {
//             document.getElementById(`otpInput${index + 1}`).focus();
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const enteredOTP = otp.join('');
//         // Process registration and OTP verification here
//         console.log(`Entered OTP: ${enteredOTP}`);
//         // You can make API calls here to verify OTP and complete registration
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
//             <h2 className="text-2xl mb-4">User Registration</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="User Name"
//                     className="w-full p-2 mb-4 border rounded"
//                     value={userName}
//                     onChange={(e) => setUserName(e.target.value)}
//                     required
//                 />
                
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full p-2 mb-4 border rounded"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     className="w-full p-2 mb-4 border rounded"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button
//                     type="button"
//                     className="w-full bg-blue-500 text-white p-2 rounded"
//                     onClick={handleSendOTP}
//                 >
//                     Send OTP
//                 </button>

//                 {showOTP && (
//                     <div className="mt-4">
//                         <p>Enter OTP:</p>
//                         {otp.map((digit, index) => (
//                             <input
//                                 key={index}
//                                 id={`otpInput${index}`}
//                                 type="text"
//                                 maxLength="1"
//                                 className="inline-block w-10 p-2 mb-4 mr-2 text-center border rounded"
//                                 value={digit}
//                                 onChange={(e) => handleOTPEnter(index, e.target.value)}
//                             />
//                         ))}
//                     </div>
//                 )}

//                 {showOTP && (
//                     <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-4 rounded">
//                         Verify OTP & Register
//                     </button>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default SignUp;

