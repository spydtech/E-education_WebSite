

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { trainee } from '../../../State/Auth/Action';
// import traineloginpageimage from "../../../assetss/login/traineloginpageimage.png";
// import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";

// const Traine_Login = () => {

//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const traineeData = {
//       userId: data.get("userId"),
//       password: data.get("password"),
//     };


//     navigate("/traineedashboard");
//     dispatch(trainee(traineeData));
//   };


 
//   return (
//     <div class="flex h-screen  px-8 py-8 ">  
    
//   <div class="hidden md:flex flex-col justify-center bg-gradient-to-r pt-4 from-[#4CA1AF] to-[#204349] items-center  w-1/2" >
//   <img src={Eeducationlogo } alt="E-Education Logo" className='h-[200px] w-[400px]'/>
//      <div className='mb-12'>
//     <img src={traineloginpageimage} alt="E-Education Logo" className="mb-4 h-[500px] w-[500px] border-[#4CA1AFC9]  bg-opacity-70 border-[10px] rounded-full" />
//     </div>
//   </div>
//   <div class="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
//     <h2 class="text-2xl font-semibold mb-4 text-[#4CA1AFC9]">Trainee Login</h2>
//     <form class="w-full max-w-sm">
//       <div class="mb-4">
//         <label class="block text-zinc-700 text-sm font-bold mb-2" for="user-id"> User ID </label>
//         <input
//           id="user-id"
//           type="text"
//           placeholder="Enter your User ID"
//           class="shadow appearance-none border-[#4CA1AF] placeholder:text-[#4CA1AF] border-2 rounded w-full py-4 px-3 text-[#4CA1AF] leading-tight focus:outline-[#4CA1AF] focus:shadow-outline"
//         />
//       </div>
//       <div class="mb-6">
//         <label class="block text-zinc-700 text-sm font-bold mb-2" for="password"> Password </label>
//         <input
//           id="password"
//           type="password"
//           placeholder="Enter your password"
//           class="shadow appearance-none border-2 rounded border-[#4CA1AF] placeholder:text-[#4CA1AF] w-full py-4 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <button class="bg-[#4CA1AF] text-white  w-full py-4 rounded">Log In</button>
//     </form>
//   </div>
// </div>
//   );
// };

// export default Traine_Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { trainee } from '../../../State/Auth/Action';
import traineloginpageimage from "../../../assetss/login/traineloginpageimage.png";
import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";

const Traine_Login = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const traineeData = {
      userId: data.get("userId"),
      password: data.get("password"),
    };

    navigate("/traineedashbord");
    dispatch(trainee(traineeData));
  };

  return (
    <div className="flex flex-col-reverse md:flex-row h-screen px-4 py-8 md:px-8 md:py-8">
      {/* Left Section for Larger Screens */}
      <div className="hidden md:flex flex-col justify-center bg-gradient-to-r from-[#4CA1AF] to-[#204349] items-center w-full md:w-1/2 p-4">
        <img src={Eeducationlogo} alt="E-Education Logo" className='h-40 w-72 md:h-[200px] md:w-[400px]' />
        <div className='mb-12'>
          <img src={traineloginpageimage} alt="Trainee Login Page" className="mb-4 h-40 w-40 md:h-[300px] md:w-[300px] border-[#4CA1AFC9] bg-opacity-70 border-[10px] rounded-full" />
        </div>
      </div>

      {/* Right Section for Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#4CA1AFC9]">Trainee Login</h2>
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="user-id"> User ID </label>
            <input
              id="user-id"
              name="userId"
              type="text"
              placeholder="Enter your User ID"
              className="shadow appearance-none border-[#4CA1AF] border-2 focus:outline-none focus:ring-[#204349] focus:border-[#204349] focus:border-none focus:border placeholder:text-[#4CA1AF]  rounded w-full py-3 md:py-4 px-3 text-[#4CA1AF] leading-tight focus:outline-[#4CA1AF] focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="password"> Password </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
               className="shadow appearance-none border-[#4CA1AF] border-2 focus:outline-none focus:ring-[#204349] focus:border-[#204349] focus:border-none placeholder:text-[#4CA1AF]  rounded w-full py-3 md:py-4 px-3 text-[#4CA1AF] leading-tight focus:outline-[#4CA1AF] focus:shadow-outline"
            />
          </div>
          <button className="bg-[#4CA1AF] text-white w-full py-3 md:py-4 rounded">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Traine_Login;
