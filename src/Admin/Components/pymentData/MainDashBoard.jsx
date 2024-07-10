import React, { useState } from "react";
import AllPaymentsTable from "./TotalPayments";
import CompletedPaymentsTable from "./CompletedPaymentsTable";
import RejectedPaymentsTable from "./RejectedPaymentsTable";
import PendingPaymentsTable from "./PendingPaymentsTable";
import ProcessingPaymentsTable from "./ProcessingPaymentTable";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All");

  const renderTable = () => {
    switch (activeTab) {
      case "All":
        return <AllPaymentsTable />;
      case "Completed":
        return <CompletedPaymentsTable />;
      case "Rejected":
        return <RejectedPaymentsTable />;
      case "Pending":
        return <PendingPaymentsTable />;
      case "Processing":
        return <ProcessingPaymentsTable />;
      default:
        return <AllPaymentsTable />;
    }
  };

  const totalEarningsCard = [
    {
      title: "Total Earnings",
      amount: "$450.89",
      textColor: "text-green-600",
      bgColor: "bg-gray-100",
      Date: "02/July/2024",
    },
  ];

  const pendingPaymentsCard = [
    {
      title: "Pending Payments",
      amount: "$10.89",
      textColor: "text-red-700",
      bgColor: "bg-gray-100",
      Date: "02/July/2024",
    },
  ];

  const withdrawalMethodCard = [
    {
      title: "Withdrawal Method",
      amount: "Acc No: 1736738373",
      textColor: "text-black",
      bgColor: "bg-gray-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto gap-4 p-4">
      {totalEarningsCard.map((card, index) => (
        <div
          key={index}
          className={`col-span-1 md:col-span-2 rounded-lg p-4 ${card.bgColor}`}
        >
          <h2 className="text-xs md:text-xl font-semibold">{card.title}</h2>
          <p
            className={`${card.textColor} float-end relative bottom-3 text-3xl font-bold pt-2`}
          >
            {card.amount}
          </p>

          <p className="text-sm top-10 relative  ml-3 mb-8">{card.Date}</p>
        </div>
      ))}

      {pendingPaymentsCard.map((card, index) => (
        <div
          key={index}
          className={`col-span-1 md:col-span-2 rounded-lg p-4 ${card.bgColor}`}
        >
          <h2 className="text-xs md:text-xl font-semibold">{card.title}</h2>
          <p
            className={`${card.textColor} float-end relative bottom-3 text-3xl font-bold pt-2`}
          >
            {card.amount}
          </p>

          <p className="text-sm top-10 relative  ml-3 mb-4">{card.Date}</p>
        </div>
      ))}

      {withdrawalMethodCard.map((card, index) => (
        <div
          key={index}
          className={`col-span-1 md:col-span-2 rounded-lg p-4 ${card.bgColor}`}
        >
          <h2 className="text-xs md:text-xl font-semibold">{card.title}</h2>
          <p className={`${card.textColor} text-[18px]   pt-3 `}>
            {card.amount}
          </p>
        </div>
      ))}

      <div className="col-span-1 md:col-span-6 text-xl md:text-2xl font-semibold px-2 py-4">
        <h2>Payment History</h2>
      </div>
      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("All")}
          className={`w-full md:w-36 p-2 border-gray-200 border-2 text-black rounded-full ${
            activeTab === "All" ? "bg-blue-500 text-white" : ""
          }`}
        >
          All Transactions
        </button>
      </div>
      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("Completed")}
          className={`w-full md:w-36 p-2 border-gray-200 border-2 text-black rounded-full ${
            activeTab === "Completed" ? "bg-green-500 text-white" : ""
          }`}
        >
          Completed
        </button>
      </div>

      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("Pending")}
          className={`w-full md:w-36 p-2 border-gray-200 border-2 text-black rounded-full ${
            activeTab === "Pending" ? "bg-orange-500 text-white" : ""
          }`}
        >
          Pending
        </button>
      </div>
      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("Processing")}
          className={`w-full md:w-36 p-2 border-gray-200 border-2 text-black rounded-full ${
            activeTab === "Processing" ? "bg-yellow-500 text-white" : ""
          }`}
        >
          Processing
        </button>
      </div>
      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("Rejected")}
          className={`w-full md:w-36 p-2 border-gray-200 border-2 text-black rounded-full ${
            activeTab === "Rejected" ? "bg-red-600 text-white" : ""
          }`}
        >
          Rejected
        </button>
      </div>
      <div className="col-span-1 md:col-span-6 row-span-auto bg-gray-100 p-4 overflow-x-auto">
        {renderTable()}
      </div>
    </div>
  );
};

export default Dashboard;