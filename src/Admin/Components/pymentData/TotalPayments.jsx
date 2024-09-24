import React, { useState, useEffect } from "react";
import axios from "axios";

const AllPaymentsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const jwt = localStorage.getItem("jwt");
  const [userData, setUserData] = useState([]);
  const [searchBy, setSearchBy] = useState("userId");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/payment/all", {
        headers: {
          Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
        },
      })
      .then((response) => {
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

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };

  // Updated filtering logic
  const filteredData = userData.filter((item) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Convert the search term based on the field type
    if (searchBy === "userId") {
      return String(item.userId).toLowerCase().includes(lowerCaseSearchTerm); // Convert to string
    } else if (searchBy === "TransactionId") {
      return String(item.razorpayPaymentId)
        .toLowerCase()
        .includes(lowerCaseSearchTerm); // Convert to string
    } else if (searchBy === "fullName") {
      return item.userName.toLowerCase().includes(lowerCaseSearchTerm); // Ensure it’s a string
    } else if (searchBy === "email") {
      return item.userEmail.toLowerCase().includes(lowerCaseSearchTerm); // Ensure it’s a string
    } else if (searchBy === "Date") {
      return item.createdAt.toLowerCase().includes(lowerCaseSearchTerm); // Ensure it’s a string
    }
    return true;
  });

  const formatToIndianDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // For 12-hour format
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex w-[500px] rounded-lg items-center mb-4 bg-[#f6ac14] p-2">
        <select
          value={searchBy}
          onChange={handleSearchByChange}
          className="mr-2 border border-gray-400 focus:border-green-500 rounded"
        >
          <option value="userId">Search by UserId</option>
          <option value="TransactionId">Search by TransactionId</option>
          <option value="fullName">Search by Full Name</option>
          <option value="email">Search by Email</option>
          <option value="Date">Search by Date</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 w-full bg-[#001510] text-center text-[15px] text-white placeholder:text-white outline-none focus:ring-0 focus:border-none border-none rounded-lg"
          placeholder="Search here"
        />
      </div>
      <table className="min-w-full text-nowrap">
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
          {[...filteredData].reverse().map((item, index) => (
            <tr
              key={index}
              className="hover:bg-[#2C3E50] hover:bg-opacity-10 text-[#001510]"
            >
              <td className="px-4 py-2">{formatToIndianDateTime(item.createdAt)}</td>
              <td className="px-4 py-2">{item.userId}</td>
              <td className="px-4 text-nowrap py-2">{item.userName}</td>
              <td className="px-4 py-2">{item.userEmail}</td>
              <td className="px-4 py-2">{item.courseDetails}</td>
              <td className="px-4 py-2">{item.paymentMethod}</td>
              <td className="px-4 py-2">{item.razorpayPaymentId}</td>
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
