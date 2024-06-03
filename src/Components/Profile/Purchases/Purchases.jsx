import React from "react";
import Footer from "../../Home/footer/Footer";
import Navbar from "../../Navbar";
import PaymentHistory from "./PaymentHistory";

function Purchases() {
  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-6 lg:p-10">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Purchases
        </h1>
        <p>
          Need more help? Check out our{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            help center
          </span>{" "}
          and
          <span className="text-blue-500 hover:underline cursor-pointer">
            {" "}
            refund policies.
          </span>
        </p>
      </div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 p-4 md:p-6 lg:p-10">
        <ul className="flex flex-wrap -mb-px pb-4 md:pb-6 lg:pb-10 justify-center">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block text-blue-500 p-2 md:p-3 lg:p-4 border-b-4 border-blue-500 hr-line border-transparent rounded hover:bg-blue-200"
            >
              Payment History
            </a>
          </li>
          <li className="ml-2">
            <a
              href="/Settings"
              className="inline-block text-blue-500 p-2 md:p-3 lg:p-4 border-b-2 border-transparent rounded-t-lg hover:underline"
            >
              Update Payment Method
            </a>
          </li>
        </ul>
        <hr />
        <PaymentHistory />
      </div>
      <Footer />
    </div>
  );
}

export default Purchases;
