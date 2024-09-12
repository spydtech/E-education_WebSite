import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { sampleData } from "./Sample";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const CourseBarGraph = () => {
  const years = Object.keys(sampleData);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Courses",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  const updateData = () => {
    const months = Object.keys(sampleData[selectedYear]);

    const allCourses = months.reduce((acc, month) => {
      sampleData[selectedYear][month].forEach((item) => {
        if (!acc.includes(item.course)) {
          acc.push(item.course);
        }
      });
      return acc;
    }, []);

    const selectedCourses = allCourses.slice(0, 4);

    const chartData = {
      labels: months,
      datasets: [
        {
          label: "Courses",
          data: months.map((month) => {
            const uniqueCourses = new Set(
              sampleData[selectedYear][month].map((item) => item.course)
            );
            return selectedCourses.filter((course) => uniqueCourses.has(course))
              .length;
          }),
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    setData(chartData);
  };

  useEffect(() => {
    updateData();
  }, [selectedYear]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `Total: ${context.raw} products`;
          },
        },
      },
      title: {
        display: true,
        text: "Courses Added Each Month",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
        stacked: true,
      },
      y: {
        title: {
          display: true,
          text: "Number of Courses",
        },
        stacked: true,
        min: 0,
        max: Math.max(...data.datasets[0].data, 0) + 1,
        ticks: {
          stepSize: 1,
          callback: (value) => `${value}`,
        },
      },
    },
  };

  return (
    <div className="container relative h-[400px]  shadow-xl rounded-xl  mx-auto p-4 ">
      <h1 className=" font-bold text-center text-nowrap text-[#2C3E50] mb-6">
        Courses Added in Each Month by Admin
      </h1>
      <div className="flex absolute justify-center mt-4">
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="mt-1 block w-24 pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="my-4 h-[400px]  w-auto justify-center items-center flex ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CourseBarGraph;
