import React, { useState } from "react";

const sampleData = [
  {
    fullName: "John Doe",
    userId: "123",
    TransactionId: "rzp_1",
    totalAmount: "500",
    status: "Completed",
    Date: "24/june/2024",
    email: "john.doe@example.com",
    paymentMethod: "Credit Card",
  },
  {
    fullName: "Jane Smith",
    userId: "124",
    TransactionId: "rzp_2",
    totalAmount: "200",
    status: "Rejected",
    Date: "24/june/2024",
    email: "jane.smith@example.com",
    paymentMethod: "PayPal",
  },
  {
    fullName: "Alice Johnson",
    userId: "125",
    TransactionId: "rzp_3",
    totalAmount: "300",
    status: "Pending",
    Date: "24/june/2024",
    email: "alice.johnson@example.com",
    paymentMethod: "Debit Card",
  },
  {
    fullName: "Bob Brown",
    userId: "126",
    TransactionId: "rzp_4",
    totalAmount: "450",
    status: "Completed",
    Date: "24/june/2024",
    email: "bob.brown@example.com",
    paymentMethod: "Net Banking",
  },
  {
    fullName: "Robert Johnson",
    userId: "134",
    TransactionId: "rzp_7",
    totalAmount: "300",
    status: "Processing",
    Date: "24/june/2024",
    email: "robert.johnson@example.com",
    paymentMethod: "UPI",
  },
];

const AllPaymentsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("userId");

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

  const filteredData = sampleData.filter((item) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    if (searchBy === "userId") {
      return item.userId.toLowerCase().includes(lowerCaseSearchTerm);
    } else if (searchBy === "TransactionId") {
      return item.TransactionId.toLowerCase().includes(lowerCaseSearchTerm);
    } else if (searchBy === "fullName") {
      return item.fullName.toLowerCase().includes(lowerCaseSearchTerm);
    } else if (searchBy === "Date") {
      return item.Date.toLowerCase().includes(lowerCaseSearchTerm);
    }
    return true;
  });

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center mb-4">
        <select
          value={searchBy}
          onChange={handleSearchByChange}
          className="mr-4 p-2 m-2 border border-gray-400 focus:border-green-500 rounded"
        >
          <option value="userId">Search by UserId</option>
          <option value="TransactionId">Search by TransactionId</option>
          <option value="fullName">Search by fullName</option>
          <option value="Date">Search by Date</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-400 rounded"
          placeholder={`Search by ${searchBy}`}
        />
      </div>
      <table className="min-w-full">
        <thead className="bg-green-400">
          <tr className="h-16">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">UserId</th>
            <th className="px-4 py-2 text-left">FullName</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">PaymentMethod</th>
            <th className="px-4 py-2 text-left">TransactionId</th>
            <th className="px-4 py-2 text-left">TotalAmount</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-300">
              <td className="px-4 py-2">{item.Date}</td>
              <td className="px-4 py-2">{item.userId}</td>
              <td className="px-4 py-2">{item.fullName}</td>
              <td className="px-4 py-2">{item.email}</td>
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
