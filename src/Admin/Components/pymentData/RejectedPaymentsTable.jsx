import React from "react";

const rejectedData = [
  {
    fullName: "Jane Smith",
    userId: "124",
    transactionId: "rzp_2",
    totalAmount: "200",
    status: "Rejected",
    Date: "24/june/2024",
    email: "jane.smith@example.com",
    paymentMethod: "PayPal",
  },
];

const RejectedPaymentsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-green-400">
          <tr className="h-12">
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
          {rejectedData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-300">
              <td className="px-4 py-2">{item.Date}</td>
              <td className="px-4 py-2">{item.userId}</td>
              <td className="px-4 text-nowrap  py-2">{item.fullName}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.paymentMethod}</td>
              <td className="px-4 py-2">{item.transactionId}</td>
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