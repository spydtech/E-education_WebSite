import React, { useState } from "react";
import { sampleData } from "./Sample"; // Import sample data
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const MonthlyCustomerBarGraph = () => {
  const [selectedYear, setSelectedYear] = useState("2021");

  // Handle year change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Get data for the selected year
  const getDataForYear = () => {
    const months = Object.keys(sampleData[selectedYear]);
    const customerCounts = months.map(
      (month) => sampleData[selectedYear][month].length
    );

    return { months, customerCounts };
  };

  const { months, customerCounts } = getDataForYear();

  // Prepare data for the bar chart
  const data = {
    labels: months,
    datasets: [
      {
        label: "Number of Customers",
        data: customerCounts,
        backgroundColor: "#4A90E2",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Customer Counts",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Number of Customers",
        },
      },
      y: {
        title: {
          display: true,
          text: "Months",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label
          htmlFor="year-select"
          className="block text-sm font-medium text-gray-700"
        >
          Select Year:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
          className="mt-1 block w-52 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {Object.keys(sampleData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className=" text-center text-black text-2xl  font-bold">
        {" "}
        Customer Growth
      </div>

      <div className="my-4 h-[500px] w-auto justify-center items-center flex">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyCustomerBarGraph;
