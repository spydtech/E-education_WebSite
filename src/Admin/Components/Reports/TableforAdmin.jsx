import React, { useState } from "react";
import { FaProductHunt, FaUserGraduate } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdBookmarks } from "react-icons/io";
import TraineeTable from "./Sample";
import CountofProducts from "./CountofProducts";
import CustomerCount from "./CustomerCount";
import CourseSales from "./LineGraph";
import AnnualSalesGraph from "./SalesLineGraph";
import CoursePurchased from "./BarGraph";

const ProductsCount = () => <CountofProducts />;
const CustomersCount = () => <CustomerCount />;
const SalesEachCourse = () => <CourseSales />;
const AnnualSales = () => <AnnualSalesGraph />;
const CoursesPurchased = () => <CoursePurchased />;

function TableforAdmin() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "ProductsCount":
        return <ProductsCount />;
      case "CustomersCount":
        return <CustomersCount />;
      case "SalesEachCourse":
        return <SalesEachCourse />;
      case "AnnualSales":
        return <AnnualSales />;
      case "CoursesPurchased":
        return <CoursesPurchased />;
      default:
        return <ProductsCount />;
    }
  };

  return (
    <div className="container mx-auto p-6  min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="bg-white p-6 rounded-lg  w-full md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Data Overview
          </h1>
          <div className="flex flex-col gap-6">
            <div
              onClick={() => setActiveComponent("ProductsCount")}
              className="bg-red-500 p-4 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer h-[120px]"
            >
              <FaProductHunt className="w-10 h-10" />
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Count of Products
              </h2>
              <p className="text-white">Value</p>
            </div>
            <div
              onClick={() => setActiveComponent("CustomersCount")}
              className="bg-green-600 p-4 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer h-[120px]"
            >
              <FaUserGraduate className="w-10 h-10" />
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Count of Customers
              </h2>
              <p className="text-white">Value</p>
            </div>
            <div
              onClick={() => setActiveComponent("SalesEachCourse")}
              className="bg-pink-600 p-4 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer h-[120px]"
            >
              <BsGraphUpArrow className="w-10 h-10 text-green-500" />
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Sales of Each Course
              </h2>
              <p className="text-white">Value</p>
            </div>
            <div
              onClick={() => setActiveComponent("AnnualSales")}
              className="bg-[#219ebc] p-4 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer h-[120px]"
            >
              <FcSalesPerformance className="w-10 h-10" />
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Annual Sales
              </h2>
              <p className="text-white text-center">Value</p>
            </div>
            <div
              onClick={() => setActiveComponent("CoursesPurchased")}
              className="bg-[#03045e] p-4 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer h-[120px]"
            >
              <IoMdBookmarks className="w-10 h-10 text-white" />
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Courses Purchased
              </h2>
              <p className="text-white text-center">Value</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 ">
          <div className=" p-4  ">{renderActiveComponent()}</div>
        </div>
      </div>

      <div className="mt-6 bg-[#219ebc] rounded-lg  ">
        <TraineeTable />
      </div>
    </div>
  );
}

export default TableforAdmin;
