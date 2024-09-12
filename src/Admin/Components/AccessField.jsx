import React from "react";
import { useNavigate } from "react-router-dom";

const AccessField = () => {
  const navigate = useNavigate();

  const handleNavigateToTrainee = () => {
    navigate("/admin/register-trainee");
  };

  const handleNavigateToEmployee = () => {
    navigate("/admin/register-employee");
  };

  return (
    <div className="flex items-center justify-center  min-h-screen  shadow-lg ">
      <div className=" bg-white rounded-lg shadow-lg w-[700px] h-[420px] ">
        <div className="w-auto h-[100px] bg-[#2C3E50]  rounded-t-lg flex justify-center items-center">
          <h2 className="text-2xl font-bold  text-white">Choose Access Type</h2>
        </div>

        <div className=" justify-center items-center flex mt-10">
          <button
            className="w-[350px] h-[60px] text-xl font-medium px-4 py-3 mb-4 text-white bg-[#2C3E50]   rounded-md focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleNavigateToTrainee}
          >
            Register As A Trainee
          </button>
        </div>
        <div className=" justify-center items-center flex mt-5">
          <button
            className="w-[350px] h-[60px] text-xl font-medium px-4 py-3 text-white bg-[#2C3E50]  rounded-md focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleNavigateToEmployee}
          >
            Register As A Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessField;
