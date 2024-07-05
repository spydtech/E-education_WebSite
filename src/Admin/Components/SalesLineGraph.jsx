import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { sampleData } from "./Sample"; // Adjust the path as per your project structure

const SalesLineGraph = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [data, setData] = useState(sampleData);

  // Function to calculate aggregate totals
  const calculateAggregateTotals = () => {
    const aggregateData = {};

    Object.keys(data).forEach((year) => {
      aggregateData[year] = {};

      Object.keys(data[year]).forEach((month) => {
        const monthData = data[year][month];
        const total = monthData.reduce(
          (acc, { price }) => acc + price * monthData.length,
          0
        );
        aggregateData[year][month] = total;
      });
    });

    return aggregateData;
  };

  const aggregateData = calculateAggregateTotals();

  // Prepare data for Chart.js
  const chartData = {
    labels: Object.keys(data[selectedYear]),
    datasets: [
      {
        label: `${selectedYear} Sales`,
        data: Object.values(aggregateData[selectedYear]),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
      },
    ],
  };

  // Options for Chart.js customization
  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  // Handle year change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
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
          {Object.keys(data).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className=" text-center text-black text-2xl  font-bold">
        {" "}
        Annual Sales
      </div>

      <div className="my-4 h-[500px] w-auto justify-center items-center flex">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default SalesLineGraph;
