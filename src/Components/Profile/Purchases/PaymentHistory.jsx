import React from "react";
import Slides from "./Slides";

function PaymentHistory() {
  const purchasesData = []; // Placeholder for demonstration

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 p-4 md:p-6 lg:p-10">
        {purchasesData.length > 0 ? (
          <ul className="flex flex-wrap -mb-px pb-4 md:pb-6 lg:pb-10">
            {purchasesData.map((purchase, index) => (
              <li key={index} className="mr-2">
                {/* Render each purchase */}
                <p>{purchase.details}</p>
                {/* Additional details or links can be added here */}
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No purchases found.</p>
        )}
      </div>
      <Slides />
    </div>
  );
}

export default PaymentHistory;
