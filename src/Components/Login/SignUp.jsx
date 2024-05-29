import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, verifyOtp, getUser, checkEmail } from "../../State/Auth/Action"; // Import the Redux action creators
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'; // Import react-modal
import Navbar from '../Navbar';
import student from "../../assets/singup1.svg";
import IMG from "../../assets/E- education logo .png";



Modal.setAppElement('#root'); // Set the root element for react-modal

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector(store => store)
  const registrationStatus = useSelector(state => state?.registration?.status); // Use optional chaining to handle undefined state
  const registrationError = useSelector(state => state?.registration?.error); // Get registration error from Redux state
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: ''
  });
  const inputRefs = useRef([]); // State for showing OTP modal
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  // const [showOtpModal, setShowOtpModal] = useState(false); // State for showing OTP modal
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  const handleOTPEnter = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp.join('').slice(0, 6));

    // Auto focus next input
    if (index < 5 && value) {
      inputRefs.current[index + 1].focus(); // Focus on the next input box
    }
  };



  const handleOtpVerification = async () => {
    dispatch(verifyOtp({ email: userData.email, otp })) // Dispatch the verifyOtp action
      .then(() => {
        // Redirect to home page upon successful OTP verification
        navigate("/")
      })
      .catch((err) => {
        setError(err.message || 'OTP verification failed.');
      });
  };
  return (

    <>
      <Navbar />
      <div className='grid  grid-cols-1 md:grid-cols-2 font-poppins min-w-screen min-h-screen dark:bg-gray-900'>
        <div className=' py-2   flex justify-center '>
          <img
            src={student}
            className=' md:w-auto md:h-auto lg:w-auto lg:h-auto w-96 h-96'
            alt='Student'
          />
        </div>

        <div className='flex justify-center '>
          <div className='max-w-md  '>
            {/*  */}
            <div id='back-div' className=' rounded-lg '>
              <div className='bg-white  border-[20px] border-transparent rounded-[20px] dark:bg-gray-900  shadow-lg xl:p-10 2xl:p-10 lg:px-10 lg:py-0  md:p-10 sm:p-0 '>
                <div className=' '>
                  <img src={IMG} className='w-56 mx-auto ' alt='Logo' />
                </div>
                <h1 className='font-Calistoga  pb-6 text-violet-600  text-4xl dark:text-gray-400 text-center cursor-default'>
                  Sign Up
                </h1>
                <form
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor='name'
                      className='mb-2 dark:text-gray-400 text-lg font-NotoSans'
                    >
                      First Name
                    </label>
                    <input
                      type="text" label='FirstName' name="firstName" placeholder="Firstname" value={userData.firstName} onChange={handleChange}
                      id='firstName'
                      className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='name'
                      className='mb-2 dark:text-gray-400 text-lg font-NotoSans'
                    >
                      Last Name
                    </label>
                    <input
                      type="text" label='LastName' name="lastName" placeholder="Lastname" value={userData.lastName} onChange={handleChange}
                      id='lastName'
                      className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='mb-2 dark:text-gray-400 text-lg font-NotoSans'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
                      type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='password'
                      className='mb-2 dark:text-gray-400 text-lg font-NotoSans'
                    >
                      Password
                    </label>
                    <input
                      id='password'
                      className='border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300'
                      type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required
                    />
                  </div>
                  <button
                    className='font-Calistoga bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out'
                    type='submit'
                  >
                    Send OTP
                  </button>
                  {registrationStatus === 'failure' && registrationError && (
                    <div className="mt-6 text-center text-red-500">{registrationError}</div>
                  )}
                  {/* <Modal
                    isOpen={showOtpModal}
                    onRequestClose={() => setShowOtpModal(false)}
                    className="modal"
                    overlayClassName="modal-overlay"
                  > */}
                  <div className="modal-content">
                    <div className="mt-4">
                      <p>Enter OTP:</p>
                      {Array.from({ length: 6 }).map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          className="w-12 h-12 text-2xl border border-gray-300 rounded-md shadow-sm text-center"
                          value={otp[index] || ''}
                          onChange={(e) => handleOTPEnter(e, index)}
                          ref={(el) => (inputRefs.current[index] = el)}
                        // Limit to 6 characters

                        />
                      ))}
                    </div>

                    <button
                      onClick={handleOtpVerification}
                      className="w-full bg-blue-500 text-white p-2 mt-4 rounded"
                    >
                      Verify OTP & Register
                    </button>
                    {/* OTP verification error */}
                    {error && <div className="mt-2 text-red-500">{error}</div>}
                  </div>
                  {/* </Modal> */}
                  {/* Error message */}
                  {registrationStatus === 'failure' && registrationError && (
                    <div className="mt-6 text-center text-red-500">{registrationError}</div>
                  )}
                </form>


                <div className='flex flex-col mt-4 items-center justify-center text-sm'>
                  <h3>
                    <span className='cursor-default dark:text-gray-300'>
                      Have an account?
                    </span>
                    <a
                      className='group text-blue-400 transition-all duration-100 ease-in-out'
                      href='/Login'
                    >
                      <span className='bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        Log In
                      </span>
                    </a>
                  </h3>
                </div>

                <div
                  id='third-party-auth'
                  className='flex items-center justify-center mt-5 flex-wrap'
                >
                  <button
                    href='#'
                    className='hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1'
                  >
                    <img
                      className='max-w-[25px]'
                      src='https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/'
                      alt='Google'
                    />
                  </button>
                </div>

                <div className='text-gray-500 flex text-center flex-col mt-4 items-center text-sm'>
                  <p className='cursor-default'>
                    By signing in, you agree to our
                    <a
                      className='group text-blue-400 transition-all duration-100 ease-in-out'
                      href='#'
                    >
                      <span className='mx-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        Terms
                      </span>
                    </a>
                    and
                    <a
                      className='group text-blue-400 transition-all duration-100 ease-in-out'
                      href='#'
                    >
                      <span className='ml-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
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
    </>
  );
};


export default SignUp;