import React from "react";

const completedData = [
  {
    fullName: "John Doe",
    userId: "123",
    transactionId: "rzp_1",
    totalAmount: "500",
    status: "Completed",
    Date: "24/june/2024",
    email: "john.doe@example.com",
    paymentMethod: "Credit Card",
  },
  {
    fullName: "Bob Brown",
    userId: "126",
    transactionId: "rzp_4",
    totalAmount: "450",
    status: "Completed",
    Date: "24/june/2024",
    email: "bob.brown@example.com",
    paymentMethod: "Net Banking",
  },
];

const CompletedPaymentsTable = () => {
  return (
    <div className="overflow-x-auto">
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
          {completedData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-300">
              <td className="px-4 py-2">{item.Date}</td>
              <td className="px-4 py-2">{item.userId}</td>
              <td className="px-4 py-2">{item.fullName}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.paymentMethod}</td>
              <td className="px-4 py-2">{item.transactionId}</td>
              <td className="px-4 py-2">{item.totalAmount}</td>
              <td className="px-4 py-2 text-green-500">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedPaymentsTable;
