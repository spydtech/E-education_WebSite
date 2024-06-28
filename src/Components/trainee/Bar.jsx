import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialSeconds = 60; // Set initial countdown time here
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  const calculateDegree = () => (seconds / initialSeconds) * 360;

  const getGradientColor = () => {
    if (seconds > 30) return "#007f5f";
    if (seconds > 15) return "yellow";
    return "red";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center w-96 h-96">
        <div
          className="absolute w-full h-full rounded-full"
          style={{
            background: `conic-gradient(${getGradientColor()} ${calculateDegree()}deg, white 0deg 360deg)`,
          }}
        ></div>
        <div className="absolute flex justify-center items-center w-40 h-40 bg-white rounded-full">
          <span className="text-2xl font-bold">{seconds}s</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
