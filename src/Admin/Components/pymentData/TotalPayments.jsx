import React, { useState, useEffect } from "react";
import axios from "axios";

const AllPaymentsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const jwt = localStorage.getItem("jwt");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/payment/all", {
        headers: {
          Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
        },
      })
      .then((response) => {
        console.log("API response:", response);
        if (Array.isArray(response.data)) {
          setUserData(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [jwt]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "Pending":
        return "text-orange-500";
      case "Rejected":
        return "text-red-500";
      case "Processing":
        return "text-yellow-500";
      default:
        return "";
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = userData.filter((item) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      item.userId.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.TransactionId.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.fullName.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.email.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.Date.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.paymentMethod.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div className="overflow-x-auto ">
      <div className="flex w-[250px] rounded-lg items-center mb-4 ">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 border w-[250px]  bg-[#001510] text-[15px] text-white placeholder:text-white outline-none focus:outline-none focus:ring-0 focus:border-transparent border-none rounded-lg"
          placeholder="Search Here...."
        />
      </div>
      <table className="min-w-auto text-nowrap">
        <thead className="bg-[#001510] text-white">
          <tr className="h-12">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">UserId</th>
            <th className="px-4 py-2 text-left">FullName</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Course Purchase</th>
            <th className="px-4 py-2 text-left">PaymentMethod</th>
            <th className="px-4 py-2 text-left">TransactionId</th>
            <th className="px-4 py-2 text-left">TotalAmount</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-[#2C3E50] w-auto hover:bg-opacity-10 text-[#001510]"
            >
              <td className="px-4 py-2">{item.Date}</td>
              <td className="px-4 py-2">{item.userId}</td>
              <td className="px-4 text-nowrap py-2">{item.fullName}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.courseDetails}</td>
              <td className="px-4 py-2">{item.paymentMethod}</td>
              <td className="px-4 py-2">{item.TransactionId}</td>
              <td className="px-4 py-2">{item.totalAmount}</td>
              <td className={`px-4 py-2 ${getStatusClass(item.status)}`}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPaymentsTable;
