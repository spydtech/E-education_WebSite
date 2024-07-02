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

  const cardDetails = [
    {
      title: "Total Earnings",
      amount: "$450.89",
      textColor: "text-green-600",
      bgColor: "bg-[#e36414]",
      Date: "02/july/2024",
    },
    {
      title: "Pending Payments",
      amount: "$10.89",
      textColor: "text-red-700",
      bgColor: "bg-[#7209b7]",
      Date: "02/july/2024",
    },
    {
      title: "Withdrawal Method",
      amount: "Acc No: 1736738373",
      textColor: "text-black",
      bgColor: "bg-[#3f88c5]",
      isAccount: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto gap-4 p-4">
      {cardDetails.map((card, index) => (
        <div
          key={index}
          className={`col-span-1 md:col-span-2 rounded-lg p-4 ${card.bgColor}`}
        >
          <h2 className="text-xl md:text-2xl font-semibold">{card.title} </h2>
          <p
            className={`${card.textColor} float-end  ${
              card.isAccount ? "text-lg  md:text-xl" : "text-2xl md:text-3xl"
            } font-bold p-4`}
          >
            {card.amount}
          </p>
          {!card.isAccount && (
            <p className="text-sm top-10 relative font-semibold ml-3">
              {" "}
              {card.Date}
            </p>
          )}
        </div>
      ))}
      <div className="col-span-1 md:col-span-6 text-2xl md:text-3xl font-semibold px-2 py-4">
        <h2>Payment History</h2>
      </div>
      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("All")}
          className={`w-full md:w-auto p-2 border-blue-500 border-2 text-black rounded-full ${
            activeTab === "All" ? "bg-blue-500 text-white" : ""
          }`}
        >
          All Transactions
        </button>
      </div>
      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("Completed")}
          className={`w-full md:w-auto p-2 border-green-500 border-2 text-black rounded-full ${
            activeTab === "Completed" ? "bg-green-500 text-white" : ""
          }`}
        >
          Completed
        </button>
      </div>

      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("Pending")}
          className={`w-full md:w-auto p-2 border-orange-500 border-2 text-black rounded-full ${
            activeTab === "Pending" ? "bg-orange-500 text-white" : ""
          }`}
        >
          Pending
        </button>
      </div>
      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("Processing")}
          className={`w-full md:w-auto p-2 border-yellow-500 border-2 text-black rounded-full ${
            activeTab === "Processing" ? "bg-yellow-500 text-white" : ""
          }`}
        >
          Processing
        </button>
      </div>
      <div className="col-span-1 md:col-span-1">
        <button
          onClick={() => setActiveTab("Rejected")}
          className={`w-full md:w-auto p-2 border-red-500 border-2 text-black rounded-full ${
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
