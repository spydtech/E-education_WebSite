import React from "react";

const rejectedData = [
  {
    userName: "Jane Smith",
    userId: "124",
    rozarpayId: "rzp_2",
    totalAmount: "200",
    status: "Rejected",
    Date: "24/june/2024",
  },
];

const RejectedPaymentsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-green-400">
          <tr className="h-16">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">UserId</th>
            <th className="px-4 py-2 text-left">UserName</th>
            <th className="px-4 py-2 text-left">RozarpayID</th>
            <th className="px-4 py-2 text-left">TotalAmount</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {rejectedData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-300">
              <td className="px-4 py-2">{item.Date}</td>
              <td className="px-4 py-2">{item.userId}</td>
              <td className="px-4 py-2">{item.userName}</td>
              <td className="px-4 py-2">{item.rozarpayId}</td>
              <td className="px-4 py-2">{item.totalAmount}</td>
              <td className="px-4 py-2 text-red-600">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RejectedPaymentsTable;
