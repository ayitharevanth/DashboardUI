import React from "react";
import { SlGraph } from "react-icons/sl";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AnalyticsBox = ({ title, value, increment, percentage }) => {
  return (
    <div className="border bg-white rounded-3xl p-5 flex justify-between items-center w-64 shadow-md">
      <div>
        <div className="text-gray-400 text-sm">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
        <div className="flex items-center mt-2">
          <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
            <SlGraph className="text-orange-500 w-3 h-3" />
          </div>
          <div className="text-sm text-gray-600 ml-2">+{increment}% Inc</div>
        </div>
      </div>
      <div className="w-16 h-16">
        <CircularProgressbar
          value={percentage}
          text={`+${percentage}%`}
          styles={buildStyles({
            textSize: "24px",
            pathColor: "#f97316", // Tailwind orange-500
            textColor: "#333",
            trailColor: "#d1d5db", // Tailwind gray-300
          })}
        />
      </div>
    </div>
  );
};

export default AnalyticsBox;
