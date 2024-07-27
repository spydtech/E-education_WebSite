import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { trainee } from '../../../State/Auth/Action';

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


    navigate("/traineedashboard");
    dispatch(trainee(traineeData));
  };


  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/trainee/signin', {
  //       userId: userId,
  //       password: password,
  //     });
  //     const { status, jwt } = response.data;

  //     if (status) {
  //       // Save the JWT token to localStorage or any other secure place
  //       localStorage.setItem('jwt', jwt);
  //       // Redirect to a different page or perform any other action
  //       window.location.href = '/traineedashboard';
  //     } else {
  //       setErrorMessage('Login failed. Please check your credentials.');
  //     }
  //   } catch (error) {
  //     setErrorMessage('An error occurred. Please try again.');
  //   }
  // };

  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")',
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">E-education</h2>
          <p className="text-xl text-gray-600 text-center">Trainee Login</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4" />
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or login with User ID
            </a>
            <span className="border-b w-1/5 lg:w-1/4" />
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center"
          >
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">User ID</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-6 mx-4 block w-full appearance-none"
                id="userId"
                label="userId"
                name="userId"
                type="text"
                placeholder="user ID"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2" >Password</label>
                <Link to="/forgot-password" className="text-xs text-gray-500">
                  Forget Password?
                </Link>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-6 mx-4 block w-full appearance-none"
                id="password"
                label="Password"
                name="password"
                type="password"
                placeholder="password"
              />
            </div>
            {errorMessage && (
              <div className="mt-4 text-red-500 text-center">
                {errorMessage}
              </div>
            )}
            <div className="mt-8">
              <button
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4" />
            {/* <a href="#" className="text-xs text-gray-500 uppercase"> or sign up </a> */}
            <span className="border-b w-1/5 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traine_Login;
