import React from "react";
import { Link } from "react-router-dom";
import TraineeTable from "./Sample";
import { FaProductHunt } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdBookmarks } from "react-icons/io";
function TableforAdmin() {
  return (
    <>
      <div>
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Data Overview
            </h1>
            {/* Centered Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-6">
              <Link to="/productscount">
                <div className="bg-red-500 p-4 rounded-lg shadow-md w-full h-[170px] flex flex-col justify-center items-center">
                  <div>
                    <FaProductHunt className="flex w-10 h-10 " />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2 text-center">
                    Count of Products
                  </h2>
                  <p className="text-white">Value</p>
                </div>
              </Link>
              <Link to="/customercount">
                <div className="bg-green-600 p-4 rounded-lg shadow-md w-full h-[170px] flex flex-col justify-center items-center">
                  <div>
                    <FaUserGraduate className="flex w-10 h-10" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2 text-center">
                    Count of Customers
                  </h2>
                  <p className="text-white">Value</p>
                </div>
              </Link>
              <Link to="/linegraph">
                <div className="bg-pink-600 p-4 rounded-lg shadow-md w-full h-[170px] flex flex-col justify-center items-center">
                  <div>
                    {" "}
                    <BsGraphUpArrow className="flex w-10 h-10 text-green-500" />
                  </div>

                  <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2 text-center">
                    Sales of Each Course
                  </h2>
                  <p className="text-white">Value</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-6 mb-6">
              <Link to="/saleslinegraph">
                <div className="bg-[#219ebc] p-4 rounded-lg shadow-md w-full lg:w-[400px] h-[170px] flex flex-col justify-center items-center">
                  <div>
                    {" "}
                    <FcSalesPerformance className="flex w-10 h-10 " />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2 text-center">
                    Annual Sales
                  </h2>
                  <p className="text-white text-center">Value</p>{" "}
                </div>
              </Link>
              <Link to="/bargraph">
                <div className="bg-[#03045e] p-4 rounded-lg shadow-md w-full lg:w-[400px] h-[170px] flex flex-col justify-center items-center">
                  <div>
                    {" "}
                    <IoMdBookmarks className="flex w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2 text-center">
                    Count of Courses Purchased
                  </h2>
                  <p className="text-white text-center">Value</p>{" "}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-violet-800 m-6 rounded-lg shadow-lg">
          <TraineeTable />
        </div>
      </div>
    </>
  );
}

export default TableforAdmin;
